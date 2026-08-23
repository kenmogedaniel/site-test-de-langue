"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { VoicePref, ThemePref } from "@/types/database";

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
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    const supabase = createClient();
    await supabase
      .from("profiles")
      .update({ voice_preference: voice, theme_pref: theme })
      .eq("id", userId);

    document.documentElement.classList.toggle("dark", theme === "dark");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-8 max-w-md">
      <div>
        <p className="text-sm font-medium mb-3">Voix japonaise</p>
        <div className="flex gap-3">
          {(["female", "male"] as VoicePref[]).map((v) => (
            <button
              key={v}
              onClick={() => setVoice(v)}
              className={`px-5 py-2.5 rounded-full border text-sm ${
                voice === v ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
              }`}
            >
              {v === "female" ? "Femme" : "Homme"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Apparence</p>
        <div className="flex gap-3">
          {(["light", "dark"] as ThemePref[]).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-5 py-2.5 rounded-full border text-sm ${
                theme === t ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
              }`}
            >
              {t === "light" ? "Clair" : "Sombre"}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSave} className="btn-primary">
        {saved ? "Enregistré ✓" : "Enregistrer"}
      </button>
    </div>
  );
}
