"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { InterfaceLang } from "@/lib/uiTranslations";

/**
 * Interrupteur de langue d'interface. Bascule le paramètre `?ui=` sur le chemin
 * courant (pas seulement la racine), pour qu'une page produit puisse être relue
 * dans l'autre langue sans quitter sa route.
 */
export default function LanguageToggle({
  lang,
  dark = false,
}: {
  lang: InterfaceLang;
  dark?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchTo(next: InterfaceLang) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("ui", next);
    router.push(`${pathname}?${params.toString()}`);
  }

  const base =
    "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors";

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 ${
        dark ? "border-white/25" : "border-sumi/15 dark:border-washi/15"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["fr", "en"] as const).map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            aria-pressed={active}
            className={`${base} ${
              active
                ? dark
                  ? "bg-white text-sumi"
                  : "bg-ai text-washi"
                : dark
                  ? "text-white/70 hover:bg-white/10"
                  : "text-sumi/60 hover:bg-sumi/5 dark:text-washi/60 dark:hover:bg-washi/5"
            }`}
          >
            {code === "fr" ? "FR" : "EN"}
          </button>
        );
      })}
    </div>
  );
}