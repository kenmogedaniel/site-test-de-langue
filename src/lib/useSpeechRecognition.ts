"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Reconnaissance vocale japonaise via la Web Speech API du navigateur
 * (gratuite, aucune clé requise — même logique que la synthèse vocale dans lib/tts.ts).
 * Principalement disponible sur Chrome et Edge ; absente ou limitée sur Firefox/Safari,
 * d'où le drapeau `isSupported` à vérifier avant d'afficher le bouton micro.
 *
 * Le navigateur transcrit toujours en orthographe standard (kanji inclus) : `onFinalTranscript`
 * est appelé une seule fois, à la fin de l'écoute, avec ce texte brut, pour que l'appelant
 * puisse le convertir en hiragana pur (voir /api/speech/to-hiragana) sans multiplier les
 * appels réseau pendant que la reconnaissance est encore en cours.
 */
export function useSpeechRecognition(onFinalTranscript?: (text: string) => void) {
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef("");
  const onFinalRef = useRef(onFinalTranscript);
  onFinalRef.current = onFinalTranscript;

  useEffect(() => {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognitionCtor);
  }, []);

  const start = useCallback(() => {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      setError("La reconnaissance vocale n'est pas disponible sur ce navigateur.");
      return;
    }

    setError(null);
    setTranscript("");
    transcriptRef.current = "";

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "ja-JP";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let finalText = "";
      for (let i = 0; i < event.results.length; i++) {
        finalText += event.results[i][0].transcript;
      }
      transcriptRef.current = finalText;
      setTranscript(finalText);
    };

    recognition.onerror = (event: any) => {
      if (event.error === "no-speech") return; // silence temporaire, pas une vraie erreur
      setError("Erreur de reconnaissance vocale. Réessayez ou tapez votre réponse.");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (transcriptRef.current.trim()) onFinalRef.current?.(transcriptRef.current);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  return { isSupported, isListening, transcript, error, start, stop, setTranscript };
}
