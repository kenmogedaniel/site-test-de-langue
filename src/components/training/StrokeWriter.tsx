"use client";

import { useState } from "react";
import type { KanaStrokeEntry } from "@/lib/kakikataData";

export default function StrokeWriter({ entry }: { entry: KanaStrokeEntry }) {
  const [step, setStep] = useState(0);
  const current = step + 1;
  const done = step >= entry.totalStrokes;

  return (
    <div className="card-washi p-6">
      {/* Caractère avec numéro de trait courant */}
      <div className="flex items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-sumi/[0.04] dark:bg-washi/[0.05]">
          <span className="select-none font-display text-6xl leading-none opacity-20">
            {entry.kana}
          </span>
          {step > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ai text-[10px] font-bold text-washi">
              {current}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-2xl">{entry.kana}</p>
          <p className="mt-1 text-xs text-sumi/50 dark:text-washi/50">
            {done ? (
              "Terminé !"
            ) : (
              <>
                Trait <strong className="text-ai">{current}</strong> sur {entry.totalStrokes}
              </>
            )}
          </p>
          {step > 0 && step <= entry.steps.length && (
            <p className="mt-2 text-sm leading-relaxed text-sumi/75 dark:text-washi/75">
              {entry.steps[step - 1].desc}
            </p>
          )}
          {done && (
            <p className="mt-2 rounded-lg bg-savane/10 px-3 py-2 text-xs leading-relaxed text-sumi/70 dark:text-washi/70">
              💡 {entry.tip}
            </p>
          )}
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mt-4 flex gap-1">
        {Array.from({ length: entry.totalStrokes }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current ? "bg-ai" : "bg-sumi/10 dark:bg-washi/10"
            }`}
          />
        ))}
      </div>

      {/* Contrôles */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="btn-secondary !px-3 !py-1.5 text-xs disabled:opacity-50"
        >
          ← Précédent
        </button>
        {!done ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="btn-primary !px-3 !py-1.5 text-xs"
          >
            Suivant →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="btn-secondary !px-3 !py-1.5 text-xs"
          >
            Recommencer
          </button>
        )}
      </div>
    </div>
  );
}
