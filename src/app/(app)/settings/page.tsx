import { createClient } from "@/lib/supabase/server";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("voice_preference, theme_pref")
    .eq("id", user!.id)
    .single();

  return (
    <div>
      <h1 className="font-display text-3xl mb-8">Réglages</h1>
      <SettingsForm
        userId={user!.id}
        initialVoice={profile?.voice_preference ?? "female"}
        initialTheme={profile?.theme_pref ?? "light"}
      />
    </div>
  );
}
