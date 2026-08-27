import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { callClaude } from "@/lib/anthropic";
import { kanjiToHiraganaApprox } from "@/lib/kanjiDictionary";

const schema = z.object({ text: z.string().min(1).max(500) });

const SYSTEM_PROMPT = `Tu convertis un texte japonais en hiragana pur. Remplace chaque kanji par sa lecture en hiragana selon le contexte de la phrase. Garde les mots déjà en katakana, les chiffres et la ponctuation tels quels. Réponds UNIQUEMENT avec le texte converti, sans aucune explication ni guillemets.`;

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Non authentifié." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const raw = await callClaude(SYSTEM_PROMPT, parsed.data.text, 300);
  if (raw) {
    return NextResponse.json({ hiragana: raw.trim(), convertedByAI: true });
  }

  // Repli : notre dictionnaire local ne couvre qu'un vocabulaire limité, mais évite
  // de renvoyer le texte kanji tel quel si l'IA est indisponible.
  return NextResponse.json({ hiragana: kanjiToHiraganaApprox(parsed.data.text), convertedByAI: false });
}
