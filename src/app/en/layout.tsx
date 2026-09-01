import { createClient } from "@/lib/supabase/server";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const dynamic = "force-dynamic";

export default async function EnglishSectionLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen">
      <SiteHeader signedIn={!!user} lang="en" />
      {children}
      <SiteFooter lang="en" />
    </div>
  );
}
