"use client";

import { useState } from "react";
import { speak } from "@/lib/tts";
import { useVoicePrefs } from "@/components/interface/VoicePrefsProvider";

export default function SpeakButton({
  text,
  label = "Écouter",
  lang = "ja",
}: {
  text: string;
  label?: string;
  lang?: string;
}) {
  const { voiceFor } = useVoicePrefs();
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handlePlay() {
    setPlaying(true);
    try {
      await speak(text, lang, voiceFor(lang));
    } catch {
      setFailed(true);
    } finally {
      setPlaying(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={playing}
      aria-label={`${label} : ${text}`}
      title={failed ? "Audio indisponible sur ce navigateur" : label}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ai/10 text-ai transition-colors hover:bg-ai hover:text-washi disabled:opacity-50"
    >
      {playing ? (
        <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 010 7" />
        </svg>
      )}
    </button>
  );
}
