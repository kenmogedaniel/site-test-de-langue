/**
 * Modèle unifié de leçons pour toutes les langues du catalogue (hors japonais,
 * qui possède ses propres systèmes kana/kanji). Chaque langue fournit un fichier
 * `{code}Lessons.ts` qui remplit ce contrat.
 *
 * Le champs `target` porte le mot/phrase dans la langue étudiée, `roman` une
 * translittération facultative (utile pour les écritures non latines : hangul,
 * cyrillique, hanzi, arabe, devanagari), puis les traductions `fr` et `en`.
 */

export interface LessonWord {
  /** Le mot ou l'expression dans la langue cible. */
  target: string;
  /** Translittération / prononciation (facultatif pour les écritures latines). */
  roman?: string;
  fr: string;
  en: string;
}

export interface LessonExample {
  /** Phrase complète dans la langue cible. */
  target: string;
  /** Translittération / lecture (facultatif). */
  roman?: string;
  fr: string;
  en: string;
}

export interface LessonExercise {
  /** Consigne en français. */
  prompt: string;
  /** Consigne en anglais. */
  promptEn: string;
  /** Options pour un QCM (optionnel : si absent, exercice à compléter). */
  options?: string[];
  /** Réponses acceptées (peut contenir des variantes autorisées). */
  accept: string[];
  /** Explication en français. */
  explain: string;
  /** Explication en anglais. */
  explainEn: string;
}

export interface InterviewQuestion {
  question: string;
  roman?: string;
  fr: string;
  en: string;
  /** Réponse modèle courte en français. */
  modelFr: string;
  /** Réponse modèle courte en anglais. */
  modelEn: string;
  /** Variantes acceptées pour l'exercice. */
  accept: string[];
}

export interface GenericLesson {
  number: number;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  grammar: string[];
  explanation: string;
  explanationEn: string;
  examples: LessonExample[];
  vocab: LessonWord[];
  exercises?: LessonExercise[];
  interview?: InterviewQuestion[];
}

export interface LanguageCourse {
  /** Code langue, cohérent avec `languages.ts`. */
  code: string;
  /** Nom du cours (indépendant de la langue d'interface, ex: « Espagnol »). */
  name: string;
  /** Quelques mots-thèmes d'accroche affichés dans le héros. */
  native: string;
  /** Message d'ouverture (FR/EN) affiché sur le hub. */
  heroTitle1: { fr: string; en: string };
  heroTitle2: { fr: string; en: string };
  heroSubtitle: { fr: string; en: string };
  lessons: GenericLesson[];
}

export function getLessonBySlug(course: LanguageCourse, slug: string): GenericLesson | undefined {
  return course.lessons.find((l) => l.slug === slug);
}