// Logique de gamification (streak, XP, niveaux, badges) — pure et testable.

/** Détermine le niveau à partir de l'XP cumulé (courbe ~ Cu + étapes douces). */
export function levelFromXp(xp: number): number {
  if (xp <= 0) return 1;
  // Niveau n atteint à 50 * n * (n - 1) XP cumulés.
  let level = 1;
  while (xp >= 50 * level * (level + 1)) level += 1;
  return level;
}

/** XP nécessaires pour franchir du niveau `level` au suivant. */
export function xpForNextLevel(level: number): number {
  return 50 * (level + 1) * 2;
}

export interface StreakInput {
  /** Dernière date d'activité stockée en base (null si premier jour). */
  lastActivity: string | null;
  /** Date actuelle (YYYY-MM-DD, fuseau local). */
  today: string;
  /** Streak courant stocké. */
  currentStreak: number;
  /** Plus longue série stockée. */
  longestStreak: number;
}

/** Recalcule la série quotidienne après une nouvelle activité le jour `today`. */
export function computeStreak(input: StreakInput): { current: number; longest: number } {
  const today = new Date(input.today + "T00:00:00");
  let current = input.currentStreak;

  if (input.lastActivity === null || input.lastActivity === input.today) {
    // Premier jour ou déjà compté aujourd'hui : on garde la série courante.
    current = input.lastActivity === null ? 1 : Math.max(1, current);
  } else {
    const last = new Date(input.lastActivity + "T00:00:00");
    const diffDays = Math.round((today.getTime() - last.getTime()) / 86_400_000);
    if (diffDays === 1) {
      current += 1; // jour consécutif
    } else if (diffDays > 1) {
      current = 1; // trou : la série repart de zéro
    }
  }

  return { current, longest: Math.max(input.longestStreak, current) };
}

export type BadgeId =
  | "first_lesson"
  | "ten_lessons"
  | "twentyfive_lessons"
  | "fifty_lessons"
  | "streak_3"
  | "streak_7"
  | "streak_30"
  | "level_5"
  | "level_10";

export interface BadgeRule {
  id: BadgeId;
  label: string;
  kanji: string;
  emoji: string;
  unlocked: (ctx: BadgeContext) => boolean;
}

export interface BadgeContext {
  lessonsDone: number;
  currentStreak: number;
  totalXp: number;
  level: number;
}

export const BADGES: BadgeRule[] = [
  { id: "first_lesson", label: "Première leçon", kanji: "始", emoji: "🌱", unlocked: (c) => c.lessonsDone >= 1 },
  { id: "ten_lessons", label: "10 leçons", kanji: "十", emoji: "🔥", unlocked: (c) => c.lessonsDone >= 10 },
  { id: "twentyfive_lessons", label: "25 leçons", kanji: "弐", emoji: "🚀", unlocked: (c) => c.lessonsDone >= 25 },
  { id: "fifty_lessons", label: "50 leçons", kanji: "五", emoji: "🏆", unlocked: (c) => c.lessonsDone >= 50 },
  { id: "streak_3", label: "3 jours d'affilée", kanji: "三", emoji: "📅", unlocked: (c) => c.currentStreak >= 3 },
  { id: "streak_7", label: "7 jours d'affilée", kanji: "七", emoji: "⚡", unlocked: (c) => c.currentStreak >= 7 },
  { id: "streak_30", label: "30 jours d'affilée", kanji: "卅", emoji: "🐉", unlocked: (c) => c.currentStreak >= 30 },
  { id: "level_5", label: "Niveau 5", kanji: "伍", emoji: "🎖️", unlocked: (c) => c.level >= 5 },
  { id: "level_10", label: "Niveau 10", kanji: "拾", emoji: "💎", unlocked: (c) => c.level >= 10 },
];

/** Renvoie la liste des badges déjà obtenus (id) pour un contexte donné.
 *  Conserve aussi ceux qui ne sont plus « affichables » ? On garde seulement les acquis. */
export function earnedBadges(ctx: BadgeContext, alreadyOwned: string[] = []): string[] {
  const owned = new Set(alreadyOwned);
  for (const b of BADGES) if (b.unlocked(ctx)) owned.add(b.id);
  return Array.from(owned);
}

export const DEFAULT_DAILY_GOAL = 10;

/** Série en danger : actif hier mais pas encore aujourd'hui. */
export function streakAtRisk(lastActivity: string | null, today: string): boolean {
  if (!lastActivity) return false;
  if (lastActivity === today) return false;
  const last = new Date(lastActivity + "T00:00:00");
  const t = new Date(today + "T00:00:00");
  const diffDays = Math.round((t.getTime() - last.getTime()) / 86_400_000);
  return diffDays === 1;
}