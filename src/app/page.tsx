import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SakuraScene from "@/components/ui/SakuraScene";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import Flag from "@/components/ui/Flag";
import HeroCta from "@/components/ui/HeroCta";
import WelcomeCard from "@/components/ui/WelcomeCard";
import { LANGUAGES } from "@/lib/languages";
import { ENGLISH_LESSONS } from "@/lib/englishLessons";
import { MINNA_LESSONS } from "@/lib/minnaLessons";
import { getLanguageCourse } from "@/lib/languageCourses";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

const GLYPHS = [
  <svg key="lessons" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 19V5a2 2 0 0 1 2-2h12M4 19a2 2 0 0 0 2 2h12V3" />
  </svg>,
  <svg key="interview" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  <svg key="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </svg>,
  <svg key="audio" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
  </svg>,
];

const BADGES = [
  "bg-ai/10 text-ai",
  "bg-hanko/10 text-hanko",
  "bg-savane/10 text-savane",
  "bg-bamboo/10 text-bamboo",
  "bg-sakura-deep/15 text-sakura-deep dark:text-sakura",
  "bg-ai/10 text-ai",
];

const FEATURE_KEYS = [
  "feat.leconsGuides",
  "feat.entretien",
  "feat.correction",
  "feat.audio",
  "feat.progression",
  "feat.certification",
] as const;

export const metadata: Metadata = {
  title: "Accueil",
  alternates: {
    canonical: "/",
  },
};

export default async function LanguagesLandingPage({
  searchParams,
}: {
  searchParams: { ui?: string };
}) {
  const interfaceLang: InterfaceLang = searchParams.ui === "en" ? "en" : "fr";

  const activeLangs = LANGUAGES.filter((l) => l.active);
  const nLessons = ENGLISH_LESSONS.length + MINNA_LESSONS.length;
  const stats = [
    { value: String(activeLangs.length), label: t("stat.langues", interfaceLang) },
    { value: String(nLessons), label: t("stat.lecons", interfaceLang) },
    { value: "3", label: t("stat.modes", interfaceLang) },
  ];

  const features = FEATURE_KEYS.map((key, i) => ({
    glyph: GLYPHS[i],
    badgeClass: BADGES[i],
    title: t(`${key}`, interfaceLang),
    description: t(`${key}.desc`, interfaceLang),
  }));

  const langDesc = (code: string) => {
    if (code === "ja") return t("langues.desc.ja", interfaceLang);
    if (code === "en") return t("langues.desc.en", interfaceLang);
    const course = getLanguageCourse(code);
    if (course) return interfaceLang === "en" ? course.heroSubtitle.en : course.heroSubtitle.fr;
    return t("langues.desc.en", interfaceLang);
  };

  return (
    <>
      <Suspense fallback={null}><SiteHeader interfaceLang={interfaceLang} /></Suspense>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <SakuraScene variant="hero" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_auto] lg:pt-20">
            <div>
              <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-sumi/10 bg-white/60 px-4 py-3 dark:border-washi/10 dark:bg-white/5">
                <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
                  {t("hero.eyebrow", interfaceLang)}
                </p>
              </div>

              <WelcomeCard interfaceLang={interfaceLang} />

              <h1 className="font-display text-5xl leading-[1.08] tracking-tight md:text-6xl">
                {t("hero.title1", interfaceLang)}
                <br />
                <span className="text-hanko">{t("hero.title2", interfaceLang)}</span>
              </h1>
              <p className="mt-6 max-w-lg leading-relaxed text-sumi/70 dark:text-washi/70">
                {t("hero.subtitle", interfaceLang)}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={`/${activeLangs[0]?.code ?? "ja"}`} className="btn-primary">
                  {t("hero.ctaStart", interfaceLang)}
                  <span aria-hidden>â†’</span>
                </Link>
                <HeroCta
                  dashboardLabel={t("hero.ctaDashboard", interfaceLang)}
                  guestLabel={t("hero.ctaLogin", interfaceLang)}
                  guestHref="/login"
                  className="btn-secondary"
                />
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl">{s.value}</dd>
                    <dd className="mt-0.5 text-xs text-sumi/50 dark:text-washi/50">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hidden justify-center lg:flex">
              <PhoneMockup variant="neutral" interfaceLang={interfaceLang} />
            </div>
          </div>
        </section>

        {/* SÃ©lection de langue */}
        <section id="langues" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
          <h2 className="font-display text-3xl">{t("langues.title", interfaceLang)}</h2>
          <p className="mt-2 text-sm text-sumi/60 dark:text-washi/60">
            {t("langues.subtitle", interfaceLang)}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LANGUAGES.map((lang) =>
              lang.active ? (
                <Link
                  key={lang.code}
                  href={`/${lang.code}`}
                  className="card-washi group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-sakura-deep/40 hover:shadow-md"
                >
                  <Flag code={lang.flag} country={lang.name} size={28} />
                  <h3 className="mt-4 font-display text-xl">{lang.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-sumi/60 dark:text-washi/60">
                    {langDesc(lang.code)}
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium text-hanko transition-colors group-hover:text-hanko-light">
                    {t("langues.discover", interfaceLang)}
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
                    {t("langues.soon", interfaceLang)}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* FonctionnalitÃ©s */}
        <section id="fonctionnalites" className="scroll-mt-20 bg-white/40 py-20 dark:bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
              {t("features.eyebrow", interfaceLang)}
            </p>
            <h2 className="mt-2 font-display text-3xl">
              {t("features.title", interfaceLang)}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
              {t("features.subtitle", interfaceLang)}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
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
                {t("cta.title", interfaceLang)}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
                {t("cta.subtitle", interfaceLang)}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <HeroCta
                  dashboardLabel={t("cta.retour", interfaceLang)}
                  guestLabel={t("cta.creerCompte", interfaceLang)}
                  className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
                />
                {activeLangs.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}`}
                    className="inline-flex items-center justify-center rounded-full border border-washi/30 px-7 py-3 text-sm font-medium text-washi transition-colors hover:bg-washi/10"
                  >
                    {l.code === "ja"
                      ? t("cta.discoverJa", interfaceLang)
                      : l.code === "en"
                        ? t("cta.discoverEn", interfaceLang)
                        : t("cta.discoverTpl", interfaceLang, { name: getLanguageCourse(l.code)?.name ?? l.name })}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Suspense fallback={null}><SiteFooter interfaceLang={interfaceLang} /></Suspense>
    </>
  );
}
