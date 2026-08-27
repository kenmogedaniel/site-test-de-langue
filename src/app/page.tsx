import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SakuraScene from "@/components/ui/SakuraScene";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import Flag from "@/components/ui/Flag";
import { LANGUAGES } from "@/lib/languages";

const FEATURES = [
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 19V5a2 2 0 0 1 2-2h12M4 19a2 2 0 0 0 2 2h12V3" />
      </svg>
    ),
    badgeClass: "bg-ai/10 text-ai",
    title: "Leçons guidées",
    description: "Alphabets pas à pas, avec audio natif et auto-évaluation honnête.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    badgeClass: "bg-hanko/10 text-hanko",
    title: "Entraînement à l'entretien",
    description: "Des questions réelles, en 3 modes d'exercice : QCM, réponse libre ou structurée.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    badgeClass: "bg-savane/10 text-savane",
    title: "Correction intelligente",
    description: "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    ),
    badgeClass: "bg-bamboo/10 text-bamboo",
    title: "Audio intégré",
    description: "Écoutez chaque mot et chaque question à voix haute pour travailler l'oreille.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    badgeClass: "bg-sakura-deep/15 text-sakura-deep dark:text-sakura",
    title: "Suivi de progression",
    description: "Historique complet, statistiques par session et points à revoir signalés.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
      </svg>
    ),
    badgeClass: "bg-ai/10 text-ai",
    title: "Objectif certification",
    description: "Parcours aligné sur les niveaux officiels, pour viser le certificat.",
  },
];

export default async function LanguagesLandingPage() {
  let user: { id: string; displayName: string | null } | null = null;
  try {
    const supabase = createClient();
    const {
      data: { user: u },
    } = await supabase.auth.getUser();
    if (u) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", u.id)
        .single();
      user = { id: u.id, displayName: profile?.display_name ?? null };
    }
  } catch {
    user = null;
  }
  const signedIn = !!user;

  return (
    <>
      <SiteHeader signedIn={signedIn} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <SakuraScene variant="hero" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_auto] lg:pt-20">
            <div>
              {user && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-ai/20 bg-ai/5 px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ai font-display text-lg text-washi">
                    {(user.displayName || user.id).charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-medium">
                      Bonjour {user.displayName || "et bienvenue"}
                    </p>
                    <p className="text-xs text-sumi/60 dark:text-washi/60">
                      Ravis de vous revoir. Chaque langue a sa porte : ouvrez la vôtre.
                    </p>
                  </div>
                </div>
              )}
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
                Plateforme d'apprentissage des langues
              </p>
              <h1 className="font-display text-5xl leading-[1.08] tracking-tight md:text-6xl">
                Chaque langue a sa porte.
                <br />
                <span className="text-hanko">Ouvrez la vôtre.</span>
              </h1>
              <p className="mt-6 max-w-lg leading-relaxed text-sumi/70 dark:text-washi/70">
                Alphabets, niveaux officiels, tests blancs et entraînement à l'entretien —
                tout ce qu'il faut pour se présenter le jour J avec confiance. Des millions
                d'apprenants mémorisent chaque jour quelques mots de plus ; rejoignez-les.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/ja" className="btn-primary">
                  Commencer gratuitement
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={signedIn ? "/dashboard" : "/login"}
                  className="btn-secondary"
                >
                  {signedIn ? "Mon entraînement" : "J'ai déjà un compte"}
                </Link>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["46", "hiragana au programme"],
                  ["95", "questions d'entretien réelles"],
                  ["5", "niveaux officiels couverts"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-3xl">{value}</dd>
                    <dd className="mt-0.5 text-xs text-sumi/50 dark:text-washi/50">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hidden justify-center lg:flex">
              <PhoneMockup variant="neutral" />
            </div>
          </div>
        </section>

        {/* Sélection de langue */}
        <section id="langues" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
          <h2 className="font-display text-3xl">Choisissez une langue</h2>
          <p className="mt-2 text-sm text-sumi/60 dark:text-washi/60">
            Une seule langue est disponible pour l'instant ; les autres arrivent bientôt.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LANGUAGES.map((lang) =>
              lang.active ? (
                <Link
                  key={lang.code}
                  href="/ja"
                  className="card-washi group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-sakura-deep/40 hover:shadow-md"
                >
                  <Flag code={lang.flag} country={lang.name} size={28} />
                  <h3 className="mt-4 font-display text-xl">{lang.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-sumi/60 dark:text-washi/60">
                    Alphabets, kanji, niveaux officiels et entraînement à l'entretien.
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium text-hanko transition-colors group-hover:text-hanko-light">
                    Découvrir →
                  </span>
                </Link>
              ) : (
                <div
                  key={lang.code}
                  className="rounded-2xl border border-dashed border-sumi/15 p-6 opacity-55 dark:border-washi/15"
                >
                  <Flag code={lang.flag} country={lang.name} size={28} />
                  <h3 className="mt-4 font-body text-base font-semibold">{lang.name}</h3>
                  <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                    Bientôt disponible
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Fonctionnalités */}
        <section id="fonctionnalites" className="scroll-mt-20 bg-white/40 py-20 dark:bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
              Tout est réuni
            </p>
            <h2 className="mt-2 font-display text-3xl">
              Comment apprendre une langue — et tenir sur la durée ?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
              La motivation est la clé : elle fait réussir, son absence fait abandonner.
              L'application est conçue pour vous la maintenir, leçon après leçon.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ai to-ai-dark px-8 py-16 text-center text-washi">
            <SakuraScene variant="corner" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl">
                Faites fleurir votre apprentissage
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
                Commencez les leçons gratuitement, progressez à votre rythme et arrivez
                prêt le jour de l'examen ou de l'entretien.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={signedIn ? "/dashboard" : "/signup"}
                  className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
                >
                  {signedIn ? "Retourner à mon entraînement" : "Créer un compte gratuit"}
                </Link>
                <Link
                  href="/ja"
                  className="inline-flex items-center justify-center rounded-full border border-washi/30 px-7 py-3 text-sm font-medium text-washi transition-colors hover:bg-washi/10"
                >
                  Découvrir le japonais
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
