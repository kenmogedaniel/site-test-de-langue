"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AudioPlayer from "@/components/training/AudioPlayer";
import HankoFeedback from "@/components/training/HankoFeedback";
import type { Difficulty, VoicePref } from "@/types/database";

interface QuestionData {
  id: string;
  text_kana: string;
  themeName: string;
  options: { id: string; text_kana: string }[];
}

const MODE_LABELS: Record<Difficulty, string> = {
  easy: "Facile — QCM",
  medium: "Moyen — réponse libre",
  hard: "Difficile — réponse structurée",
};

export default function TrainingClient({
  mode,
  sessionId,
  voicePreference,
  questions,
}: {
  mode: Difficulty;
  sessionId: string;
  voicePreference: VoicePref;
  questions: QuestionData[];
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [freeText, setFreeText] = useState("");
  const [result, setResult] = useState<{
    isCorrect: boolean;
    score: number | null;
    feedback: string;
    feedbackDetails?: string[] | null;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [tally, setTally] = useState({ correct: 0, total: 0 });

  const current = questions[index];
  const progressPct = useMemo(() => Math.round((index / questions.length) * 100), [index, questions.length]);

  async function handleSubmit() {
    if (submitting) return;
    setSubmitting(true);

    const payload: Record<string, unknown> = {
      sessionId,
      questionId: current.id,
      mode,
    };
    if (mode === "easy") {
      if (!selectedOptionId) {
        setSubmitting(false);
        return;
      }
      payload.selectedOptionId = selectedOptionId;
    } else {
      if (!freeText.trim()) {
        setSubmitting(false);
        return;
      }
      payload.userAnswer = freeText;
    }

    const res = await fetch("/api/sessions/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setSubmitting(false);

    if (res.ok) {
      setResult(data);
      setTally((t) => ({ correct: t.correct + (data.isCorrect ? 1 : 0), total: t.total + 1 }));
    }
  }

  async function handleToggleFlag() {
    const method = flagged ? "DELETE" : "POST";
    const res = await fetch("/api/review-flags", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: current.id }),
    });
    if (res.ok) setFlagged(!flagged);
  }

  async function handleNext() {
    if (index + 1 >= questions.length) {
      await fetch("/api/sessions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      router.push("/dashboard");
      router.refresh();
      return;
    }
    setIndex((i) => i + 1);
    setSelectedOptionId(null);
    setFreeText("");
    setResult(null);
    setFlagged(false);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Barre de progression */}
      <div className="flex items-center justify-between mb-2">
        <Link href="/dashboard" className="text-xs text-sumi/50 dark:text-washi/50 hover:text-ai">
          ← Quitter
        </Link>
        <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">
          {index + 1} / {questions.length} · {MODE_LABELS[mode]}
        </span>
      </div>
      <div className="h-1 bg-sumi/10 dark:bg-washi/10 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-ai transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="card-washi p-8">
        <p className="font-mono text-xs text-savane uppercase tracking-widest mb-4">
          {current.themeName}
        </p>

        <p className="font-display text-2xl leading-relaxed mb-6">{current.text_kana}</p>

        <AudioPlayer text={current.text_kana} voicePreference={voicePreference} />

        <div className="mt-8">
          {mode === "easy" ? (
            <div className="space-y-3">
              {current.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => !result && setSelectedOptionId(opt.id)}
                  disabled={!!result}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-colors ${
                    selectedOptionId === opt.id
                      ? "border-ai bg-ai/5"
                      : "border-sumi/15 dark:border-washi/15 hover:border-ai/40"
                  } disabled:opacity-70`}
                >
                  {opt.text_kana}
                </button>
              ))}
            </div>
          ) : (
            <textarea
              value={freeText}
              onChange={(e) => setFreeText(e.target.value)}
              disabled={!!result}
              placeholder="日本語で答えてください…"
              rows={4}
              maxLength={500}
              className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 outline-none focus:border-ai resize-none disabled:opacity-70"
            />
          )}
        </div>

        {result && (
          <div className="mt-6 border-t border-sumi/10 dark:border-washi/10 pt-6">
            <HankoFeedback correct={result.isCorrect} />
            {mode === "hard" && result.feedbackDetails && result.feedbackDetails.length > 0 ? (
              <ul className="text-sm text-sumi/70 dark:text-washi/70 mt-3 space-y-1.5 max-w-md mx-auto">
                {result.feedbackDetails.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ai shrink-0">・</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : (
              result.feedback && (
                <p className="text-sm text-sumi/70 dark:text-washi/70 text-center mt-2">{result.feedback}</p>
              )
            )}
            {result.score !== null && mode !== "easy" && (
              <p className="text-xs text-center font-mono text-sumi/50 dark:text-washi/50 mt-3">
                Score : {result.score}/100
              </p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleToggleFlag}
            className={`text-sm underline underline-offset-2 ${
              flagged ? "text-hanko" : "text-sumi/50 dark:text-washi/50"
            }`}
          >
            {flagged ? "★ Marquée à revoir" : "☆ Marquer à revoir"}
          </button>

          {!result ? (
            <button
              onClick={handleSubmit}
              disabled={submitting || (mode === "easy" ? !selectedOptionId : !freeText.trim())}
              className="btn-primary"
            >
              {submitting ? "Vérification…" : "Valider"}
            </button>
          ) : (
            <button onClick={handleNext} className="btn-primary">
              {index + 1 >= questions.length ? "Terminer" : "Question suivante"}
            </button>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-sumi/40 dark:text-washi/40 mt-4 font-mono">
        {tally.correct} / {tally.total} correctes dans cette session
      </p>
    </div>
  );
}
