import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/ui/SignOutButton";
import Ruby from "@/components/ui/Ruby";

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
          <div className="flex items-center gap-4">
            <Link
              href="/ja"
              className="text-xs text-sumi/40 dark:text-washi/40 hover:text-ai transition-colors"
              title="Retour au hub japonais"
            >
              ← 日本語
            </Link>
            <Link href="/dashboard" className="font-display text-xl">
              <Ruby kanji="面接" reading="めんせつ" />
            </Link>
          </div>
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
