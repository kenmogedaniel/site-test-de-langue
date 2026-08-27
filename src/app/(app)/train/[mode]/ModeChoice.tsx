import Link from "next/link";
import Ruby from "@/components/ui/Ruby";

export default function ModeChoice({ themeId }: { themeId?: number }) {
  const suffix = themeId ? `&theme=${themeId}` : "";

  return (
    <div className="max-w-xl mx-auto text-center py-12">
      <p className="font-mono text-xs text-savane uppercase tracking-widest mb-2">
        <Ruby kanji="易" reading="やさ" /> — Facile
      </p>
      <h1 className="font-display text-3xl mb-3">Comment voulez-vous vous entraîner ?</h1>
      <p className="text-sm text-sumi/60 dark:text-washi/60 mb-10">
        Le test en conditions réelles vous donne 30 secondes par question, comme un vrai
        entretien. L'entraînement libre vous laisse le temps de réfléchir.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href={`/train/easy?timed=true${suffix}`}
          className="card-washi p-6 text-left hover:border-hanko/50 transition-colors group"
        >
          <span className="font-mono text-xs text-hanko">⏱ CHRONOMÉTRÉ</span>
          <h2 className="font-display text-xl mt-2 mb-2 group-hover:text-hanko transition-colors">
            Test en conditions réelles
          </h2>
          <p className="text-sm text-sumi/60 dark:text-washi/60">
            30 secondes par question. Pas de réponse à temps = question comptée incorrecte.
          </p>
        </Link>

        <Link
          href={`/train/easy?timed=false${suffix}`}
          className="card-washi p-6 text-left hover:border-ai/50 transition-colors group"
        >
          <span className="font-mono text-xs text-ai">∞ LIBRE</span>
          <h2 className="font-display text-xl mt-2 mb-2 group-hover:text-ai transition-colors">
            Entraînement libre
          </h2>
          <p className="text-sm text-sumi/60 dark:text-washi/60">
            Aucune limite de temps. Idéal pour mémoriser tranquillement.
          </p>
        </Link>
      </div>

      <Link
        href="/dashboard"
        className="inline-block mt-10 text-xs text-sumi/50 dark:text-washi/50 hover:text-ai"
      >
        ← Retour au tableau de bord
      </Link>
    </div>
  );
}
