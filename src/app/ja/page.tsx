import Link from "next/link";
import type { Metadata } from "next";
import SakuraRoadScene from "@/components/ui/SakuraRoadScene";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import HeroCta from "@/components/ui/HeroCta";
import Ruby from "@/components/ui/Ruby";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

interface Module {
  kanji: string;
  reading: string;
  titleKey: string;
  descriptionKey: string;
  href?: string;
  status: "live" | "soon";
}

const FEATURES = [
  {
    glyph: "学",
    badgeClass: "bg-ai/10 text-ai",
    titleKey: "ja.feat.leconsGuidees",
    descKey: "ja.feat.leconsGuidees.desc",
  },
  {
    glyph: "対",
    badgeClass: "bg-hanko/10 text-hanko",
    titleKey: "ja.feat.entretien",
    descKey: "ja.feat.entretien.desc",
  },
  {
    glyph: "智",
    badgeClass: "bg-savane/10 text-savane",
    titleKey: "ja.feat.correction",
    descKey: "ja.feat.correction.desc",
  },
  {
    glyph: "音",
    badgeClass: "bg-bamboo/10 text-bamboo",
    titleKey: "ja.feat.audio",
    descKey: "ja.feat.audio.desc",
  },
  {
    glyph: "進",
    badgeClass: "bg-sakura-deep/15 text-sakura-deep dark:text-sakura",
    titleKey: "ja.feat.suivi",
    descKey: "ja.feat.suivi.desc",
  },
  {
    glyph: "認",
    badgeClass: "bg-ai/10 text-ai",
    titleKey: "ja.feat.certification",
    descKey: "ja.feat.certification.desc",
  },
];

const GUIDES = [
  {
    kanji: "平仮名",
    gradient: "from-sakura/70 to-hanko/40",
    categoryKey: "ja.guide.hiragana.cat",
    titleKey: "ja.guide.hiragana.title",
    excerptKey: "ja.guide.hiragana.excerpt",
    href: "/ja/hiragana",
    live: true,
  },
  {
    kanji: "面接",
    gradient: "from-ai/25 to-ai-dark/15",
    categoryKey: "ja.guide.entretien.cat",
    titleKey: "ja.guide.entretien.title",
    excerptKey: "ja.guide.entretien.excerpt",
    href: "/login?redirectedFrom=/dashboard",
    live: true,
  },
  {
    kanji: "試験",
    gradient: "from-bamboo/30 to-bamboo/10",
    categoryKey: "ja.guide.ljpt.cat",
    titleKey: "ja.guide.jlpt.title",
    excerptKey: "ja.guide.jlpt.excerpt",
    href: undefined,
    live: false,
  },
];

const TESTIMONIALS = [
  {
    quoteKey: "ja.t1.quote",
    name: "Camille R.",
    ctxKey: "ja.t1.ctx",
  },
  {
    quoteKey: "ja.t2.quote",
    name: "Mehdi K.",
    ctxKey: "ja.t2.ctx",
  },
  {
    quoteKey: "ja.t3.quote",
    name: "Léa T.",
    ctxKey: "ja.t3.ctx",
  },
];

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"];

export const metadata: Metadata = {
  title: "Apprendre le japonais",
  description:
    "Hiragana, katakana, 66 kanji N5, leçons guidées et entraînement à l'entretien en japonais, avec audio et correction intelligente.",
  alternates: {
    canonical: "/ja",
    languages: { "x-default": "/", "fr-FR": "/ja" },
  },
};

export default function JapaneseHubPage({
  searchParams,
}: {
  searchParams: { ui?: string };
}) {
  const lang: InterfaceLang = searchParams.ui === "en" ? "en" : "fr";

  const modules: Module[] = [
    {
      kanji: "平仮名",
      reading: "ひらがな",
      titleKey: "ja.modules.hiragana.title",
      descriptionKey: "ja.modules.hiragana.desc",
      href: "/ja/hiragana",
      status: "live",
    },
    {
      kanji: "片仮名",
      reading: "かたかな",
      titleKey: "ja.modules.katakana.title",
      descriptionKey: "ja.modules.katakana.desc",
      href: "/ja/lecons/katakana-a",
      status: "live",
    },
    {
      kanji: "授業",
      reading: "じゅぎょう",
      titleKey: "ja.modules.lecons.title",
      descriptionKey: "ja.modules.lecons.desc",
      href: "/ja/lecons",
      status: "live",
    },
    {
      kanji: "漢字",
      reading: "かんじ",
      titleKey: "ja.modules.kanji.title",
      descriptionKey: "ja.modules.kanji.desc",
      href: "/ja/kanji",
      status: "live",
    },
    {
      kanji: "面接",
      reading: "めんせつ",
      titleKey: "ja.modules.entretien.title",
      descriptionKey: "ja.modules.entretien.desc",
      href: "/dashboard",
      status: "live",
    },
    {
      kanji: "試験",
      reading: "しけん",
      titleKey: "ja.modules.jlpt.title",
      descriptionKey: "ja.modules.jlpt.desc",
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
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="font-mono text-xs text-washi/80 transition-colors hover:text-washi"
                >
                  {t("ja.allLangs", lang)}
                </Link>
              </div>
              <h1 className="mt-4 font-display text-6xl leading-[1.05] tracking-tight md:text-7xl">
                {t("ja.heroTitle1", lang)}
                <br />
                {t("ja.heroTitle2", lang)}
              </h1>
              <p className="mt-5 max-w-lg leading-relaxed text-washi/90">
                {t("ja.heroSubtitle", lang)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <HeroCta
                  dashboardLabel={t("ja.ctaContinue", lang)}
                  guestLabel={t("ja.ctaStart", lang)}
                  className="inline-flex items-center gap-2 rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi shadow-lg transition-transform hover:scale-[1.03]"
                />
                <Link
                  href="/ja/hiragana"
                  className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  {t("ja.tryHiragana", lang)}
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
          {t("ja.methodEyebrow", lang)}
        </p>
        <h2 className="mt-2 font-display text-3xl">{t("ja.methodTitle", lang)}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          {t("ja.methodSubtitle", lang)}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.titleKey}
              glyph={f.glyph}
              badgeClass={f.badgeClass}
              title={t(f.titleKey, lang)}
              description={t(f.descKey, lang)}
            />
          ))}
        </div>
      </section>

      {/* Niveaux JLPT */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="card-washi p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl">{t("ja.jlpt.title", lang)}</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              {t("ja.soon", lang)}
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
        <h2 className="font-display text-3xl">{t("ja.modulesTitle", lang)}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((m) =>
            m.status === "live" && m.href ? (
              <Link
                key={m.titleKey}
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
                  {t(m.titleKey, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{t(m.descriptionKey, lang)}</p>
                <span className="mt-4 inline-block text-xs font-medium text-ai">{t("ja.modules.continuer", lang)}</span>
              </Link>
            ) : (
              <div
                key={m.titleKey}
                className="relative overflow-hidden rounded-2xl border border-dashed border-sumi/15 p-7 opacity-55 dark:border-washi/15"
              >
                <span className="absolute -right-3 -top-5 select-none font-display text-7xl opacity-[0.06]" aria-hidden>
                  {m.kanji}
                </span>
                <span className="font-display text-2xl">
                  <Ruby kanji={m.kanji} reading={m.reading} />
                </span>
                <h3 className="mt-3 font-body text-lg font-semibold">{t(m.titleKey, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{t(m.descriptionKey, lang)}</p>
                <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  {t("ja.soon", lang)}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* Guides / articles */}
      <section id="guides" className="scroll-mt-20 bg-white/40 py-20 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl">{t("ja.guidesTitle", lang)}</h2>
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
                        {t("ja.guide.preparation", lang)}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-sumi/50 dark:text-washi/50">
                      {t(g.categoryKey, lang)}
                    </p>
                    <h3 className="mt-2 font-body text-base font-semibold leading-snug">{t(g.titleKey, lang)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{t(g.excerptKey, lang)}</p>
                    <span className={`mt-4 inline-block text-xs font-medium ${g.live ? "text-ai" : "text-sumi/40 dark:text-washi/40"}`}>
                      {g.live ? t("ja.guide.lire", lang) : t("ja.guide.preparation", lang)}
                    </span>
                  </div>
                </>
              );
              return g.href ? (
                <Link
                  key={g.titleKey}
                  href={g.href}
                  className="card-washi group overflow-hidden !p-0 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {body}
                </Link>
              ) : (
                <div key={g.titleKey} className="card-washi cursor-not-allowed overflow-hidden opacity-70 !p-0">
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl">{t("ja.testimonialsTitle", lang)}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((x, i) => (
            <figure key={x.name} className="card-washi relative p-7">
              {i === 1 && (
                <span className="absolute -top-4 right-5 scale-[0.62]" aria-hidden>
                  <span className="hanko-stamp !h-[88px] !w-[88px]">合格</span>
                </span>
              )}
              <blockquote className="text-sm leading-relaxed">
                «&nbsp;{t(x.quoteKey, lang)}&nbsp;»
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sakura/30 font-display text-sm text-sakura-deep dark:text-sakura">
                  {x.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{x.name}</span>
                  <span className="block text-xs text-sumi/50 dark:text-washi/50">{t(x.ctxKey, lang)}</span>
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
              {t("ja.ctaFinalTitle", lang)}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
              {t("ja.ctaFinalSubtitle", lang)}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <HeroCta
                dashboardLabel={t("ja.ctaDashboard", lang)}
                guestLabel={t("ja.ctaCreate", lang)}
                className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
                guestSecondary={{
                  label: t("ja.ctaLogin", lang),
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
