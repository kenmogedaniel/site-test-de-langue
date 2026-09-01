"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LANGUAGES } from "@/lib/languages";
import Flag from "@/components/ui/Flag";
import { createClient } from "@/lib/supabase/client";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export default function SiteHeader({
  signedIn,
  lang = "ja",
  interfaceLang = "fr",
}: {
  signedIn?: boolean;
  lang?: string;
  interfaceLang?: InterfaceLang;
}) {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Quand `signedIn` n'est pas fourni, l'état de connexion est détecté côté client :
  // le header reste ainsi utilisable sur des pages rendues sans serveur (static/ISR).
  const [clientSignedIn, setClientSignedIn] = useState<boolean | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (signedIn !== undefined) return;
    let active = true;
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        if (active) setClientSignedIn(!!data.user);
      })
      .catch(() => {
        if (active) setClientSignedIn(false);
      });
    return () => {
      active = false;
    };
  }, [signedIn]);

  const effectiveSignedIn = signedIn !== undefined ? signedIn : (clientSignedIn ?? false);

  const activeLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES.find((l) => l.active)!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLangOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.langues", interfaceLang) },
    { href: `/${lang}/lecons`, label: t("nav.lecons", interfaceLang) },
    { href: `/${lang}#fonctionnalites`, label: t("nav.fonctionnalites", interfaceLang) },
    ...(lang === "ja"
      ? [{ href: `/${lang}#guides`, label: t("nav.guides", interfaceLang) }]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-sumi/10 bg-washi/80 backdrop-blur-md dark:border-washi/10 dark:bg-washi-dark/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-display text-xl tracking-tight">
          <span className="inline-flex items-center gap-2">
            <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden>
              <rect width="64" height="64" rx="16" fill="#a71e2f" />
              <path d="M20 52V22a12 12 0 0 1 24 0v30" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" />
              <circle cx="42" cy="34" r="3" fill="#fff" />
            </svg>
            Kadoya
            <span className="hidden text-[11px] font-body font-normal uppercase tracking-widest text-sumi/40 dark:text-washi/40 sm:inline">
              {t("header.tagline", interfaceLang)}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sumi/70 transition-colors hover:text-ai dark:text-washi/70 dark:hover:text-sakura"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setLangOpen((v) => !v);
                setMenuOpen(false);
              }}
              aria-expanded={langOpen}
              aria-haspopup="true"
              className="flex items-center gap-2 rounded-full border border-sumi/15 px-3 py-1.5 text-sm transition-colors hover:bg-sumi/5 dark:border-washi/15 dark:hover:bg-washi/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-sumi/60 dark:text-washi/60">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.1-4-10s1.5-7.3 4-10z" />
              </svg>
              <Flag code={activeLang.flag} country={activeLang.name} size={16} />
              <span className="hidden sm:inline">{activeLang.name}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-3.5 w-3.5 text-sumi/50 transition-transform dark:text-washi/50 ${langOpen ? "rotate-180" : ""}`}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-sumi/10 bg-white p-2 shadow-xl dark:border-washi/10 dark:bg-[#1d2026]">
                <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  {t("header.langueToLearn", interfaceLang)}
                </p>
                <ul className="max-h-80 overflow-y-auto">
                  {LANGUAGES.map((l) =>
                    l.active ? (
                      <li key={l.code}>
                        <Link
                          href={`/${l.code}`}
                          onClick={() => setLangOpen(false)}
                          className="flex items-center justify-between rounded-xl bg-sakura/15 px-3 py-2 text-sm"
                        >
                          <span className="flex items-center gap-3">
                            <Flag code={l.flag} country={l.name} />
                            <span className="font-medium">{l.native}</span>
                            <span className="text-sumi/50 dark:text-washi/50">{l.name}</span>
                          </span>
                          <span className="rounded-full bg-ai px-2 py-0.5 text-[10px] font-medium text-washi">
                            {t("header.actif", interfaceLang)}
                          </span>
                        </Link>
                      </li>
                    ) : (
                      <li key={l.code}>
                        <span
                          className="flex cursor-not-allowed items-center justify-between rounded-xl px-3 py-2 text-sm opacity-45"
                          title={t("header.bientot", interfaceLang)}
                        >
                          <span className="flex items-center gap-3">
                            <Flag code={l.flag} country={l.name} />
                            <span>{l.native}</span>
                            <span className="text-sumi/50 dark:text-washi/50">{l.name}</span>
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest">{t("header.bientot", interfaceLang)}</span>
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {effectiveSignedIn ? (
            <Link href="/dashboard" className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
              {t("header.monEspace", interfaceLang)}
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-3 py-2 text-sm text-sumi/70 transition-colors hover:text-ai dark:text-washi/70 dark:hover:text-sakura sm:inline-block"
              >
                {t("header.seConnecter", interfaceLang)}
              </Link>
              <Link href="/signup" className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
                {t("header.commencer", interfaceLang)}
              </Link>
            </>
          )}

          <button
            type="button"
            className="rounded-full p-2 hover:bg-sumi/5 md:hidden dark:hover:bg-washi/5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={t("header.menu", interfaceLang)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-sumi/10 px-6 py-4 md:hidden dark:border-washi/10">
          <nav className="flex flex-col gap-1 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 hover:bg-sumi/5 dark:hover:bg-washi/5"
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-2 border-sumi/10 dark:border-washi/10" />
            {effectiveSignedIn ? (
              <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-sumi/5 dark:hover:bg-washi/5">
                {t("header.monEspace", interfaceLang)}
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-sumi/5 dark:hover:bg-washi/5">
                  {t("header.seConnecter", interfaceLang)}
                </Link>
                <Link href="/signup" onClick={() => setMenuOpen(false)} className="mt-1 rounded-full bg-ai px-3 py-2.5 text-center font-medium text-washi">
                  {t("header.creerCompte", interfaceLang)}
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
