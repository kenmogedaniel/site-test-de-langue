import type { VoicePref } from "@/types/database";

/**
 * Synthèse vocale japonaise.
 *
 * Deux stratégies, par ordre de préférence :
 *  1. Moteur TTS de Google relayé par la route serveur `/api/tts` — voix naturelle,
 *     fiable et identique sur toutes les plateformes, y compris Android où la Web
 *     Speech API du navigateur est médiocre (voix robotique, saccades, coupures).
 *     Google ne fournit qu'une seule voix japonaise : pour distinguer Homme/Femme,
 *     on applique un décalage de hauteur (pitch) à la voix féminine de Google.
 *  2. Web Speech API (`window.speechSynthesis`) en secours — utilisée hors ligne ou
 *     si le moteur serveur est indisponible ou trop lent.
 */

const FEMALE_VOICE_HINTS = ["nanami", "ayumi", "haruka", "kyoko", "sayaka", "female", "女性"];
const MALE_VOICE_HINTS = ["keita", "ichiro", "otoya", "daichi", "male", "男性"];

/** Délai maximal d'attente de la route /api/tts avant de basculer sur la Web Speech API.
 *  Le premier appel peut être lent (démarrage du serveur + appel au moteur Google) :
 *  sans cette limite, l'audio semblerait "bloqué" indéfiniment. */
const SERVER_TIMEOUT_MS = 12000;

/* ---------------------------------------------------------------------------
 * Déverrouillage du canal audio mobile ("autoplay policy")
 *
 * Sur iOS/Android, un `<audio>` ou un `AudioContext` ne peut pas démarrer hors
 * d'un geste utilisateur. L'autoplay de la première question, ainsi que les
 * lectures lancées de façon asynchrone après un `fetch` (donc hors du geste),
 * sont donc bloqués par le navigateur. On déverrouille une fois pour toute la
 * session dès que l'utilisateur interagit (tap sur "Moyen", clic "Écouter", ...).
 * ------------------------------------------------------------------------- */

let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return Ctx ? new Ctx() : null;
}

/** Réutilise (ou crée) l'AudioContext partagé et garantit qu'il est "running".
 *  À appeler dans un geste utilisateur pour lever la restriction d'autoplay. */
export function unlockAudio(): void {
  if (typeof window === "undefined") return;
  if (!sharedCtx) sharedCtx = getCtx();
  if (sharedCtx && sharedCtx.state === "suspended") {
    sharedCtx.resume().catch(() => {});
  }
}

function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
}

/** Référence à la lecture en cours (élément HTML5 ou source Web Audio) pour pouvoir
 *  l'interrompre lorsqu'une nouvelle lecture est demandée ou que le composant est démonté. */
type ActivePlayback = {
  source?: HTMLAudioElement;
  stop: () => void;
};
let activePlayback: ActivePlayback | null = null;

/** Interrompt la lecture en cours pour qu'une nouvelle demande ne se superpose jamais
 *  à l'audio déjà diffusé. */
function stopServerAudioNow(): void {
  if (activePlayback) {
    activePlayback.stop();
    activePlayback = null;
  }
}

/** Interrompt toute lecture serveur en cours. */
export function stopServerAudio(): void {
  stopServerAudioNow();
}

/** Joue l'audio MP3 renvoyé par la route /api/tts via un élément HTML5. Léger et
 *  immédiat : utilisé pour la voix féminine (lecture directe, sans décodage). */
function playBlobAudio(blob: Blob): Promise<void> {
  return new Promise((resolve, reject) => {
    let done = false;
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    const playback: ActivePlayback = {
      source: audio,
      stop: () => {
        audio.pause();
        audio.onended = null;
        audio.onerror = null;
      },
    };
    activePlayback = playback;
    const cleanup = () => {
      if (activePlayback === playback) activePlayback = null;
      URL.revokeObjectURL(url);
    };
    audio.onended = () => {
      if (done) return;
      done = true;
      cleanup();
      resolve();
    };
    audio.onerror = () => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error("Lecture audio échouée"));
    };
    audio.play().catch((e) => {
      if (done) return;
      done = true;
      cleanup();
      reject(e);
    });
  });
}

/** Joue l'audio avec une hauteur (pitch) ajustée pour créer une vraie voix masculine,
 *  à partir de la même voix féminine de Google. Décodé puis repoussé plus grave. */
function playBlobAudioMale(blob: Blob, rate = 0.9): Promise<void> {
  return new Promise((resolve, reject) => {
    unlockAudio();
    const ctx = sharedCtx;
    if (!ctx) return reject(new Error("Web Audio indisponible"));
    let done = false;

    const finish = (err?: unknown) => {
      if (done) return;
      done = true;
      if (activePlayback?.stop === stopRef) activePlayback = null;
      if (err) reject(err);
      else resolve();
    };

    const stopRef = () => {
      sourceRef?.stop();
      sourceRef = null;
    };
    let sourceRef: AudioBufferSourceNode | null = null;
    activePlayback = { stop: stopRef };

    blob
      .arrayBuffer()
      .then((buf) => ctx.decodeAudioData(buf))
      .then((buffer) => {
        if (done) return;
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = rate; // < 1 => voix plus grave (masculine)
        source.connect(ctx.destination);
        source.onended = () => finish();
        sourceRef = source;
        source.start();
      })
      .catch((e) => finish(e));
  });
}

/** Priorité 1 : moteur TTS de Google via la route serveur. Retourne false si on doit
 *  basculer sur la Web Speech API (réseau, erreur serveur, timeout, etc.). */
async function speakViaServer(
  text: string,
  voicePreference: VoicePref,
  lang: "ja" | "en" = "ja"
): Promise<boolean> {
  let controller: AbortController | null = null;
  try {
    controller = new AbortController();
    const timer = setTimeout(() => controller!.abort(), SERVER_TIMEOUT_MS);
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: voicePreference, lang }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return false;
    const blob = await res.blob();
    if (!blob || blob.size === 0) return false;

    if (voicePreference === "male") {
      await playBlobAudioMale(blob);
    } else {
      await playBlobAudio(blob);
    }
    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------------------------
 * Secours : Web Speech API
 * ------------------------------------------------------------------------- */

/** Sélectionne une voix du navigateur pour la langue donnée (préfixe BCP-47, ex. "ja", "en").
 *  Privilégie une voix dont le nom correspond aux indices Homme/Femme ; sinon sépare les
 *  voix disponibles pour proposer deux intonations (graves vs aiguës). */
function pickVoice(
  voices: SpeechSynthesisVoice[],
  lang: string,
  preference: VoicePref
): { voice: SpeechSynthesisVoice | null; distinct: boolean } {
  const langVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith(lang.toLowerCase()));
  if (langVoices.length === 0) return { voice: null, distinct: false };

  const hints = preference === "male" ? MALE_VOICE_HINTS : FEMALE_VOICE_HINTS;
  const otherHints = preference === "male" ? FEMALE_VOICE_HINTS : MALE_VOICE_HINTS;

  const byName = (list: string[]) =>
    langVoices.find((v) => list.some((h) => v.name.toLowerCase().includes(h)));

  const matched = byName(hints);
  if (matched) return { voice: matched, distinct: true };

  if (langVoices.length > 1) {
    const sorted = [...langVoices].sort((a, b) => a.name.localeCompare(b.name));
    const other = byName(otherHints);
    const pool = other ? sorted.filter((v) => v !== other) : sorted;
    const index = preference === "male" ? pool.length - 1 : 0;
    return { voice: pool[index] ?? sorted[0], distinct: true };
  }

  return { voice: langVoices[0], distinct: false };
}

function pickJapaneseVoice(
  voices: SpeechSynthesisVoice[],
  preference: VoicePref
): { voice: SpeechSynthesisVoice | null; distinct: boolean } {
  return pickVoice(voices, "ja", preference);
}

export function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return resolve([]);

    const existing = window.speechSynthesis.getVoices();
    if (existing.length > 0) return resolve(existing);

    let settled = false;
    const finish = (voices: SpeechSynthesisVoice[]) => {
      if (settled) return;
      settled = true;
      resolve(voices);
    };

    window.speechSynthesis.onvoiceschanged = () => finish(window.speechSynthesis.getVoices());
    setTimeout(() => finish(window.speechSynthesis.getVoices()), 1500);
  });
}

function splitIntoSentences(text: string): string[] {
  const parts = text.split(/(?<=[。！？.!?])/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [text];
}

function speakOne(
  text: string,
  voice: SpeechSynthesisVoice | null,
  pitch: number,
  lang: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    utterance.pitch = pitch;
    if (voice) utterance.voice = voice;
    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e.error);
    window.speechSynthesis.speak(utterance);
  });
}

/** Priorité 2 : Web Speech API du navigateur (secours). */
async function speakViaWebSpeech(
  text: string,
  voicePreference: VoicePref,
  lang: string = "ja-JP"
): Promise<void> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    throw new Error("La synthèse vocale n'est pas disponible sur ce navigateur.");
  }

  const voices = await ensureVoicesLoaded();
  const tag = lang.split("-")[0];
  const { voice, distinct } = pickVoice(voices, tag, voicePreference);
  const android = isAndroid();
  const pitch = !distinct && !android ? (voicePreference === "male" ? 0.92 : 1.08) : 1;

  window.speechSynthesis.cancel();
  if (android) await new Promise((r) => setTimeout(r, 150));

  const sentences = splitIntoSentences(text);
  for (const sentence of sentences) {
    await speakOne(sentence, voice, pitch, lang);
  }
}

/* ---------------------------------------------------------------------------
 * API publique
 * ------------------------------------------------------------------------- */

/** Lit un texte à voix haute dans la langue demandée ("ja" ou "en").
 *  Utilise le moteur TTS de Google via la route `/api/tts` (bonne qualité, même sur
 *  mobile). La voix « Homme » est obtenue en abaissant la hauteur de la voix féminine
 *  de Google (pitch-shift). Bascule sur la Web Speech API du navigateur si le serveur
 *  est indisponible, trop lent ou hors ligne. */
export async function speak(
  text: string,
  lang: "ja" | "en" = "ja",
  voicePreference: VoicePref = "female"
): Promise<void> {
  // Annule toute lecture en cours (Web Speech ou Audio serveur) pour éviter les chevauchements.
  window.speechSynthesis?.cancel();
  stopServerAudioNow();
  const speechLang = lang === "en" ? "en-US" : "ja-JP";
  const played = await speakViaServer(text, voicePreference, lang);
  if (!played) {
    await speakViaWebSpeech(text, voicePreference, speechLang);
  }
}

/**
 * Lit un texte japonais à voix haute. Utilise le moteur TTS de Google via la route
 * `/api/tts` (bonne qualité, même sur mobile). La voix « Homme » est obtenue en
 * abaissant la hauteur de la voix féminine de Google (pitch-shift), faute de voix
 * masculine distincte côté Google. Bascule sur la Web Speech API du navigateur si
 * le serveur est indisponible, trop lent ou hors ligne.
 */
export async function speakJapanese(text: string, voicePreference: VoicePref = "female"): Promise<void> {
  await speak(text, "ja", voicePreference);
}

/** Lit un texte anglais à voix haute (voir `speak`). */
export async function speakEnglish(text: string, voicePreference: VoicePref = "female"): Promise<void> {
  await speak(text, "en", voicePreference);
}

/** Indique si au moins deux voix japonaises distinctes sont installées sur cet appareil. */
export function hasDistinctJapaneseVoices(voices: SpeechSynthesisVoice[]): boolean {
  return voices.filter((v) => v.lang?.toLowerCase().startsWith("ja")).length > 1;
}
