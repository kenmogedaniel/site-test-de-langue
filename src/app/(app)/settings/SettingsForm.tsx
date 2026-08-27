"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { speakJapanese, ensureVoicesLoaded, hasDistinctJapaneseVoices } from "@/lib/tts";
import type { VoicePref, ThemePref } from "@/types/database";

const PREVIEW_TEXT = "こんにちは、よろしくおねがいします。";

export default function SettingsForm({
  userId,
  initialVoice,
  initialTheme,
}: {
  userId: string;
  initialVoice: VoicePref;
  initialTheme: ThemePref;
}) {
  const [voice, setVoice] = useState<VoicePref>(initialVoice);
  const [theme, setTheme] = useState<ThemePref>(initialTheme);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [previewing, setPreviewing] = useState(false);
  const [singleVoiceOnly, setSingleVoiceOnly] = useState(false);

  // Applique le thème clair/sombre dès le montage (au cas où il vient d'être changé ailleurs).
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    ensureVoicesLoaded().then((voices) => setSingleVoiceOnly(!hasDistinctJapaneseVoices(voices)));
  }, []);

  async function persist(next: { voice_preference?: VoicePref; theme_pref?: ThemePref }) {
    setStatus("saving");
    const supabase = createClient();
    const { error } = await supabase.from("profiles").update(next).eq("id", userId);
    setStatus(error ? "idle" : "saved");
    if (!error) setTimeout(() => setStatus("idle"), 1500);
  }

  // Les deux réglages s'appliquent instantanément (visuellement / au prochain audio)
  // et sont enregistrés en base immédiatement, sans bouton "Enregistrer" à cliquer.
  function handleVoiceChange(v: VoicePref) {
    setVoice(v);
    persist({ voice_preference: v });
  }

  function handleThemeChange(t: ThemePref) {
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    persist({ theme_pref: t });
  }

  async function handlePreview() {
    setPreviewing(true);
    try {
      await speakJapanese(PREVIEW_TEXT, voice);
    } catch {
      // silencieux : le bouton audio de l'entraînement affiche déjà le message d'erreur pertinent.
    } finally {
      setPreviewing(false);
    }
  }

  return (
    <div className="space-y-8 max-w-md">
      <div>
        <p className="text-sm font-medium mb-3">Voix japonaise</p>
        <div className="flex items-center gap-3">
          {(["female", "male"] as VoicePref[]).map((v) => (
            <button
              key={v}
              onClick={() => handleVoiceChange(v)}
              className={`px-5 py-2.5 rounded-full border text-sm transition-colors ${
                voice === v ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
              }`}
            >
              {v === "female" ? "Femme" : "Homme"}
            </button>
          ))}
          <button
            onClick={handlePreview}
            disabled={previewing}
            className="text-sm text-ai underline underline-offset-2 disabled:opacity-50"
          >
            {previewing ? "Lecture…" : "▶ Écouter"}
          </button>
        </div>
        {singleVoiceOnly && (
          <p className="text-xs text-sumi/50 dark:text-washi/50 mt-3">
            Une seule voix japonaise est installée sur cet appareil : la différence Homme/Femme
            reste audible via la hauteur de voix, mais pour deux voix distinctes, installez une
            voix japonaise supplémentaire dans les paramètres vocaux de votre système.
          </p>
        )}
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Apparence</p>
        <div className="flex gap-3">
          {(["light", "dark"] as ThemePref[]).map((t) => (
            <button
              key={t}
              onClick={() => handleThemeChange(t)}
              className={`px-5 py-2.5 rounded-full border text-sm transition-colors ${
                theme === t ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
              }`}
            >
              {t === "light" ? "Clair" : "Sombre"}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-sumi/40 dark:text-washi/40 h-4">
        {status === "saving" && "Enregistrement…"}
        {status === "saved" && "Enregistré ✓"}
      </p>
    </div>
  );
}
