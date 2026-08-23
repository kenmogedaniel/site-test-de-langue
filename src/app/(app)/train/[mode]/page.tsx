import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import TrainingClient from "./TrainingClient";
import type { Difficulty } from "@/types/database";

const VALID_MODES: Difficulty[] = ["easy", "medium", "hard"];

export default async function TrainPage({
  params,
  searchParams,
}: {
  params: { mode: string };
  searchParams: { theme?: string };
}) {
  if (!VALID_MODES.includes(params.mode as Difficulty)) notFound();
  const mode = params.mode as Difficulty;
  const themeId = searchParams.theme ? Number(searchParams.theme) : undefined;
  const themeFilterValid = themeId !== undefined && Number.isInteger(themeId) && themeId > 0;

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("voice_preference")
    .eq("id", user!.id)
    .single();

  let questionQuery = supabase
    .from("questions")
    .select("id, theme_id, text_kana, difficulty")
    .eq("difficulty", mode)
    .order("theme_id");

  if (themeFilterValid) {
    questionQuery = questionQuery.eq("theme_id", themeId);
  }

  const { data: questions } = await questionQuery;

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

  const { data: themes } = await supabase.from("themes").select("id, name");
  const themeNameById = new Map<number, string>((themes ?? []).map((t) => [t.id, t.name]));

  // Mélange les questions côté serveur pour varier les sessions.
  const shuffled = [...questions].sort(() => Math.random() - 0.5);

  let qcmOptionsByQuestion: Record<string, { id: string; text_kana: string }[]> = {};
  if (mode === "easy") {
    const ids = shuffled.map((q) => q.id);
    const { data: options } = await supabase
      .from("qcm_options")
      .select("id, question_id, text_kana")
      .in("question_id", ids);

    qcmOptionsByQuestion = {};
    for (const opt of options ?? []) {
      if (!qcmOptionsByQuestion[opt.question_id]) qcmOptionsByQuestion[opt.question_id] = [];
      qcmOptionsByQuestion[opt.question_id].push({ id: opt.id, text_kana: opt.text_kana });
    }
    // Mélange les options de chaque question.
    for (const qid in qcmOptionsByQuestion) {
      qcmOptionsByQuestion[qid].sort(() => Math.random() - 0.5);
    }
  }

  const { data: session, error: sessionError } = await supabase
    .from("sessions")
    .insert({ user_id: user!.id, mode, theme_filter: themeFilterValid ? themeId : null })
    .select()
    .single();

  if (sessionError || !session) {
    return (
      <div className="text-center py-20">
        <p className="text-hanko">Impossible de démarrer la session. Réessayez.</p>
      </div>
    );
  }

  return (
    <TrainingClient
      mode={mode}
      sessionId={session.id}
      voicePreference={profile?.voice_preference ?? "female"}
      questions={shuffled.map((q) => ({
        id: q.id,
        text_kana: q.text_kana,
        themeName: themeNameById.get(q.theme_id) ?? "",
        options: qcmOptionsByQuestion[q.id] ?? [],
      }))}
    />
  );
}
