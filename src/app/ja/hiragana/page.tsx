import Link from "next/link";
import HiraganaTrainer from "@/components/training/HiraganaTrainer";
import Ruby from "@/components/ui/Ruby";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export default function HiraganaPage({
  searchParams,
}: {
  searchParams: { ui?: string };
}) {
  const lang: InterfaceLang = searchParams.ui === "en" ? "en" : "fr";
  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <div className="flex items-center justify-between">
        <Link href="/ja" className="font-mono text-xs text-sumi/50 dark:text-washi/50 hover:text-ai">
          {t("hiragana.back", lang)}
        </Link>
      </div>
      <h1 className="font-display text-4xl mt-6 mb-2">
        <Ruby kanji="å¹³ä»®å" reading="ã²ã‚‰ãŒãª" />
      </h1>
      <p className="text-sumi/60 dark:text-washi/60 mb-10 leading-relaxed">
        {t("hiragana.intro", lang)}
      </p>
      <HiraganaTrainer />
    </main>
  );
}
