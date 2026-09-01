"use client";

import Link from "next/link";

/**
 * Gestion d'erreur au niveau de l'application racine (toutes les routes).
 * Affiche un message générique sans fuiter le détail technique à l'utilisateur.
 */
export default function GlobalError() {
  return (
    <html lang="fr">
      <head />
      <body className="flex min-h-screen items-center justify-center bg-sumi px-6 text-washi">
        <div className="text-center">
          <h1 className="font-display text-3xl">Oups, quelque chose a planté.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/70">
            Une erreur inattendue s'est produite. Rechargez la page ou revenez à l'accueil
            pour continuer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-washi px-6 py-2.5 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
            >
              Accueil
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}