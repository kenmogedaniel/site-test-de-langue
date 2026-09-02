"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { speak } from "@/lib/tts";
import { useInterfaceLang } from "@/components/interface/InterfaceLangProvider";
import { useVoicePrefs } from "@/components/interface/VoicePrefsProvider";
import { LANGUAGES } from "@/lib/languages";
import type { VoicePref, ThemePref, InterfaceLangPref } from "@/types/database";

const SAMPLES: Record<string, string> = {
  ja: "こんにちは、よろしくおねがいします。",
  en: "Hello, nice to meet you.",
  ko: "안녕하세요, 만나서 반갑습니다.",
  es: "Hola, encantado de conocerte.",
  de: "Hallo, ich freue mich, Sie kennenzulernen.",
  it: "Ciao, piacere di conoscerti.",
  pt: "Olá, prazer em conhecer você.",
  ru: "Здравствуйте, приятно познакомиться.",
  cn: "你好，很高兴认识你。",
  ar: "مرحباً، سعيد بلقائك.",
  hi: "नमस्ते, आपसे मिलकर खुशी हुई।",
  tr: "Merhaba, tanıştığımıza memnun oldum.",
};

export default function SettingsForm({
  userId,
  initialTheme,
  initialInterfaceLang,
  initialVoicePrefs,
}: {
  userId: string;
  initialTheme: ThemePref;
  initialInterfaceLang: InterfaceLangPref;
  initialVoicePrefs: Record<string, VoicePref>;
}) {
  const { interfaceLang, setInterfaceLang } = useInterfaceLang();
  const { voiceFor, setVoiceFor } = useVoicePrefs();
  const [theme, setTheme] = useState<ThemePref>(initialTheme);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [previewing, setPreviewing] = useState<string | null>(null);

  // La langue d'interface sauvegardée dans le profil prime sur celle du navigateur.
  useEffect(() => {
    setInterfaceLang(initialInterfaceLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rejoue les préférences de voix par langue stockées dans le profil (sans réécrire).
  useEffect(() => {
    for (const [code, pref] of Object.entries(initialVoicePrefs)) {
      setVoiceFor(code, pref);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Applique le thème clair/sombre dès le montage (au cas où il vient d'être changé ailleurs).
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Persiste le thème dans un cookie (lecture côté serveur = aucun flash au chargement).
  function applyTheme(next: ThemePref) {
    document.documentElement.classList.toggle("dark", next === "dark");
    const maxAge = 365 * 24 * 60 * 60; // 1 an
    document.cookie = `theme=${next};path=/;max-age=${maxAge};samesite=Lax`;
  }

  async function persistTheme(t: ThemePref) {
    setStatus("saving");
    const supabase = createClient();
    const { error } = await supabase.from("profiles").update({ theme_pref: t }).eq("id", userId);
    setStatus(error ? "idle" : "saved");
    if (!error) setTimeout(() => setStatus("idle"), 1500);
  }

  function handleThemeChange(t: ThemePref) {
    setTheme(t);
    applyTheme(t);
    persistTheme(t);
  }

  function handleVoiceChange(code: string, v: VoicePref) {
    setVoiceFor(code, v);
  }

  async function handlePreview(code: string, text: string) {
    setPreviewing(code);
    try {
      await speak(text, code, voiceFor(code));
    } catch {
      // silencieux : le bouton audio de l'entraînement affiche déjà le message d'erreur pertinent.
    } finally {
      setPreviewing(null);
    }
  }

  return (
    <div className="space-y-10 max-w-xl">
      <div>
        <p className="text-sm font-medium mb-3">Langue de l'interface</p>
        <div className="flex gap-3">
          {(["fr", "en"] as InterfaceLangPref[]).map((l) => (
            <button
              key={l}
              onClick={() => setInterfaceLang(l)}
              className={`px-5 py-2.5 rounded-full border text-sm transition-colors ${
                interfaceLang === l ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
              }`}
            >
              {l === "fr" ? "Français" : "English"}
            </button>
          ))}
        </div>
        <p className="text-xs text-sumi/45 dark:text-washi/45 mt-2">
          Appliqué à tout le site dès la sélection.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium mb-1">Voix par langue</p>
        <p className="text-xs text-sumi/45 dark:text-washi/45 mb-4">
          Choisissez une voix féminine ou masculine pour chaque langue. Le réglage
          s'applique instantanément à la lecture audio de cette langue.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {LANGUAGES.map((lang) => {
            const current = voiceFor(lang.code);
            const previewText = SAMPLES[lang.code] ?? SAMPLES.ja;
            return (
              <div key={lang.code} className="rounded-xl border border-sumi/10 dark:border-washi/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="text-xs text-sumi/40 dark:text-washi/40">{lang.native}</span>
                </div>
                <div className="flex items-center gap-2">
                  {(["female", "male"] as VoicePref[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => handleVoiceChange(lang.code, v)}
                      className={`px-4 py-1.5 rounded-full border text-xs transition-colors ${
                        current === v ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
                      }`}
                    >
                      {v === "female" ? "Femme" : "Homme"}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePreview(lang.code, previewText)}
                    disabled={previewing === lang.code}
                    className="ml-auto text-xs text-ai underline underline-offset-2 disabled:opacity-50"
                  >
                    {previewing === lang.code ? "Lecture…" : "▶ Écouter"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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