"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LANGUAGES } from "@/lib/languages";
import Flag from "@/components/ui/Flag";

type Q = { key: string; prompt: string; hint?: string };

const PHASES = ["écoute", "lecture", "écrit", "oral"] as const;

const PROMPTS: Record<string, Q[]> = {
  écoute: [
    { key: "kana", prompt: "「こんにちは」 signifie… ?", hint: "kana" },
    { key: "kanji", prompt: "「学生」 se lit… ?", hint: "gakusei / kanei / kagi" },
  ],
  lecture: [
    { key: "long", prompt: "「継続は力なり」 →", hint: "La persévérance est une force." },
    { key: "reading", prompt: "「一期一会」 →", hint: "Chaque rencontre est unique." },
  ],
  écrit: [
    { key: "grammar", prompt: "「私は本を___。」 (+ 補う)", hint: "À compléter" },
    { key: "verbs", prompt: "「食べます」 forme négative ?", hint: "tabemasen" },
  ],
  écrit2: [
    { key: "particles", prompt: "「行き___行きます」", hint: "particule" },
  ],
  oral: [
    { key: "self", prompt: "Présentez-vous en 30 secondes.", hint: "fluide lent → aisé" },
    { key: "ask", prompt: "Posez une question simple.", hint: "formulez correctement" },
  ],
};

export default function DiagnosticExpress() {
  const startedAt = useRef<number | null>(null);
  const [timer, setTimer] = useState(60);
  const [step, setStep] = useState<"intro" | "run" | "done">("intro");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<(typeof PHASES)[number]>("écoute");
  const [scores, setScores] = useState<Record<string, number>>({});

  const phases = useMemo(
    () =>
      PHASES.flatMap((p, i) => {
        const list = PROMPTS[p] ?? [];
        return list.map((q) => ({ ...q, phaseIdx: i }));
      }),
    []
  );

  const total = phases.length;

  useEffect(() => {
    if (step !== "run") return;
    if (startedAt.current === null) startedAt.current = Date.now();
    const t = setInterval(() => {
      const el = Math.floor((Date.now() - startedAt.current!) / 1000);
      const left = Math.max(0, 60 - el);
      setTimer(left);
      if (left <= 0) {
        clearInterval(t);
        setStep("done");
        persist(scores);
      }
    }, 250);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function setScore(qkey: string, v: number) {
    const next = { ...scores, [qkey]: v };
    setScores(next);
    const atEnd = idx === total - 1;
    if (atEnd) {
      setStep("done");
      persist(next);
    } else {
      setIdx(idx + 1);
      const nextPhase = phases[idx + 1];
      if (nextPhase) setPhase(PHASES[nextPhase.phaseIdx]);
    }
  }

  function persist(s: Record<string, number>) {
    try {
      const all = { ...s, _date: new Date().toISOString() };
      localStorage.setItem("kadoya_diagnostic", JSON.stringify(all));
    } catch {
      /* noop */
    }
  }

  if (step === "intro") {
    return (
      <div className="card-washi mx-auto max-w-lg rounded-2xl p-8 text-center">
        <p className="text-3xl">🎯</p>
        <h1 className="font-display text-3xl mt-3">Diagnostic express</h1>
        <p className="mt-2 text-sm text-sumi/60 dark:text-washi/60">
          Répondez à {total} questions en {PHASES.length} compétences — vous avez 60 secondes.
          À la fin, on vous recommande une langue à explorer.
        </p>
        <button
          onClick={() => setStep("run")}
          className="mt-6 rounded-full bg-bamboo px-6 py-2.5 text-sm font-medium text-white hover:bg-bamboo-dark transition-colors"
        >
          Commencer
        </button>
      </div>
    );
  }

  if (step === "done") {
    const aggregate = Object.values(scores).reduce((a, b) => a + b, 0);
    const pct = Math.round((aggregate / (total * 3)) * 100);
    const perPhase = PHASES.map((p) => ({
      phase: p,
      pts: PROMPTS[p as keyof typeof PROMPTS].reduce((acc, q) => acc + (scores[q.key] ?? 0), 0),
    }));
    perPhase.sort((a, b) => a.pts - b.pts);
    const weakKey = perPhase[0]?.phase ?? "écoute";
    return (
      <div className="card-washi mx-auto max-w-lg rounded-2xl p-8 text-center">
        <p className="text-4xl">🏁</p>
        <h1 className="font-display text-3xl mt-3">Terminé !</h1>
        <p className="mt-3 font-mono text-4xl">{pct}%</p>
        <p className="mt-1 text-sm text-sumi/60 dark:text-washi/60">
          Suggestion : renforcez <span className="font-medium text-sumi dark:text-washi">{weakKey}</span> pour progresser vite.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {LANGUAGES.slice(0, 3).map((l) => (
            <Link
              key={l.code}
              href={`/${l.code}/lecons`}
              className="inline-flex items-center gap-2 rounded-full border border-sumi/15 px-4 py-2 text-sm hover:border-bamboo/50 transition-colors"
            >
              <Flag code={l.flag} country={l.name} size={16} />
              {l.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => { setStep("intro"); setIdx(0); setScores({}); startedAt.current = null; setTimer(60); }}
          className="mt-6 text-xs text-sumi/50 underline underline-offset-2 hover:text-sumi dark:text-washi/50"
        >
          Refaire le diagnostic
        </button>
      </div>
    );
  }

  const q = phases[idx];
  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-mono text-xs text-sumi/50 dark:text-washi/50">
          {idx + 1}/{total} · {phase}
        </span>
        <span className={`font-mono text-xl ${timer <= 10 ? "text-hanko" : "text-ai"}`}>{timer}s</span>
      </div>
      <div className="mb-5 h-1.5 rounded-full bg-sumi/10 dark:bg-washi/10 overflow-hidden">
        <div className="h-full bg-bamboo transition-all" style={{ width: `${((idx + 1) / total) * 100}%` }} />
      </div>
      {q && (
        <div className="card-washi rounded-2xl p-6">
          <p className="font-display text-2xl leading-snug">{q.prompt}</p>
          {q.hint && <p className="mt-2 text-xs text-sumi/50 dark:text-washi/50">Indice : {q.hint}</p>}
          <p className="mt-5 text-xs uppercase tracking-widest text-sumi/40 dark:text-washi/40">Auto-évaluation</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {[
              { v: 1, label: "Je ne sais pas" },
              { v: 2, label: "Presque" },
              { v: 3, label: "Facile" },
            ].map((o) => (
              <button
                key={o.v}
                onClick={() => setScore(q.key, o.v)}
                className="flex-1 rounded-xl border border-sumi/15 px-3 py-2.5 text-sm transition-colors hover:border-bamboo/60 hover:bg-bamboo/5 min-w-[90px]"
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}