"use client";

import Link from "next/link";
import { LANGUAGES } from "@/lib/languages";
import Flag from "@/components/ui/Flag";
import { useInterfaceLang } from "@/components/interface/InterfaceLangProvider";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export default function SiteFooter({
  lang = "ja",
  interfaceLang = "fr",
}: {
  lang?: string;
  interfaceLang?: InterfaceLang;
}) {
  // La langue d'interface est une préférence globale (même source que le header).
  const { interfaceLang: ctxLang } = useInterfaceLang();
  const effectiveInterfaceLang: InterfaceLang = ctxLang ?? interfaceLang;

  return (
    <footer className="border-t border-sumi/10 bg-white/40 dark:border-washi/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl">Kadoya</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
              {t("footer.tagline", effectiveInterfaceLang)}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-sumi/15 px-3 py-1 text-xs text-sumi/60 dark:border-washi/15 dark:text-washi/60">
              {t("footer.web", effectiveInterfaceLang)}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              {t("footer.findLang", effectiveInterfaceLang)}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  {l.active ? (
                    <Link href={`/${l.code}`} className="flex items-center gap-2 hover:text-ai dark:hover:text-sakura">
                      <Flag code={l.flag} country={l.name} size={16} />
                      {l.name}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 text-sumi/40 dark:text-washi/40">
                      <Flag code={l.flag} country={l.name} size={16} />
                      {l.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              {t("footer.explore", effectiveInterfaceLang)}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-ai dark:hover:text-sakura">{t("footer.allLangs", effectiveInterfaceLang)}</Link></li>
              {lang === "ja" && (
                <>
                  <li><Link href="/ja" className="hover:text-ai dark:hover:text-sakura">{t("footer.learnJa", effectiveInterfaceLang)}</Link></li>
                  <li><Link href="/ja/lecons" className="hover:text-ai dark:hover:text-sakura">{t("footer.leconsKana", effectiveInterfaceLang)}</Link></li>
                  <li><Link href="/ja/hiragana" className="hover:text-ai dark:hover:text-sakura">{t("footer.trainHiragana", effectiveInterfaceLang)}</Link></li>
                  <li><Link href="/ja#guides" className="hover:text-ai dark:hover:text-sakura">{t("footer.guides", effectiveInterfaceLang)}</Link></li>
                </>
              )}
              {lang === "en" && (
                <>
                  <li><Link href="/en" className="hover:text-ai dark:hover:text-sakura">{t("footer.learnEn", effectiveInterfaceLang)}</Link></li>
                  <li><Link href="/en/lecons" className="hover:text-ai dark:hover:text-sakura">{t("footer.leconsEn", effectiveInterfaceLang)}</Link></li>
                </>
              )}
              <li><Link href="/signup" className="hover:text-ai dark:hover:text-sakura">{t("footer.createAccount", effectiveInterfaceLang)}</Link></li>
              <li><Link href="/login" className="hover:text-ai dark:hover:text-sakura">{t("footer.login", effectiveInterfaceLang)}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sumi/10 pt-6 text-xs text-sumi/40 sm:flex-row sm:items-center dark:border-washi/10 dark:text-washi/40">
          <p>© {new Date().getFullYear()} Kadoya — {t("footer.rights", effectiveInterfaceLang)}</p>
          <p>
            {t("footer.motto", effectiveInterfaceLang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
