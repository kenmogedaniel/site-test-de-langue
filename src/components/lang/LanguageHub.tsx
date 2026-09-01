import Link from "next/link";
import type { Metadata } from "next";
import PhoneMockup from "@/components/ui/PhoneMockup";
import FeatureCard from "@/components/ui/FeatureCard";
import HeroCta from "@/components/ui/HeroCta";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Flag from "@/components/ui/Flag";
import { t, type InterfaceLang } from "@/lib/uiTranslations";
import type { LanguageCourse } from "@/lib/genericLessons";

const FEATURES = [
  { glyph: "学", badgeClass: "bg-ai/10 text-ai", titleKey: "ja.feat.leconsGuidees", descKey: "ja.feat.leconsGuidees.desc" },
  { glyph: "話", badgeClass: "bg-hanko/10 text-hanko", titleKey: "ja.feat.entretien", descKey: "ja.feat.entretien.desc" },
  { glyph: "音", badgeClass: "bg-bamboo/10 text-bamboo", titleKey: "ja.feat.audio", descKey: "ja.feat.audio.desc" },
  { glyph: "進", badgeClass: "bg-sakura-deep/15 text-sakura-deep dark:text-sakura", titleKey: "ja.feat.suivi", descKey: "ja.feat.suivi.desc" },
];

/** Page d'accueil générique d'une langue du catalogue. */
export default function LanguageHub({
  course,
  interfaceLang,
}: {
  course: LanguageCourse;
  interfaceLang: InterfaceLang;
}) {
  const lang = interfaceLang;
  const ui = `?ui=${lang}`;
  const meta: Metadata = {
    title: course.name,
    alternates: {
      canonical: `/${course.code}`,
      languages: { "x-default": "/", [`${lang === "en" ? "en-US" : "fr-FR"}`]: `/${course.code}` },
    },
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sakura/20 via-transparent to-ai/10" />
          <div className="relative mx-auto flex min-h-[540px] max-w-6xl items-center px-6 pb-14 pt-24">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_auto]">
              <div>
                <div className="flex items-center justify-between">
                  <Link href="/" className="font-mono text-xs text-sumi/60 hover:text-ai dark:text-washi/60">
                    {t("lang.allLangs", lang)}
                  </Link>
                  <LanguageToggle lang={lang} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Flag code={course.code === "cn" ? "cn" : course.code} country={course.name} size={40} />
                  <span className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
                    {course.native}
                  </span>
                </div>
                <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
                  {lang === "en" ? course.heroTitle1.en : course.heroTitle1.fr}
                  <br />
                  <span className="text-hanko">{lang === "en" ? course.heroTitle2.en : course.heroTitle2.fr}</span>
                </h1>
                <p className="mt-5 max-w-lg leading-relaxed text-sumi/70 dark:text-washi/70">
                  {lang === "en" ? course.heroSubtitle.en : course.heroSubtitle.fr}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroCta
                    dashboardLabel={t("lang.ctaContinue", lang)}
                    guestLabel={t("lang.ctaStart", lang)}
                    className="btn-primary inline-flex items-center gap-2"
                  />
                  <Link
                    href={`/${course.code}/lecons${ui}`}
                    className="btn-secondary inline-flex items-center"
                  >
                    {t("lang.seeLessons", lang)}
                  </Link>
                </div>
              </div>
              <div className="hidden justify-center lg:flex">
                <PhoneMockup variant="neutral" interfaceLang={lang} />
              </div>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section id="fonctionnalites" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
            {t("lang.methodEyebrow", lang)}
          </p>
          <h2 className="mt-2 font-display text-3xl">
            {t("lang.methodTitle", lang, { name: course.name })}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
            {t("lang.methodSubtitle", lang)}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Programme */}
        <section id="lecons" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-20">
          <h2 className="font-display text-3xl">{t("lang.programTitle", lang)}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
            {t("lang.programSubtitle", lang)}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/${course.code}/lecons/${lesson.slug}${ui}`}
                className="card-washi group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-md"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  {t("lang.lessonNumber", lang)} {String(lesson.number).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-body font-semibold transition-colors group-hover:text-ai">
                  {lang === "en" ? lesson.titleEn : lesson.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-sumi/55 dark:text-washi/55">
                  {lang === "en" ? lesson.summaryEn : lesson.summary}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-ai">
                  {t("lang.open", lang)}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ai to-ai-dark px-8 py-16 text-center text-washi">
            <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-display text-[12rem] leading-none opacity-10" aria-hidden>
              {course.native}
            </span>
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl">
                {t("lang.ctaFinalTitle", lang, { name: course.name })}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-washi/75">
                {t("lang.ctaFinalSubtitle", lang)}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <HeroCta
                  dashboardLabel={t("shared.ctaDashboard", lang)}
                  guestLabel={t("shared.ctaCreate", lang)}
                  className="inline-flex items-center justify-center rounded-full bg-washi px-7 py-3 text-sm font-medium text-sumi transition-transform hover:scale-[1.03]"
                  guestSecondary={{
                    label: t("shared.ctaLogin", lang),
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
    </>
  );
}