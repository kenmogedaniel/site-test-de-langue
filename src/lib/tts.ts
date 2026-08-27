import type { VoicePref } from "@/types/database";

/**
 * Synthèse vocale japonaise.
 *
 * Deux stratégies, par ordre de préférence :
 *  1. Moteur TTS de Google relayé par la route serveur `/api/tts` — voix naturelle,
 *     fiable et identique sur toutes les plateformes, y compris Android où la Web
 *     Speech API du navigateur est médiocre (voix robotique, saccades, coupures).
 *  2. Web Speech API (`window.speechSynthesis`) en secours — utilisée hors ligne ou
 *     si le moteur serveur est indisponible.
 */

const FEMALE_VOICE_HINTS = ["nanami", "ayumi", "haruka", "kyoko", "sayaka", "female", "女性"];
const MALE_VOICE_HINTS = ["keita", "ichiro", "otoya", "daichi", "male", "男性"];

function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
}

/** Référence à l'audio HTML5 actuellement en cours (pour pouvoir l'interrompre
 *  lorsqu'une nouvelle lecture est demandée ou que le composant est démonté). */
let activeAudio: HTMLAudioElement | null = null;

/** Interrompt toute lecture HTML5 en cours (moteur TTS serveur). */
export function stopServerAudio(): void {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
}

/** Joue l'audio MP3 renvoyé par la route /api/tts via un élément HTML5. */
function playBlobAudio(blob: Blob): Promise<void> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    activeAudio = audio;
    const cleanup = () => {
      if (activeAudio === audio) activeAudio = null;
      URL.revokeObjectURL(url);
    };
    audio.onended = () => {
      cleanup();
      resolve();
    };
    audio.onerror = () => {
      cleanup();
      reject(new Error("Lecture audio échouée"));
    };
    audio.play().catch((e) => {
      cleanup();
      reject(e);
    });
  });
}

/** Priorité 1 : moteur TTS de Google via la route serveur. Retourne false si on doit
 *  basculer sur la Web Speech API (réseau, erreur serveur, etc.). */
async function speakViaServer(text: string, voicePreference: VoicePref): Promise<boolean> {
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: voicePreference }),
    });
    if (!res.ok) return false;
    const blob = await res.blob();
    if (!blob || blob.size === 0) return false;
    await playBlobAudio(blob);
    return true;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------------------------
 * Secours : Web Speech API
 * ------------------------------------------------------------------------- */

function pickJapaneseVoice(
  voices: SpeechSynthesisVoice[],
  preference: VoicePref
): { voice: SpeechSynthesisVoice | null; distinct: boolean } {
  const jaVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith("ja"));
  if (jaVoices.length === 0) return { voice: null, distinct: false };

  const hints = preference === "male" ? MALE_VOICE_HINTS : FEMALE_VOICE_HINTS;
  const otherHints = preference === "male" ? FEMALE_VOICE_HINTS : MALE_VOICE_HINTS;

  const byName = (list: string[]) =>
    jaVoices.find((v) => list.some((h) => v.name.toLowerCase().includes(h)));

  const matched = byName(hints);
  if (matched) return { voice: matched, distinct: true };

  if (jaVoices.length > 1) {
    const sorted = [...jaVoices].sort((a, b) => a.name.localeCompare(b.name));
    const other = byName(otherHints);
    const pool = other ? sorted.filter((v) => v !== other) : sorted;
    const index = preference === "male" ? pool.length - 1 : 0;
    return { voice: pool[index] ?? sorted[0], distinct: true };
  }

  return { voice: jaVoices[0], distinct: false };
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
  const parts = text.split(/(?<=[。！？])/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [text];
}

function speakOne(text: string, voice: SpeechSynthesisVoice | null, pitch: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    utterance.pitch = pitch;
    if (voice) utterance.voice = voice;
    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e.error);
    window.speechSynthesis.speak(utterance);
  });
}

/** Priorité 2 : Web Speech API du navigateur (secours). */
async function speakViaWebSpeech(text: string, voicePreference: VoicePref): Promise<void> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    throw new Error("La synthèse vocale n'est pas disponible sur ce navigateur.");
  }

  const voices = await ensureVoicesLoaded();
  const { voice, distinct } = pickJapaneseVoice(voices, voicePreference);
  const android = isAndroid();
  const pitch = !distinct && !android ? (voicePreference === "male" ? 0.92 : 1.08) : 1;

  window.speechSynthesis.cancel();
  if (android) await new Promise((r) => setTimeout(r, 150));

  const sentences = splitIntoSentences(text);
  for (const sentence of sentences) {
    await speakOne(sentence, voice, pitch);
  }
}

/* ---------------------------------------------------------------------------
 * API publique
 * ------------------------------------------------------------------------- */

/**
 * Lit un texte japonais à voix haute. Utilise le moteur TTS de Google via la route
 * `/api/tts` (bonne qualité, même sur mobile) et bascule sur la Web Speech API du
 * navigateur si le serveur est indisponible ou hors ligne.
 */
export async function speakJapanese(text: string, voicePreference: VoicePref = "female"): Promise<void> {
  // Annule toute lecture en cours (Web Speech ou Audio HTML5) pour éviter les chevauchements.
  window.speechSynthesis?.cancel();
  stopServerAudio();
  const played = await speakViaServer(text, voicePreference);
  if (!played) {
    await speakViaWebSpeech(text, voicePreference);
  }
}

/** Indique si au moins deux voix japonaises distinctes sont installées sur cet appareil. */
export function hasDistinctJapaneseVoices(voices: SpeechSynthesisVoice[]): boolean {
  return voices.filter((v) => v.lang?.toLowerCase().startsWith("ja")).length > 1;
}
