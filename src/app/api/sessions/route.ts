import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const createSessionSchema = z.object({
  mode: z.enum(["easy", "medium", "hard"]),
  themeFilter: z.number().int().positive().optional(),
});

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = createSessionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("sessions")
    .insert({
      user_id: user.id,
      mode: parsed.data.mode,
      theme_filter: parsed.data.themeFilter ?? null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: "Impossible de créer la session." }, { status: 500 });
  }

  return NextResponse.json({ session: data });
}

const endSessionSchema = z.object({
  sessionId: z.string().uuid(),
});

export async function PATCH(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = endSessionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { error } = await supabase
    .from("sessions")
    .update({ ended_at: new Date().toISOString() })
    .eq("id", parsed.data.sessionId)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: "Impossible de terminer la session." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
