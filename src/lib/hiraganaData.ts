export interface KanaCell {
  kana: string;
  romaji: string;
}

export type KanaRow = (KanaCell | null)[];

/** Tableau gojūon (五十音) des hiragana de base, ligne par ligne (a/i/u/e/o). */
export const HIRAGANA_ROWS: KanaRow[] = [
  [{ kana: "あ", romaji: "a" }, { kana: "い", romaji: "i" }, { kana: "う", romaji: "u" }, { kana: "え", romaji: "e" }, { kana: "お", romaji: "o" }],
  [{ kana: "か", romaji: "ka" }, { kana: "き", romaji: "ki" }, { kana: "く", romaji: "ku" }, { kana: "け", romaji: "ke" }, { kana: "こ", romaji: "ko" }],
  [{ kana: "さ", romaji: "sa" }, { kana: "し", romaji: "shi" }, { kana: "す", romaji: "su" }, { kana: "せ", romaji: "se" }, { kana: "そ", romaji: "so" }],
  [{ kana: "た", romaji: "ta" }, { kana: "ち", romaji: "chi" }, { kana: "つ", romaji: "tsu" }, { kana: "て", romaji: "te" }, { kana: "と", romaji: "to" }],
  [{ kana: "な", romaji: "na" }, { kana: "に", romaji: "ni" }, { kana: "ぬ", romaji: "nu" }, { kana: "ね", romaji: "ne" }, { kana: "の", romaji: "no" }],
  [{ kana: "は", romaji: "ha" }, { kana: "ひ", romaji: "hi" }, { kana: "ふ", romaji: "fu" }, { kana: "へ", romaji: "he" }, { kana: "ほ", romaji: "ho" }],
  [{ kana: "ま", romaji: "ma" }, { kana: "み", romaji: "mi" }, { kana: "む", romaji: "mu" }, { kana: "め", romaji: "me" }, { kana: "も", romaji: "mo" }],
  [{ kana: "や", romaji: "ya" }, null, { kana: "ゆ", romaji: "yu" }, null, { kana: "よ", romaji: "yo" }],
  [{ kana: "ら", romaji: "ra" }, { kana: "り", romaji: "ri" }, { kana: "る", romaji: "ru" }, { kana: "れ", romaji: "re" }, { kana: "ろ", romaji: "ro" }],
  [{ kana: "わ", romaji: "wa" }, null, null, null, { kana: "を", romaji: "wo" }],
  [{ kana: "ん", romaji: "n" }, null, null, null, null],
];

/** Liste à plat, pratique pour générer le quiz. */
export const HIRAGANA_FLAT: KanaCell[] = HIRAGANA_ROWS.flat().filter((c): c is KanaCell => c !== null);
