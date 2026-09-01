import { NextResponse } from "next/server";

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: number;
};

interface Bucket {
  windowStart: number;
  count: number;
}

// Compteurs en mémoire (fenêtre fixe). Suffisant en local ; sur les fonctions
// serverless Vercel chaque instance garde ses propres compteurs, ce qui reste une
// protection utile contre les abus (aucune donnée sensible n'est touchée).
const buckets = new Map<string, Bucket>();

// Fenêtre maximale retenue pour le nettoyage : toute entrée plus ancienne est purgée.
const MAX_WINDOW_MS = 10 * 60_000;

const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (now - bucket.windowStart > MAX_WINDOW_MS) buckets.delete(key);
  }
}, 60_000);

// Évite que le timer du module ne bloque la sortie du processus (tests, CLI, etc.).
if (typeof cleanupTimer.unref === "function") cleanupTimer.unref();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimit(
  clientKey: string,
  { limit, windowMs }: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(clientKey);

  if (!bucket || now - bucket.windowStart >= windowMs) {
    buckets.set(clientKey, { windowStart: now, count: 1 });
    return { success: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (bucket.count >= limit) {
    return { success: false, remaining: 0, resetAt: bucket.windowStart + windowMs };
  }

  bucket.count += 1;
  return { success: true, remaining: limit - bucket.count, resetAt: bucket.windowStart + windowMs };
}

export function tooManyRequestsResponse(resetAt: number, remaining = 0): NextResponse {
  const retryAfter = Math.max(1, Math.ceil((resetAt - Date.now()) / 1000));
  return NextResponse.json(
    { error: "Trop de requêtes. Réessayez dans quelques secondes." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfter),
        "X-RateLimit-Remaining": String(remaining),
      },
    }
  );
}