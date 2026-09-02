"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { InterfaceLang } from "@/lib/uiTranslations";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "interfaceLang";

type Ctx = {
  interfaceLang: InterfaceLang;
  setInterfaceLang: (lang: InterfaceLang) => void;
};

const InterfaceLangContext = createContext<Ctx | null>(null);

export function InterfaceLangProvider({ children }: { children: React.ReactNode }) {
  const [interfaceLang, setInterfaceLangState] = useState<InterfaceLang>("fr");

  // Hydratation depuis le stockage local (ne s'exécute que côté client).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "fr") setInterfaceLangState(stored);
    } catch {
      // stockage indisponible : on garde "fr"
    }
  }, []);

  // Reflète la langue d'interface sur l'attribut <html lang>.
  useEffect(() => {
    document.documentElement.lang = interfaceLang;
  }, [interfaceLang]);

  const setInterfaceLang = useCallback((lang: InterfaceLang) => {
    setInterfaceLangState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // stockage indisponible
    }
    // Persistance serveur pour les comptes connectés (ignorée si non connecté).
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        if (data.user) {
          createClient()
            .from("profiles")
            .update({ interface_lang: lang })
            .eq("id", data.user.id)
            .then(({ error }) => {
              if (error) console.error("Sauvegarde interface_lang impossible", error.message);
            });
        }
      })
      .catch(() => {});
  }, []);

  const value = useMemo(() => ({ interfaceLang, setInterfaceLang }), [interfaceLang, setInterfaceLang]);

  return <InterfaceLangContext.Provider value={value}>{children}</InterfaceLangContext.Provider>;
}

export function useInterfaceLang(): Ctx {
  const ctx = useContext(InterfaceLangContext);
  if (!ctx) throw new Error("useInterfaceLang doit être utilisé dans <InterfaceLangProvider>");
  return ctx;
}