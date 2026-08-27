import Link from "next/link";
import { LANGUAGES } from "@/lib/languages";
import Flag from "@/components/ui/Flag";

export default function SiteFooter() {
  return (
    <footer className="border-t border-sumi/10 bg-white/40 dark:border-washi/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl">Kadoya</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
              Plateforme d'apprentissage des langues pensée pour les francophones :
              alphabets, vocabulaire, examens et entretiens.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-sumi/15 px-3 py-1 text-xs text-sumi/60 dark:border-washi/15 dark:text-washi/60">
              Disponible sur le web — aucun téléchargement requis
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              Trouve ta langue
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  {l.active ? (
                    <Link href="/ja" className="flex items-center gap-2 hover:text-ai dark:hover:text-sakura">
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
              Explorer
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-ai dark:hover:text-sakura">Toutes les langues</Link></li>
              <li><Link href="/ja" className="hover:text-ai dark:hover:text-sakura">Apprendre le japonais</Link></li>
              <li><Link href="/ja/lecons" className="hover:text-ai dark:hover:text-sakura">Leçons (kana + cours)</Link></li>
              <li><Link href="/ja/hiragana" className="hover:text-ai dark:hover:text-sakura">Entraînement hiragana</Link></li>
              <li><Link href="/ja#guides" className="hover:text-ai dark:hover:text-sakura">Guides et articles</Link></li>
              <li><Link href="/signup" className="hover:text-ai dark:hover:text-sakura">Créer un compte</Link></li>
              <li><Link href="/login" className="hover:text-ai dark:hover:text-sakura">Se connecter</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sumi/10 pt-6 text-xs text-sumi/40 sm:flex-row sm:items-center dark:border-washi/10 dark:text-washi/40">
          <p>© {new Date().getFullYear()} Kadoya — Tous droits réservés.</p>
          <p>
            Chaque langue a sa porte : ouvrez la vôtre.
          </p>
        </div>
      </div>
    </footer>
  );
}
