"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/minnaExtras";
import type { InterfaceLang } from "@/lib/uiTranslations";

function normalize(s: string): string {
  return s.trim().replace(/\s+/g, "").toLowerCase();
}

function OneExercise({ ex, n, lang }: { ex: Exercise; n: number; lang: InterfaceLang }) {
  const [choice, setChoice] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  const isQcm = Array.isArray(ex.options) && ex.options.length > 0;
  const answer = isQcm ? choice ?? "" : input;
  const correct = ex.accept.some((a) => normalize(a) === normalize(answer));
  const prompt = lang === "en" ? ex.promptEn : ex.prompt;
  const explain = lang === "en" ? ex.explainEn : ex.explain;

  return (
    <li className="rounded-2xl border border-sumi/10 p-5 dark:border-washi/10">
      <p className="text-sm leading-relaxed">
        <span className="mr-2 font-mono text-xs text-sumi/40 dark:text-washi/40">{n}.</span>
        {prompt}
      </p>

      {isQcm ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {ex.options!.map((opt) => (
            <button
              key={opt}
              type="button"
              disabled={checked}
              onClick={() => setChoice(opt)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                choice === opt
                  ? "border-ai bg-ai text-washi"
                  : "border-sumi/20 hover:border-ai/50 dark:border-washi/20"
              } disabled:opacity-70`}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={input}
          disabled={checked}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setChecked(true)}
          placeholder={lang === "en" ? "Your answer…" : "Votre réponse…"}
          className="mt-3 w-full max-w-xs rounded-xl border border-sumi/20 bg-transparent px-4 py-2 text-sm outline-none focus:border-ai dark:border-washi/20"
        />
      )}

      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <button
            type="button"
            onClick={() => setChecked(true)}
            disabled={!answer.trim()}
            className="btn-secondary !px-4 !py-1.5 text-xs disabled:opacity-50"
          >
            {lang === "en" ? "Check" : "Vérifier"}
          </button>
        ) : (
          <span className={`text-sm font-medium ${correct ? "text-bamboo" : "text-hanko"}`}>
            {correct ? "○ 正解 ! Correct !" : "× Incorrect"}
          </span>
        )}
        {checked && (
          <span className="text-xs leading-relaxed text-sumi/55 dark:text-washi/55">
            {lang === "en" ? "Answer:" : "Réponse :"}{" "}
            <span className="font-medium text-sumi dark:text-washi">{ex.accept[0]}</span> — {explain}
          </span>
        )}
      </div>
    </li>
  );
}

export default function ExerciseBlock({ exercises, lang }: { exercises: Exercise[]; lang: InterfaceLang }) {
  return (
    <ol className="space-y-4">
      {exercises.map((ex, i) => (
        <OneExercise key={i} ex={ex} n={i + 1} lang={lang} />
      ))}
    </ol>
  );
}
