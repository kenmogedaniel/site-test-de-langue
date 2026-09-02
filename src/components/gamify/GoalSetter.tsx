"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { DEFAULT_DAILY_GOAL } from "@/lib/gamification";

/** Réglage de l'objectif quotidien (XP/jour) stocké dans `user_stats`. */
export default function GoalSetter({ current, active }: { current: number; active: boolean }) {
  const [value, setValue] = useState(current || DEFAULT_DAILY_GOAL);
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    setValue(current || DEFAULT_DAILY_GOAL);
  }, [current]);

  async function save() {
    if (value === current) return;
    setSaved(false);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    try {
      await supabase.from("user_stats").upsert({ user_id: user.id, daily_goal: value }, { onConflict: "user_id" });
    } finally {
      setSaved(true);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-sumi/60 dark:text-washi/60">Objectif quotidien :</label>
      <input
        type="number"
        min={1}
        max={200}
        value={value}
        disabled={!active}
        onChange={(e) => setValue(parseInt(e.target.value, 10) || 1)}
        className="w-16 rounded-lg border border-sumi/20 bg-transparent px-2 py-1 text-sm dark:border-washi/20 disabled:opacity-50"
      />
      <button
        type="button"
        onClick={save}
        disabled={saved || value === current}
        className="rounded-full border border-ai/40 px-3 py-1 text-xs text-ai transition-colors hover:bg-ai/10 disabled:opacity-50"
      >
        {saved ? "Enregistrer" : "…"}
      </button>
    </div>
  );
}