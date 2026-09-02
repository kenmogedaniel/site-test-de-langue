"use client";

import { createClient } from "@/lib/supabase/client";
import { levelFromXp, computeStreak, earnedBadges, type BadgeContext } from "@/lib/gamification";

const LESSON_XP = 10;

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Enregistre une activité (leçon terminée) : met à jour streak, XP, niveau, badges
 *  et l'objectif quotidien dans la table `user_stats` (via RLS "update own"). */
export async function recordLessonActivity(userId: string, lessonsDone: number): Promise<void> {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("user_stats").select("*").eq("user_id", userId).maybeSingle();
    const now = todayStr();

    const streak = computeStreak({
      lastActivity: data?.last_activity_date ?? null,
      today: now,
      currentStreak: data?.current_streak ?? 0,
      longestStreak: data?.longest_streak ?? 0,
    });

    const totalXp = (data?.total_xp ?? 0) + LESSON_XP;
    const level = levelFromXp(totalXp);
    const isNewDay = data?.last_goal_date !== now;
    const xpToday = isNewDay ? LESSON_XP : (data?.xp_today ?? 0) + LESSON_XP;

    const ctx: BadgeContext = {
      lessonsDone,
      currentStreak: streak.current,
      totalXp,
      level,
    };
    const nextBadges = earnedBadges(ctx, data?.badges ?? []);

    const activityDates = data?.activity_dates ?? [];
    if (!activityDates.includes(now)) activityDates.push(now);

    const patch = {
      current_streak: streak.current,
      longest_streak: streak.longest,
      last_activity_date: now,
      total_xp: totalXp,
      level,
      xp_today: xpToday,
      last_goal_date: now,
      badges: nextBadges,
      activity_dates: activityDates,
    };

    if (data) {
      await supabase.from("user_stats").update(patch).eq("user_id", userId);
    } else {
      await supabase.from("user_stats").insert({ user_id: userId, ...patch });
    }
  } catch {
    // silencieux : la gamification ne doit jamais bloquer le marquage d'une leçon.
  }
}