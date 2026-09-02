"use client";

import { createClient } from "@/lib/supabase/client";
import { recordLessonActivity } from "@/lib/userStatsClient";

/** Marque (ou retire) une leçon comme terminée pour l'utilisateur connecté.
 *  Retourne l'état résultant (true = terminée) ou null si non connecté. */
export async function setLessonCompleted(
  courseCode: string,
  lessonSlug: string,
  completed: boolean
): Promise<boolean | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  if (completed) {
    const { error } = await supabase
      .from("lesson_progress")
      .upsert({ user_id: user.id, course_code: courseCode, lesson_slug: lessonSlug }, { onConflict: "user_id,course_code,lesson_slug" });
    if (error) throw error;
    const { count } = await supabase
      .from("lesson_progress")
      .select("user_id", { count: "exact", head: true })
      .eq("user_id", user.id);
    await recordLessonActivity(user.id, count ?? 0);
    return true;
  }

  const { error } = await supabase
    .from("lesson_progress")
    .delete()
    .eq("user_id", user.id)
    .eq("course_code", courseCode)
    .eq("lesson_slug", lessonSlug);
  if (error) throw error;
  return false;
}

/** Indique si la leçon est marquée comme terminée. */
export async function isLessonCompleted(
  courseCode: string,
  lessonSlug: string
): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from("lesson_progress")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_code", courseCode)
    .eq("lesson_slug", lessonSlug)
    .maybeSingle();
  return !!data;
}