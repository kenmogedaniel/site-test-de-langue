import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AppHeader from "@/components/layout/AppHeader";
import AudioUnlock from "@/components/layout/AudioUnlock";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen">
      <AudioUnlock />
      <AppHeader />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">{children}</div>
    </div>
  );
}
