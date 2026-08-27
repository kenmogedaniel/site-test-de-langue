import Link from "next/link";
import { HIRAGANA_LESSONS, KATAKANA_LESSONS } from "@/lib/kanaLessons";
import { MINNA_LESSONS } from "@/lib/minnaLessons";

function KanaTrackCard({
  title,
  subtitle,
  lessons,
  accent,
}: {
  title: string;
  subtitle: string;
  lessons: typeof HIRAGANA_LESSONS;
  accent: string;
}) {
  return (
    <div className="card-washi p-7">
      <div className="flex items-baseline justify-between">
        <h3 className={`font-display text-2xl ${accent}`}>{title}</h3>
        <span className="font-mono text-xs text-sumi/40 dark:text-washi/40">{lessons.length} leçons</span>
      </div>
      <p className="mt-1 text-sm text-sumi/60 dark:text-washi/60">{subtitle}</p>
      <ul className="mt-5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {lessons.map((l) => (
          <li key={l.slug}>
            <Link
              href={`/ja/lecons/${l.slug}`}
              className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-sumi/5 dark:hover:bg-washi/5"
            >
              <span className="text-sm">{l.groupLabel}</span>
              <span className="font-display text-lg opacity-70">{l.entries[0].kana}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/ja/lecons/${lessons[0].slug}`} className="mt-4 inline-block text-xs font-medium text-ai">
        Commencer ce parcours →
      </Link>
    </div>
  );
}

export default function LessonsHubPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-4">
        <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
          Parcours guidés
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Leçons</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          Apprenez à lire les kana ligne par ligne, puis construisez vos premières
          phrases avec un cours structuré en 25 leçons — chaque mot et chaque exemple
          se lisent à voix haute.
        </p>
      </section>

      {/* Parcours kana */}
      <section id="kana" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sakura/25 font-display text-base text-sakura-deep dark:text-sakura">
            仮名
          </span>
          <h2 className="font-display text-2xl">Les syllabaires</h2>
        </div>
        <p className="mt-2 max-w-lg text-sm text-sumi/60 dark:text-washi/60">
          Une ligne à la fois : traits de plume, astuces de reconnaissance et mots
          d'entraînement qui n'utilisent que les kana déjà appris.
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <KanaTrackCard
            title="Hiragana"
            subtitle="Le syllabaire natif, la base de tout."
            lessons={HIRAGANA_LESSONS}
            accent="text-ai"
          />
          <KanaTrackCard
            title="Katakana"
            subtitle="Pour les mots étrangers et les noms propres."
            lessons={KATAKANA_LESSONS}
            accent="text-hanko"
          />
        </div>
      </section>

      {/* Cours en 25 leçons */}
      <section id="cours" className="scroll-mt-20 bg-white/40 py-14 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ai/10 font-display text-base text-ai">
              課
            </span>
            <h2 className="font-display text-2xl">Le cours en 25 leçons</h2>
          </div>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
            La progression canonique du japonais débutant (dans l'esprit des manuels
            classiques comme Minna no Nihongo) : grammaire expliquée simplement,
            exemples audio et vocabulaire essentiel par leçon.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MINNA_LESSONS.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/ja/lecons/${lesson.slug}`}
                className="card-washi group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-md"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-sumi/40 dark:text-washi/40">
                  Leçon {String(lesson.number).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-body font-semibold transition-colors group-hover:text-ai">
                  {lesson.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-sumi/55 dark:text-washi/55">
                  {lesson.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {lesson.grammar.slice(0, 2).map((g) => (
                    <span key={g} className="rounded-full bg-sumi/5 px-2 py-0.5 text-[10px] text-sumi/60 dark:bg-washi/10 dark:text-washi/60">
                      {g}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <aside className="card-washi mt-8 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold">Audio officiel gratuit</h3>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-sumi/55 dark:text-washi/55">
                L'éditeur 3A Corporation met gratuitement à disposition les enregistrements
                MP3 officiels des 25 leçons de Minna no Nihongo Shokyu I (2e édition) sur son site.
              </p>
            </div>
            <a
              href="https://3anet.co.jp/np/en/resrcs/230020"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 !py-2 text-xs"
            >
              Écouter sur 3anet.co.jp →
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
