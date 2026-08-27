import type { VoicePref } from "@/types/database";

/**
 * Noms de voix japonaises connues, par plateforme (Windows/Edge, Chrome/Google, macOS).
 * Les noms exacts varient selon le navigateur/OS, d'où cette liste de correspondances
 * partielles (sous-chaînes) plutôt qu'une simple recherche de "male"/"female" dans le nom,
 * qui ne matche quasiment jamais les voix japonaises réelles.
 */
const FEMALE_VOICE_HINTS = ["nanami", "ayumi", "haruka", "kyoko", "sayaka", "female", "女性"];
const MALE_VOICE_HINTS = ["keita", "ichiro", "otoya", "daichi", "male", "男性"];

/** Détecte Android, dont le moteur vocal système (routé via Chrome) gère mal les
 *  utterances trop longues et les changements de hauteur de voix (pitch) — cause
 *  fréquente d'un rendu audio saccadé/coupé sur ce système. */
function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
}

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

  // 1. Correspondance directe par nom de voix connu.
  const matched = byName(hints);
  if (matched) return { voice: matched, distinct: true };

  // 2. Plusieurs voix disponibles mais aucune reconnue par son nom : on choisit
  //    de façon déterministe et stable une voix différente selon la préférence,
  //    pour qu'un changement de réglage soit toujours audible.
  if (jaVoices.length > 1) {
    const sorted = [...jaVoices].sort((a, b) => a.name.localeCompare(b.name));
    const other = byName(otherHints);
    const pool = other ? sorted.filter((v) => v !== other) : sorted;
    const index = preference === "male" ? pool.length - 1 : 0;
    return { voice: pool[index] ?? sorted[0], distinct: true };
  }

  // 3. Une seule voix japonaise installée : impossible de changer de voix à proprement
  //    parler. On le signale à l'appelant pour qu'il compense légèrement (hauteur de voix),
  //    sauf sur Android où cet ajustement provoque justement des saccades (voir speakJapanese).
  return { voice: jaVoices[0], distinct: false };
}

/** Précharge la liste des voix (Chrome/Edge les chargent de façon asynchrone après le
 *  chargement de la page). Sans cette attente, un premier clic sur "Écouter" juste après
 *  l'arrivée sur la page peut se retrouver sans aucune voix japonaise disponible et
 *  basculer sur une voix par défaut inadaptée — d'où un rendu audio cassé/désagréable.
 *  Un timeout de sécurité évite de bloquer indéfiniment si l'évènement ne se déclenche
 *  jamais (certains navigateurs). */
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

/** Découpe un texte japonais en phrases sur les ponctuations naturelles (。！？),
 *  ponctuation ré-attachée à chaque morceau. Chrome tronque toute utterance de plus
 *  d'environ 200-250 caractères (bug connu, plus marqué sur le moteur TTS d'Android) :
 *  parler phrase par phrase, chaînées proprement, évite ce découpage sauvage. */
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

/**
 * Lit un texte japonais à voix haute dans le navigateur.
 * Utilise la Web Speech API (gratuite, aucune clé requise) comme moteur par défaut.
 * Pour brancher un moteur de meilleure qualité (Google Cloud TTS, Amazon Polly, ElevenLabs),
 * remplacez le corps de cette fonction par un appel à /api/tts qui retourne un flux audio,
 * et jouez-le avec un <audio> ou l'API Web Audio.
 */
export async function speakJapanese(text: string, voicePreference: VoicePref = "female"): Promise<void> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    throw new Error("La synthèse vocale n'est pas disponible sur ce navigateur.");
  }

  // Garantit que la liste des voix est chargée avant de choisir, pour éviter de se
  // retrouver sans voix japonaise disponible au tout premier clic sur "Écouter".
  const voices = await ensureVoicesLoaded();
  const { voice, distinct } = pickJapaneseVoice(voices, voicePreference);
  const android = isAndroid();

  // Repli hauteur de voix : utile pour distinguer Homme/Femme quand une seule voix est
  // installée, MAIS le moteur TTS système d'Android gère mal les pitch non standards
  // (source fréquente de saccades/coupures) — on désactive donc ce réglage sur Android.
  const pitch = !distinct && !android ? (voicePreference === "male" ? 0.92 : 1.08) : 1;

  window.speechSynthesis.cancel();

  // Sur Android, enchaîner cancel() puis speak() dans le même tick provoque une
  // condition de course connue du moteur TTS système : le nouvel énoncé est parfois
  // tronqué ou saccadé car l'annulation précédente n'est pas encore traitée. Un court
  // délai laisse le temps au moteur de se stabiliser avant de reprendre la parole.
  if (android) await new Promise((r) => setTimeout(r, 150));

  const sentences = splitIntoSentences(text);
  for (const sentence of sentences) {
    await speakOne(sentence, voice, pitch);
  }
}

/** Indique si au moins deux voix japonaises distinctes sont installées sur cet appareil. */
export function hasDistinctJapaneseVoices(voices: SpeechSynthesisVoice[]): boolean {
  return voices.filter((v) => v.lang?.toLowerCase().startsWith("ja")).length > 1;
}
