import { createClient } from "@/lib/supabase/server";
import SettingsForm from "./SettingsForm";
import type { VoicePref } from "@/types/database";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("voice_prefs, theme_pref, interface_lang")
    .eq("id", user!.id)
    .single();

  return (
    <div>
      <h1 className="font-display text-3xl mb-8">Réglages</h1>
      <SettingsForm
        userId={user!.id}
        initialTheme={profile?.theme_pref ?? "light"}
        initialInterfaceLang={profile?.interface_lang ?? "fr"}
        initialVoicePrefs={(profile?.voice_prefs ?? {}) as Record<string, VoicePref>}
      />
    </div>
  );
}
