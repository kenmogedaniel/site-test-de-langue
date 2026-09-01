import Link from "next/link";
import type { Metadata } from "next";
import SakuraRoadScene from "@/components/ui/SakuraRoadScene";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import HeroCta from "@/components/ui/HeroCta";
import Ruby from "@/components/ui/Ruby";

interface Module {
  kanji: string;
  reading: string;
  title: string;
  description: string;
  href?: string;
  status: "live" | "soon";
}

const FEATURES = [
  {
    glyph: "学",
    badgeClass: "bg-ai/10 text-ai",
    title: "Leçons guidées",
    description:
      "Les 46 hiragana pas à pas, avec audio natif et auto-évaluation honnête.",
  },
  {
    glyph: "対",
    badgeClass: "bg-hanko/10 text-hanko",
    title: "Entraînement à l'entretien",
    description:
      "95 questions réelles d'entretien, 3 modes d'exercice, du QCM à la réponse libre.",
  },
  {
    glyph: "智",
    badgeClass: "bg-savane/10 text-savane",
    title: "Correction intelligente",
    description:
      "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
  },
  {
    glyph: "音",
    badgeClass: "bg-bamboo/10 text-bamboo",
    title: "Audio intégré",
    description:
      "Écoutez chaque mot et chaque question à voix haute pour travailler l'oreille.",
  },
  {
    glyph: "進",
    badgeClass: "bg-sakura-deep/15 text-sakura-deep dark:text-sakura",
    title: "Suivi de progression",
    description:
      "Historique complet, statistiques par session et questions à revoir signalées.",
  },
  {
    glyph: "認",
    badgeClass: "bg-ai/10 text-ai",
    title: "Objectif certification",
    description:
      "Parcours aligné sur les niveaux du JLPT, de N5 à N1, pour viser le certificat.",
  },
];

const GUIDES = [
  {
    kanji: "平仮名",
    gradient: "from-sakura/70 to-hanko/40",
    category: "Alphabet · Guide",
    title: "Mémoriser les 46 hiragana sans y passer des heures",
    excerpt:
      "La méthode des petits pas : révision espacée, audio et auto-évaluation pour ancrer chaque son durablement.",
    href: "/ja/hiragana",
    live: true,
  },
  {
    kanji: "面接",
    gradient: "from-ai/25 to-ai-dark/15",
    category: "Entretien · Conseils",
    title: "Réussir un entretien au Japon : les questions incontournables",
    excerpt:
      "Jikoshōkai, motivations, points faibles : découvrez les questions qui reviennent et entraînez-vous dessus.",
    href: "/login?redirectedFrom=/dashboard",
    live: true,
  },
  {
    kanji: "試験",
    gradient: "from-bamboo/30 to-bamboo/10",
    category: "JLPT · Bientôt",
    title: "Tout savoir du JLPT : niveaux, format et stratégie",
    excerpt:
      "De N5 à N1 : ce que chaque niveau exige, comment l'épreuve se déroule et par où commencer selon votre profil.",
    href: undefined,
    live: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Les hiragana me résistaient depuis des mois. Trois semaines avec le mode révision et ça rentre tout seul.",
    name: "Camille R.",
    context: "prépare le N5",
  },
  {
    quote:
      "Le mode entretien avec correction automatique, c'est exactement ce qu'il me fallait avant mon dossier pour Tokyo.",
    name: "Mehdi K.",
    context: "échange universitaire",
  },
  {
    quote:
      "J'écoute chaque question à voix haute, je répète, je progresse. Simple et efficace.",
    name: "Léa T.",
    context: "voyage au Japon",
  },
];

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"];

export const metadata: Metadata = {
  title: "Apprendre le japonais",
  description:
    "Hiragana, katakana, 80 kanji N5, leçons guidées et entraînement à l'entretien en japonais, avec audio et correction intelligente.",
  alternates: {
    canonical: "/ja",
    languages: { "fr-FR": "/ja", "en-US": "/en" },
  },
};

export default function JapaneseHubPage() {
  const modules: Module[] = [
    {
      kanji: "平仮名",
      reading: "ひらがな",
      title: "Hiragana",
      description: "Les 46 sons de base, avec audio et auto-évaluation.",
      href: "/ja/hiragana",
      status: "live",
    },
    {
      kanji: "片仮名",
      reading: "かたかな",
      title: "Katakana",
      description: "Pour les mots d'origine etrangere, avec ordre de traits.",
      href: "/ja/lecons/katakana-a",
      status: "live",
    },
    {
      kanji: "授業",
      reading: "じゅぎょう",
      title: "Lecons guidees",
      description: "Kana ligne par ligne + cours structure en 25 lecons, tout en audio.",
      href: "/ja/lecons",
      status: "live",
    },
    {
      kanji: "漢字",
      reading: "かんじ",
      title: "Kanji",
      description: "80 kanji N5 par theme, avec lectures, mots et ordre des traits.",
      href: "/ja/kanji",
      status: "live",
    },
    {
      kanji: "面接",
      reading: "めんせつ",
      title: "Entraînement à l'entretien",
      description: "95 questions réelles, 3 modes, audio, correction intelligente.",
      href: "/dashboard",
      status: "live",
    },
    {
      kanji: "試験",
      reading: "しけん",
      title: "Tests blancs JLPT",
      description: "Épreuves chronométrées de vocabulaire, grammaire et écoute.",
      status: "soon",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <SakuraRoadScene />
        <div className="absolute inset-0 bg-gradient-to-t from-sumi/60 via-sumi/10 to-transparent" />
        <div className="relative mx-auto flex min-h-[540px] max-w-6xl items-center px-6 pb-14 pt-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_auto]">
            <div className="text-washi drop-shadow-sm">
              <Link
                href="/"
                className="font-mono text-xs text-washi/80 transition-colors hover:text-washi"
              >
                ← Toutes les langues
              </Link>
              <h1 className="mt-4 font-display text-6xl leading-[1.05] tracking-tight md:text-7xl">
                Apprenez
                <br />
                le japonais
              </h1>
              <p className="mt-5 max-w-lg leading-relaxed text-washi/90">
                Un parcours complet, de l'alphabet à l'entretien d'admission :
                leçons, audio, correction intelligente et suivi de progression.
                Commencez gratuitement, progressez à votre rythme.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <HeroCta
                  dashboardLabel="Continuer"
                  guestLabel="Commencer gratuitement"
                  className="inline-flex items-center gap-2 rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi shadow-lg transition-transform hover:scale-[1.03]"
                />
                <Link
                  href="/ja/hiragana"
                  className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Essayer les hiragana
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
          La méthode
        </p>
        <h2 className="mt-2 font-display text-3xl">Comment apprendre le japonais ?</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          Ce n'est un secret pour personne : la motivation est la clé. Choisissez les
          sujets qui vous intéressent, la méthode qui vous convient, et laissez la
          progression faire le reste.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Niveaux JLPT */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="card-washi p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl">Progression par niveau</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              Bientôt disponible
            </span>
          </div>
          <div className="mt-6 flex gap-2">
            {JLPT_LEVELS.map((level, i) => (
              <div key={level} className="flex-1">
                <div
                  className={`rounded-t-xl border-x border-t border-dashed border-sumi/15 dark:border-washi/15 ${i === 0 ? "border-solid border-bamboo bg-bamboo/10 opacity-100" : "opacity-50"}`}
                  style={{ height: `${28 + i * 12}px` }}
                >
                  <p className={`pt-2 text-center font-mono text-sm ${i === 0 ? "text-bamboo" : ""}`}>
                    {level}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-0 h-0 border-b border-dashed border-sumi/15 dark:border-washi/15" />
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 className="font-display text-3xl">Modules</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((m) =>
            m.status === "live" && m.href ? (
              <Link
                key={m.title}
                href={m.href}
                className="card-washi group relative overflow-hidden p-7 transition-all hover:-translate-y-1 hover:border-ai/40 hover:shadow-md"
              >
                <span className="absolute -right-3 -top-5 select-none font-display text-7xl opacity-[0.06] transition-opacity group-hover:opacity-[0.12]" aria-hidden>
                  {m.kanji}
                </span>
                <span className="font-display text-2xl text-ai">
                  <Ruby kanji={m.kanji} reading={m.reading} />
                </span>
                <h3 className="mt-3 font-body text-lg font-semibold transition-colors group-hover:text-ai">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{m.description}</p>
                <span className="mt-4 inline-block text-xs font-medium text-ai">Ouvrir →</span>
              </Link>
            ) : (
              <div
                key={m.title}
                className="relative overflow-hidden rounded-2xl border border-dashed border-sumi/15 p-7 opacity-55 dark:border-washi/15"
              >
                <span className="absolute -right-3 -top-5 select-none font-display text-7xl opacity-[0.06]" aria-hidden>
                  {m.kanji}
                </span>
                <span className="font-display text-2xl">
                  <Ruby kanji={m.kanji} reading={m.reading} />
                </span>
                <h3 className="mt-3 font-body text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{m.description}</p>
                <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  Bientôt disponible
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* Guides / articles */}
      <section id="guides" className="scroll-mt-20 bg-white/40 py-20 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl">Guides & articles</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {GUIDES.map((g) => {
              const body = (
                <>
                  <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${g.gradient}`}>
                    <span className="select-none font-display text-6xl text-sumi/70 mix-blend-luminosity dark:text-washi/80" aria-hidden>
                      {g.kanji}
                    </span>
                    {!g.live && (
                      <span className="absolute right-3 top-3 rounded-full bg-washi/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-sumi">
                        Bientôt
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/50 dark:text-washi/50">
                      {g.category}
                    </p>
                    <h3 className="mt-2 font-body text-base font-semibold leading-snug">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{g.excerpt}</p>
                    <span className={`mt-4 inline-block text-xs font-medium ${g.live ? "text-ai" : "text-sumi/40 dark:text-washi/40"}`}>
                      {g.live ? "Lire le guide →" : "En préparation"}
                    </span>
                  </div>
                </>
              );
              return g.href ? (
                <Link
                  key={g.title}
                  href={g.href}
                  className="card-washi group overflow-hidden !p-0 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {body}
                </Link>
              ) : (
                <div key={g.title} className="card-washi cursor-not-allowed overflow-hidden opacity-70 !p-0">
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl">Ils apprennent avec nous</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="card-washi relative p-7">
              {i === 1 && (
                <span className="absolute -top-4 right-5 scale-[0.62]" aria-hidden>
                  <span className="hanko-stamp !h-[88px] !w-[88px]">合格</span>
                </span>
              )}
              <blockquote className="text-sm leading-relaxed">
                «&nbsp;{t.quote}&nbsp;»
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sakura/30 font-display text-sm text-sakura-deep dark:text-sakura">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-sumi/50 dark:text-washi/50">{t.context}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ai to-ai-dark px-8 py-16 text-center text-washi">
          <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-display text-[12rem] leading-none opacity-10" aria-hidden>
            桜
          </span>
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl">
              Faites fleurir votre japonais
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
              Créez votre compte gratuit et faites vos premiers pas aujourd'hui —
              le premier hiragana n'attend que vous.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <HeroCta
                dashboardLabel="Retourner à mon espace"
                guestLabel="Créer un compte gratuit"
                className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
                guestSecondary={{
                  label: "Se connecter",
                  href: "/login",
                  className:
                    "inline-flex items-center justify-center rounded-full border border-washi/30 px-7 py-3 text-sm font-medium text-washi transition-colors hover:bg-washi/10",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
