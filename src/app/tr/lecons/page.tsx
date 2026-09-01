import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { getLanguageCourse } from "@/lib/languageCourses";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

const course = getLanguageCourse("tr")!;

export default function TurkishLessonsHubPage({ searchParams }: { searchParams?: { ui?: string } }) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const uid = `?ui=${lang}`;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
            {t("lecons.eyebrow", lang)}
          </p>
          <LanguageToggle lang={lang} />
        </div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">{course.name}</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          {lang === "en" ? course.heroSubtitle.en : course.heroSubtitle.fr}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/tr/lecons/${lesson.slug}${uid}`}
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
    </main>
  );
}
