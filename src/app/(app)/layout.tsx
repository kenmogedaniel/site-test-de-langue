import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/ui/SignOutButton";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen">
      <header className="border-b border-sumi/10 dark:border-washi/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="font-display text-xl">
            面接日本語
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/dashboard" className="hover:text-ai transition-colors">
              Tableau de bord
            </Link>
            <Link href="/history" className="hover:text-ai transition-colors">
              Historique
            </Link>
            <Link href="/settings" className="hover:text-ai transition-colors">
              Réglages
            </Link>
            <SignOutButton />
          </nav>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}
