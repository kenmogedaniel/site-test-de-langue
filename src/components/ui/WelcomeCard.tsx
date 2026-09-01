"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

/**
 * Encart de bienvenue personnalisé (nom de l'utilisateur) : la page reste statique
 * côté serveur, l'état de connexion est résolu côté client après l'hydratation.
 */
export default function WelcomeCard({ interfaceLang }: { interfaceLang: InterfaceLang }) {
  const [user, setUser] = useState<{ displayName: string | null; id: string } | null>(null);

  useEffect(() => {
    let active = true;
    createClient()
      .auth.getUser()
      .then(async ({ data }) => {
        if (!data.user) return;
        const { data: profile } = await createClient()
          .from("profiles")
          .select("display_name")
          .eq("id", data.user.id)
          .single();
        if (active) setUser({ displayName: profile?.display_name ?? null, id: data.user.id });
      })
      .catch(() => {
        if (active) setUser(null);
      });
    return () => {
      active = false;
    };
  }, []);

  if (!user) return null;

  return (
    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-ai/20 bg-ai/5 px-4 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ai font-display text-lg text-washi">
        {(user.displayName || user.id).charAt(0).toUpperCase()}
      </span>
      <div>
        <p className="text-sm font-medium">
          {t("hero.welcome", interfaceLang, {
            name: user.displayName || t("hero.welcomeGuest", interfaceLang),
          })}
        </p>
        <p className="text-xs text-sumi/60 dark:text-washi/60">{t("hero.back", interfaceLang)}</p>
      </div>
    </div>
  );
}