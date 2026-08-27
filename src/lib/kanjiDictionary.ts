/**
 * Dictionnaire de normalisation kanji → hiragana pour le vocabulaire courant
 * susceptible d'apparaître dans les réponses des utilisateurs sur les thèmes
 * de l'entretien (famille, temps, Japon, école, quotidien, parrain...).
 *
 * Notre contenu de référence (réponses modèles) est écrit en hiragana pur,
 * mais un utilisateur tape naturellement en kanji via son clavier japonais
 * (ex: 楽しい au lieu de たのしい). Sans cette normalisation, une comparaison
 * caractère par caractère considère les deux écritures comme totalement
 * différentes alors qu'il s'agit exactement du même mot.
 *
 * Trié du plus long au plus court à l'usage, pour que les mots composés
 * (ex: 大学生) soient remplacés avant leurs sous-parties (大学, 学生, 生).
 */
export const KANJI_TO_HIRAGANA: [string, string][] = [
  // Famille
  ["両親", "りょうしん"], ["家族", "かぞく"], ["兄弟", "きょうだい"],
  ["お父さん", "おとうさん"], ["お母さん", "おかあさん"],
  ["父親", "ちちおや"], ["母親", "ははおや"],
  ["父", "ちち"], ["母", "はは"], ["兄", "あに"], ["姉", "あね"],
  ["弟", "おとうと"], ["妹", "いもうと"], ["家内", "かない"],

  // Temps / dates
  ["日曜日", "にちようび"], ["月曜日", "げつようび"], ["火曜日", "かようび"],
  ["水曜日", "すいようび"], ["木曜日", "もくようび"], ["金曜日", "きんようび"],
  ["土曜日", "どようび"], ["週末", "しゅうまつ"], ["毎日", "まいにち"],
  ["毎朝", "まいあさ"], ["毎晩", "まいばん"], ["今", "いま"],
  ["時間", "じかん"], ["時", "じ"],

  // Japon / motivation
  ["日本語", "にほんご"], ["日本", "にほん"], ["富士山", "ふじさん"],
  ["安全", "あんぜん"], ["文化", "ぶんか"], ["技術", "ぎじゅつ"],
  ["規則", "きそく"], ["夏", "なつ"], ["冬", "ふゆ"],

  // Études
  ["漢字", "かんじ"], ["勉強", "べんきょう"], ["難しい", "むずかしい"],
  ["易しい", "やさしい"], ["簡単", "かんたん"], ["先生", "せんせい"],
  ["生徒", "せいと"], ["大学生", "だいがくせい"], ["高校生", "こうこうせい"],
  ["学生", "がくせい"], ["本", "ほん"], ["楽しい", "たのしい"],

  // Quotidien / personnalité
  ["休みの日", "やすみのひ"], ["趣味", "しゅみ"], ["料理", "りょうり"],
  ["運動", "うんどう"], ["性格", "せいかく"], ["結婚", "けっこん"],
  ["独身", "どくしん"], ["元気", "げんき"], ["健康", "けんこう"],
  ["病気", "びょうき"], ["食事", "しょくじ"], ["生活", "せいかつ"],

  // École / avenir / argent
  ["学校", "がっこう"], ["専門", "せんもん"], ["大学", "だいがく"],
  ["卒業", "そつぎょう"], ["就職", "しゅうしょく"], ["会社員", "かいしゃいん"],
  ["会社", "かいしゃ"], ["学費", "がくひ"], ["年収", "ねんしゅう"],
  ["将来", "しょうらい"], ["失敗", "しっぱい"], ["経済", "けいざい"],
  ["仕事", "しごと"], ["社会人", "しゃかいじん"],

  // Parrain / soutien
  ["支援者", "しえんしゃ"], ["連絡", "れんらく"], ["質問", "しつもん"],
  ["天気", "てんき"], ["有名", "ゆうめい"], ["授業", "じゅぎょう"],
  ["挨拶", "あいさつ"], ["残業", "ざんぎょう"], ["大切", "たいせつ"],
  ["一番", "いちばん"], ["最後", "さいご"],

  // Verbes / adjectifs fréquents
  ["好き", "すき"], ["嫌い", "きらい"], ["大好き", "だいすき"],
  ["行きたい", "いきたい"], ["来た", "きた"], ["住んでいます", "すんでいます"],
  ["働いています", "はたらいています"], ["思います", "おもいます"],
  ["できます", "できます"], ["分かります", "わかります"],
  ["答えます", "こたえます"], ["選びました", "えらびました"],

  // Nombres kanji (rarement tapés mais possibles)
  ["一人", "ひとり"], ["二人", "ふたり"], ["三人", "さんにん"],
];

/** Remplace les kanji connus du dictionnaire par leur lecture hiragana, du plus long motif au plus court. */
export function kanjiToHiraganaApprox(text: string): string {
  let result = text;
  for (const [kanji, hiragana] of KANJI_TO_HIRAGANA) {
    if (result.includes(kanji)) {
      result = result.split(kanji).join(hiragana);
    }
  }
  return result;
}
