"use client";

import { useEffect } from "react";
import { unlockAudio } from "@/lib/tts";

/**
 * Installe un écouteur global qui déverrouille le canal audio mobile dès le
 * premier geste de l'utilisateur (tap, clic, touche). Sans cela, iOS/Android
 * bloquent toute lecture qui ne part pas d'une interaction directe : c'est ce
 * qui empêchait le premier audio d'une session de se lancer.
 */
export default function AudioUnlock() {
  useEffect(() => {
    const listener = () => unlockAudio();
    document.addEventListener("pointerdown", listener);
    document.addEventListener("touchstart", listener, { passive: true });
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", listener);
    };
  }, []);
  return null;
}
