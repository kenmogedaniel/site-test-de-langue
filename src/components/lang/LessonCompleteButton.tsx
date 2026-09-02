"use client";

import { useCallback, useEffect, useState } from "react";
import { isLessonCompleted, setLessonCompleted } from "@/lib/lessonProgress";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

/** Bouton « Marquer comme terminée » d'une leçon guidée (toute langue). */
export default function LessonCompleteButton({
  courseCode,
  lessonSlug,
  interfaceLang,
}: {
  courseCode: string;
  lessonSlug: string;
  interfaceLang: InterfaceLang;
}) {
  const [done, setDone] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    isLessonCompleted(courseCode, lessonSlug).then((v) => {
      if (active) setDone(v);
    });
    return () => {
      active = false;
    };
  }, [courseCode, lessonSlug]);

  const toggle = useCallback(async () => {
    setBusy(true);
    try {
      const next = !(done ?? false);
      const result = await setLessonCompleted(courseCode, lessonSlug, next);
      setDone(result);
    } catch {
      setDone(false);
    } finally {
      setBusy(false);
    }
  }, [courseCode, lessonSlug, done]);

  if (done === null) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={busy}
      aria-pressed={!!done}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors disabled:opacity-50 ${
        done
          ? "border-bamboo/40 bg-bamboo/10 text-bamboo"
          : "border-sumi/20 text-sumi/70 hover:border-bamboo/50 hover:text-bamboo dark:border-washi/20 dark:text-washi/70"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      {done
        ? t("lesson.done", interfaceLang)
        : t("lesson.markDone", interfaceLang)}
    </button>
  );
}