import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpeakButton from "@/components/training/SpeakButton";
import LessonCompleteButton from "@/components/lang/LessonCompleteButton";
import { LangExerciseBlock, InterviewBlock } from "@/components/lang/LangExerciseBlock";
import { t, type InterfaceLang } from "@/lib/uiTranslations";
import { getLessonBySlug, type LanguageCourse } from "@/lib/genericLessons";

/** Page de détail d'une leçon d'une langue du catalogue (hors japonais). */
export function LanguageLessonMetadata(
  course: LanguageCourse,
  slug: string,
  searchParams?: { ui?: string }
): Metadata {
  const lesson = getLessonBySlug(course, slug);
  if (!lesson) return {};
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  return { title: `${lang === "en" ? lesson.titleEn : lesson.title} — Lessons | Kadoya` };
}

export default function LanguageLesson({
  course,
  slug,
  searchParams,
}: {
  course: LanguageCourse;
  slug: string;
  searchParams?: { ui?: string };
}) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const ui = `?ui=${lang}`;
  const lesson = getLessonBySlug(course, slug);
  if (!lesson) notFound();

  const lessonNumber = `${t("lang.lessonNumber", lang)} ${String(lesson.number).padStart(2, "0")}`;
  const prev = lesson.number > 1 ? course.lessons.find((l) => l.number === lesson.number - 1) : null;
  const next = course.lessons.find((l) => l.number === lesson.number + 1) ?? null;

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-20">

      {/* Fil d'ariane */}
      <nav className="flex items-center gap-2 font-mono text-xs text-sumi/45 dark:text-washi/45">
        <Link href={`/${course.code}${ui}`} className="hover:text-ai">{course.name}</Link>
        <span>/</span>
        <Link href={`/${course.code}/lecons${ui}`} className="hover:text-ai">{t("lang.lessonNumber", lang)}s</Link>
        <span>/</span>
        <span className="text-sumi/70 dark:text-washi/70">{lessonNumber}</span>
      </nav>

      <header className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
              {lessonNumber}
            </span>
            <h1 className="mt-1.5 font-display text-3xl md:text-4xl">
              {lang === "en" ? lesson.titleEn : lesson.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
              {lang === "en" ? lesson.summaryEn : lesson.summary}
            </p>
          </div>
          <LessonCompleteButton courseCode={course.code} lessonSlug={lesson.slug} interfaceLang={lang} />
        </div>
      </header>

      {/* Points de grammaire */}
      {lesson.grammar.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
            {t("lang.grammarTitle", lang)}
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
      )}

      {/* Exemples */}
      {lesson.examples.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
            {t("lang.examplesTitle", lang)}
          </h2>
          <ul className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
            {lesson.examples.map((ex, i) => (
              <li key={i} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <SpeakButton text={ex.target} lang={course.code} />
                  <div>
                    <p className="font-display text-lg leading-snug">{ex.target}</p>
                    {ex.roman && (
                      <p className="mt-0.5 font-mono text-xs text-sumi/50 dark:text-washi/50">{ex.roman}</p>
                    )}
                    <p className="mt-1.5 text-sm italic text-sumi/70 dark:text-washi/70">
                      « {lang === "en" ? ex.en : ex.fr} »
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Vocabulaire */}
      {lesson.vocab.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
            {t("lang.vocabTitle", lang)}
          </h2>
          <div className="card-washi mt-4 grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2">
            {lesson.vocab.map((v, i) => (
              <div key={i} className="flex items-center gap-3">
                <SpeakButton text={v.target} lang={course.code} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {v.target}
                    {v.roman && (
                      <span className="ml-2 font-mono text-[11px] font-normal text-sumi/45 dark:text-washi/45">{v.roman}</span>
                    )}
                  </p>
                  <p className="text-xs text-sumi/60 dark:text-washi/60">{lang === "en" ? v.en : v.fr}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Exercices */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
            {t("lang.exercisesTitle", lang)}
          </h2>
          <div className="mt-4">
            <LangExerciseBlock exercises={lesson.exercises} lang={lang} />
          </div>
        </section>
      )}

      {/* Entraînement à l'entretien */}
      {lesson.interview && lesson.interview.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
            {t("lang.interviewTitle", lang)}
          </h2>
          <div className="mt-4">
            <InterviewBlock questions={lesson.interview} lang={lang} />
          </div>
        </section>
      )}

      {/* Navigation entre leçons */}
      <nav className="mt-12 flex items-stretch justify-between gap-4">
        {prev ? (
          <Link
            href={`/${course.code}/lecons/${prev.slug}${ui}`}
            className="btn-secondary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.prev", lang)}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/${course.code}/lecons/${next.slug}${ui}`}
            className="btn-primary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.next", lang)}
          </Link>
        ) : (
          <Link href={`/${course.code}/lecons${ui}`} className="btn-primary flex-1 !items-start text-left text-xs">
            {t("lang.backToHub", lang)}
          </Link>
        )}
      </nav>
    </main>
  );
}
