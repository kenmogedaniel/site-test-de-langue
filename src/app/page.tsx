import Link from "next/link";

const THEMES = [
  "自己紹介と家族", "日時と予定", "日本語学習", "日本への興味",
  "日常生活と性格", "学校と将来", "支援者",
];

export default function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-sumi/10">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="hanko-stamp !w-14 !h-14 !border-2 text-sm font-display">面接</span>
            <span className="font-mono text-xs tracking-widest uppercase text-sumi/50 dark:text-washi/50">
              Nihongo Mensetsu Renshū
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            L'entretien en japonais,
            <br />
            <span className="text-ai">préparé question par question.</span>
          </h1>

          <p className="max-w-xl text-lg text-sumi/70 dark:text-washi/70 mb-10 leading-relaxed">
            95 questions réelles d'entretien, classées par thème et par niveau.
            Écoutez, répondez, progressez — du QCM guidé jusqu'à la réponse
            structurée, avec un retour immédiat à chaque tentative.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/signup" className="btn-primary">
              Commencer l'entraînement
            </Link>
            <Link href="/login" className="btn-secondary">
              J'ai déjà un compte
            </Link>
          </div>
        </div>

        {/* Motif de fond discret : traits verticaux évoquant des lattes shoji */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 1px, transparent 64px)",
          }}
        />
      </section>

      {/* Trois modes */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl mb-2">Trois niveaux, une progression</h2>
        <p className="text-sumi/60 dark:text-washi/60 mb-12">
          Chaque mode encode une exigence différente — pas seulement une difficulté.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-washi p-8">
            <span className="font-mono text-xs text-savane">易 — FACILE</span>
            <h3 className="font-display text-2xl mt-2 mb-3">QCM guidé</h3>
            <p className="text-sm text-sumi/70 dark:text-washi/70 leading-relaxed">
              Écoutez la question, choisissez parmi 4 réponses. Idéal pour
              mémoriser le vocabulaire et les structures de base.
            </p>
          </div>
          <div className="card-washi p-8">
            <span className="font-mono text-xs text-ai">中 — MOYEN</span>
            <h3 className="font-display text-2xl mt-2 mb-3">Réponse libre</h3>
            <p className="text-sm text-sumi/70 dark:text-washi/70 leading-relaxed">
              Écrivez votre propre réponse. Comparaison intelligente avec des
              modèles acceptables, tolérante aux petites variations.
            </p>
          </div>
          <div className="card-washi p-8">
            <span className="font-mono text-xs text-hanko">難 — DIFFICILE</span>
            <h3 className="font-display text-2xl mt-2 mb-3">Réponse structurée</h3>
            <p className="text-sm text-sumi/70 dark:text-washi/70 leading-relaxed">
              Justifiez, développez, argumentez. Évaluation détaillée avec
              suggestions concrètes d'amélioration.
            </p>
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-sumi/10">
        <h2 className="font-display text-3xl mb-8">7 thèmes, 95 questions réelles</h2>
        <div className="flex flex-wrap gap-3">
          {THEMES.map((t) => (
            <span
              key={t}
              className="font-body text-sm px-4 py-2 rounded-full border border-sumi/15 dark:border-washi/15"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-sumi/10 text-xs text-sumi/40 dark:text-washi/40">
        Nihongo Mensetsu Renshū — préparez votre entretien avec confiance.
      </footer>
    </main>
  );
}
