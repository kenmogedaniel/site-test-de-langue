"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * CTA d'une page publique qui s'adapte à l'état de connexion côté client, pour que
 * la page reste statique (pas d'appel serveur à Supabase au rendu).
 */
export default function HeroCta({
  dashboardLabel,
  guestLabel,
  guestHref = "/signup",
  guestSecondary,
  className,
}: {
  dashboardLabel: string;
  guestLabel: string;
  guestHref?: string;
  /** Lien secondaire affiché uniquement aux visiteurs non connectés (ex. "Se connecter"). */
  guestSecondary?: { label: string; href: string; className?: string };
  className?: string;
}) {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        if (active) setSignedIn(!!data.user);
      })
      .catch(() => {
        if (active) setSignedIn(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const label = signedIn ? dashboardLabel : guestLabel;
  const href = signedIn ? "/dashboard" : guestHref;

  return (
    <>
      <Link href={href} className={className}>
        {label} <span aria-hidden>→</span>
      </Link>
      {guestSecondary && !signedIn && (
        <Link href={guestSecondary.href} className={guestSecondary.className}>
          {guestSecondary.label}
        </Link>
      )}
    </>
  );
}