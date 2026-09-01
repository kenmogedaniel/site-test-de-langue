import { NextResponse } from "next/server";
import { z } from "zod";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/rateLimit";

const schema = z.object({
  text: z.string().min(1).max(800),
  voice: z.enum(["female", "male"]).optional().default("female"),
  // Code de langue Google (tl) : "ja" (japonais) ou "en" (anglais). Les autres
  // langues du site pourront être ajoutées en étendant cette énumération.
  lang: z.enum(["ja", "en"]).optional().default("ja"),
});

// Googleroute : relais vers le moteur TTS de Google (voix japonaise naturelle) afin
// d'éviter la Web Speech API du navigateur, médiocre sur Android (voix robotique,
// saccades). La requête est faite coté serveur pour contourner le CORS du navigateur.
const GOOGLE_TTS_URL = "https://translate.google.com/translate_tts";
// Jeton fourni par le client officiel "translate.google.com" ; requis par l'endpoint.
const TOKEN_OK = "tw-ob";

// NB : route publique (ne nécessite pas d'authentification) pour que la bonne qualité
// audio profite aussi aux pages publiques (/ja/*). Elle ne renvoie que de l'audio de
// synthèse à partir d'un texte fourni par l'utilisateur : aucune donnée sensible.

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  // Limite de débit par IP : la route est publique et fait appel à un service externe,
  // elle doit être protégée contre les abus (30 requêtes / min / IP).
  const ip = getClientIp(request);
  const limit = rateLimit(`tts:${ip}`, { limit: 30, windowMs: 60_000 });
  if (!limit.success) return tooManyRequestsResponse(limit.resetAt, limit.remaining);

  const { text, voice, lang } = parsed.data;

  // Google limite chaque requête à ~200 caractères : on découpe en phrases sur les
  // ponctuations et on concatène les petits MP3 générés. (La ponctuation japonaise
  // et anglaise est couverte par le jeu de caractères ; inoffensif si inutile.)
  const sentences = text
    .split(/(?<=[。！？.!?])/)
    .map((s) => s.trim())
    .filter(Boolean);
  const chunks = (sentences.length ? sentences : [text]).reduce<string[]>((acc, s) => {
    // Regroupe les phrases pour rester sous la limite tout en réduisant le nombre d'appels.
    let last = acc[acc.length - 1];
    if (last && (last + s).length <= 190) {
      acc[acc.length - 1] = last + s;
    } else {
      acc.push(s);
    }
    return acc;
  }, []);

  const buffers: Buffer[] = [];
  for (const chunk of chunks) {
    try {
      const url =
        `${GOOGLE_TTS_URL}?ie=UTF-8&tl=${lang}&client=${TOKEN_OK}&ttsspeed=1&` +
        `q=${encodeURIComponent(chunk)}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`Google TTS HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      // Google renvoie parfois une page HTML (anti-bot) au lieu d'un MP3 : on détecte
      // alors un échec. Un MP3 commence par un en-tête ID3 ("ID3") ou par 0xFFE sync.
      const isMp3 =
        buf.length >= 2 &&
        (buf[0] === 0x49 /* I */ && buf[1] === 0x44 /* D */) ||
        (buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0);
      if (buf.length === 0 || !isMp3) throw new Error("Réponse non-audio");
      buffers.push(buf);
    } catch {
      // Fallback : si Google TTS échoue, le client bascule sur la Web Speech API locale.
      return NextResponse.json({ error: "Moteur TTS indisponible." }, { status: 502 });
    }
  }

  const audio = Buffer.concat(buffers);
  return new NextResponse(new Uint8Array(audio), {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=86400, immutable",
      "Content-Length": String(audio.length),
      // Voix transmise au client pour référence (inaudible dans le flux Google, qui
      // ne fournit qu'une seule voix japonaise).
      "X-Voice": voice,
    },
  });
}
