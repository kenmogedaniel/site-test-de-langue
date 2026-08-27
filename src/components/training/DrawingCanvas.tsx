"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Zone de dessin pour s'entraîner à tracer un caractère japonais, à la souris sur
 * ordinateur ou au doigt sur mobile/tablette. Utilise la Pointer Events API, qui
 * unifie souris/tactile/stylet en une seule API — pas besoin de gérer séparément
 * mousedown/touchstart.
 *
 * Le caractère est affiché en fond, très pâle, comme guide de calque (comme les
 * cahiers d'écriture japonais). « Effacer » réinitialise le tracé sans perdre le guide.
 */
export default function DrawingCanvas({ character }: { character: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const SIZE = 280; // taille logique en pixels CSS (le canvas interne est mis à l'échelle pour la netteté)

  function drawGuide(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Cadre
    ctx.strokeStyle = "rgba(34,37,43,0.15)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(1, 1, SIZE - 2, SIZE - 2);

    // Croix de repère façon papier à kanji
    ctx.setLineDash([4, 5]);
    ctx.strokeStyle = "rgba(34,37,43,0.15)";
    ctx.beginPath();
    ctx.moveTo(SIZE / 2, 0);
    ctx.lineTo(SIZE / 2, SIZE);
    ctx.moveTo(0, SIZE / 2);
    ctx.lineTo(SIZE, SIZE / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Caractère en fond, très pâle
    if (showGuide) {
      ctx.fillStyle = "rgba(34,37,43,0.16)";
      ctx.font = `${SIZE * 0.72}px "Hiragino Mincho ProN", "Yu Mincho", "MS Mincho", serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(character, SIZE / 2, SIZE / 2 + SIZE * 0.04);
    }
  }

  function setupCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    drawGuide(ctx);
  }

  useEffect(() => {
    setupCanvas();
    setHasDrawn(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character, showGuide]);

  function getPoint(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPointRef.current = getPoint(e);
    setHasDrawn(true);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const point = getPoint(e);
    const last = lastPointRef.current;
    if (last) {
      ctx.strokeStyle = "#1F3A5F";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }
    lastPointRef.current = point;
  }

  function handlePointerUp() {
    drawingRef.current = false;
    lastPointRef.current = null;
  }

  function handleClear() {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawGuide(ctx);
    setHasDrawn(false);
  }

  return (
    <div className="card-washi p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium">S'entraîner à tracer</p>
        <label className="flex items-center gap-2 text-xs text-sumi/60 dark:text-washi/60">
          <input
            type="checkbox"
            checked={showGuide}
            onChange={(e) => setShowGuide(e.target.checked)}
            className="accent-ai"
          />
          Afficher le modèle
        </label>
      </div>

      <div ref={containerRef} className="flex justify-center">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="rounded-xl bg-white dark:bg-white/5 cursor-crosshair touch-none"
        />
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button onClick={handleClear} disabled={!hasDrawn} className="btn-secondary !px-4 !py-2 text-sm disabled:opacity-40">
          ↺ Effacer
        </button>
      </div>
      <p className="text-xs text-center text-sumi/40 dark:text-washi/40 mt-3">
        À la souris sur ordinateur, au doigt sur mobile/tablette.
      </p>
    </div>
  );
}
