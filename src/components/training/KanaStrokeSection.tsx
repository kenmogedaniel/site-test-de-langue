"use client";

import { useEffect, useState } from "react";
import StrokeArrow from "@/components/training/StrokeArrow";
import StrokeSequence from "@/components/training/StrokeSequence";
import DrawingCanvas from "@/components/training/DrawingCanvas";
import { getCharStrokes } from "@/lib/kakikataSvgData";
import type { InterfaceLang } from "@/lib/uiTranslations";

export default function KanaStrokeSection({
  entries,
  lang,
}: {
  entries: { kana: string; strokes: number }[];
  lang: InterfaceLang;
}) {
  const [selected, setSelected] = useState(entries[0].kana);
  const [step, setStep] = useState(0);
  const data = getCharStrokes(selected);
  const current = entries.find((e) => e.kana === selected);
  const isEn = lang === "en";

  // Repart de la première étape à chaque changement de caractère sélectionné.
  useEffect(() => {
    setStep(0);
  }, [selected]);

  return (
    <section className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
        {isEn ? "Write each kana — kakikata" : "Ecrire chaque kana — kakikata"}
      </h2>
      <p className="mt-2 text-xs text-sumi/55 dark:text-washi/55">
        {isEn
          ? "Select a kana, follow the stroke-by-stroke construction, then practice tracing it yourself."
          : "Sélectionnez un kana, suivez la construction trait par trait, puis entraînez-vous à le tracer vous-même."}
      </p>

      {/* Selecteur de kana */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {entries.map((e) => (
          <button
            key={e.kana}
            type="button"
            onClick={() => setSelected(e.kana)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-display transition-all ${
              selected === e.kana
                ? "bg-ai text-washi shadow-md"
                : "bg-sumi/[0.04] hover:bg-ai/15 dark:bg-washi/[0.05]"
            }`}
          >
            {e.kana}
          </button>
        ))}
      </div>

      {data && current && (
        <div className="mt-5 space-y-4">
          {/* Bande de vignettes : construction progressive, case par case */}
          <StrokeSequence
            charStrokes={data}
            totalStrokes={current.strokes}
            step={step}
            onSelectStep={setStep}
          />

          {/* Visualisation animée du trait courant, synchronisée avec la bande ci-dessus */}
          <StrokeArrow
            charStrokes={data}
            totalStrokes={current.strokes}
            step={step}
            onStepChange={setStep}
          />

          {/* Entraînement au tracé, à la souris ou au doigt */}
          <DrawingCanvas character={selected} lang={lang} />
        </div>
      )}
    </section>
  );
}
