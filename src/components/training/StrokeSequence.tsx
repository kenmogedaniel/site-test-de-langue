"use client";

import type { CharStrokes } from "@/lib/kakikataSvgData";

/**
 * Reproduit la présentation classique des cahiers d'écriture japonais (genkouyoushi) :
 * une rangée de petites cases montrant la construction du caractère qui s'accumule
 * case après case (case 1 = trait 1 seul, case 2 = traits 1+2, etc.).
 * Cliquer sur une case synchronise la vue principale (StrokeArrow) sur cette étape.
 */
export default function StrokeSequence({
  charStrokes,
  totalStrokes,
  step,
  onSelectStep,
}: {
  charStrokes: CharStrokes;
  totalStrokes: number;
  step: number;
  onSelectStep: (step: number) => void;
}) {
  const strokes = charStrokes.strokes;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {Array.from({ length: totalStrokes }).map((_, i) => {
        const isActive = step === i + 1 || (step >= totalStrokes && i === totalStrokes - 1);
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelectStep(i + 1)}
            className={`relative shrink-0 rounded-lg border transition-colors ${
              isActive ? "border-hanko bg-hanko/5" : "border-sumi/15 dark:border-washi/15 hover:border-ai/40"
            }`}
          >
            <svg viewBox="0 0 100 100" className="h-14 w-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Grille de repère façon papier à kanji : croix en pointillés */}
              <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" className="text-sumi/15 dark:text-washi/15" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" className="text-sumi/15 dark:text-washi/15" />

              {strokes.slice(0, i + 1).map((s, j) => (
                <path
                  key={j}
                  d={s.d}
                  stroke={j === i ? "#B23A2E" : "#22252B"}
                  strokeWidth="4"
                  strokeOpacity={j === i ? 0.9 : 0.75}
                  className="dark:stroke-washi"
                  fill="none"
                />
              ))}
            </svg>
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sumi text-[9px] font-bold text-washi dark:bg-washi dark:text-sumi">
              {i + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
}
