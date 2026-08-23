import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({ questionId: z.string().uuid() });

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Non authentifié." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const { error } = await supabase
    .from("review_flags")
    .upsert({ user_id: user.id, question_id: parsed.data.questionId }, { onConflict: "user_id,question_id" });

  if (error) return NextResponse.json({ error: "Échec." }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Non authentifié." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Requête invalide." }, { status: 400 });

  const { error } = await supabase
    .from("review_flags")
    .delete()
    .eq("user_id", user.id)
    .eq("question_id", parsed.data.questionId);

  if (error) return NextResponse.json({ error: "Échec." }, { status: 500 });
  return NextResponse.json({ success: true });
}
