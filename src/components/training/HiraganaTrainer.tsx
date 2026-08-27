"use client";

import { useMemo, useState } from "react";
import { speakJapanese } from "@/lib/tts";
import { HIRAGANA_ROWS, HIRAGANA_FLAT, type KanaCell } from "@/lib/hiraganaData";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuizQuestions(count: number) {
  const pool = shuffle(HIRAGANA_FLAT).slice(0, count);
  return pool.map((correct) => {
    const distractors = shuffle(HIRAGANA_FLAT.filter((c) => c.romaji !== correct.romaji)).slice(0, 3);
    return { correct, options: shuffle([correct, ...distractors]) };
  });
}

export default function HiraganaTrainer() {
  const [view, setView] = useState<"chart" | "quiz">("chart");
  const [playingKana, setPlayingKana] = useState<string | null>(null);

  async function playKana(kana: string) {
    setPlayingKana(kana);
    try {
      await speakJapanese(kana);
    } catch {
      // silencieux : pas critique pour un tableau de référence
    } finally {
      setPlayingKana(null);
    }
  }

  return (
    <div>
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setView("chart")}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            view === "chart" ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
          }`}
        >
          Tableau
        </button>
        <button
          onClick={() => setView("quiz")}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            view === "quiz" ? "border-ai bg-ai/5 text-ai" : "border-sumi/15 dark:border-washi/15"
          }`}
        >
          S'auto-évaluer
        </button>
      </div>

      {view === "chart" ? (
        <div className="grid grid-cols-5 gap-2">
          {HIRAGANA_ROWS.flat().map((cell, i) =>
            cell ? (
              <button
                key={i}
                onClick={() => playKana(cell.kana)}
                className={`card-washi aspect-square flex flex-col items-center justify-center gap-1 hover:border-ai/40 transition-colors ${
                  playingKana === cell.kana ? "border-ai bg-ai/5" : ""
                }`}
              >
                <span className="font-display text-2xl">{cell.kana}</span>
                <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">{cell.romaji}</span>
              </button>
            ) : (
              <div key={i} />
            )
          )}
        </div>
      ) : (
        <HiraganaQuiz />
      )}
    </div>
  );
}

function HiraganaQuiz() {
  const [questions] = useState(() => buildQuizQuestions(10));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  function handleAnswer(romaji: string) {
    if (selected) return;
    setSelected(romaji);
    if (romaji === current.correct.romaji) setScore((s) => s + 1);
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function handleRestart() {
    window.location.reload();
  }

  if (finished) {
    return (
      <div className="card-washi p-10 text-center">
        <p className="font-display text-3xl mb-2">{score} / {questions.length}</p>
        <p className="text-sm text-sumi/60 dark:text-washi/60 mb-6">
          {score === questions.length
            ? "Parfait ! Vous maîtrisez ces hiragana."
            : "Continuez à vous entraîner, ça viendra vite."}
        </p>
        <button onClick={handleRestart} className="btn-primary">
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <p className="font-mono text-xs text-sumi/50 dark:text-washi/50 mb-4 text-center">
        {index + 1} / {questions.length}
      </p>
      <div className="card-washi p-10 text-center mb-6">
        <span className="font-display text-6xl">{current.correct.kana}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {current.options.map((opt) => {
          const isSelected = selected === opt.romaji;
          const isCorrectOpt = opt.romaji === current.correct.romaji;
          const showState = selected !== null;
          return (
            <button
              key={opt.romaji}
              onClick={() => handleAnswer(opt.romaji)}
              disabled={!!selected}
              className={`px-4 py-3 rounded-xl border font-mono transition-colors ${
                showState && isCorrectOpt
                  ? "border-bamboo bg-bamboo/10 text-bamboo"
                  : showState && isSelected
                  ? "border-hanko bg-hanko/10 text-hanko"
                  : "border-sumi/15 dark:border-washi/15 hover:border-ai/40"
              }`}
            >
              {opt.romaji}
            </button>
          );
        })}
      </div>
      {selected && (
        <button onClick={handleNext} className="btn-primary w-full mt-6">
          {index + 1 >= questions.length ? "Voir le score" : "Suivant"}
        </button>
      )}
    </div>
  );
}
