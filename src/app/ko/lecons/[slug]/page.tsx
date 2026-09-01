import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LanguageLesson, { LanguageLessonMetadata } from "@/components/lang/LanguageLesson";
import { getLanguageCourse } from "@/lib/languageCourses";

const course = getLanguageCourse("ko")!;

export function generateStaticParams() {
  return course.lessons.map((l) => ({ slug: l.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params, searchParams }: Params & { searchParams?: { ui?: string } }): Metadata {
  return LanguageLessonMetadata(course, params.slug, searchParams);
}

export default function KoreanLessonPage({ params, searchParams }: Params & { searchParams?: { ui?: string } }) {
  if (!course.lessons.find((l) => l.slug === params.slug)) notFound();
  return <LanguageLesson course={course} slug={params.slug} searchParams={searchParams} />;
}
