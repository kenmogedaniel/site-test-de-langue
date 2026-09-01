import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_N5_KANJI, getKanji, getKanjiGroup } from "@/lib/kanjiData";
import SpeakButton from "@/components/training/SpeakButton";
import DrawingCanvas from "@/components/training/DrawingCanvas";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { t, type InterfaceLang } from "@/lib/uiTranslations";

export function generateStaticParams() {
  return ALL_N5_KANJI.map((k) => ({ slug: k.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const kanji = getKanji(params.slug);
  if (!kanji) return {};
  return { title: `${kanji.kanji} — Kanji | Kadoya` };
}

export default function KanjiDetailPage({ params, searchParams }: Params & { searchParams?: { ui?: string } }) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const kanji = getKanji(params.slug);
  if (!kanji) notFound();

  const group = getKanjiGroup(params.slug);
  const idx = ALL_N5_KANJI.findIndex((k) => k.slug === params.slug);
  const prev = idx > 0 ? ALL_N5_KANJI[idx - 1] : null;
  const next = idx < ALL_N5_KANJI.length - 1 ? ALL_N5_KANJI[idx + 1] : null;
  const meaning = lang === "en" ? kanji.enMeaning : kanji.frMeaning;
  const groupName = lang === "en" ? group?.groupEn : group?.group;
  const ui = `?ui=${lang}`;

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-20">
      <nav className="flex items-center gap-2 font-mono text-xs text-sumi/45 dark:text-washi/45">
        <Link href={`/ja${ui}`} className="hover:text-ai">{t("kanji.breadcrumbJa", lang)}</Link>
        <span>/</span>
        <Link href={`/ja/kanji${ui}`} className="hover:text-ai">Kanji</Link>
        <span>/</span>
        <span className="text-sumi/70 dark:text-washi/70">{kanji.kanji}</span>
        <span className="ml-auto"><LanguageToggle lang={lang} /></span>
      </nav>

      {/* Grande carte du kanji */}
      <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center rounded-3xl bg-sumi/[0.03] px-8 py-6 dark:bg-washi/[0.05]">
          <span className="font-display text-8xl leading-none">{kanji.kanji}</span>
          <span className="mt-3 font-mono text-sm text-ai">{kanji.strokeCount} {t("kanji.traits", lang)}</span>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="font-display text-3xl">{kanji.kanji}</h1>
          <p className="mt-1 text-lg text-sumi/60 dark:text-washi/60">{meaning}</p>
          {group && (
            <span className="mt-1 inline-block rounded-full bg-sumi/5 px-2 py-0.5 text-[10px] text-sumi/50 dark:bg-washi/10 dark:text-washi/50">
              {groupName}
            </span>
          )}

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">{t("kanji.onReading", lang)}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {kanji.onReading.map((r) => (
                  <span key={r} className="rounded-full bg-ai/10 px-2.5 py-0.5 text-sm text-ai">{r}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-sumi/45 dark:text-washi/45">{t("kanji.kunReading", lang)}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {kanji.kunReading.filter(Boolean).map((r) => (
                  <span key={r} className="rounded-full bg-savane/10 px-2.5 py-0.5 text-sm text-savane">{r}</span>
                ))}
                {kanji.kunReading.filter(Boolean).length === 0 && (
                  <span className="text-xs text-sumi/40 dark:text-washi/40">—</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mnémonique */}
      <div className="card-washi mt-8 border-l-4 border-l-savane/40 p-5">
        <p className="text-[10px] uppercase tracking-widest text-savane">{t("kanji.mnemonic", lang)}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-sumi/75 dark:text-washi/75">
          {lang === "en" ? kanji.enMnemonic : kanji.mnemonic}
        </p>
      </div>

      {/* Mots d'exemple */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("kanji.examplesTitle", lang)}
        </h2>
        <div className="card-washi mt-4 divide-y divide-sumi/8 dark:divide-washi/10">
          {kanji.examples.map((ex) => (
            <div key={ex.word} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <SpeakButton text={ex.word} />
              <div className="min-w-0">
                <p className="font-display text-base">{ex.word}</p>
                <p className="font-mono text-[11px] text-sumi/50 dark:text-washi/50">{ex.reading}</p>
              </div>
              <span className="ml-auto text-right text-sm text-sumi/65 dark:text-washi/65">
                {lang === "en" ? ex.en : ex.fr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Ordre des traits */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("kanji.strokeTitle", lang, { n: String(kanji.strokeCount) })}
        </h2>
        <div className="card-washi mt-4 p-5">
          <div className="grid grid-cols-3 gap-3 text-center">
            {Array.from({ length: kanji.strokeCount }).map((_, i) => (
              <div key={i} className="flex flex-col items-center rounded-xl bg-sumi/[0.03] p-3 dark:bg-washi/[0.04]">
                <span className="font-mono text-lg font-bold text-ai">{i + 1}</span>
                <span className="text-[10px] text-sumi/45 dark:text-washi/45">
                  {i === 0 ? t("kanji.strokeFirst", lang) : t("kanji.strokeNth", lang, { n: String(i + 1) })}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-ai/15 bg-ai/[0.04] px-4 py-3 text-xs leading-relaxed text-sumi/65 dark:text-washi/65">
            <p className="font-medium text-ai mb-1">{t("kanji.rulesTitle", lang)}</p>
            <p>{t("kanji.rulesBody", lang)}</p>
          </div>
        </div>
      </section>

      {/* Entraînement au tracé */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-sumi/45 dark:text-washi/45">
          {t("kanji.practiceTitle", lang, { kanji: kanji.kanji })}
        </h2>
        <div className="mt-4">
          <DrawingCanvas character={kanji.kanji} lang={lang} />
        </div>
      </section>

      {/* Navigation */}
      <nav className="mt-12 flex items-stretch justify-between gap-4">
        {prev ? (
          <Link href={`/ja/kanji/${prev.slug}${ui}`} className="btn-secondary flex-1 !items-start text-left text-xs">
            ← {prev.kanji} {lang === "en" ? prev.enMeaning : prev.frMeaning}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link href={`/ja/kanji/${next.slug}${ui}`} className="btn-primary flex-1 !items-start text-left text-xs">
            {next.kanji} {lang === "en" ? next.enMeaning : next.frMeaning} →
          </Link>
        ) : (
          <Link href={`/ja/kanji${ui}`} className="btn-primary flex-1 !items-start text-left text-xs">
            {t("kanji.backToKanji", lang)}
          </Link>
        )}
      </nav>
    </main>
  );
}
