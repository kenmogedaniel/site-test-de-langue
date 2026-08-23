import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { matchMediumAnswer, evaluateAdvancedAnswer } from "@/lib/answerMatching";

const submitSchema = z.object({
  sessionId: z.string().uuid(),
  questionId: z.string().uuid(),
  mode: z.enum(["easy", "medium", "hard"]),
  selectedOptionId: z.string().uuid().optional(),
  userAnswer: z.string().max(500).optional(),
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
  const { sessionId, questionId, mode, selectedOptionId, userAnswer } = parsed.data;

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

  if (mode === "easy") {
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
    feedback = isCorrect ? "正解！" : "不正解";
  } else {
    if (!userAnswer || userAnswer.trim().length === 0) {
      return NextResponse.json({ error: "Réponse manquante." }, { status: 400 });
    }
    const { data: model } = await supabase
      .from("model_answers")
      .select("text_kana, text_fr, acceptable_variants")
      .eq("question_id", questionId)
      .single();

    if (!model) {
      return NextResponse.json({ error: "Pas de réponse modèle pour cette question." }, { status: 404 });
    }

    if (mode === "medium") {
      const result = matchMediumAnswer(userAnswer, model.text_kana, model.acceptable_variants ?? []);
      isCorrect = result.isCorrect;
      score = result.score;
      feedback = isCorrect
        ? "正解！ Bonne réponse."
        : `Pas tout à fait. Réponse modèle : ${result.closestMatch}`;
    } else {
      const evaluation = evaluateAdvancedAnswer(userAnswer, model.text_kana, model.text_fr);
      isCorrect = evaluation.isCorrect;
      score = evaluation.score;
      feedback = evaluation.feedback.join(" ");
      feedbackDetails = evaluation.feedback;
    }
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
