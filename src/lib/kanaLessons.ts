export interface KanaEntry {
  kana: string;
  romaji: string;
  strokes: number;
}

export interface KanaWord {
  jp: string;
  romaji: string;
  fr: string;
  en: string;
}

export interface KanaLesson {
  slug: string;
  script: "hiragana" | "katakana";
  groupLabel: string;
  title: string;
  titleEn: string;
  entries: KanaEntry[];
  words: KanaWord[];
  tip: string;
  tipEn: string;
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
    titleEn: "The A line — a, i, u, e, o",
    entries: hira([["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]]),
    words: [
      { jp: "あい", romaji: "ai", fr: "amour", en: "love" },
      { jp: "いえ", romaji: "ie", fr: "maison", en: "house" },
      { jp: "うえ", romaji: "ue", fr: "dessus", en: "above" },
      { jp: "あお", romaji: "ao", fr: "bleu", en: "blue" },
      { jp: "おい", romaji: "oi", fr: "neveu", en: "nephew" },
    ],
    tip: "Tout part de ces cinq sons. あ et お se ressemblent : repérez la petite boucle fermée de お pour les distinguer.",
    tipEn: "Everything starts with these five sounds. あ and お look alike: look for the small closed loop of お to tell them apart.",
  },
  {
    slug: "hiragana-ka",
    script: "hiragana",
    groupLabel: "か行",
    title: "La ligne KA — ka, ki, ku, ke, ko",
    titleEn: "The KA line — ka, ki, ku, ke, ko",
    entries: hira([["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]]),
    words: [
      { jp: "あか", romaji: "aka", fr: "rouge", en: "red" },
      { jp: "かお", romaji: "kao", fr: "visage", en: "face" },
      { jp: "いけ", romaji: "ike", fr: "étang", en: "pond" },
      { jp: "こえ", romaji: "koe", fr: "voix", en: "voice" },
      { jp: "あき", romaji: "aki", fr: "automne", en: "autumn" },
    ],
    tip: "Avec deux lignes apprises, vous pouvez déjà écrire de vrais mots. Entraînez-vous à les lire sans relire le romaji !",
    tipEn: "With two lines learned, you can already write real words. Practice reading them without looking at the romaji!",
  },
  {
    slug: "hiragana-sa",
    script: "hiragana",
    groupLabel: "さ行",
    title: "La ligne SA — sa, shi, su, se, so",
    titleEn: "The SA line — sa, shi, su, se, so",
    entries: hira([["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]]),
    words: [
      { jp: "すし", romaji: "sushi", fr: "sushi", en: "sushi" },
      { jp: "いす", romaji: "isu", fr: "chaise", en: "chair" },
      { jp: "せかい", romaji: "sekai", fr: "le monde", en: "the world" },
      { jp: "しか", romaji: "shika", fr: "cerf", en: "deer" },
      { jp: "あさい", romaji: "asai", fr: "peu profond", en: "shallow" },
    ],
    tip: "し est le seul « shi » : en japonais, le son « si » n'existe pas, c'est toujours « shi ».",
    tipEn: "し is the only \"shi\": in Japanese, the \"si\" sound doesn't exist, it's always \"shi\".",
  },
  {
    slug: "hiragana-ta",
    script: "hiragana",
    groupLabel: "た行",
    title: "La ligne TA — ta, chi, tsu, te, to",
    titleEn: "The TA line — ta, chi, tsu, te, to",
    entries: hira([["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]]),
    words: [
      { jp: "した", romaji: "shita", fr: "dessous", en: "below" },
      { jp: "とけい", romaji: "tokei", fr: "montre", en: "watch" },
      { jp: "くつ", romaji: "kutsu", fr: "chaussures", en: "shoes" },
      { jp: "ちかてつ", romaji: "chikatetsu", fr: "métro", en: "subway" },
      { jp: "あした", romaji: "ashita", fr: "demain", en: "tomorrow" },
    ],
    tip: "つ et し piègent les débutants : l'orientation du trait final change tout. Comparez-les côte à côte.",
    tipEn: "つ and し trip up beginners: the direction of the final stroke changes everything. Compare them side by side.",
  },
  {
    slug: "hiragana-na",
    script: "hiragana",
    groupLabel: "な行",
    title: "La ligne NA — na, ni, nu, ne, no",
    titleEn: "The NA line — na, ni, nu, ne, no",
    entries: hira([["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]]),
    words: [
      { jp: "なつ", romaji: "natsu", fr: "été", en: "summer" },
      { jp: "ねこ", romaji: "neko", fr: "chat", en: "cat" },
      { jp: "にく", romaji: "niku", fr: "viande", en: "meat" },
      { jp: "おかね", romaji: "okane", fr: "argent", en: "money" },
      { jp: "ぬの", romaji: "nuno", fr: "tissu", en: "cloth" },
    ],
    tip: "ぬ et ね sont jumeaux : ね a une boucle finale ouverte vers la droite, ぬ une boucle fermée complète.",
    tipEn: "ぬ and ね are twins: ね has a final loop opening to the right, ぬ has a fully closed loop.",
  },
  {
    slug: "hiragana-ha",
    script: "hiragana",
    groupLabel: "は行",
    title: "La ligne HA — ha, hi, fu, he, ho",
    titleEn: "The HA line — ha, hi, fu, he, ho",
    entries: hira([["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]]),
    words: [
      { jp: "はな", romaji: "hana", fr: "fleur ; nez", en: "flower; nose" },
      { jp: "ひと", romaji: "hito", fr: "personne", en: "person" },
      { jp: "ふね", romaji: "fune", fr: "bateau", en: "boat" },
      { jp: "ほし", romaji: "hoshi", fr: "étoile", en: "star" },
      { jp: "はし", romaji: "hashi", fr: "pont ; baguettes", en: "bridge; chopsticks" },
    ],
    tip: "は sert aussi de particule thème (et se prononce alors « wa ») — vous la verrez dans presque chaque phrase.",
    tipEn: "は also serves as a topic particle (and is pronounced \"wa\" then) — you'll see it in almost every sentence.",
  },
  {
    slug: "hiragana-ma",
    script: "hiragana",
    groupLabel: "ま行",
    title: "La ligne MA — ma, mi, mu, me, mo",
    titleEn: "The MA line — ma, mi, mu, me, mo",
    entries: hira([["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]]),
    words: [
      { jp: "みみ", romaji: "mimi", fr: "oreilles", en: "ears" },
      { jp: "むし", romaji: "mushi", fr: "insecte", en: "insect" },
      { jp: "もの", romaji: "mono", fr: "chose", en: "thing" },
      { jp: "あめ", romaji: "ame", fr: "pluie", en: "rain" },
      { jp: "みち", romaji: "michi", fr: "route", en: "road" },
    ],
    tip: "Vous avez dépassé la moitié des hiragana ! Relisez les mots des lignes précédentes pour entretenir l'acquis.",
    tipEn: "You've passed the halfway mark of hiragana! Review the words from previous lines to keep what you've learned.",
  },
  {
    slug: "hiragana-ya",
    script: "hiragana",
    groupLabel: "や行",
    title: "La ligne YA — ya, yu, yo",
    titleEn: "The YA line — ya, yu, yo",
    entries: hira([["や", "ya"], ["ゆ", "yu"], ["よ", "yo"]]),
    words: [
      { jp: "やま", romaji: "yama", fr: "montagne", en: "mountain" },
      { jp: "ゆき", romaji: "yuki", fr: "neige", en: "snow" },
      { jp: "よる", romaji: "yoru", fr: "soir, nuit", en: "evening, night" },
      { jp: "やさい", romaji: "yasai", fr: "légumes", en: "vegetables" },
    ],
    tip: "Cette ligne n'a que trois kana : il n'existe pas de « ye » ni de « yi » en japonais natif.",
    tipEn: "This line has only three kana: there is no \"ye\" or \"yi\" in native Japanese.",
  },
  {
    slug: "hiragana-ra",
    script: "hiragana",
    groupLabel: "ら行",
    title: "La ligne RA — ra, ri, ru, re, ro",
    titleEn: "The RA line — ra, ri, ru, re, ro",
    entries: hira([["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]]),
    words: [
      { jp: "くるま", romaji: "kuruma", fr: "voiture", en: "car" },
      { jp: "さくら", romaji: "sakura", fr: "cerisier en fleurs", en: "cherry blossom" },
      { jp: "とり", romaji: "tori", fr: "oiseau", en: "bird" },
      { jp: "いろ", romaji: "iro", fr: "couleur", en: "color" },
      { jp: "れきし", romaji: "rekishi", fr: "histoire", en: "history" },
    ],
    tip: "る et ろ : る ferme avec une boucle, ろ reste ouvert. Le son « r » japonais se situe entre R et L français.",
    tipEn: "る and ろ: る closes with a loop, ろ stays open. The Japanese \"r\" sound is between the French R and L.",
  },
  {
    slug: "hiragana-wa-n",
    script: "hiragana",
    groupLabel: "わ行・ん",
    title: "La ligne WA et le N final",
    titleEn: "The WA line and the final N",
    entries: hira([["わ", "wa"], ["を", "wo"], ["ん", "n"]]),
    words: [
      { jp: "わたし", romaji: "watashi", fr: "je, moi", en: "I, me" },
      { jp: "にほん", romaji: "nihon", fr: "Japon", en: "Japan" },
      { jp: "せんせい", romaji: "sensei", fr: "professeur", en: "teacher" },
      { jp: "もん", romaji: "mon", fr: "portail", en: "gate" },
    ],
    tip: "ん est la seule syllabe finissant par une consonne. を ne s'utilise qu'en particule objet (et se prononce « o »). Vous savez maintenant lire TOUS les hiragana !",
    tipEn: "ん is the only syllable ending in a consonant. を is only used as an object particle (and is pronounced \"o\"). You can now read ALL hiragana!",
  },
  {
    slug: "hiragana-dakuten",
    script: "hiragana",
    groupLabel: "濁点・半濁点",
    title: "Dakuten, handakuten et combinaisons",
    titleEn: "Dakuten, handakuten, and combinations",
    entries: hira([
      ["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
      ["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
      ["だ", "da"], ["で", "de"], ["ど", "do"],
      ["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
      ["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"],
    ]),
    words: [
      { jp: "がっこう", romaji: "gakkō", fr: "école", en: "school" },
      { jp: "でんわ", romaji: "denwa", fr: "téléphone", en: "telephone" },
      { jp: "しゃしん", romaji: "shashin", fr: "photo", en: "photo" },
      { jp: "きょうと", romaji: "Kyōto", fr: "Kyoto", en: "Kyoto" },
      { jp: "ありがとう", romaji: "arigatō", fr: "merci", en: "thank you" },
    ],
    tip: "Deux petits traits (゛) transforment k→g, s→z, t→d, h→b ; un petit cercle (゜) transforme h→p. Les mini-ya/yu/yo créent les sons combinés : きゃ (kya), しゅ (shu), ちょ (cho)…",
    tipEn: "Two small strokes (゛) turn k→g, s→z, t→d, h→b; a small circle (゜) turns h→p. Mini ya/yu/yo create combined sounds: きゃ (kya), しゅ (shu), ちょ (cho)…",
  },
];

export const KATAKANA_LESSONS: KanaLesson[] = [
  {
    slug: "katakana-a",
    script: "katakana",
    groupLabel: "ア行",
    title: "La ligne A — a, i, u, e, o",
    titleEn: "The A line — a, i, u, e, o",
    entries: kata([["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]]),
    words: [
      { jp: "アイス", romaji: "aisu", fr: "glace", en: "ice cream" },
      { jp: "イタリア", romaji: "Itaria", fr: "Italie", en: "Italy" },
      { jp: "エアコン", romaji: "eakon", fr: "climatisation", en: "air conditioning" },
    ],
    tip: "Les katakana servent à écrire les mots étrangers, les noms propres et les onomatopées. Traits plus droits, plus anguleux que les hiragana.",
    tipEn: "Katakana are used to write foreign words, proper names, and onomatopoeia. Strokes are straighter and more angular than hiragana.",
  },
  {
    slug: "katakana-ka",
    script: "katakana",
    groupLabel: "カ行",
    title: "La ligne KA — ka, ki, ku, ke, ko",
    titleEn: "The KA line — ka, ki, ku, ke, ko",
    entries: kata([["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]]),
    words: [
      { jp: "カメラ", romaji: "kamera", fr: "appareil photo", en: "camera" },
      { jp: "キロ", romaji: "kiro", fr: "kilomètre / kilo", en: "kilogram" },
      { jp: "ケーキ", romaji: "kēki", fr: "gâteau", en: "cake" },
      { jp: "コーヒー", romaji: "kōhī", fr: "café", en: "coffee" },
    ],
    tip: "Le trait allongé「ー」prolonge la voyelle : コーヒー se lit « kô-hî ». C'est propre aux katakana !",
    tipEn: "The long bar「ー」extends the vowel: コーヒー is read \"kōhī\". This is unique to katakana!",
  },
  {
    slug: "katakana-sa",
    script: "katakana",
    groupLabel: "サ行",
    title: "La ligne SA — sa, shi, su, se, so",
    titleEn: "The SA line — sa, shi, su, se, so",
    entries: kata([["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]]),
    words: [
      { jp: "サッカー", romaji: "sakkā", fr: "football", en: "soccer" },
      { jp: "シャツ", romaji: "shatsu", fr: "chemise", en: "shirt" },
      { jp: "スプーン", romaji: "supūn", fr: "cuillère", en: "spoon" },
      { jp: "セーター", romaji: "sētā", fr: "pull", en: "sweater" },
    ],
    tip: "シ (shi) et ツ (tsu) piègent tout le monde : chez シ les traits glissent vers la gauche, chez ツ vers la droite… et l'inclinaison s'inverse aussi.",
    tipEn: "シ (shi) and ツ (tsu) fool everyone: with シ the strokes slide to the left, with ツ to the right... and the slant is reversed too.",
  },
  {
    slug: "katakana-ta",
    script: "katakana",
    groupLabel: "タ行",
    title: "La ligne TA — ta, chi, tsu, te, to",
    titleEn: "The TA line — ta, chi, tsu, te, to",
    entries: kata([["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]]),
    words: [
      { jp: "タクシー", romaji: "takushī", fr: "taxi", en: "taxi" },
      { jp: "チーズ", romaji: "chīzu", fr: "fromage", en: "cheese" },
      { jp: "テレビ", romaji: "terebi", fr: "télévision", en: "television" },
      { jp: "トイレ", romaji: "toire", fr: "toilettes", en: "toilet" },
    ],
    tip: "テ ressemble à une antenne de télévision — pensez à « terebi », ça aide à mémoriser.",
    tipEn: "テ looks like a TV antenna — think of \"terebi\", it helps with memorization.",
  },
  {
    slug: "katakana-na",
    script: "katakana",
    groupLabel: "ナ行",
    title: "La ligne NA — na, ni, nu, ne, no",
    titleEn: "The NA line — na, ni, nu, ne, no",
    entries: kata([["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]]),
    words: [
      { jp: "ナイフ", romaji: "naifu", fr: "couteau", en: "knife" },
      { jp: "ニュース", romaji: "nyūsu", fr: "actualités", en: "news" },
      { jp: "ネクタイ", romaji: "nekutai", fr: "cravate", en: "necktie" },
      { jp: "ノート", romaji: "nōto", fr: "carnet", en: "notebook" },
    ],
    tip: "ニ est simplement le kanji « deux » (二) : deux traits horizontaux. Impossible à oublier.",
    tipEn: "ニ is simply the kanji for \"two\" (二): two horizontal strokes. Impossible to forget.",
  },
  {
    slug: "katakana-ha",
    script: "katakana",
    groupLabel: "ハ行",
    title: "La ligne HA — ha, hi, fu, he, ho",
    titleEn: "The HA line — ha, hi, fu, he, ho",
    entries: kata([["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]]),
    words: [
      { jp: "ハンバーガー", romaji: "hanbāgā", fr: "hamburger", en: "hamburger" },
      { jp: "ビール", romaji: "bīru", fr: "bière", en: "beer" },
      { jp: "フォーク", romaji: "fōku", fr: "fourchette", en: "fork" },
      { jp: "ホテル", romaji: "hoteru", fr: "hôtel", en: "hotel" },
    ],
    tip: "ハ signifie littéralement « huit » (八). フ est un simple trait courbé, très rapide à écrire.",
    tipEn: "ハ literally means \"eight\" (八). フ is a simple curved stroke, very quick to write.",
  },
  {
    slug: "katakana-ma",
    script: "katakana",
    groupLabel: "マ行",
    title: "La ligne MA — ma, mi, mu, me, mo",
    titleEn: "The MA line — ma, mi, mu, me, mo",
    entries: kata([["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]]),
    words: [
      { jp: "マイク", romaji: "maiku", fr: "micro", en: "microphone" },
      { jp: "ミルク", romaji: "miruku", fr: "lait", en: "milk" },
      { jp: "メール", romaji: "mēru", fr: "mail, message", en: "email, message" },
      { jp: "モデル", romaji: "moderu", fr: "mannequin, modèle", en: "model" },
    ],
    tip: "マ et モ se distinguent par leurs angles : entraînez votre œil en lisant des enseignes de magasins japonaises en ligne.",
    tipEn: "マ and モ are distinguished by their angles: train your eye by reading Japanese storefront signs online.",
  },
  {
    slug: "katakana-ya",
    script: "katakana",
    groupLabel: "ヤ行",
    title: "La ligne YA — ya, yu, yo",
    titleEn: "The YA line — ya, yu, yo",
    entries: kata([["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"]]),
    words: [
      { jp: "ヨガ", romaji: "yoga", fr: "yoga", en: "yoga" },
      { jp: "ユニフォーム", romaji: "yunifōmu", fr: "uniforme", en: "uniform" },
      { jp: "ヨーロッパ", romaji: "Yōroppa", fr: "Europe", en: "Europe" },
    ],
    tip: "ユ ressemble à une fourchette posée à plat ; ヨ à trois barres empilées ouvertes à gauche.",
    tipEn: "ユ looks like a fork laid flat; ヨ like three stacked bars open to the left.",
  },
  {
    slug: "katakana-ra",
    script: "katakana",
    groupLabel: "ラ行",
    title: "La ligne RA — ra, ri, ru, re, ro",
    titleEn: "The RA line — ra, ri, ru, re, ro",
    entries: kata([["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]]),
    words: [
      { jp: "ラジオ", romaji: "rajio", fr: "radio", en: "radio" },
      { jp: "リモコン", romaji: "rimokon", fr: "télécommande", en: "remote control" },
      { jp: "レストラン", romaji: "resutoran", fr: "restaurant", en: "restaurant" },
      { jp: "ロボット", romaji: "robotto", fr: "robot", en: "robot" },
    ],
    tip: "リ se compose de deux traits verticaux indépendants. ロ est une fenêtre carrée (« ro » comme « box »).",
    tipEn: "リ consists of two independent vertical strokes. ロ is a square window (\"ro\" like \"box\").",
  },
  {
    slug: "katakana-wa-n",
    script: "katakana",
    groupLabel: "ワ行・ン",
    title: "La ligne WA et le N final",
    titleEn: "The WA line and the final N",
    entries: kata([["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]]),
    words: [
      { jp: "ワイン", romaji: "wain", fr: "vin", en: "wine" },
      { jp: "ワンピース", romaji: "wanpīsu", fr: "robe (one-piece)", en: "dress" },
      { jp: "テント", romaji: "tento", fr: "tente", en: "tent" },
    ],
    tip: "ン (n final) et ソ (so) : le trait court de ン descend vers la droite depuis le haut, celui de ソ vers la gauche. Vous savez lire tous les katakana de base !",
    tipEn: "ン (final n) and ソ (so): the short stroke of ン goes down to the right from the top, while ソ's goes to the left. You can now read all basic katakana!",
  },
  {
    slug: "katakana-dakuten",
    script: "katakana",
    groupLabel: "濁点・半濁点",
    title: "Dakuten, handakuten et combinaisons",
    titleEn: "Dakuten, handakuten, and combinations",
    entries: kata([
      ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
      ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
      ["ダ", "da"], ["デ", "de"], ["ド", "do"],
      ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"],
      ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"],
    ]),
    words: [
      { jp: "バス", romaji: "basu", fr: "bus", en: "bus" },
      { jp: "パン", romaji: "pan", fr: "pain", en: "bread" },
      { jp: "ジュース", romaji: "jūsu", fr: "jus", en: "juice" },
      { jp: "シャワー", romaji: "shawā", fr: "douche", en: "shower" },
      { jp: "チェック", romaji: "chekku", fr: "vérification, check", en: "check, verification" },
    ],
    tip: "Mêmes règles qu'en hiragana : ゛ sonorise (k→g, s→z, t→d, h→b), ゜ donne la série P. Les mini-kata créent キャ (kya), シュ (shu), チョ (cho)…",
    tipEn: "Same rules as in hiragana: ゛ voices sounds (k→g, s→z, t→d, h→b), ゜ gives the P series. Mini-kata create キャ (kya), シュ (shu), チョ (cho)…",
  },
];

export const ALL_KANA_LESSONS: KanaLesson[] = [...HIRAGANA_LESSONS, ...KATAKANA_LESSONS];

export function getKanaLesson(slug: string): KanaLesson | undefined {
  return ALL_KANA_LESSONS.find((l) => l.slug === slug);
}
