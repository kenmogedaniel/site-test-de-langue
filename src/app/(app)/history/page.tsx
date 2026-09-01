import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: sessions } = await supabase
    .from("sessions")
    .select("id, mode, started_at, ended_at")
    .eq("user_id", user!.id)
    .order("started_at", { ascending: false })
    .limit(30);

  const { data: rawFlags } = await supabase
    .from("review_flags")
    .select("question_id, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  const flagQuestionIds = (rawFlags ?? []).map((f) => f.question_id);
  const { data: flaggedQuestions } = flagQuestionIds.length
    ? await supabase.from("questions").select("id, text_kana, text_fr").in("id", flagQuestionIds)
    : { data: [] as { id: string; text_kana: string; text_fr: string | null }[] };

  const questionById = new Map((flaggedQuestions ?? []).map((q) => [q.id, q]));
  const flags = (rawFlags ?? []).map((f) => ({
    question_id: f.question_id,
    created_at: f.created_at,
    question: questionById.get(f.question_id) ?? null,
  }));

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-display text-3xl mb-6">Historique des sessions</h1>
        {sessions && sessions.length > 0 ? (
          <ul className="divide-y divide-sumi/10 dark:divide-washi/10">
            {sessions.map((s) => (
              <li key={s.id} className="py-4 flex items-center justify-between">
                <div>
                  <span className="capitalize font-medium">{s.mode}</span>
                  <span className="text-xs text-sumi/50 dark:text-washi/50 ml-2">
                    {s.ended_at ? "Terminée" : "En cours"}
                  </span>
                </div>
                <span className="text-xs font-mono text-sumi/50 dark:text-washi/50">
                  {new Date(s.started_at).toLocaleString("fr-FR")}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-sumi/50 dark:text-washi/50">Aucune session enregistrée.</p>
        )}
      </div>

      <div>
        <h2 className="font-display text-3xl mb-6">Questions à revoir</h2>
        {flags && flags.length > 0 ? (
          <ul className="space-y-3">
            {flags.map((f) => (
              <li key={f.question_id} className="card-washi p-5">
                <p className="font-body">{f.question?.text_kana}</p>
                {f.question?.text_fr && (
                  <p className="text-sm text-sumi/50 dark:text-washi/50 mt-1">{f.question.text_fr}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-sumi/50 dark:text-washi/50">
            Aucune question marquée pour l'instant.
          </p>
        )}
      </div>
    </div>
  );
}
