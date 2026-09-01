import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpeakButton from "@/components/training/SpeakButton";
import { ENGLISH_LESSONS, getEnglishLesson } from "@/lib/englishLessons";

export function generateStaticParams() {
  return ENGLISH_LESSONS.map((l) => ({ slug: l.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const lesson = getEnglishLesson(params.slug);
  if (!lesson) return {};
  return { title: `${lesson.title} — Leçons | Kadoya` };
}

export default function EnglishLessonPage({ params }: Params) {
  const lesson = getEnglishLesson(params.slug);
  if (!lesson) notFound();

  const i = ENGLISH_LESSONS.findIndex((l) => l.slug === lesson.slug);
  const prevSlug = i > 0 ? ENGLISH_LESSONS[i - 1].slug : null;
  const nextSlug = i < ENGLISH_LESSONS.length - 1 ? ENGLISH_LESSONS[i + 1].slug : null;

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-20">
      {/* Fil d'ariane */}
      <nav className="flex items-center gap-2 font-mono text-xs text-sumi/45 dark:text-washi/45">
        <Link href="/en" className="hover:text-ai">Anglais</Link>
        <span>/</span>
        <Link href="/en/lecons" className="hover:text-ai">Leçons</Link>
        <span>/</span>
        <span className="text-sumi/70 dark:text-washi/70">
          Leçon {String(lesson.number).padStart(2, "0")}
        </span>
      </nav>

      <header className="mt-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
          Leçon {String(lesson.number).padStart(2, "0")}
        </span>
        <h1 className="mt-1.5 font-display text-3xl md:text-4xl">{lesson.title}</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          {lesson.summary}
        </p>
      </header>

      {/* Points de grammaire */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          Points de grammaire
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.grammar.map((g) => (
            <span key={g} className="rounded-full bg-ai/10 px-3 py-1.5 text-sm font-medium text-ai">
              {g}
            </span>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-ai/15 bg-ai/[0.04] p-5 text-sm leading-relaxed text-sumi/80 dark:text-washi/80">
          {lesson.explanation}
        </p>
      </section>

      {/* Exemples */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          Exemples
        </h2>
        <ul className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
          {lesson.examples.map((ex) => (
            <li key={ex.en} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                <SpeakButton text={ex.en} lang="en" />
                <div>
                  <p className="font-display text-lg leading-snug">{ex.en}</p>
                  <p className="mt-1.5 text-sm italic text-sumi/70 dark:text-washi/70">« {ex.fr} »</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Vocabulaire */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          Vocabulaire
        </h2>
        <div className="card-washi mt-4 grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2">
          {lesson.vocab.map((v) => (
            <div key={v.en} className="flex items-center gap-3">
              <SpeakButton text={v.en} lang="en" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{v.en}</p>
                <p className="text-xs text-sumi/60 dark:text-washi/60">{v.fr}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation entre leçons */}
      <nav className="mt-12 flex items-stretch justify-between gap-4">
        {prevSlug ? (
          <Link
            href={`/en/lecons/${prevSlug}`}
            className="btn-secondary flex-1 !items-start text-left text-xs"
          >
            ← Leçon précédente
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextSlug ? (
          <Link
            href={`/en/lecons/${nextSlug}`}
            className="btn-primary flex-1 !items-start text-left text-xs"
          >
            Leçon suivante →
          </Link>
        ) : (
          <Link href="/en/lecons" className="btn-primary flex-1 !items-start text-left text-xs">
            Retour aux leçons
          </Link>
        )}
      </nav>
    </main>
  );
}
