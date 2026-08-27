export interface KanaEntry {
  kana: string;
  romaji: string;
  strokes: number;
}

export interface KanaWord {
  jp: string;
  romaji: string;
  fr: string;
}

export interface KanaLesson {
  slug: string;
  script: "hiragana" | "katakana";
  groupLabel: string;
  title: string;
  entries: KanaEntry[];
  words: KanaWord[];
  tip: string;
}

const HIRAGANA_STROKES: Record<string, number> = {
  あ: 3, い: 2, う: 2, え: 2, お: 3,
  か: 3, き: 4, く: 1, け: 3, こ: 2,
  さ: 2, し: 1, す: 2, せ: 3, そ: 1,
  た: 4, ち: 2, つ: 1, て: 1, と: 2,
  な: 4, に: 3, ぬ: 2, ね: 2, の: 1,
  は: 3, ひ: 1, ふ: 4, へ: 1, ほ: 4,
  ま: 3, み: 2, む: 3, め: 2, も: 3,
  や: 3, ゆ: 2, よ: 2,
  ら: 2, り: 2, る: 1, れ: 1, ろ: 2,
  わ: 2, を: 3, ん: 1,
};

const KATAKANA_STROKES: Record<string, number> = {
  ア: 2, イ: 2, ウ: 3, エ: 3, オ: 3,
  カ: 2, キ: 3, ク: 2, ケ: 3, コ: 2,
  サ: 3, シ: 3, ス: 2, セ: 2, ソ: 2,
  タ: 3, チ: 3, ツ: 3, テ: 3, ト: 2,
  ナ: 2, ニ: 2, ヌ: 2, ネ: 2, ノ: 1,
  ハ: 2, ヒ: 2, フ: 1, ヘ: 2, ホ: 4,
  マ: 2, ミ: 3, ム: 2, メ: 2, モ: 3,
  ヤ: 2, ユ: 2, ヨ: 3,
  ラ: 2, リ: 2, ル: 2, レ: 1, ロ: 3,
  ワ: 2, ヲ: 3, ン: 2,
};

function hira(entries: [string, string][]): KanaEntry[] {
  return entries.map(([kana, romaji]) => ({ kana, romaji, strokes: HIRAGANA_STROKES[kana] }));
}

function kata(entries: [string, string][]): KanaEntry[] {
  return entries.map(([kana, romaji]) => ({ kana, romaji, strokes: KATAKANA_STROKES[kana] }));
}

export const HIRAGANA_LESSONS: KanaLesson[] = [
  {
    slug: "hiragana-a",
    script: "hiragana",
    groupLabel: "あ行",
    title: "La ligne A — a, i, u, e, o",
    entries: hira([["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]]),
    words: [
      { jp: "あい", romaji: "ai", fr: "amour" },
      { jp: "いえ", romaji: "ie", fr: "maison" },
      { jp: "うえ", romaji: "ue", fr: "dessus" },
      { jp: "あお", romaji: "ao", fr: "bleu" },
      { jp: "おい", romaji: "oi", fr: "neveu" },
    ],
    tip: "Tout part de ces cinq sons. あ et お se ressemblent : repérez la petite boucle fermée de お pour les distinguer.",
  },
  {
    slug: "hiragana-ka",
    script: "hiragana",
    groupLabel: "か行",
    title: "La ligne KA — ka, ki, ku, ke, ko",
    entries: hira([["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]]),
    words: [
      { jp: "あか", romaji: "aka", fr: "rouge" },
      { jp: "かお", romaji: "kao", fr: "visage" },
      { jp: "いけ", romaji: "ike", fr: "étang" },
      { jp: "こえ", romaji: "koe", fr: "voix" },
      { jp: "あき", romaji: "aki", fr: "automne" },
    ],
    tip: "Avec deux lignes apprises, vous pouvez déjà écrire de vrais mots. Entraînez-vous à les lire sans relire le romaji !",
  },
  {
    slug: "hiragana-sa",
    script: "hiragana",
    groupLabel: "さ行",
    title: "La ligne SA — sa, shi, su, se, so",
    entries: hira([["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]]),
    words: [
      { jp: "すし", romaji: "sushi", fr: "sushi" },
      { jp: "いす", romaji: "isu", fr: "chaise" },
      { jp: "せかい", romaji: "sekai", fr: "le monde" },
      { jp: "しか", romaji: "shika", fr: "cerf" },
      { jp: "あさい", romaji: "asai", fr: "peu profond" },
    ],
    tip: "し est le seul « shi » : en japonais, le son « si » n'existe pas, c'est toujours « shi ».",
  },
  {
    slug: "hiragana-ta",
    script: "hiragana",
    groupLabel: "た行",
    title: "La ligne TA — ta, chi, tsu, te, to",
    entries: hira([["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]]),
    words: [
      { jp: "した", romaji: "shita", fr: "dessous" },
      { jp: "とけい", romaji: "tokei", fr: "montre" },
      { jp: "くつ", romaji: "kutsu", fr: "chaussures" },
      { jp: "ちかてつ", romaji: "chikatetsu", fr: "métro" },
      { jp: "あした", romaji: "ashita", fr: "demain" },
    ],
    tip: "つ et し piègent les débutants : l'orientation du trait final change tout. Comparez-les côte à côte.",
  },
  {
    slug: "hiragana-na",
    script: "hiragana",
    groupLabel: "な行",
    title: "La ligne NA — na, ni, nu, ne, no",
    entries: hira([["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]]),
    words: [
      { jp: "なつ", romaji: "natsu", fr: "été" },
      { jp: "ねこ", romaji: "neko", fr: "chat" },
      { jp: "にく", romaji: "niku", fr: "viande" },
      { jp: "おかね", romaji: "okane", fr: "argent" },
      { jp: "ぬの", romaji: "nuno", fr: "tissu" },
    ],
    tip: "ぬ et ね sont jumeaux : ね a une boucle finale ouverte vers la droite, ぬ une boucle fermée complète.",
  },
  {
    slug: "hiragana-ha",
    script: "hiragana",
    groupLabel: "は行",
    title: "La ligne HA — ha, hi, fu, he, ho",
    entries: hira([["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]]),
    words: [
      { jp: "はな", romaji: "hana", fr: "fleur ; nez" },
      { jp: "ひと", romaji: "hito", fr: "personne" },
      { jp: "ふね", romaji: "fune", fr: "bateau" },
      { jp: "ほし", romaji: "hoshi", fr: "étoile" },
      { jp: "はし", romaji: "hashi", fr: "pont ; baguettes" },
    ],
    tip: "は sert aussi de particule thème (et se prononce alors « wa ») — vous la verrez dans presque chaque phrase.",
  },
  {
    slug: "hiragana-ma",
    script: "hiragana",
    groupLabel: "ま行",
    title: "La ligne MA — ma, mi, mu, me, mo",
    entries: hira([["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]]),
    words: [
      { jp: "みみ", romaji: "mimi", fr: "oreilles" },
      { jp: "むし", romaji: "mushi", fr: "insecte" },
      { jp: "もの", romaji: "mono", fr: "chose" },
      { jp: "あめ", romaji: "ame", fr: "pluie" },
      { jp: "みち", romaji: "michi", fr: "route" },
    ],
    tip: "Vous avez dépassé la moitié des hiragana ! Relisez les mots des lignes précédentes pour entretenir l'acquis.",
  },
  {
    slug: "hiragana-ya",
    script: "hiragana",
    groupLabel: "や行",
    title: "La ligne YA — ya, yu, yo",
    entries: hira([["や", "ya"], ["ゆ", "yu"], ["よ", "yo"]]),
    words: [
      { jp: "やま", romaji: "yama", fr: "montagne" },
      { jp: "ゆき", romaji: "yuki", fr: "neige" },
      { jp: "よる", romaji: "yoru", fr: "soir, nuit" },
      { jp: "やさい", romaji: "yasai", fr: "légumes" },
    ],
    tip: "Cette ligne n'a que trois kana : il n'existe pas de « ye » ni de « yi » en japonais natif.",
  },
  {
    slug: "hiragana-ra",
    script: "hiragana",
    groupLabel: "ら行",
    title: "La ligne RA — ra, ri, ru, re, ro",
    entries: hira([["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]]),
    words: [
      { jp: "くるま", romaji: "kuruma", fr: "voiture" },
      { jp: "さくら", romaji: "sakura", fr: "cerisier en fleurs" },
      { jp: "とり", romaji: "tori", fr: "oiseau" },
      { jp: "いろ", romaji: "iro", fr: "couleur" },
      { jp: "れきし", romaji: "rekishi", fr: "histoire" },
    ],
    tip: "る et ろ : る ferme avec une boucle, ろ reste ouvert. Le son « r » japonais se situe entre R et L français.",
  },
  {
    slug: "hiragana-wa-n",
    script: "hiragana",
    groupLabel: "わ行・ん",
    title: "La ligne WA et le N final",
    entries: hira([["わ", "wa"], ["を", "wo"], ["ん", "n"]]),
    words: [
      { jp: "わたし", romaji: "watashi", fr: "je, moi" },
      { jp: "にほん", romaji: "nihon", fr: "Japon" },
      { jp: "せんせい", romaji: "sensei", fr: "professeur" },
      { jp: "もん", romaji: "mon", fr: "portail" },
    ],
    tip: "ん est la seule syllabe finissant par une consonne. を ne s'utilise qu'en particule objet (et se prononce « o »). Vous savez maintenant lire TOUS les hiragana !",
  },
  {
    slug: "hiragana-dakuten",
    script: "hiragana",
    groupLabel: "濁点・半濁点",
    title: "Dakuten, handakuten et combinaisons",
    entries: hira([
      ["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
      ["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
      ["だ", "da"], ["で", "de"], ["ど", "do"],
      ["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
      ["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"],
    ]),
    words: [
      { jp: "がっこう", romaji: "gakkō", fr: "école" },
      { jp: "でんわ", romaji: "denwa", fr: "téléphone" },
      { jp: "しゃしん", romaji: "shashin", fr: "photo" },
      { jp: "きょうと", romaji: "Kyōto", fr: "Kyoto" },
      { jp: "ありがとう", romaji: "arigatō", fr: "merci" },
    ],
    tip: "Deux petits traits (゛) transforment k→g, s→z, t→d, h→b ; un petit cercle (゜) transforme h→p. Les mini-ya/yu/yo créent les sons combinés : きゃ (kya), しゅ (shu), ちょ (cho)…",
  },
];

export const KATAKANA_LESSONS: KanaLesson[] = [
  {
    slug: "katakana-a",
    script: "katakana",
    groupLabel: "ア行",
    title: "La ligne A — a, i, u, e, o",
    entries: kata([["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]]),
    words: [
      { jp: "アイス", romaji: "aisu", fr: "glace" },
      { jp: "イタリア", romaji: "Itaria", fr: "Italie" },
      { jp: "エアコン", romaji: "eakon", fr: "climatisation" },
    ],
    tip: "Les katakana servent à écrire les mots étrangers, les noms propres et les onomatopées. Traits plus droits, plus anguleux que les hiragana.",
  },
  {
    slug: "katakana-ka",
    script: "katakana",
    groupLabel: "カ行",
    title: "La ligne KA — ka, ki, ku, ke, ko",
    entries: kata([["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]]),
    words: [
      { jp: "カメラ", romaji: "kamera", fr: "appareil photo" },
      { jp: "キロ", romaji: "kiro", fr: "kilomètre / kilo" },
      { jp: "ケーキ", romaji: "kēki", fr: "gâteau" },
      { jp: "コーヒー", romaji: "kōhī", fr: "café" },
    ],
    tip: "Le trait allongé「ー」prolonge la voyelle : コーヒー se lit « kô-hî ». C'est propre aux katakana !",
  },
  {
    slug: "katakana-sa",
    script: "katakana",
    groupLabel: "サ行",
    title: "La ligne SA — sa, shi, su, se, so",
    entries: kata([["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]]),
    words: [
      { jp: "サッカー", romaji: "sakkā", fr: "football" },
      { jp: "シャツ", romaji: "shatsu", fr: "chemise" },
      { jp: "スプーン", romaji: "supūn", fr: "cuillère" },
      { jp: "セーター", romaji: "sētā", fr: "pull" },
    ],
    tip: "シ (shi) et ツ (tsu) piègent tout le monde : chez シ les traits glissent vers la gauche, chez ツ vers la droite… et l'inclinaison s'inverse aussi.",
  },
  {
    slug: "katakana-ta",
    script: "katakana",
    groupLabel: "タ行",
    title: "La ligne TA — ta, chi, tsu, te, to",
    entries: kata([["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]]),
    words: [
      { jp: "タクシー", romaji: "takushī", fr: "taxi" },
      { jp: "チーズ", romaji: "chīzu", fr: "fromage" },
      { jp: "テレビ", romaji: "terebi", fr: "télévision" },
      { jp: "トイレ", romaji: "toire", fr: "toilettes" },
    ],
    tip: "テ ressemble à une antenne de télévision — pensez à « terebi », ça aide à mémoriser.",
  },
  {
    slug: "katakana-na",
    script: "katakana",
    groupLabel: "ナ行",
    title: "La ligne NA — na, ni, nu, ne, no",
    entries: kata([["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]]),
    words: [
      { jp: "ナイフ", romaji: "naifu", fr: "couteau" },
      { jp: "ニュース", romaji: "nyūsu", fr: "actualités" },
      { jp: "ネクタイ", romaji: "nekutai", fr: "cravate" },
      { jp: "ノート", romaji: "nōto", fr: "carnet" },
    ],
    tip: "ニ est simplement le kanji « deux » (二) : deux traits horizontaux. Impossible à oublier.",
  },
  {
    slug: "katakana-ha",
    script: "katakana",
    groupLabel: "ハ行",
    title: "La ligne HA — ha, hi, fu, he, ho",
    entries: kata([["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]]),
    words: [
      { jp: "ハンバーガー", romaji: "hanbāgā", fr: "hamburger" },
      { jp: "ビール", romaji: "bīru", fr: "bière" },
      { jp: "フォーク", romaji: "fōku", fr: "fourchette" },
      { jp: "ホテル", romaji: "hoteru", fr: "hôtel" },
    ],
    tip: "ハ signifie littéralement « huit » (八). フ est un simple trait courbé, très rapide à écrire.",
  },
  {
    slug: "katakana-ma",
    script: "katakana",
    groupLabel: "マ行",
    title: "La ligne MA — ma, mi, mu, me, mo",
    entries: kata([["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]]),
    words: [
      { jp: "マイク", romaji: "maiku", fr: "micro" },
      { jp: "ミルク", romaji: "miruku", fr: "lait" },
      { jp: "メール", romaji: "mēru", fr: "mail, message" },
      { jp: "モデル", romaji: "moderu", fr: "mannequin, modèle" },
    ],
    tip: "マ et モ se distinguent par leurs angles : entraînez votre œil en lisant des enseignes de magasins japonaises en ligne.",
  },
  {
    slug: "katakana-ya",
    script: "katakana",
    groupLabel: "ヤ行",
    title: "La ligne YA — ya, yu, yo",
    entries: kata([["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"]]),
    words: [
      { jp: "ヨガ", romaji: "yoga", fr: "yoga" },
      { jp: "ユニフォーム", romaji: "yunifōmu", fr: "uniforme" },
      { jp: "ヨーロッパ", romaji: "Yōroppa", fr: "Europe" },
    ],
    tip: "ユ ressemble à une fourchette posée à plat ; ヨ à trois barres empilées ouvertes à gauche.",
  },
  {
    slug: "katakana-ra",
    script: "katakana",
    groupLabel: "ラ行",
    title: "La ligne RA — ra, ri, ru, re, ro",
    entries: kata([["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]]),
    words: [
      { jp: "ラジオ", romaji: "rajio", fr: "radio" },
      { jp: "リモコン", romaji: "rimokon", fr: "télécommande" },
      { jp: "レストラン", romaji: "resutoran", fr: "restaurant" },
      { jp: "ロボット", romaji: "robotto", fr: "robot" },
    ],
    tip: "リ se compose de deux traits verticaux indépendants. ロ est une fenêtre carrée (« ro » comme « box »).",
  },
  {
    slug: "katakana-wa-n",
    script: "katakana",
    groupLabel: "ワ行・ン",
    title: "La ligne WA et le N final",
    entries: kata([["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]]),
    words: [
      { jp: "ワイン", romaji: "wain", fr: "vin" },
      { jp: "ワンピース", romaji: "wanpīsu", fr: "robe (one-piece)" },
      { jp: "テント", romaji: "tento", fr: "tente" },
    ],
    tip: "ン (n final) et ソ (so) : le trait court de ン descend vers la droite depuis le haut, celui de ソ vers la gauche. Vous savez lire tous les katakana de base !",
  },
  {
    slug: "katakana-dakuten",
    script: "katakana",
    groupLabel: "濁点・半濁点",
    title: "Dakuten, handakuten et combinaisons",
    entries: kata([
      ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
      ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
      ["ダ", "da"], ["デ", "de"], ["ド", "do"],
      ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"],
      ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"],
    ]),
    words: [
      { jp: "バス", romaji: "basu", fr: "bus" },
      { jp: "パン", romaji: "pan", fr: "pain" },
      { jp: "ジュース", romaji: "jūsu", fr: "jus" },
      { jp: "シャワー", romaji: "shawā", fr: "douche" },
      { jp: "チェック", romaji: "chekku", fr: "vérification, check" },
    ],
    tip: "Mêmes règles qu'en hiragana : ゛ sonorise (k→g, s→z, t→d, h→b), ゜ donne la série P. Les mini-kata créent キャ (kya), シュ (shu), チョ (cho)…",
  },
];

export const ALL_KANA_LESSONS: KanaLesson[] = [...HIRAGANA_LESSONS, ...KATAKANA_LESSONS];

export function getKanaLesson(slug: string): KanaLesson | undefined {
  return ALL_KANA_LESSONS.find((l) => l.slug === slug);
}
