"use client";

import Ruby from "@/components/ui/Ruby";

export default function HankoFeedback({ correct }: { correct: boolean }) {
  if (correct) {
    return (
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="hanko-stamp">
          <span className="font-display text-3xl">正</span>
        </div>
        <p className="text-sm text-bamboo font-medium">
          <Ruby kanji="正解" reading="せいかい" />！ Correct !
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden>
        <line
          x1="14" y1="14" x2="58" y2="58"
          stroke="currentColor" className="text-hanko" strokeWidth="5" strokeLinecap="round"
          strokeDasharray="300" style={{ animation: "brush-x 0.4s ease-out forwards" }}
        />
        <line
          x1="58" y1="14" x2="14" y2="58"
          stroke="currentColor" className="text-hanko" strokeWidth="5" strokeLinecap="round"
          strokeDasharray="300" style={{ animation: "brush-x 0.4s ease-out 0.1s forwards", strokeDashoffset: 300 }}
        />
      </svg>
      <p className="text-sm text-hanko font-medium">
        <Ruby kanji="不正解" reading="ふせいかい" /> — Pas tout à fait
      </p>
    </div>
  );
}
