"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { VoicePref } from "@/types/database";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "voicePrefs";
const LEGACY_KEY = "voicePreference";

type Ctx = {
  /** Préférence de voix résolue pour une langue (préférence par langue, sinon globale). */
  voiceFor: (courseCode: string) => VoicePref;
  setVoiceFor: (courseCode: string, pref: VoicePref) => void;
};

const VoicePrefsContext = createContext<Ctx | null>(null);

function isVoicePref(v: unknown): v is VoicePref {
  return v === "female" || v === "male";
}

export function VoicePrefsProvider({ children }: { children: React.ReactNode }) {
  // Carte des préférences par langue : { coursCode: "female" | "male" }.
  const [prefs, setPrefs] = useState<Record<string, VoicePref>>({});
  // Valeur globale héritée (historique "voice_preference" sur le profil).
  const [globalPref, setGlobalPref] = useState<VoicePref>("female");

  // Hydratation depuis le stockage local (uniquement côté client).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          const map: Record<string, VoicePref> = {};
          for (const [k, v] of Object.entries(parsed)) {
            if (isVoicePref(v)) map[k] = v;
          }
          setPrefs(map);
        }
      }
      const legacy = window.localStorage.getItem(LEGACY_KEY);
      if (isVoicePref(legacy)) setGlobalPref(legacy);
    } catch {
      // stockage indisponible : on garde les valeurs par défaut
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Miroir de la globale héritée (voix japonaise historique) si aucune préférence par langue.
  const voiceFor = useCallback(
    (courseCode: string): VoicePref => prefs[courseCode] ?? globalPref ?? "female",
    [prefs, globalPref]
  );

  const setVoiceFor = useCallback((courseCode: string, pref: VoicePref) => {
    setPrefs((prev) => {
      const next = { ...prev, [courseCode]: pref };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // stockage indisponible
      }
      return next;
    });
    setGlobalPref(pref);
    try {
      window.localStorage.setItem(LEGACY_KEY, pref);
    } catch {
      // stockage indisponible
    }
    // Persistance serveur pour les comptes connectés.
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        if (!data.user) return;
        const client = createClient();
        client
          .from("profiles")
          .select("voice_prefs")
          .eq("id", data.user.id)
          .single()
          .then(({ data: row }) => {
            const map: Record<string, VoicePref> = (row?.voice_prefs ?? {}) as Record<string, VoicePref>;
            map[courseCode] = pref;
            client
              .from("profiles")
              .update({ voice_prefs: map })
              .eq("id", data.user.id)
              .then(({ error }) => {
                if (error) console.error("Sauvegarde voice_prefs impossible", error.message);
              });
          });
      })
      .catch(() => {});
  }, []);

  const value = useMemo(() => ({ voiceFor, setVoiceFor }), [voiceFor, setVoiceFor]);

  return <VoicePrefsContext.Provider value={value}>{children}</VoicePrefsContext.Provider>;
}

export function useVoicePrefs(): Ctx {
  const ctx = useContext(VoicePrefsContext);
  if (!ctx) throw new Error("useVoicePrefs doit être utilisé dans <VoicePrefsProvider>");
  return ctx;
}