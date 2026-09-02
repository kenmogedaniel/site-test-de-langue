"use client";

import { useEffect, useState } from "react";
import { speakJapanese, ensureVoicesLoaded, stopServerAudio } from "@/lib/tts";
import { useVoicePrefs } from "@/components/interface/VoicePrefsProvider";

export default function AudioPlayer({
  text,
  autoPlay = false,
}: {
  text: string;
  autoPlay?: boolean;
}) {
  const { voiceFor } = useVoicePrefs();
  const voicePreference = voiceFor("ja");
  const [playing, setPlaying] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  // Précharge la liste des voix dès l'affichage du composant : sur Chrome/Edge, cette
  // liste se charge de façon asynchrone après le chargement de la page, et un premier
  // clic trop rapide sur "Écouter" peut se retrouver sans voix japonaise disponible.
  useEffect(() => {
    ensureVoicesLoaded();
  }, []);

  // Lecture automatique à chaque changement de texte (nouvelle question).
  useEffect(() => {
    if (!autoPlay || !text) return;
    let cancelled = false;
    setPlaying(true);
    speakJapanese(text, voicePreference)
      .catch(() => {
        if (!cancelled) setUnsupported(true);
      })
      .finally(() => {
        if (!cancelled) setPlaying(false);
      });
    return () => {
      cancelled = true;
      window.speechSynthesis?.cancel();
      stopServerAudio();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, text]);

  async function handlePlay() {
    setPlaying(true);
    try {
      await speakJapanese(text, voicePreference);
    } catch {
      setUnsupported(true);
    } finally {
      setPlaying(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePlay}
        disabled={playing}
        aria-label="Écouter la question"
        className="w-12 h-12 rounded-full bg-ai text-washi flex items-center justify-center hover:bg-ai-light transition-colors disabled:opacity-50"
      >
        {playing ? (
          <span className="w-3 h-3 rounded-full bg-washi animate-pulse" />
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      {unsupported && (
        <p className="text-xs text-hanko">
          La lecture audio n'est pas disponible sur ce navigateur.
        </p>
      )}
    </div>
  );
}
