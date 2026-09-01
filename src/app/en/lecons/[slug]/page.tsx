import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpeakButton from "@/components/training/SpeakButton";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { ENGLISH_LESSONS, getEnglishLesson } from "@/lib/englishLessons";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export function generateStaticParams() {
  return ENGLISH_LESSONS.map((l) => ({ slug: l.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const lesson = getEnglishLesson(params.slug);
  if (!lesson) return {};
  return { title: `${lesson.title} — Leçons | Kadoya` };
}

export default function EnglishLessonPage({ params, searchParams }: Params & { searchParams?: { ui?: string } }) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const ui = `?ui=${lang}`;
  const lesson = getEnglishLesson(params.slug);
  if (!lesson) notFound();

  const i = ENGLISH_LESSONS.findIndex((l) => l.slug === lesson.slug);
  const prevSlug = i > 0 ? ENGLISH_LESSONS[i - 1].slug : null;
  const nextSlug = i < ENGLISH_LESSONS.length - 1 ? ENGLISH_LESSONS[i + 1].slug : null;
  const lessonNumber = `Leçon ${String(lesson.number).padStart(2, "0")}`;

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-20">
      <LanguageToggle lang={lang} />

      {/* Fil d'ariane */}
      <nav className="flex items-center gap-2 font-mono text-xs text-sumi/45 dark:text-washi/45">
        <Link href={`/en${ui}`} className="hover:text-ai">{t("lesson.breadcrumbEn", lang)}</Link>
        <span>/</span>
        <Link href={`/en/lecons${ui}`} className="hover:text-ai">{t("lesson.breadcrumbLecons", lang)}</Link>
        <span>/</span>
        <span className="text-sumi/70 dark:text-washi/70">{lessonNumber}</span>
      </nav>

      <header className="mt-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
          {lessonNumber}
        </span>
        <h1 className="mt-1.5 font-display text-3xl md:text-4xl">
          {lang === "en" ? lesson.titleEn : lesson.title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          {lang === "en" ? lesson.summaryEn : lesson.summary}
        </p>
      </header>

      {/* Points de grammaire */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("lesson.grammarTitle", lang)}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.grammar.map((g) => (
            <span key={g} className="rounded-full bg-ai/10 px-3 py-1.5 text-sm font-medium text-ai">
              {g}
            </span>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-ai/15 bg-ai/[0.04] p-5 text-sm leading-relaxed text-sumi/80 dark:text-washi/80">
          {lang === "en" ? lesson.explanationEn : lesson.explanation}
        </p>
      </section>

      {/* Exemples */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("lesson.examplesTitle", lang)}
        </h2>
        <ul className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
          {lesson.examples.map((ex) => (
            <li key={ex.en} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                <SpeakButton text={ex.en} lang="en" />
                <div>
                  <p className="font-display text-lg leading-snug">{ex.en}</p>
                  <p className="mt-1.5 text-sm italic text-sumi/70 dark:text-washi/70">
                    « {lang === "en" ? ex.en : ex.fr} »
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Vocabulaire */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("lesson.vocabTitle", lang)}
        </h2>
        <div className="card-washi mt-4 grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2">
          {lesson.vocab.map((v) => (
            <div key={v.en} className="flex items-center gap-3">
              <SpeakButton text={v.en} lang="en" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{v.en}</p>
                <p className="text-xs text-sumi/60 dark:text-washi/60">{lang === "en" ? v.en : v.fr}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation entre leçons */}
      <nav className="mt-12 flex items-stretch justify-between gap-4">
        {prevSlug ? (
          <Link
            href={`/en/lecons/${prevSlug}${ui}`}
            className="btn-secondary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.prev", lang)}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextSlug ? (
          <Link
            href={`/en/lecons/${nextSlug}${ui}`}
            className="btn-primary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.next", lang)}
          </Link>
        ) : (
          <Link href={`/en/lecons${ui}`} className="btn-primary flex-1 !items-start text-left text-xs">
            {t("lesson.backToLessons", lang)}
          </Link>
        )}
      </nav>
    </main>
  );
}