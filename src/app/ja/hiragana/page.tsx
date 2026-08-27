import Link from "next/link";
import HiraganaTrainer from "@/components/training/HiraganaTrainer";
import Ruby from "@/components/ui/Ruby";

export default function HiraganaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <Link href="/ja" className="font-mono text-xs text-sumi/50 dark:text-washi/50 hover:text-ai">
        ← Retour aux modules
      </Link>
      <h1 className="font-display text-4xl mt-6 mb-2">
        <Ruby kanji="平仮名" reading="ひらがな" />
      </h1>
      <p className="text-sumi/60 dark:text-washi/60 mb-10 leading-relaxed">
        Les 46 sons de base de l'écriture japonaise. Cliquez sur un caractère pour
        l'entendre, puis testez-vous une fois à l'aise.
      </p>
      <HiraganaTrainer />
    </main>
  );
}
