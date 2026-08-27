export interface KanjiEntry {
  kanji: string;
  slug: string;
  strokeCount: number;
  strokeDesc: string[];
  onReading: string[];
  kunReading: string[];
  frMeaning: string;
  grade: string;
  examples: { word: string; reading: string; fr: string }[];
  mnemonic: string;
}

export type KanjiGroup = {
  group: string;
  description: string;
  kanji: KanjiEntry[];
};

function k(
  kanji: string,
  slug: string,
  strokeCount: number,
  onReading: string[],
  kunReading: string[],
  frMeaning: string,
  grade: string,
  examples: { word: string; reading: string; fr: string }[],
  mnemonic: string,
  strokeDesc: string[] = [],
): KanjiEntry {
  return { kanji, slug, strokeCount, strokeDesc, onReading, kunReading, frMeaning, grade, examples, mnemonic };
}

export const N5_KANJI_GROUPS: KanjiGroup[] = [
  {
    group: "Chiffres et compte",
    description: "Les nombres de base, indispensable dès le premier jour.",
    kanji: [
      k("一", "ichi", 1, ["いち"], [""], "un", "S1", [{ word: "一人", reading: "ひとり", fr: "une personne" }, { word: "一つ", reading: "ひとつ", fr: "un (objet)" }], "Un seul trait horizontal : plus simple que ça, impossible."),
      k("二", "ni", 2, ["に"], [""], "deux", "S1", [{ word: "二人", reading: "ふたり", fr: "deux personnes" }, { word: "二月", reading: "にがつ", fr: "février" }], "Deux traits : deux, point."),
      k("三", "san", 3, ["さん"], [""], "trois", "S1", [{ word: "三月", reading: "さんがつ", fr: "mars" }, { word: "三つ", reading: "みっつ", fr: "trois (objets)" }], "Trois traits empilés : on compte en montant."),
      k("四", "yon", 5, ["し", "よん"], [""], "quatre", "S2", [{ word: "四月", reading: "しがつ", fr: "avril" }, { word: "四人", reading: "よにん", fr: "quatre personnes" }], "Attention : 四 a deux lectures — し (composé) et よ nombres simples."),
      k("五", "go", 4, ["ご"], [""], "cinq", "S2", [{ word: "五月", reading: "ごがつ", fr: "mai" }, { word: "五つ", reading: "いつつ", fr: "cinq (objets)" }], "Deux angles opposés, comme un Z tourné."),
      k("六", "roku", 4, ["ろく"], [""], "six", "S2", [{ word: "六月", reading: "ろくがつ", fr: "juin" }, { word: "六つ", reading: "むっつ", fr: "six (objets)" }], "Un point en haut, deux jambes en bas."),
      k("七", "shichi", 2, ["しち", "なな"], [""], "sept", "S2", [{ word: "七月", reading: "しちがつ", fr: "juillet" }, { word: "七つ", reading: "ななつ", fr: "sept (objets)" }], "Un trait horizontal, un trait incliné qui le croise."),
      k("八", "hachi", 2, ["はち"], [""], "huit", "S2", [{ word: "八月", reading: "はちがつ", fr: "août" }, { word: "八つ", reading: "やっつ", fr: "huit (objets)" }], "Deux traits qui s'évasent vers le bas, comme des portes qui s'ouvrent."),
      k("九", "kyuu", 2, ["きゅう", "く"], [""], "neuf", "S2", [{ word: "九月", reading: "くがつ", fr: "septembre" }, { word: "九つ", reading: "ここのつ", fr: "neuf (objets)" }], "Comme un く penché avec une pointe — neuf doigts qui se croisent."),
      k("十", "juu", 2, ["じゅう"], [""], "dix", "S1", [{ word: "十月", reading: "じゅうがつ", fr: "octobre" }, { word: "十分", reading: "じゅっぷん", fr: "dix minutes" }], "Une croix : dix doigts qui se croisent."),
      k("百", "hyaku", 6, ["ひゃく"], [""], "cent", "S2", [{ word: "三百", reading: "さんびゃく", fr: "trois cents" }, { word: "百円", reading: "ひゃくえん", fr: "100 yens" }], "Comme 白 (blanc) avec un trait en haut."),
      k("千", "sen", 3, ["せん"], [""], "mille", "S2", [{ word: "千年", reading: "せんねん", fr: "mille ans" }, { word: "三千", reading: "さんぜん", fr: "trois mille" }], "Comme 十 avec une barbichette en bas à gauche."),
    ],
  },
  {
    group: "Nature et temps",
    description: "Les éléments autour de nous : soleil, lune, eau, feu, terre.",
    kanji: [
      k("日", "nichi", 4, ["にち", "じつ"], ["ひ", "か"], "jour, soleil", "S1", [{ word: "日本", reading: "にほん", fr: "Japon" }, { word: "今日", reading: "きょう", fr: "aujourd'hui" }], "Un rectangle avec un trait au milieu : le soleil dans le ciel."),
      k("月", "getsu", 4, ["げつ", "がつ"], ["つき"], "lune, mois", "S1", [{ word: "月曜日", reading: "げつようび", fr: "lundi" }, { word: "一月", reading: "いちがつ", fr: "janvier" }], "Le croissant de lune avec des traits dedans."),
      k("水", "sui", 4, ["すい"], ["みず"], "eau", "S2", [{ word: "水曜日", reading: "すいようび", fr: "mercredi" }, { word: "お水", reading: "おみず", fr: "de l'eau" }], "Comme une cascade : un trait central et des éclaboussures."),
      k("火", "ka", 4, ["か"], ["ひ"], "feu", "S2", [{ word: "火曜日", reading: "かようび", fr: "mardi" }, { word: "火事", reading: "かじ", fr: "incendie" }], "Deux flammes qui jaillissent vers le haut."),
      k("土", "do", 3, ["ど", "と"], ["つち"], "terre, sol", "S2", [{ word: "土曜日", reading: "どようび", fr: "samedi" }, { word: "お土産", reading: "おみやげ", fr: "cadeau souvenir" }], "Un plan horizontal (le sol) avec un pieu planté dedans."),
      k("木", "moku", 4, ["もく"], ["き"], "arbre", "S1", [{ word: "木曜日", reading: "もくようび", fr: "jeudi" }, { word: "木", reading: "き", fr: "arbre" }], "Le tronc avec les branches qui s'étendent."),
      k("金", "kin", 8, ["きん", "こん"], ["かね"], "or, métal, argent", "S2", [{ word: "お金", reading: "おかね", fr: "de l'argent" }, { word: "金曜日", reading: "きんようび", fr: "vendredi" }], "Des gouttes qui tombent dans un creuset de forge."),
      k("山", "yama", 3, ["さん"], ["やま"], "montagne", "S1", [{ word: "富士山", reading: "ふじさん", fr: "mont Fuji" }, { word: "山田", reading: "やまだ", fr: "Yamada (nom)" }], "Trois pics : le Fuji vu de loin."),
      k("雨", "ame", 8, ["う"], ["あめ"], "pluie", "S2", [{ word: "雨が降る", reading: "あめがふる", fr: "il pleut" }, { word: "大雨", reading: "おおあめ", fr: "fortes pluies" }], "Un ciel (冂) duquel tombent des gouttes de pluie."),
      k("雪", "setsu", 11, ["せつ"], ["ゆき"], "neige", "S2", [{ word: "雪が降る", reading: "ゆきがふる", fr: "il neige" }, { word: "大雪", reading: "おおゆき", fr: "fortes chutes de neige" }], "Le radical de la pluie 雨 en haut, des gouttes qui se transforment en cristaux."),
      k("花", "hana", 7, ["か"], ["はな"], "fleur", "S2", [{ word: "お花見", reading: "おはなみ", fr: "hanami" }, { word: "花火", reading: "はなび", fr: "feu d'artifice" }], "L'herbe 艹 en haut, un être humain 化 en dessous qui s'épanouit."),
      k("田", "ta", 5, ["でん"], ["た"], "champ, rizière", "S2", [{ word: "田中", reading: "たなか", fr: "Tanaka (nom)" }, { word: "水田", reading: "すいでん", fr: "rizière irriguée" }], "Des parcelles carrées : vue du ciel sur les rizières en terrasses."),
    ],
  },
  {
    group: "Êtres vivants et gens",
    description: "Les personnes, les animaux et les relations.",
    kanji: [
      k("人", "jin", 2, ["じん", "にん"], ["ひと"], "personne", "S1", [{ word: "日本人", reading: "にほんじん", fr: "Japonais" }, { word: "一人", reading: "ひとり", fr: "une personne" }], "Deux jambes qui marchent : une personne debout."),
      k("大", "dai", 3, ["だい", "たい"], ["おお(きい)"], "grand", "S1", [{ word: "大きい", reading: "おおきい", fr: "grand, gros" }, { word: "大学生", reading: "だいがくせい", fr: "étudiant universitaire" }], "Un homme 人 avec les bras écartés : il montre qu'il est grand."),
      k("小", "shou", 3, ["しょう"], ["ちい(さい)", "すく(ない)"], "petit", "S1", [{ word: "小さい", reading: "ちいさい", fr: "petit" }, { word: "小学生", reading: "しょうがくせい", fr: "écolier" }], "Un seul fil au centre, comme une fine aiguille."),
      k("中", "chuu", 4, ["ちゅう", "じゅう"], ["なか"], "milieu, dedans", "S1", [{ word: "中学生", reading: "ちゅうがくせい", fr: "collégien" }, { word: "日本中", reading: "にほんじゅう", fr: "tout le Japon" }], "Un rectangle traversé par un trait vertical : quelque chose au milieu."),
      k("子", "shi", 3, ["し", "す"], ["こ", "ね"], "enfant, fils", "S1", [{ word: "女の子", reading: "おんなのこ", fr: "fille" }, { word: "息子", reading: "むすこ", fr: "fils" }], "Un bébé emmailloté, vue de face."),
      k("女", "jo", 3, ["じょ", "にょ"], ["おんな", "め"], "femme", "S1", [{ word: "女の人", reading: "おんなのひと", fr: "femme (personne)" }, { word: "女の子", reading: "おんなのこ", fr: "fille" }], "Une femme agenouillée, les mains jointes."),
      k("男", "dan", 7, ["だん"], ["おとこ"], "homme, garçon", "S2", [{ word: "男の人", reading: "おとこのひと", fr: "homme (personne)" }, { word: "男の子", reading: "おとこのこ", fr: "garçon" }], "Un champ 田 en haut (travail) + force 力 en bas : l'homme qui travaille la terre."),
      k("父", "fu", 4, ["ふ"], ["ちち"], "père", "S2", [{ word: "お父さん", reading: "おとうさん", fr: "papa (poli)" }, { word: "父", reading: "ちち", fr: "mon père (humble)" }], "Deux mains qui bénissent un berceau."),
      k("母", "bo", 5, ["ぼ"], ["はは"], "mère", "S2", [{ word: "お母さん", reading: "おかあさん", fr: "maman (poli)" }, { word: "母", reading: "はは", fr: "ma mère (humble)" }], "Un sein (point au centre) dans un corps de femme."),
      k("友", "yuu", 4, ["ゆう"], ["とも"], "ami", "S2", [{ word: "友達", reading: "ともだち", fr: "ami(e)" }, { word: "親友", reading: "しんゆう", fr: "meilleur ami" }], "Deux mains qui se serrent l'une l'autre."),
      k("生", "sei", 5, ["せい", "しょう"], ["い(きる)", "う(まれる)", "は(える)"], "vie, naissance", "S2", [{ word: "先生", reading: "せんせい", fr: "professeur" }, { word: "誕生日", reading: "たんじょうび", fr: "anniversaire" }], "Un pousse qui jaillit du sol."),
    ],
  },
  {
    group: "Directions et lieux",
    description: "Où ? Comment s'orienter au Japon.",
    kanji: [
      k("上", "jou", 3, ["じょう"], ["うえ", "あ(がる)", "のぼ(る)"], "haut, dessus", "S1", [{ word: "上手", reading: "じょうず", fr: "habile, doué" }, { word: "上", reading: "うえ", fr: "dessus" }], "Un trait au-dessus d'un plateau : ça monte."),
      k("下", "shita", 3, ["か", "げ"], ["した", "さ(がる)", "くだ(る)"], "bas, dessous", "S1", [{ word: "下手", reading: "へた", fr: "maladroit" }, { word: "下", reading: "した", fr: "dessous" }], "Un trait horizontal avec quelque chose qui pend vers le bas."),
      k("左", "sa", 5, ["さ"], ["ひだり"], "gauche", "S2", [{ word: "左", reading: "ひだり", fr: "gauche" }, { word: "左手", reading: "ひだりて", fr: "main gauche" }], "Un outil tenu dans la main gauche."),
      k("右", "migi", 5, ["う", "ゆう"], ["みぎ"], "droite", "S2", [{ word: "右", reading: "みぎ", fr: "droite" }, { word: "右手", reading: "みぎて", fr: "main droite" }], "Une bouche 口 qui tient un outil à droite."),
      k("北", "hoku", 5, ["ほく"], ["きた"], "nord", "S2", [{ word: "北", reading: "きた", fr: "nord" }, { word: "北海道", reading: "ほっかいどう", fr: "Hokkaido" }], "Deux personnes qui tournent le dos face au froid du nord."),
      k("南", "nan", 9, ["なん"], ["みなみ"], "sud", "S2", [{ word: "南", reading: "みなみ", fr: "sud" }, { word: "南半球", reading: "なんはんきゅう", fr: "hémisphère sud" }], "Un champ 田 en bas, couvert par des plantes qui poussent au soleil du sud."),
      k("東", "tou", 8, ["とう"], ["ひがし"], "est", "S2", [{ word: "東京", reading: "とうきょう", fr: "Tokyo" }, { word: "東", reading: "ひがし", fr: "est (direction)" }], "Un arbre 木 avec le soleil 日 qui se lève derrière."),
      k("西", "nishi", 6, ["せい", "さい"], ["にし"], "ouest", "S2", [{ word: "西", reading: "にし", fr: "ouest" }, { word: "西部", reading: "せいぶ", fr: "partie ouest" }], "Un filet avec des éléments dedans, comme un panier posé à l'ouest."),
    ],
  },
  {
    group: "Actions de base",
    description: "Les verbes essentiels du quotidien.",
    kanji: [
      k("食", "shoku", 9, ["しょく"], ["た(べる)", "く(う)"], "manger, nourriture", "S2", [{ word: "食べ物", reading: "たべもの", fr: "nourriture" }, { word: "朝食", reading: "ちょうしょく", fr: "petit-déjeuner" }], "Un entonnoir au-dessus d'une bouche : la nourriture qui descend."),
      k("飲", "in", 12, ["いん"], ["の(む)"], "boire", "S2", [{ word: "飲み物", reading: "のみもの", fr: "boisson" }, { word: "飲む", reading: "のむ", fr: "boire" }], "L'alcool (酉) dans un récipient : boire."),
      k("見", "ken", 7, ["けん"], ["み(る)"], "voir, regarder", "S2", [{ word: "映画を見る", reading: "えいがをみる", fr: "voir un film" }, { word: "花見", reading: "はなみ", fr: "contemplation des cerisiers en fleurs" }], "Un œil 目 avec des jambes qui marchent vers ce qu'on regarde."),
      k("聞", "bun", 14, ["ぶん", "もん"], ["き(く)"], "entendre, écouter", "S2", [{ word: "音楽を聞く", reading: "おんがくをきく", fr: "écouter de la musique" }, { word: "新聞", reading: "しんぶん", fr: "journal" }], "Une oreille 耳 collée à une porte 門 : on écoute ce qui se passe derrière."),
      k("行", "iku", 6, ["こう", "ぎょう"], ["い(く)", "ゆ(く)", "おこな(う)"], "aller, ligne", "S2", [{ word: "銀行", reading: "ぎんこう", fr: "banque" }, { word: "行く", reading: "いく", fr: "aller" }], "Des pas sur un chemin : on marche, on va."),
      k("帰", "kaeru", 10, ["き"], ["かえ(る)", "かえ(す)"], "rentrer", "S2", [{ word: "帰る", reading: "かえる", fr: "rentrer chez soi" }, { word: "帰国", reading: "きこく", fr: "retour au pays" }], "Un vêtement 帀 sur un étui 刂 : on range ses affaires et on rentre."),
      k("話", "wa", 13, ["わ"], ["はな(す)"], "parler, discours", "S2", [{ word: "電話", reading: "でんわ", fr: "téléphone" }, { word: "話す", reading: "はなす", fr: "parler" }], "La langue 舌 (qui parle) + la parole 訁 = conversation."),
      k("読", "doku", 14, ["どく", "とく"], ["よ(む)"], "lire", "S2", [{ word: "本を読む", reading: "ほんをよむ", fr: "lire un livre" }, { word: "読書", reading: "どくしょ", fr: "lecture" }], "Les mots 言 + l'aliment 粟 : nourrir l'esprit en lisant."),
      k("書", "sho", 10, ["しょ"], ["か(く)"], "écrire", "S2", [{ word: "手紙を書く", reading: "てがみをかく", fr: "écrire une lettre" }, { word: "辞書", reading: "じしょ", fr: "dictionnaire" }], "Un pinceau sur du papier : l'acte d'écrire."),
    ],
  },
  {
    group: "Lieu et maison",
    description: "Les endroits de la vie quotidienne.",
    kanji: [
      k("家", "ie", 10, ["か", "け"], ["いえ", "や"], "maison, famille", "S2", [{ word: "家", reading: "いえ", fr: "maison" }, { word: "家族", reading: "かぞく", fr: "famille" }], "Un toit 覆 sous lequel vit un animal (porc) : la maison abrite la famille."),
      k("店", "mise", 8, ["てん"], ["みせ"], "boutique, magasin", "S2", [{ word: "お店", reading: "おみせ", fr: "boutique" }, { word: "喫茶店", reading: "きっさてん", fr: "café" }], "Un toit 广 sous lequel on tend des marchandises (占)."),
      k("学", "gaku", 8, ["がく"], ["まな(ぶ)"], "étudier, apprendre", "S2", [{ word: "学校", reading: "がっこう", fr: "école" }, { word: "学生", reading: "がくせい", fr: "étudiant" }], "Un enfant 子 sous un toit : l'enfant qui étudie."),
      k("校", "kou", 10, ["こう"], [], "école", "S2", [{ word: "学校", reading: "がっこう", fr: "école" }, { word: "高校", reading: "こうこう", fr: "lycée" }], "L'arbre 木 + (交) croisement : l'endroit où l'on se croise pour apprendre."),
      k("車", "sha", 7, ["しゃ"], ["くるま"], "voiture, char", "S2", [{ word: "電車", reading: "でんしゃ", fr: "train" }, { word: "車", reading: "くるま", fr: "voiture" }], "Vue de face d'une roue avec un essieu au centre."),
      k("門", "mon", 8, ["もん"], ["かど"], "porte, gate", "S2", [{ word: "校門", reading: "こうもん", fr: "portail d'école" }, { word: "門", reading: "かど", fr: "porte d'entrée" }], "Deux battants de porte face à face."),
    ],
  },
  {
    group: "Expressions abstraites",
    description: "Les idées de grand, petit, bien, mal, nouveau…",
    kanji: [
      k("新", "shin", 13, ["しん"], ["あたら(しい)"], "nouveau", "S2", [{ word: "新しい", reading: "あたらしい", fr: "nouveau, neuf" }, { word: "新聞", reading: "しんぶん", fr: "journal (nouvelles paroles)" }], "De l'huile 辛 versée sur un arbre 木 : une chose fraîchement coupée."),
      k("古", "ko", 5, ["こ"], ["ふる(い)"], "ancien, vieux", "S2", [{ word: "古い", reading: "ふるい", fr: "vieux, ancien" }, { word: "古代", reading: "こだい", fr: "époque ancienne" }], "Un récipient 口 couvert de poussière 十 : quelque chose de bien rangé, et donc ancien."),
      k("長", "chou", 8, ["ちょう"], ["なが(い)"], "long, chef", "S2", [{ word: "長い", reading: "ながい", fr: "long" }, { word: "部長", reading: "ぶちょう", fr: "chef de service" }], "Une personne avec de longs cheveux : la longueur."),
      k("好", "suki", 6, ["こう"], ["す(き)"], "aimer, bon", "S2", [{ word: "好き", reading: "すき", fr: "aimer, à propos" }, { word: "好き嫌い", reading: "すききらい", fr: "goûts et dégoûts" }], "Une femme 女 et un enfant 子 ensemble : l'amour."),
      k("悪", "warui", 11, ["あく"], ["わる(い)"], "mauvais, mal", "S3", [{ word: "悪い", reading: "わるい", fr: "mauvais" }, { word: "意地悪", reading: "いじわる", fr: "méchanceté" }], "Un cœur 心 sous un champ tordu 亜 : quelque chose ne va pas."),
      k("正", "tadashii", 5, ["せい", "しょう"], ["ただ(しい)"], "correct, juste", "S2", [{ word: "正しい", reading: "ただしい", fr: "correct, juste" }, { word: "お正月", reading: "おしょうがつ", fr: "le Nouvel An japonais" }], "Un trait qui va tout droit sans dévier : la rectitude."),
      k("力", "ryoku", 2, ["りょく", "りき"], ["ちから"], "force, pouvoir", "S2", [{ word: "力", reading: "ちから", fr: "force" }, { word: "努力", reading: "どりょく", fr: "effort" }], "Un bras musclé tendu vers le haut."),
      k("気", "ki", 6, ["き", "け"], ["いき"], "esprit, air, énergie", "S2", [{ word: "元気", reading: "げんき", fr: "santé, énergie" }, { word: "気持ち", reading: "きもち", fr: "sentiment, humeur" }], "La vapeur qui s'élève du sol : l'énergie invisible."),
    ],
  },
];

export const ALL_N5_KANJI = N5_KANJI_GROUPS.flatMap((g) => g.kanji);

export function getKanji(slug: string): KanjiEntry | undefined {
  return ALL_N5_KANJI.find((k) => k.slug === slug);
}

export function getKanjiGroup(slug: string): KanjiGroup | undefined {
  return N5_KANJI_GROUPS.find((g) => g.kanji.some((k) => k.slug === slug));
}
