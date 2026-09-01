import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpeakButton from "@/components/training/SpeakButton";
import ExerciseBlock from "@/components/training/ExerciseBlock";
import KanaStrokeSection from "@/components/training/KanaStrokeSection";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { MINNA_DIALOGUES, MINNA_EXERCISES } from "@/lib/minnaExtras";
import {
  MINNA_LESSONS,
  getMinnaLesson,
  type MinnaLesson,
} from "@/lib/minnaLessons";
import {
  ALL_KANA_LESSONS,
  getKanaLesson,
  type KanaLesson,
} from "@/lib/kanaLessons";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export function generateStaticParams() {
  return [
    ...MINNA_LESSONS.map((l) => ({ slug: l.slug })),
    ...ALL_KANA_LESSONS.map((l) => ({ slug: l.slug })),
  ];
}

type Params = { params: { slug: string } };

function isKanaLesson(lesson: KanaLesson | MinnaLesson): lesson is KanaLesson {
  return "script" in lesson;
}

export function generateMetadata({ params }: Params): Metadata {
  const lesson = getMinnaLesson(params.slug) ?? getKanaLesson(params.slug);
  if (!lesson) return {};
  return { title: `${lesson.title} — Leçons | Kadoya` };
}

export default function LessonPage({ params, searchParams }: Params & { searchParams?: { ui?: string } }) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const ui = `?ui=${lang}`;
  const minna = getMinnaLesson(params.slug);
  const kana = !minna ? getKanaLesson(params.slug) : undefined;
  const lesson: KanaLesson | MinnaLesson | undefined = minna ?? kana;

  if (!lesson) notFound();

  const isKana = isKanaLesson(lesson);
  const dialogue = !isKana ? MINNA_DIALOGUES[lesson.slug] : undefined;
  const exercises = !isKana ? MINNA_EXERCISES[lesson.slug] : undefined;
  const prevSlug = isKana
    ? (() => {
        const i = ALL_KANA_LESSONS.findIndex((l) => l.slug === lesson.slug);
        return i > 0 ? ALL_KANA_LESSONS[i - 1].slug : null;
      })()
    : lesson.number > 1
      ? `minna-${String(lesson.number - 1).padStart(2, "0")}`
      : null;
  const nextSlug = isKana
    ? (() => {
        const i = ALL_KANA_LESSONS.findIndex((l) => l.slug === lesson.slug);
        return i < ALL_KANA_LESSONS.length - 1
          ? ALL_KANA_LESSONS[i + 1].slug
          : null;
      })()
    : lesson.number < MINNA_LESSONS.length
      ? `minna-${String(lesson.number + 1).padStart(2, "0")}`
      : null;

  const title = lang === "en" ? lesson.titleEn : lesson.title;

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-20">
      <LanguageToggle lang={lang} />

      {/* Fil d'ariane */}
      <nav className="flex items-center gap-2 font-mono text-xs text-sumi/45 dark:text-washi/45">
        <Link href={`/ja${ui}`} className="hover:text-ai">{t("lesson.breadcrumbJa", lang)}</Link>
        <span>/</span>
        <Link href={`/ja/lecons${ui}`} className="hover:text-ai">{t("lesson.breadcrumbLecons", lang)}</Link>
        <span>/</span>
        <span className="text-sumi/70 dark:text-washi/70">
          {isKana ? lesson.groupLabel : `Leçon ${String(lesson.number).padStart(2, "0")}`}
        </span>
      </nav>

      <header className="mt-5">
        <h1 className="font-display text-3xl md:text-4xl">{title}</h1>
        {"summary" in lesson && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
            {lang === "en" ? lesson.summaryEn : lesson.summary}
          </p>
        )}
      </header>

      {/* Contenu spécifique */}
      {isKana ? (
        <>
          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
              {t("lesson.kanaTitle", lang)}
            </h2>
            <div className="card-washi mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {lesson.entries.map((e) => (
                <div key={e.kana} className="flex flex-col items-center rounded-2xl bg-sumi/[0.03] p-4 dark:bg-washi/[0.04]">
                  <span className="font-display text-4xl leading-none">{e.kana}</span>
                  <span className="mt-2 font-mono text-sm text-ai">{e.romaji}</span>
                  <span className="mt-1 text-[10px] text-sumi/40 dark:text-washi/40">
                    {e.strokes} {e.strokes > 1 ? t("lesson.traits", lang) : t("lesson.trait", lang)}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-xl border border-savane/25 bg-savane/5 px-4 py-3 text-xs leading-relaxed text-sumi/70 dark:text-washi/70">
              💡 {lang === "en" ? lesson.tipEn : lesson.tip}
            </p>
          </section>

          <KanaStrokeSection entries={lesson.entries} lang={lang} />

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
              {t("lesson.wordsTitle", lang)}
            </h2>
            <ul className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
              {lesson.words.map((w) => (
                <li key={w.jp} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <SpeakButton text={w.jp} />
                  <span className="font-display text-lg">{w.jp}</span>
                  <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">{w.romaji}</span>
                  <span className="ml-auto text-right text-sm text-sumi/70 dark:text-washi/70">
                    {lang === "en" ? w.en : w.fr}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          {dialogue && (
            <section className="mt-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
                {t("lesson.dialogue.scene", lang, {
                  scene: lang === "en" ? dialogue.sceneEn : dialogue.scene,
                })}
              </h2>
              <div className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
                {dialogue.lines.map((line, i) => {
                  const even = i % 2 === 0;
                  return (
                    <div
                      key={i}
                      className={`flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start ${even ? "" : "sm:bg-sumi/[0.02] sm:px-4 sm:-mx-4 sm:rounded-xl dark:sm:bg-washi/[0.03]"}`}
                    >
                      <span className="shrink-0 pt-0.5 font-mono text-[10px] uppercase tracking-widest text-savane sm:w-24">
                        {line.speaker}
                      </span>
                      <div className="flex items-start gap-3">
                        <SpeakButton text={line.jp} />
                        <div>
                          <p className="font-display text-base leading-snug">{line.jp}</p>
                          <p className="mt-0.5 font-mono text-[11px] text-sumi/50 dark:text-washi/50">{line.kana}</p>
                          <p className="mt-1 text-sm italic text-sumi/65 dark:text-washi/65">
                            {lang === "en" ? line.en : line.fr}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

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

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
              {t("lesson.examplesTitle", lang)}
            </h2>
            <ul className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
              {lesson.examples.map((ex) => (
                <li key={ex.jp} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <SpeakButton text={ex.jp} />
                    <div>
                      <p className="font-display text-lg leading-snug">{ex.jp}</p>
                      <p className="mt-0.5 font-mono text-xs text-sumi/50 dark:text-washi/50">{ex.kana}</p>
                      <p className="mt-1.5 text-sm italic text-sumi/70 dark:text-washi/70">
                        « {lang === "en" ? ex.en : ex.fr} »
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
              {t("lesson.vocabTitle", lang)}
            </h2>
            <div className="card-washi mt-4 grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2">
              {lesson.vocab.map((v) => (
                <div key={v.jp} className="flex items-center gap-3">
                  <SpeakButton text={v.jp} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {v.jp}
                      <span className="ml-2 font-mono text-[11px] font-normal text-sumi/45 dark:text-washi/45">{v.kana}</span>
                    </p>
                    <p className="text-xs text-sumi/60 dark:text-washi/60">{lang === "en" ? v.en : v.fr}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {exercises && exercises.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
                {t("lesson.exercisesTitle", lang)}
              </h2>
              <div className="mt-4">
                <ExerciseBlock exercises={exercises} lang={lang} />
              </div>
            </section>
          )}
        </>
      )}

      {/* Navigation entre leçons */}
      <nav className="mt-12 flex items-stretch justify-between gap-4">
        {prevSlug ? (
          <Link
            href={`/ja/lecons/${prevSlug}${ui}`}
            className="btn-secondary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.prev", lang)}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextSlug ? (
          <Link
            href={`/ja/lecons/${nextSlug}${ui}`}
            className="btn-primary flex-1 !items-start text-left text-xs"
          >
            {t("lesson.next", lang)}
          </Link>
        ) : (
          <Link href={`/ja/lecons${ui}`} className="btn-primary flex-1 !items-start text-left text-xs">
            {t("lesson.backToLessons", lang)}
          </Link>
        )}
      </nav>
    </main>
  );
}