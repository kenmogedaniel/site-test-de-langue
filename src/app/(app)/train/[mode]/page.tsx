import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import TrainingClient from "./TrainingClient";
import ModeChoice from "./ModeChoice";
import type { Difficulty } from "@/types/database";

const VALID_MODES: Difficulty[] = ["easy", "medium", "hard"];

export default async function TrainPage({
  params,
  searchParams,
}: {
  params: { mode: string };
  searchParams: { theme?: string; timed?: string };
}) {
  if (!VALID_MODES.includes(params.mode as Difficulty)) notFound();
  const mode = params.mode as Difficulty;
  const themeId = searchParams.theme ? Number(searchParams.theme) : undefined;
  const themeFilterValid = themeId !== undefined && Number.isInteger(themeId) && themeId > 0;

  // Le mode Facile propose un choix "conditions réelles (chrono) / entraînement libre"
  // avant de démarrer. Tant que ce choix n'est pas fait (pas de paramètre `timed` dans l'URL),
  // on affiche l'écran de choix plutôt que de charger des questions.
  if (mode === "easy" && searchParams.timed !== "true" && searchParams.timed !== "false") {
    return <ModeChoice themeId={themeFilterValid ? themeId : undefined} />;
  }
  const timed = mode === "easy" && searchParams.timed === "true";

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user!.id;

  // Les 3 modes portent sur le même ensemble de 95 questions : ce qui change entre eux,
  // c'est le type d'interaction (QCM / texte libre / réponse structurée), pas le contenu
  // disponible. On ne filtre donc plus par `difficulty`.
  let questionQuery = supabase
    .from("questions")
    .select("id, theme_id, text_kana, text_fr, difficulty")
    .order("theme_id")
    .order("id");
  if (themeFilterValid) {
    questionQuery = questionQuery.eq("theme_id", themeId);
  }

  let activeSessionQuery = supabase
    .from("sessions")
    .select("id, question_order")
    .eq("user_id", userId)
    .eq("mode", mode)
    .eq("timed", timed)
    .is("ended_at", null)
    .order("started_at", { ascending: false })
    .limit(1);

  activeSessionQuery = themeFilterValid
    ? activeSessionQuery.eq("theme_filter", themeId)
    : activeSessionQuery.is("theme_filter", null);

  const [{ data: profile }, { data: questions }, { data: themes }, { data: activeSession }] =
    await Promise.all([
      supabase.from("profiles").select("voice_preference").eq("id", userId).single(),
      questionQuery,
      supabase.from("themes").select("id, name"),
      activeSessionQuery.maybeSingle(),
    ]);

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-20 space-y-2">
        <p className="text-sumi/60 dark:text-washi/60">
          Aucune question disponible pour {themeFilterValid ? "ce thème dans " : ""}ce mode.
        </p>
        <Link href="/dashboard" className="text-sm text-ai underline underline-offset-2">
          Retour au tableau de bord
        </Link>
      </div>
    );
  }

  const themeNameById = new Map<number, string>((themes ?? []).map((t) => [t.id, t.name]));
  const questionById = new Map(questions.map((q) => [q.id, q]));

  let session = activeSession;
  let orderedIds: string[];

  if (session && session.question_order) {
    // Reprise d'une session en cours : on réutilise l'ordre déjà tiré au sort.
    orderedIds = (session.question_order as string[]).filter((id) => questionById.has(id));
  } else {
    // Nouvelle session : on mélange une fois et on fige l'ordre en base pour permettre la reprise.
    orderedIds = [...questions].map((q) => q.id).sort(() => Math.random() - 0.5);
    const { data: newSession, error: sessionError } = await supabase
      .from("sessions")
      .insert({
        user_id: userId,
        mode,
        theme_filter: themeFilterValid ? themeId : null,
        timed,
        question_order: orderedIds,
      })
      .select("id, question_order")
      .single();

    if (sessionError || !newSession) {
      return (
        <div className="text-center py-20">
          <p className="text-hanko">Impossible de démarrer la session. Réessayez.</p>
        </div>
      );
    }
    session = newSession;
  }

  // Réponses déjà données dans cette session (pertinent en cas de reprise).
  const { data: priorAnswers } = await supabase
    .from("session_answers")
    .select("question_id, is_correct")
    .eq("session_id", session.id);

  const answeredIds = new Set((priorAnswers ?? []).map((a) => a.question_id));
  const remainingIds = orderedIds.filter((id) => !answeredIds.has(id));

  if (remainingIds.length === 0) {
    // Toutes les questions de cette session ont déjà une réponse : on clôt et on repart à neuf.
    await supabase.from("sessions").update({ ended_at: new Date().toISOString() }).eq("id", session.id);
    return (
      <div className="text-center py-20 space-y-2">
        <p className="text-sumi/60 dark:text-washi/60">Vous avez déjà terminé cette session.</p>
        <Link
          href={mode === "easy" ? `/train/easy` : `/train/${mode}`}
          className="text-sm text-ai underline underline-offset-2"
        >
          Recommencer
        </Link>
      </div>
    );
  }

  let qcmOptionsByQuestion: Record<string, { id: string; text_kana: string }[]> = {};
  if (mode === "easy") {
    const { data: options } = await supabase
      .from("qcm_options")
      .select("id, question_id, text_kana")
      .in("question_id", remainingIds);

    for (const opt of options ?? []) {
      if (!qcmOptionsByQuestion[opt.question_id]) qcmOptionsByQuestion[opt.question_id] = [];
      qcmOptionsByQuestion[opt.question_id].push({ id: opt.id, text_kana: opt.text_kana });
    }
    for (const qid in qcmOptionsByQuestion) {
      qcmOptionsByQuestion[qid].sort(() => Math.random() - 0.5);
    }
  }

  const priorCorrect = (priorAnswers ?? []).filter((a) => a.is_correct).length;

  return (
    <TrainingClient
      mode={mode}
      timed={timed}
      sessionId={session.id}
      voicePreference={profile?.voice_preference ?? "female"}
      totalQuestionCount={orderedIds.length}
      answeredCount={answeredIds.size}
      priorCorrect={priorCorrect}
      questions={remainingIds
        .map((id) => questionById.get(id))
        .filter((q): q is NonNullable<typeof q> => !!q)
        .map((q) => ({
          id: q.id,
          text_kana: q.text_kana,
          text_fr: q.text_fr,
          themeName: themeNameById.get(q.theme_id) ?? "",
          options: qcmOptionsByQuestion[q.id] ?? [],
        }))}
    />
  );
}
