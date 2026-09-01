import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SakuraRoadScene from "@/components/ui/SakuraRoadScene";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import { ENGLISH_LESSONS } from "@/lib/englishLessons";

export const dynamic = "force-dynamic";

const FEATURES = [
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 19V5a2 2 0 0 1 2-2h12M4 19a2 2 0 0 0 2 2h12V3" />
      </svg>
    ),
    badgeClass: "bg-ai/10 text-ai",
    title: "Leçons guidées",
    description:
      "Dix leçons débutant pas à pas : grammaire simple, vocabulaire et exemples en audio.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    ),
    badgeClass: "bg-hanko/10 text-hanko",
    title: "Audio natif",
    description:
      "Écoutez chaque mot et chaque phrase à voix haute pour travailler l'oreille et la prononciation.",
  },
  {
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    badgeClass: "bg-sakura-deep/15 text-sakura-deep dark:text-sakura",
    title: "Suivi de progression",
    description:
      "Historique complet, statistiques par session et points à revoir signalés.",
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
    description:
      "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
  },
];

export default async function EnglishHubPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <SakuraRoadScene />
        <div className="absolute inset-0 bg-gradient-to-t from-sumi/60 via-sumi/10 to-transparent" />
        <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center px-6 pb-14 pt-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_auto]">
            <div className="text-washi drop-shadow-sm">
              <Link href="/" className="font-mono text-xs text-washi/80 transition-colors hover:text-washi">
                ← Toutes les langues
              </Link>
              <h1 className="mt-4 font-display text-6xl leading-[1.05] tracking-tight md:text-7xl">
                Apprenez
                <br />
                l'anglais
              </h1>
              <p className="mt-5 max-w-lg leading-relaxed text-washi/90">
                Un parcours débutant en dix leçons : vocabulaire, grammaire simple et
                audio intégré. Commencez gratuitement, progressez à votre rythme.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={user ? "/dashboard" : "/signup"}
                  className="inline-flex items-center gap-2 rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi shadow-lg transition-transform hover:scale-[1.03]"
                >
                  {user ? "Continuer" : "Commencer gratuitement"} <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/en/lecons"
                  className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Voir les leçons
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <PhoneMockup variant="neutral" />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
          La méthode
        </p>
        <h2 className="mt-2 font-display text-3xl">Comment apprendre l'anglais ?</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          Choisissez les sujets qui vous intéressent, la méthode qui vous convient,
          et laissez la progression faire le reste.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Le programme */}
      <section id="lecons" className="scroll-mt-20 bg-white/40 py-20 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl">Le programme en dix leçons</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
            De la présentation aux comparaisons : un parcours débutant cohérent,
            avec vocabulaire et prononciation en audio à chaque étape.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ENGLISH_LESSONS.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/en/lecons/${lesson.slug}`}
                className="card-washi group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-md"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  Leçon {String(lesson.number).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-body font-semibold transition-colors group-hover:text-ai">
                  {lesson.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-sumi/55 dark:text-washi/55">
                  {lesson.summary}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-ai">
                  Ouvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ai to-ai-dark px-8 py-16 text-center text-washi">
          <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-display text-[12rem] leading-none opacity-10" aria-hidden>
            En
          </span>
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl">
              Faites fleurir votre anglais
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
              Créez votre compte gratuit et faites vos premiers pas aujourd'hui —
              la première leçon n'attend que vous.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={user ? "/dashboard" : "/signup"}
                className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
              >
                {user ? "Retourner à mon espace" : "Créer un compte gratuit"}
              </Link>
              {!user && (
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-washi/30 px-7 py-3 text-sm font-medium text-washi transition-colors hover:bg-washi/10"
                >
                  Se connecter
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
