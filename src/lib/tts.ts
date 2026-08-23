import type { VoicePref } from "@/types/database";

/**
 * Lit un texte japonais à voix haute dans le navigateur.
 * Utilise la Web Speech API (gratuite, aucune clé requise) comme moteur par défaut.
 * Pour brancher un moteur de meilleure qualité (Google Cloud TTS, Amazon Polly, ElevenLabs),
 * remplacez le corps de cette fonction par un appel à /api/tts qui retourne un flux audio,
 * et jouez-le avec un <audio> ou l'API Web Audio.
 */
export function speakJapanese(text: string, voicePreference: VoicePref = "female"): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      reject(new Error("La synthèse vocale n'est pas disponible sur ce navigateur."));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith("ja"));
    const preferred =
      voices.find((v) =>
        voicePreference === "male"
          ? /male|otoko|男/i.test(v.name)
          : /female|onna|女/i.test(v.name)
      ) || voices[0];

    if (preferred) utterance.voice = preferred;

    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e.error);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}

/** Précharge la liste des voix (Chrome les charge de façon asynchrone). */
export function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve([]);
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) return resolve(voices);
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}
