import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CertificateContent from "./CertificateContent";
import { LANGUAGES } from "@/lib/languages";
import { lessonTotal } from "@/lib/courseTotals";

export const dynamic = "force-dynamic";

export const metadata = { title: "Certificat Kadoya" };

const NAMED = ["ja", "en", "es", "de", "it", "pt", "ru", "cn", "ar", "hi", "tr"];

export default async function CertificatePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: profile }, { data: lessonProgress }] = await Promise.all([
    supabase.from("profiles").select("display_name").eq("id", user.id).single(),
    supabase.from("lesson_progress").select("course_code").eq("user_id", user.id),
  ]);

  const doneByCode = new Map<string, number>();
  (lessonProgress ?? []).forEach((lp) => doneByCode.set(lp.course_code, (doneByCode.get(lp.course_code) ?? 0) + 1));

  const completed: { code: string; name: string; flag: string; done: number; total: number }[] = [];
  for (const code of NAMED) {
    const done = doneByCode.get(code) ?? 0;
    const total = lessonTotal(code);
    if (done > 0 && total > 0) {
      const meta = LANGUAGES.find((l) => l.code === code);
      completed.push({ code, name: meta?.name ?? code, flag: meta?.flag ?? code, done, total });
    }
  }

  const name = profile?.display_name ?? user.email?.split("@")[0] ?? "Étudiant";

  return <CertificateContent name={name} email={user.email ?? ""} completed={completed} date={new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })} />;
}