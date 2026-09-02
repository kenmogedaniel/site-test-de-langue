import Link from "next/link";
import { BADGES, type BadgeId } from "@/lib/gamification";
import { phraseForLang, type DailyPhrase } from "@/lib/dailyPhrase";

type BadgeMeta = { id: BadgeId; label: string; kanji: string; emoji: string };

function badgeMeta(id: string): BadgeMeta {
  return BADGES.find((b) => b.id === id) ?? { id: id as BadgeId, label: id, kanji: "?", emoji: "🏅" };
}

export default function GamificationPanel({
  currentStreak,
  level,
  xp,
  xpForNext,
  goalProgress,
  goalTotal,
  badges,
  phrase,
}: {
  currentStreak: number;
  level: number;
  xp: number;
  xpForNext: number;
  goalProgress: number;
  goalTotal: number;
  badges: string[];
  phrase: DailyPhrase | null;
}) {
  const pct = goalTotal > 0 ? Math.min(100, Math.round((goalProgress / goalTotal) * 100)) : 0;
  const xpPct = Math.min(100, Math.round((xp / Math.max(1, xp + xpForNext)) * 100));
  const owned = badges.map(badgeMeta);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Série + objectif */}
      <div className="card-washi rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">Série</p>
            <p className="mt-1 text-3xl font-bold">
              <span className="mr-1">🔥</span>
              {currentStreak}
              <span className="ml-1 text-sm font-normal text-sumi/50 dark:text-washi/50">jours</span>
            </p>
          </div>
          <div className="h-14 w-14">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" className="text-sumi/10 dark:text-washi/10" strokeWidth="3.5" />
              <circle
                cx="18" cy="18" r="15.9" fill="none" stroke="currentColor"
                className="text-bamboo" strokeWidth="3.5" strokeDasharray="100"
                strokeDashoffset={100 - pct} strokeLinecap="round"
              />
            </svg>
            <div className="relative flex h-full w-full items-center justify-center text-sm font-semibold">
              <span className="absolute inset-0 -mt-14 flex items-center justify-center text-sm font-bold">{pct}%</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-sumi/60 dark:text-washi/60">
          Objectif : {goalProgress}/{goalTotal} XP aujourd'hui
        </p>
      </div>

      {/* Niveau + XP */}
      <div className="card-washi rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">Niveau</p>
            <p className="mt-1 text-3xl font-bold">{level}</p>
          </div>
          <p className="text-sm font-mono text-sumi/50 dark:text-washi/50">{xp} XP</p>
        </div>
        <div className="mt-3 h-2.5 rounded-full bg-sumi/10 dark:bg-washi/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-ai to-savane" style={{ width: `${xpPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-sumi/50 dark:text-washi/50">{xpForNext} XP jusqu'au prochain niveau</p>
      </div>

      {/* Phrase du jour */}
      {phrase && (
        <div className="card-washi rounded-2xl p-5 flex flex-col">
          <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">Phrase du jour</p>
          <p className="mt-2 font-display text-xl leading-snug">{phrase.text}</p>
          {phrase.reading && <p className="text-xs text-sumi/50 dark:text-washi/50">{phrase.reading}</p>}
          <p className="mt-auto pt-2 text-xs italic text-sumi/70 dark:text-washi/70">{phrase.translation}</p>
        </div>
      )}

      {/* Badges */}
      <div className="card-washi rounded-2xl p-5 md:col-span-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">Récompenses</p>
          <Link href="/dashboard" className="text-xs text-ai underline underline-offset-2">Voir tout</Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {owned.length === 0 && (
            <p className="text-sm text-sumi/50 dark:text-washi/50">Terminez votre première leçon pour débloquer un badge.</p>
          )}
          {owned.map((b) => (
            <span
              key={b.id}
              title={b.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-savane/10 px-3 py-1.5 text-xs font-medium text-savane"
            >
              <span aria-hidden>{b.emoji}</span>
              <span>{b.kanji}</span>
              <span className="hidden sm:inline text-sumi/60 dark:text-washi/60">{b.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}