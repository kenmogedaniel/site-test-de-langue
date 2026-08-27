import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import Ruby from "@/components/ui/Ruby";
import type { Difficulty } from "@/types/database";

const MODES: { key: Difficulty; label: string; kanji: string; reading: string; color: string; hoverColor: string }[] = [
  { key: "easy", label: "Facile — QCM", kanji: "易", reading: "やさ", color: "text-savane", hoverColor: "hover:text-savane" },
  { key: "medium", label: "Moyen — réponse libre", kanji: "中", reading: "ちゅう", color: "text-ai", hoverColor: "hover:text-ai" },
  { key: "hard", label: "Difficile — structuré", kanji: "難", reading: "むずか", color: "text-hanko", hoverColor: "hover:text-hanko" },
];

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user!.id;

  // Première vague : toutes les requêtes indépendantes en parallèle plutôt qu'en séquence.
  const [{ data: profile }, { data: sessions }, { data: themes }, { count: reviewCount }] =
    await Promise.all([
      supabase.from("profiles").select("display_name").eq("id", userId).single(),
      supabase
        .from("sessions")
        .select("id, mode, started_at, ended_at")
        .eq("user_id", userId)
        .order("started_at", { ascending: false })
        .limit(5),
      supabase.from("themes").select("id, name, sort_order").order("sort_order"),
      supabase.from("review_flags").select("id", { count: "exact", head: true }).eq("user_id", userId),
    ]);

  const sessionIds = (sessions ?? []).map((s) => s.id);

  // Une seule requête pour toutes les réponses (au lieu de trois requêtes redondantes
  // pour le total, le nombre de bonnes réponses et le détail par thème).
  const { data: allAnswers } = sessionIds.length
    ? await supabase.from("session_answers").select("question_id, is_correct").in("session_id", sessionIds)
    : { data: [] as { question_id: string; is_correct: boolean | null }[] };

  const totalAnswered = allAnswers?.length ?? 0;
  const totalCorrect = (allAnswers ?? []).filter((a) => a.is_correct).length;
  const successRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  let themeStats: { id: number; name: string; total: number; correct: number }[] = [];
  if (allAnswers && allAnswers.length > 0 && themes) {
    const questionIds = Array.from(new Set(allAnswers.map((a) => a.question_id)));
    const { data: questionThemes } = await supabase
      .from("questions")
      .select("id, theme_id")
      .in("id", questionIds);
    const themeIdByQuestion = new Map((questionThemes ?? []).map((q) => [q.id, q.theme_id]));

    const tally = new Map<number, { total: number; correct: number }>();
    for (const a of allAnswers) {
      const themeId = themeIdByQuestion.get(a.question_id);
      if (themeId === undefined) continue;
      const cur = tally.get(themeId) ?? { total: 0, correct: 0 };
      cur.total += 1;
      if (a.is_correct) cur.correct += 1;
      tally.set(themeId, cur);
    }

    themeStats = themes
      .map((t) => ({ id: t.id, name: t.name, ...(tally.get(t.id) ?? { total: 0, correct: 0 }) }))
      .filter((t) => t.total > 0);
  }

  const allThemes = themes ?? [];

  return (
    <div className="space-y-12">
      <div>
        <p className="font-mono text-xs text-sumi/50 dark:text-washi/50 uppercase tracking-widest mb-2">
          Bienvenue
        </p>
        <h1 className="font-display text-4xl">
          {profile?.display_name || (
            <>
              そちらの
              <Ruby kanji="学生" reading="がくせい" />
            </>
          )}{" "}
          さん
        </h1>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card-washi p-6">
          <p className="font-mono text-3xl">{totalAnswered}</p>
          <p className="text-sm text-sumi/60 dark:text-washi/60 mt-1">questions répondues</p>
        </div>
        <div className="card-washi p-6">
          <p className="font-mono text-3xl">{successRate !== null ? `${successRate}%` : "—"}</p>
          <p className="text-sm text-sumi/60 dark:text-washi/60 mt-1">taux de réussite</p>
        </div>
        <div className="card-washi p-6">
          <p className="font-mono text-3xl">{reviewCount ?? 0}</p>
          <p className="text-sm text-sumi/60 dark:text-washi/60 mt-1">questions à revoir</p>
        </div>
      </div>

      {/* Modes */}
      <div>
        <h2 className="font-display text-2xl mb-4">Choisissez un mode</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {MODES.map((m) => (
            <Link
              key={m.key}
              href={`/train/${m.key}`}
              className="card-washi p-6 hover:border-ai/40 transition-colors group"
            >
              <span className={`font-display text-2xl ${m.color}`}>
                <Ruby kanji={m.kanji} reading={m.reading} />
              </span>
              <h3 className="font-body font-medium mt-3 group-hover:text-ai transition-colors">{m.label}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Filtre par thème */}
      {allThemes.length > 0 && (
        <div>
          <h2 className="font-display text-2xl mb-1">S'entraîner sur un thème précis</h2>
          <p className="text-sm text-sumi/50 dark:text-washi/50 mb-4">
            Choisissez un thème et un niveau pour ne travailler que ces questions.
          </p>
          <div className="space-y-2">
            {allThemes.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-sumi/10 dark:border-washi/10"
              >
                <span className="text-sm">{t.name}</span>
                <div className="flex gap-2 shrink-0">
                  {MODES.map((m) => (
                    <Link
                      key={m.key}
                      href={`/train/${m.key}?theme=${t.id}`}
                      title={`${m.label} (${m.reading})`}
                      className={`w-8 h-8 rounded-full border border-sumi/15 dark:border-washi/15 flex items-center justify-center text-sm font-display hover:border-ai/50 ${m.hoverColor} transition-colors`}
                    >
                      {m.kanji}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Statistiques par thème */}
      {themeStats.length > 0 && (
        <div>
          <h2 className="font-display text-2xl mb-4">Progression par thème</h2>
          <div className="space-y-3">
            {themeStats.map((t) => {
              const pct = Math.round((t.correct / t.total) * 100);
              return (
                <div key={t.id}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>{t.name}</span>
                    <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">
                      {t.correct}/{t.total} · {pct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-sumi/10 dark:bg-washi/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${pct >= 70 ? "bg-bamboo" : pct >= 40 ? "bg-savane" : "bg-hanko"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sessions récentes */}
      <div>
        <h2 className="font-display text-2xl mb-4">Sessions récentes</h2>
        {sessions && sessions.length > 0 ? (
          <ul className="divide-y divide-sumi/10 dark:divide-washi/10">
            {sessions.map((s) => (
              <li key={s.id} className="py-3 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="capitalize">{s.mode}</span>
                  {!s.ended_at && (
                    <Link
                      href={`/train/${s.mode}`}
                      className="text-xs text-ai underline underline-offset-2"
                    >
                      reprendre
                    </Link>
                  )}
                </div>
                <span className="text-sumi/50 dark:text-washi/50 font-mono text-xs">
                  {new Date(s.started_at).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-sumi/50 dark:text-washi/50">
            Aucune session pour l'instant. Choisissez un mode pour commencer.
          </p>
        )}
      </div>
    </div>
  );
}
