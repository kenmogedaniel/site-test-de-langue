import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { gradeFreeAnswer } from "@/lib/aiGrading";

const submitSchema = z.object({
  sessionId: z.string().uuid(),
  questionId: z.string().uuid(),
  mode: z.enum(["easy", "medium", "hard"]),
  selectedOptionId: z.string().uuid().optional(),
  userAnswer: z.string().max(500).optional(),
  timedOut: z.boolean().optional(),
});

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
  const { sessionId, questionId, mode, selectedOptionId, userAnswer, timedOut } = parsed.data;

  // Vérifie que la session appartient bien à l'utilisateur (défense en profondeur, en plus des RLS policies).
  const { data: session } = await supabase
    .from("sessions")
    .select("id")
    .eq("id", sessionId)
    .eq("user_id", user.id)
    .single();

  if (!session) {
    return NextResponse.json({ error: "Session introuvable." }, { status: 404 });
  }

  let isCorrect = false;
  let score: number | null = null;
  let feedback = "";
  let feedbackDetails: string[] | null = null;

  if (timedOut) {
    isCorrect = false;
    score = 0;
    feedback = "時間切れ（じかんぎれ）— Temps écoulé.";
  } else if (mode === "easy") {
    if (!selectedOptionId) {
      return NextResponse.json({ error: "Option manquante." }, { status: 400 });
    }
    const { data: option } = await supabase
      .from("qcm_options")
      .select("is_correct")
      .eq("id", selectedOptionId)
      .eq("question_id", questionId)
      .single();

    if (!option) {
      return NextResponse.json({ error: "Option invalide." }, { status: 400 });
    }
    isCorrect = option.is_correct;
    score = isCorrect ? 100 : 0;
    feedback = isCorrect ? "正解（せいかい）！" : "不正解（ふせいかい）";
  } else {
    if (!userAnswer || userAnswer.trim().length === 0) {
      return NextResponse.json({ error: "Réponse manquante." }, { status: 400 });
    }

    const [{ data: question }, { data: model }] = await Promise.all([
      supabase.from("questions").select("text_kana").eq("id", questionId).single(),
      supabase.from("model_answers").select("text_kana, text_fr, acceptable_variants").eq("question_id", questionId).single(),
    ]);

    if (!model || !question) {
      return NextResponse.json({ error: "Pas de réponse modèle pour cette question." }, { status: 404 });
    }

    // Correction sémantique via IA : accepte toute réponse qui répond réellement à la
    // question, pas seulement celles qui ressemblent au texte de référence stocké.
    const grade = await gradeFreeAnswer(
      mode,
      question.text_kana,
      userAnswer,
      model.text_kana,
      model.text_fr,
      model.acceptable_variants ?? []
    );
    isCorrect = grade.isCorrect;
    score = grade.score;
    feedback = grade.feedback.join(" ");
    feedbackDetails = grade.feedback;
  }

  const { error: insertError } = await supabase.from("session_answers").insert({
    session_id: sessionId,
    question_id: questionId,
    user_answer: userAnswer ?? null,
    selected_option_id: selectedOptionId ?? null,
    is_correct: isCorrect,
    score,
    feedback,
  });

  if (insertError) {
    return NextResponse.json({ error: "Impossible d'enregistrer la réponse." }, { status: 500 });
  }

  return NextResponse.json({ isCorrect, score, feedback, feedbackDetails });
}
