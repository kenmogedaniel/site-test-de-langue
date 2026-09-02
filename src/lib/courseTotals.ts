import { LANGUAGE_COURSES } from "@/lib/languageCourses";
import { MINNA_LESSONS } from "@/lib/minnaLessons";
import { ALL_KANA_LESSONS } from "@/lib/kanaLessons";
import { ENGLISH_LESSONS } from "@/lib/englishLessons";

/** Nombre total de leçons guidées de chaque langue (pour l'affichage de la progression). */
const JA_TOTAL = MINNA_LESSONS.length + ALL_KANA_LESSONS.length;
const EN_TOTAL = ENGLISH_LESSONS.length;

export function lessonTotal(code: string): number {
  if (code === "ja") return JA_TOTAL;
  if (code === "en") return EN_TOTAL;
  const course = LANGUAGE_COURSES[code];
  return course ? course.lessons.length : 0;
}

/** Codes de cours connus du site. */
export function allCourseCodes(): string[] {
  return ["ja", "en", ...Object.keys(LANGUAGE_COURSES)];
}