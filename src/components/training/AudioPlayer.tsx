"use client";

import { useState } from "react";
import { speakJapanese } from "@/lib/tts";
import type { VoicePref } from "@/types/database";

export default function AudioPlayer({
  text,
  voicePreference = "female",
}: {
  text: string;
  voicePreference?: VoicePref;
}) {
  const [playing, setPlaying] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

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
