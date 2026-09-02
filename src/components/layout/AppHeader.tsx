"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SignOutButton from "@/components/ui/SignOutButton";
import { useInterfaceLang } from "@/components/interface/InterfaceLangProvider";
import { t } from "@/lib/uiTranslations";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { interfaceLang } = useInterfaceLang();

  const NAV = [
    { href: "/dashboard", label: t("app.dashboard", interfaceLang) },
    { href: "/history", label: t("app.history", interfaceLang) },
    { href: "/settings", label: t("settings.title", interfaceLang) },
  ];

  function close() {
    setOpen(false);
  }

  return (
    <header className="border-b border-sumi/10 dark:border-washi/10">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/ja"
            className="hidden shrink-0 text-xs text-sumi/40 dark:text-washi/40 hover:text-ai sm:inline transition-colors"
            title={t("app.backLangs", interfaceLang)}
          >
            ← {t("header.tagline", interfaceLang)}
          </Link>
          <Link href="/dashboard" className="shrink-0 font-display text-xl">
            Kadoya
          </Link>
        </div>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap transition-colors hover:text-ai ${
                pathname === item.href ? "text-ai font-medium" : "text-sumi/80 dark:text-washi/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <SignOutButton />
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="rounded-full p-2 hover:bg-sumi/5 md:hidden dark:hover:bg-washi/5"
        >
          {open ? (
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

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-sumi/10 px-4 py-3 md:hidden dark:border-washi/10">
          <nav className="flex flex-col gap-1 text-sm">
            <Link
              href="/ja"
              onClick={close}
              className="rounded-lg px-3 py-2.5 text-xs text-sumi/60 hover:bg-sumi/5 dark:text-washi/60 dark:hover:bg-washi/5"
            >
              ← {t("app.backLangs", interfaceLang)}
            </Link>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`rounded-lg px-3 py-2.5 hover:bg-sumi/5 dark:hover:bg-washi/5 ${
                  pathname === item.href ? "font-medium text-ai" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-1">
              <SignOutButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
