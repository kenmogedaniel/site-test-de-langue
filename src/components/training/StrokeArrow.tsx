"use client";

import { useEffect, useState } from "react";
import type { CharStrokes } from "@/lib/kakikataSvgData";

export default function StrokeArrow({
  charStrokes,
  totalStrokes,
  step: controlledStep,
  onStepChange,
}: {
  charStrokes: CharStrokes;
  totalStrokes: number;
  /** Si fourni, le composant devient contrôlé (utile pour synchroniser avec StrokeSequence). */
  step?: number;
  onStepChange?: (step: number) => void;
}) {
  const [internalStep, setInternalStep] = useState(0);
  const step = controlledStep ?? internalStep;
  const setStep = (updater: (s: number) => number) => {
    const next = updater(step);
    if (onStepChange) onStepChange(next);
    else setInternalStep(next);
  };

  // Repart de zéro si le caractère change (nouveau CharStrokes reçu) et que le composant
  // gère son propre état (non contrôlé).
  useEffect(() => {
    if (controlledStep === undefined) setInternalStep(0);
  }, [charStrokes, controlledStep]);

  const current = step + 1;
  const done = step >= totalStrokes;
  const strokes = charStrokes.strokes;

  return (
    <div className="card-washi overflow-hidden p-6">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* SVG avec le caractere et les flèches */}
        <div className="relative flex-shrink-0">
          <svg
            viewBox="0 0 100 100"
            className="h-40 w-40 sm:h-52 sm:w-52"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <marker
                id="arrow-head"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#B23A2E" />
              </marker>
              <marker
                id="arrow-head-done"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#4B7051" />
              </marker>
            </defs>

            {/* Traits déjà faits (verts, sans flèche) */}
            {strokes.slice(0, step).map((s, i) => (
              <path
                key={`done-${i}`}
                d={s.d}
                stroke="#4B7051"
                strokeWidth="3"
                strokeOpacity="0.5"
                fill="none"
              />
            ))}

            {/* Trait courant (rouge, avec flèche) */}
            {!done && step < strokes.length && (
              <>
                <path
                  d={strokes[step].d}
                  stroke="#B23A2E"
                  strokeWidth="3.5"
                  strokeOpacity="0.9"
                  fill="none"
                  markerEnd="url(#arrow-head)"
                  className="drop-shadow-sm"
                />
                {/* Cercle au point de départ */}
                <circle
                  cx={parseFloat(strokes[step].d.match(/M\s*([\d.]+)/)?.[1] ?? "0")}
                  cy={parseFloat(strokes[step].d.match(/M\s*[\d.]+,([\d.]+)/)?.[1] ?? "0")}
                  r="3"
                  fill="#B23A2E"
                  className="animate-pulse"
                />
              </>
            )}

            {/* Traits futurs (pointillés gris très légers) */}
            {strokes.slice(step + 1).map((s, i) => (
              <path
                key={`future-${i}`}
                d={s.d}
                stroke="#22252B"
                strokeWidth="1.5"
                strokeOpacity="0.12"
                strokeDasharray="3 4"
                fill="none"
              />
            ))}
          </svg>

          {/* Badge numéro */}
          {!done && (
            <span className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-hanko text-[11px] font-bold text-washi shadow">
              {current}
            </span>
          )}
          {done && (
            <span className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bamboo text-[11px] font-bold text-washi shadow">
              ✓
            </span>
          )}
        </div>

        {/* Infos et controls */}
        <div className="min-w-0 flex-1">
          <p className="font-display text-3xl">{charStrokes.char}</p>
          <p className="mt-1 font-mono text-xs text-sumi/50 dark:text-washi/50">
            {totalStrokes} traits
          </p>

          {/* Barre de progression */}
          <div className="mt-3 flex gap-1">
            {Array.from({ length: totalStrokes }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i < current
                    ? "bg-bamboo"
                    : i === current && !done
                      ? "bg-hanko"
                      : "bg-sumi/10 dark:bg-washi/10"
                }`}
              />
            ))}
          </div>

          {/* Description du trait courant */}
          {done ? (
            <div className="mt-4 rounded-xl border border-bamboo/30 bg-bamboo/10 px-4 py-3 text-sm text-sumi/80 dark:text-washi/80">
              Bravo ! Tous les traits sont terminés.
            </div>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-sumi/70 dark:text-washi/70">
              <span className="font-semibold text-hanko">Trait {current}</span> sur {totalStrokes}
            </p>
          )}

          {/* Fleche visuelle de direction */}
          {!done && (
            <div className="mt-2 flex items-center gap-2 text-xs text-sumi/50 dark:text-washi/50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ transform: `rotate(${strokes[step].arrowAngle}deg)` }}>
                <path d="M2 8 L12 8 M8 3 L13 8 L8 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Direction indiquée par la flèche rouge
            </div>
          )}

          {/* Controls */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="btn-secondary !px-3 !py-1.5 text-xs disabled:opacity-40"
            >
              ←
            </button>
            {!done ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="btn-primary !px-3 !py-1.5 text-xs"
              >
                Trait suivant →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(() => 0)}
                className="btn-secondary !px-3 !py-1.5 text-xs"
              >
                Recommencer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
