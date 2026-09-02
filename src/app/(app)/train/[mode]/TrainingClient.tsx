"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AudioPlayer from "@/components/training/AudioPlayer";
import HankoFeedback from "@/components/training/HankoFeedback";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import type { Difficulty } from "@/types/database";

interface QuestionData {
  id: string;
  text_kana: string;
  text_fr: string | null;
  themeName: string;
  options: { id: string; text_kana: string }[];
}

const MODE_LABELS: Record<Difficulty, string> = {
  easy: "Facile — QCM",
  medium: "Moyen — réponse libre",
  hard: "Difficile — réponse structurée",
};

const TIMER_SECONDS = 30;

export default function TrainingClient({
  mode,
  timed,
  sessionId,
  questions,
  totalQuestionCount,
  answeredCount,
  priorCorrect,
}: {
  mode: Difficulty;
  timed: boolean;
  sessionId: string;
  questions: QuestionData[];
  totalQuestionCount: number;
  answeredCount: number;
  priorCorrect: number;
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
  const [abandoning, setAbandoning] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [tally, setTally] = useState({ correct: priorCorrect, total: answeredCount });
  const [secondsLeft, setSecondsLeft] = useState(TIMER_SECONDS);
  const [convertingSpeech, setConvertingSpeech] = useState(false);

  const speech = useSpeechRecognition(async (rawTranscript) => {
    // La reconnaissance vocale du navigateur transcrit toujours en kanji standard ;
    // on convertit en hiragana pur avant de remplir le champ de réponse.
    setConvertingSpeech(true);
    try {
      const res = await fetch("/api/speech/to-hiragana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: rawTranscript }),
      });
      const data = await res.json();
      setFreeText(res.ok && data.hiragana ? data.hiragana : rawTranscript);
    } catch {
      setFreeText(rawTranscript);
    } finally {
      setConvertingSpeech(false);
    }
  });

  // Tant que le micro écoute, on reflète le transcript brut en direct (conversion en
  // hiragana appliquée une fois l'écoute terminée, voir le callback ci-dessus).
  useEffect(() => {
    if (speech.isListening) setFreeText(speech.transcript);
  }, [speech.transcript, speech.isListening]);

  const current = questions[index];
  const overallDone = answeredCount + index;
  const progressPct = useMemo(
    () => Math.round((overallDone / totalQuestionCount) * 100),
    [overallDone, totalQuestionCount]
  );

  // handleSubmit doit être stable pour être appelée depuis le timer sans le relancer en boucle.
  const submitRef = useRef<(timedOut?: boolean) => void>(() => {});

  const handleSubmit = useCallback(
    async (timedOut = false) => {
      if (submitting || result) return;
      if (!timedOut) {
        if (mode === "easy" && !selectedOptionId) return;
        if (mode !== "easy" && !freeText.trim()) return;
      }
      setSubmitting(true);

      const payload: Record<string, unknown> = { sessionId, questionId: current.id, mode };
      if (timedOut) {
        payload.timedOut = true;
      } else if (mode === "easy") {
        payload.selectedOptionId = selectedOptionId;
      } else {
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
    },
    [submitting, result, mode, selectedOptionId, freeText, sessionId, current]
  );

  useEffect(() => {
    submitRef.current = handleSubmit;
  }, [handleSubmit]);

  // Coupe le micro dès qu'une réponse est validée, pour éviter une écoute résiduelle.
  useEffect(() => {
    if (result && speech.isListening) speech.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  // Chronomètre : uniquement en mode "conditions réelles". Se réinitialise à chaque nouvelle question.
  useEffect(() => {
    if (!timed || result) return;
    setSecondsLeft(TIMER_SECONDS);
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          submitRef.current(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timed, index, result]);

  async function handleToggleFlag() {
    const method = flagged ? "DELETE" : "POST";
    const res = await fetch("/api/review-flags", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: current.id }),
    });
    if (res.ok) setFlagged(!flagged);
  }

  async function endSession() {
    await fetch("/api/sessions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    });
  }

  async function handleAbandon() {
    if (abandoning) return;
    // Confirme avant de clôturer la session : un clic accidentel ne doit pas
    // faire perdre la progression en cours.
    if (!window.confirm("Abandonner le test ? La session en cours sera clôturée.")) return;
    setAbandoning(true);
    await endSession();
    router.push("/dashboard");
    router.refresh();
  }

  async function handleNext() {
    if (index + 1 >= questions.length) {
      await endSession();
      router.push("/dashboard");
      router.refresh();
      return;
    }
    setIndex((i) => i + 1);
    setSelectedOptionId(null);
    setFreeText("");
    setResult(null);
    setFlagged(false);
    setShowHelp(false);
    if (speech.isListening) speech.stop();
  }

  const timerCritical = secondsLeft <= 10;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Barre de progression */}
      <div className="flex items-center justify-between mb-2">
        <Link href="/dashboard" className="text-xs text-sumi/50 dark:text-washi/50 hover:text-ai">
          ← Quitter (reprendre plus tard)
        </Link>
        <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">
          {overallDone + 1} / {totalQuestionCount} · {MODE_LABELS[mode]}
          {timed && " · ⏱ chronométré"}
        </span>
      </div>
      <div className="h-1 bg-sumi/10 dark:bg-washi/10 rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-ai transition-all duration-300" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Chronomètre */}
      {timed && !result && (
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-1.5 flex-1 max-w-xs bg-sumi/10 dark:bg-washi/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 linear ${timerCritical ? "bg-hanko" : "bg-ai"}`}
              style={{ width: `${(secondsLeft / TIMER_SECONDS) * 100}%` }}
            />
          </div>
          <span
            className={`font-mono text-sm w-8 text-right ${
              timerCritical ? "text-hanko" : "text-sumi/60 dark:text-washi/60"
            }`}
          >
            {secondsLeft}s
          </span>
        </div>
      )}

      <div className="card-washi p-8">
        <p className="font-mono text-xs text-savane uppercase tracking-widest mb-4">{current.themeName}</p>

        <p className="font-display text-2xl leading-relaxed mb-6">{current.text_kana}</p>

        <AudioPlayer text={current.text_kana} autoPlay />

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowHelp((v) => !v)}
            className="text-xs text-ai underline underline-offset-2"
          >
            {showHelp ? "Masquer l'aide" : "❓ Je n'ai pas compris la question"}
          </button>
          {showHelp && (
            <div className="mt-3 rounded-xl border border-ai/20 bg-ai/5 px-4 py-3">
              {current.text_fr ? (
                <>
                  <p className="text-xs uppercase tracking-widest text-ai/70 mb-1">Traduction</p>
                  <p className="text-sm">{current.text_fr}</p>
                </>
              ) : (
                <p className="text-sm text-sumi/60 dark:text-washi/60">
                  Traduction non disponible pour cette question.
                </p>
              )}
            </div>
          )}
        </div>

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
            <div>
              <textarea
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                disabled={!!result || convertingSpeech}
                placeholder="日本語で答えてください… (ou utilisez le micro)"
                rows={4}
                maxLength={500}
                className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 outline-none focus:border-ai resize-none disabled:opacity-70"
              />
              <div className="flex items-center gap-3 mt-3">
                {speech.isSupported ? (
                  <button
                    type="button"
                    onClick={() => (speech.isListening ? speech.stop() : speech.start())}
                    disabled={!!result || convertingSpeech}
                    className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-colors disabled:opacity-50 ${
                      speech.isListening
                        ? "border-hanko text-hanko bg-hanko/5"
                        : "border-sumi/15 dark:border-washi/15 hover:border-ai/40"
                    }`}
                  >
                    <span className={speech.isListening ? "animate-pulse" : ""}>🎤</span>
                    {speech.isListening
                      ? "Écoute en cours… (cliquer pour arrêter)"
                      : convertingSpeech
                      ? "Conversion en hiragana…"
                      : "Répondre à l'oral"}
                  </button>
                ) : (
                  <p className="text-xs text-sumi/40 dark:text-washi/40">
                    La réponse orale n'est pas prise en charge par ce navigateur (essayez Chrome ou Edge).
                  </p>
                )}
              </div>
              {speech.error && <p className="text-xs text-hanko mt-2">{speech.error}</p>}
            </div>
          )}
        </div>

        {result && (
          <div className="mt-6 border-t border-sumi/10 dark:border-washi/10 pt-6">
            <HankoFeedback correct={result.isCorrect} />
            {mode !== "easy" && result.feedbackDetails && result.feedbackDetails.length > 0 ? (
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
              onClick={() => handleSubmit(false)}
              disabled={submitting || convertingSpeech || (mode === "easy" ? !selectedOptionId : !freeText.trim())}
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

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAbandon}
          disabled={abandoning}
          className="text-xs text-hanko/70 hover:text-hanko underline underline-offset-2 disabled:opacity-50"
        >
          {abandoning ? "Abandon en cours…" : "Abandonner le test"}
        </button>
        <p className="text-center text-xs text-sumi/40 dark:text-washi/40 font-mono">
          {tally.correct} / {tally.total} correctes
        </p>
      </div>
    </div>
  );
}
