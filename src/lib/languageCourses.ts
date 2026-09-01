import type { LanguageCourse } from "./genericLessons";
import { KO_COURSE } from "./koLessons";
import { ES_COURSE } from "./esLessons";
import { DE_COURSE } from "./deLessons";
import { IT_COURSE } from "./itLessons";
import { PT_COURSE } from "./ptLessons";
import { RU_COURSE } from "./ruLessons";
import { CN_COURSE } from "./cnLessons";
import { AR_COURSE } from "./arLessons";
import { HI_COURSE } from "./hiLessons";
import { TR_COURSE } from "./trLessons";

/** Registre des cours de toutes les langues (hors japonais). */
export const LANGUAGE_COURSES: Record<string, LanguageCourse> = {
  ko: KO_COURSE,
  es: ES_COURSE,
  de: DE_COURSE,
  it: IT_COURSE,
  pt: PT_COURSE,
  ru: RU_COURSE,
  cn: CN_COURSE,
  ar: AR_COURSE,
  hi: HI_COURSE,
  tr: TR_COURSE,
};

export function getLanguageCourse(code: string): LanguageCourse | undefined {
  return LANGUAGE_COURSES[code];
}