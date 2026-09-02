import Link from "next/link";
import { N5_KANJI_GROUPS } from "@/lib/kanjiData";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export default function KanjiHubPage({
  searchParams,
}: {
  searchParams: { ui?: string };
}) {
  const lang: InterfaceLang = searchParams.ui === "en" ? "en" : "fr";
  const totalKanji = N5_KANJI_GROUPS.reduce((n, g) => n + g.kanji.length, 0);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-sumi/50 dark:text-washi/50">
            {t("kanji.eyebrow", lang)}
          </p>
        </div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Kanji</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60 dark:text-washi/60">
          {t("kanji.intro", lang).replace("{n}", String(totalKanji))}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-sumi/50 dark:text-washi/50">
          <span className="rounded-full bg-ai/10 px-3 py-1 text-ai">{totalKanji} kanji</span>
          <span>{t("kanji.levelBadge", lang)}</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {N5_KANJI_GROUPS.map((group) => (
          <div key={group.group} className="mb-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-hanko/15 font-display text-base text-hanko">
                {group.kanji[0].kanji}
              </span>
              <div>
                <h2 className="font-display text-xl">{lang === "en" ? group.groupEn : group.group}</h2>
                <p className="mt-0.5 text-xs text-sumi/55 dark:text-washi/55">
                  {lang === "en" ? group.descriptionEn : group.description}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.kanji.map((kanji) => (
                <Link
                  key={kanji.slug}
                  href={`/ja/kanji/${kanji.slug}?ui=${lang}`}
                  className="card-washi group flex flex-col items-center p-4 transition-all hover:-translate-y-0.5 hover:border-ai/40 hover:shadow-md"
                >
                  <span className="font-display text-4xl leading-none transition-colors group-hover:text-ai">
                    {kanji.kanji}
                  </span>
                  <span className="mt-2 font-mono text-xs text-sumi/50 dark:text-washi/50">
                    {kanji.strokeCount} {t("kanji.traits", lang)}
                  </span>
                  <span className="mt-1.5 text-center text-[11px] leading-snug text-sumi/70 dark:text-washi/70">
                    {lang === "en" ? kanji.enMeaning : kanji.frMeaning}
                  </span>
                  <span className="mt-1.5 truncate text-center text-[10px] text-sumi/45 dark:text-washi/45">
                    {kanji.onReading.join(" / ")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
