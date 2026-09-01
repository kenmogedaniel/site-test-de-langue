import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AppHeader from "@/components/layout/AppHeader";
import AudioUnlock from "@/components/layout/AudioUnlock";

export const dynamic = "force-dynamic";

// Amorce le cookie de thème depuis la préférence en base pour l'utilisateur connecté :
// évite le flash clair→sombre au prochain chargement (le script anti-FOUC du layout
// racine ne lit que le cookie).
function themeSeedScript(themePref: string | null): string {
  const theme = themePref === "dark" || themePref === "light" ? themePref : null;
  if (!theme) return "";
  return `<script>try{document.cookie="theme=${theme};path=/;max-age=31536000;samesite=Lax";}catch(_){}</script>`;
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  let themePref: string | null = null;
  try {
    const { data: profile } = await supabase
      .from("profiles")
      .select("theme_pref")
      .eq("id", user.id)
      .single();
    themePref = profile?.theme_pref ?? null;
  } catch {
    // Ignoré : le cookie reste l'élément déclencheur si la base est indisponible.
  }

  return (
    <div className="min-h-screen">
      <script dangerouslySetInnerHTML={{ __html: themeSeedScript(themePref) }} />
      <AudioUnlock />
      <AppHeader />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">{children}</div>
    </div>
  );
}
