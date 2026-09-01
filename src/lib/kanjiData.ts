export interface KanjiEntry {
  kanji: string;
  slug: string;
  strokeCount: number;
  strokeDesc: string[];
  onReading: string[];
  kunReading: string[];
  frMeaning: string;
  enMeaning: string;
  grade: string;
  examples: { word: string; reading: string; fr: string; en: string }[];
  mnemonic: string;
  enMnemonic: string;
}

export type KanjiGroup = {
  group: string;
  groupEn: string;
  description: string;
  descriptionEn: string;
  kanji: KanjiEntry[];
};

function k(
  kanji: string,
  slug: string,
  strokeCount: number,
  onReading: string[],
  kunReading: string[],
  frMeaning: string,
  enMeaning: string,
  grade: string,
  examples: { word: string; reading: string; fr: string; en: string }[],
  mnemonic: string,
  enMnemonic: string,
  strokeDesc: string[] = [],
): KanjiEntry {
  return { kanji, slug, strokeCount, strokeDesc, onReading, kunReading, frMeaning, enMeaning, grade, examples, mnemonic, enMnemonic };
}

export const N5_KANJI_GROUPS: KanjiGroup[] = [
  {
    group: "Chiffres et compte",
    groupEn: "Numbers and counting",
    description: "Les nombres de base, indispensable dès le premier jour.",
    descriptionEn: "Basic numbers, essential from day one.",
    kanji: [
      k("一", "ichi", 1, ["いち"], [""], "un", "one", "S1", [{ word: "一人", reading: "ひとり", fr: "une personne", en: "one person" }, { word: "一つ", reading: "ひとつ", fr: "un (objet)", en: "one (object)" }], "Un seul trait horizontal : plus simple que ça, impossible.", "A single horizontal stroke: it doesn't get simpler than that."),
      k("二", "ni", 2, ["に"], [""], "deux", "two", "S1", [{ word: "二人", reading: "ふたり", fr: "deux personnes", en: "two people" }, { word: "二月", reading: "にがつ", fr: "février", en: "February" }], "Deux traits : deux, point.", "Two strokes: two, period."),
      k("三", "san", 3, ["さん"], [""], "trois", "three", "S1", [{ word: "三月", reading: "さんがつ", fr: "mars", en: "March" }, { word: "三つ", reading: "みっつ", fr: "trois (objets)", en: "three (objects)" }], "Trois traits empilés : on compte en montant.", "Three stacked strokes: counting upward."),
      k("四", "yon", 5, ["し", "よん"], [""], "quatre", "four", "S2", [{ word: "四月", reading: "しがつ", fr: "avril", en: "April" }, { word: "四人", reading: "よにん", fr: "quatre personnes", en: "four people" }], "Attention : 四 a deux lectures — し (composé) et よ nombres simples.", "Watch out: 四 has two readings — し (in compounds) and よ (in simple numbers)."),
      k("五", "go", 4, ["ご"], [""], "cinq", "five", "S2", [{ word: "五月", reading: "ごがつ", fr: "mai", en: "May" }, { word: "五つ", reading: "いつつ", fr: "cinq (objets)", en: "five (objects)" }], "Deux angles opposés, comme un Z tourné.", "Two opposing angles, like a rotated Z."),
      k("六", "roku", 4, ["ろく"], [""], "six", "six", "S2", [{ word: "六月", reading: "ろくがつ", fr: "juin", en: "June" }, { word: "六つ", reading: "むっつ", fr: "six (objets)", en: "six (objects)" }], "Un point en haut, deux jambes en bas.", "A dot on top, two legs at the bottom."),
      k("七", "shichi", 2, ["しち", "なな"], [""], "sept", "seven", "S2", [{ word: "七月", reading: "しちがつ", fr: "juillet", en: "July" }, { word: "七つ", reading: "ななつ", fr: "sept (objets)", en: "seven (objects)" }], "Un trait horizontal, un trait incliné qui le croise.", "A horizontal stroke crossed by a slanted one."),
      k("八", "hachi", 2, ["はち"], [""], "huit", "eight", "S2", [{ word: "八月", reading: "はちがつ", fr: "août", en: "August" }, { word: "八つ", reading: "やっつ", fr: "huit (objets)", en: "eight (objects)" }], "Deux traits qui s'évasent vers le bas, comme des portes qui s'ouvrent.", "Two strokes spreading outward at the bottom, like doors opening."),
      k("九", "kyuu", 2, ["きゅう", "く"], [""], "neuf", "nine", "S2", [{ word: "九月", reading: "くがつ", fr: "septembre", en: "September" }, { word: "九つ", reading: "ここのつ", fr: "neuf (objets)", en: "nine (objects)" }], "Comme un く penché avec une pointe — neuf doigts qui se croisent.", "Like a tilted く with a hook — nine fingers intertwined."),
      k("十", "juu", 2, ["じゅう"], [""], "dix", "ten", "S1", [{ word: "十月", reading: "じゅうがつ", fr: "octobre", en: "October" }, { word: "十分", reading: "じゅっぷん", fr: "dix minutes", en: "ten minutes" }], "Une croix : dix doigts qui se croisent.", "A cross: ten fingers crossing."),
      k("百", "hyaku", 6, ["ひゃく"], [""], "cent", "hundred", "S2", [{ word: "三百", reading: "さんびゃく", fr: "trois cents", en: "three hundred" }, { word: "百円", reading: "ひゃくえん", fr: "100 yens", en: "100 yen" }], "Comme 白 (blanc) avec un trait en haut.", "Like 白 (white) with a stroke on top."),
      k("千", "sen", 3, ["せん"], [""], "mille", "thousand", "S2", [{ word: "千年", reading: "せんねん", fr: "mille ans", en: "a thousand years" }, { word: "三千", reading: "さんぜん", fr: "trois mille", en: "three thousand" }], "Comme 十 avec une barbichette en bas à gauche.", "Like 十 with a small stroke at the bottom left."),
    ],
  },
  {
    group: "Nature et temps",
    groupEn: "Nature and time",
    description: "Les éléments autour de nous : soleil, lune, eau, feu, terre.",
    descriptionEn: "The elements around us: sun, moon, water, fire, earth.",
    kanji: [
      k("日", "nichi", 4, ["にち", "じつ"], ["ひ", "か"], "jour, soleil", "day, sun", "S1", [{ word: "日本", reading: "にほん", fr: "Japon", en: "Japan" }, { word: "今日", reading: "きょう", fr: "aujourd'hui", en: "today" }], "Un rectangle avec un trait au milieu : le soleil dans le ciel.", "A rectangle with a line through it: the sun in the sky."),
      k("月", "getsu", 4, ["げつ", "がつ"], ["つき"], "lune, mois", "moon, month", "S1", [{ word: "月曜日", reading: "げつようび", fr: "lundi", en: "Monday" }, { word: "一月", reading: "いちがつ", fr: "janvier", en: "January" }], "Le croissant de lune avec des traits dedans.", "A crescent moon with lines inside."),
      k("水", "sui", 4, ["すい"], ["みず"], "eau", "water", "S2", [{ word: "水曜日", reading: "すいようび", fr: "mercredi", en: "Wednesday" }, { word: "お水", reading: "おみず", fr: "de l'eau", en: "water" }], "Comme une cascade : un trait central et des éclaboussures.", "Like a waterfall: a central stroke with splashes on the sides."),
      k("火", "ka", 4, ["か"], ["ひ"], "feu", "fire", "S2", [{ word: "火曜日", reading: "かようび", fr: "mardi", en: "Tuesday" }, { word: "火事", reading: "かじ", fr: "incendie", en: "fire (conflagration)" }], "Deux flammes qui jaillissent vers le haut.", "Two flames shooting upward."),
      k("土", "do", 3, ["ど", "と"], ["つち"], "terre, sol", "earth, ground", "S2", [{ word: "土曜日", reading: "どようび", fr: "samedi", en: "Saturday" }, { word: "お土産", reading: "おみやげ", fr: "cadeau souvenir", en: "souvenir gift" }], "Un plan horizontal (le sol) avec un pieu planté dedans.", "A horizontal line (the ground) with a stake driven into it."),
      k("木", "moku", 4, ["もく"], ["き"], "arbre", "tree", "S1", [{ word: "木曜日", reading: "もくようび", fr: "jeudi", en: "Thursday" }, { word: "木", reading: "き", fr: "arbre", en: "tree" }], "Le tronc avec les branches qui s'étendent.", "The trunk with branches spreading out."),
      k("金", "kin", 8, ["きん", "こん"], ["かね"], "or, métal, argent", "gold, metal, money", "S2", [{ word: "お金", reading: "おかね", fr: "de l'argent", en: "money" }, { word: "金曜日", reading: "きんようび", fr: "vendredi", en: "Friday" }], "Des gouttes qui tombent dans un creuset de forge.", "Drops falling into a forge's crucible."),
      k("山", "yama", 3, ["さん"], ["やま"], "montagne", "mountain", "S1", [{ word: "富士山", reading: "ふじさん", fr: "mont Fuji", en: "Mount Fuji" }, { word: "山田", reading: "やまだ", fr: "Yamada (nom)", en: "Yamada (name)" }], "Trois pics : le Fuji vu de loin.", "Three peaks: Mount Fuji seen from afar."),
      k("雨", "ame", 8, ["う"], ["あめ"], "pluie", "rain", "S2", [{ word: "雨が降る", reading: "あめがふる", fr: "il pleut", en: "it's raining" }, { word: "大雨", reading: "おおあめ", fr: "fortes pluies", en: "heavy rain" }], "Un ciel (冂) duquel tombent des gouttes de pluie.", "A sky (冂) with raindrops falling from it."),
      k("雪", "setsu", 11, ["せつ"], ["ゆき"], "neige", "snow", "S2", [{ word: "雪が降る", reading: "ゆきがふる", fr: "il neige", en: "it's snowing" }, { word: "大雪", reading: "おおゆき", fr: "fortes chutes de neige", en: "heavy snowfall" }], "Le radical de la pluie 雨 en haut, des gouttes qui se transforment en cristaux.", "The rain radical 雨 on top, drops transforming into crystals."),
      k("花", "hana", 7, ["か"], ["はな"], "fleur", "flower", "S2", [{ word: "お花見", reading: "おはなみ", fr: "hanami", en: "cherry blossom viewing" }, { word: "花火", reading: "はなび", fr: "feu d'artifice", en: "fireworks" }], "L'herbe 艹 en haut, un être humain 化 en dessous qui s'épanouit.", "The grass radical 艹 on top, a person 化 below, blossoming."),
      k("田", "ta", 5, ["でん"], ["た"], "champ, rizière", "rice field", "S2", [{ word: "田中", reading: "たなか", fr: "Tanaka (nom)", en: "Tanaka (name)" }, { word: "水田", reading: "すいでん", fr: "rizière irriguée", en: "irrigated rice field" }], "Des parcelles carrées : vue du ciel sur les rizières en terrasses.", "Square plots: an aerial view of terraced rice paddies."),
    ],
  },
  {
    group: "Êtres vivants et gens",
    groupEn: "Living beings and people",
    description: "Les personnes, les animaux et les relations.",
    descriptionEn: "People, animals, and relationships.",
    kanji: [
      k("人", "jin", 2, ["じん", "にん"], ["ひと"], "personne", "person", "S1", [{ word: "日本人", reading: "にほんじん", fr: "Japonais", en: "Japanese (person)" }, { word: "一人", reading: "ひとり", fr: "une personne", en: "one person" }], "Deux jambes qui marchent : une personne debout.", "Two walking legs: a person standing."),
      k("大", "dai", 3, ["だい", "たい"], ["おお(きい)"], "grand", "big, large", "S1", [{ word: "大きい", reading: "おおきい", fr: "grand, gros", en: "big, large" }, { word: "大学生", reading: "だいがくせい", fr: "étudiant universitaire", en: "university student" }], "Un homme 人 avec les bras écartés : il montre qu'il est grand.", "A person 人 with arms spread wide: showing how big they are."),
      k("小", "shou", 3, ["しょう"], ["ちい(さい)", "すく(ない)"], "petit", "small, little", "S1", [{ word: "小さい", reading: "ちいさい", fr: "petit", en: "small" }, { word: "小学生", reading: "しょうがくせい", fr: "écolier", en: "elementary school student" }], "Un seul fil au centre, comme une fine aiguille.", "A single thread in the center, like a fine needle."),
      k("中", "chuu", 4, ["ちゅう", "じゅう"], ["なか"], "milieu, dedans", "middle, inside", "S1", [{ word: "中学生", reading: "ちゅうがくせい", fr: "collégien", en: "middle school student" }, { word: "日本中", reading: "にほんじゅう", fr: "tout le Japon", en: "all of Japan" }], "Un rectangle traversé par un trait vertical : quelque chose au milieu.", "A rectangle crossed by a vertical line: something in the middle."),
      k("子", "shi", 3, ["し", "す"], ["こ", "ね"], "enfant, fils", "child", "S1", [{ word: "女の子", reading: "おんなのこ", fr: "fille", en: "girl" }, { word: "息子", reading: "むすこ", fr: "fils", en: "son" }], "Un bébé emmailloté, vue de face.", "A swaddled baby, seen from the front."),
      k("女", "jo", 3, ["じょ", "にょ"], ["おんな", "め"], "femme", "woman", "S1", [{ word: "女の人", reading: "おんなのひと", fr: "femme (personne)", en: "woman (person)" }, { word: "女の子", reading: "おんなのこ", fr: "fille", en: "girl" }], "Une femme agenouillée, les mains jointes.", "A woman kneeling with hands clasped."),
      k("男", "dan", 7, ["だん"], ["おとこ"], "homme, garçon", "man, boy", "S2", [{ word: "男の人", reading: "おとこのひと", fr: "homme (personne)", en: "man (person)" }, { word: "男の子", reading: "おとこのこ", fr: "garçon", en: "boy" }], "Un champ 田 en haut (travail) + force 力 en bas : l'homme qui travaille la terre.", "A field 田 on top (work) + strength 力 below: the man who works the land."),
      k("父", "fu", 4, ["ふ"], ["ちち"], "père", "father", "S2", [{ word: "お父さん", reading: "おとうさん", fr: "papa (poli)", en: "dad (polite)" }, { word: "父", reading: "ちち", fr: "mon père (humble)", en: "my father (humble)" }], "Deux mains qui bénissent un berceau.", "Two hands blessing a cradle."),
      k("母", "bo", 5, ["ぼ"], ["はは"], "mère", "mother", "S2", [{ word: "お母さん", reading: "おかあさん", fr: "maman (poli)", en: "mom (polite)" }, { word: "母", reading: "はは", fr: "ma mère (humble)", en: "my mother (humble)" }], "Un sein (point au centre) dans un corps de femme.", "A breast (dot in the center) in a woman's body."),
      k("友", "yuu", 4, ["ゆう"], ["とも"], "ami", "friend", "S2", [{ word: "友達", reading: "ともだち", fr: "ami(e)", en: "friend" }, { word: "親友", reading: "しんゆう", fr: "meilleur ami", en: "best friend" }], "Deux mains qui se serrent l'une l'autre.", "Two hands shaking each other."),
      k("生", "sei", 5, ["せい", "しょう"], ["い(きる)", "う(まれる)", "は(える)"], "vie, naissance", "life, birth", "S2", [{ word: "先生", reading: "せんせい", fr: "professeur", en: "teacher" }, { word: "誕生日", reading: "たんじょうび", fr: "anniversaire", en: "birthday" }], "Un pousse qui jaillit du sol.", "A sprout shooting up from the ground."),
    ],
  },
  {
    group: "Directions et lieux",
    groupEn: "Directions and places",
    description: "Où ? Comment s'orienter au Japon.",
    descriptionEn: "Where? How to get around in Japan.",
    kanji: [
      k("上", "jou", 3, ["じょう"], ["うえ", "あ(がる)", "のぼ(る)"], "haut, dessus", "up, above", "S1", [{ word: "上手", reading: "じょうず", fr: "habile, doué", en: "skilled, good at" }, { word: "上", reading: "うえ", fr: "dessus", en: "above" }], "Un trait au-dessus d'un plateau : ça monte.", "A stroke above a flat surface: it goes up."),
      k("下", "shita", 3, ["か", "げ"], ["した", "さ(がる)", "くだ(る)"], "bas, dessous", "down, below", "S1", [{ word: "下手", reading: "へた", fr: "maladroit", en: "unskillful, clumsy" }, { word: "下", reading: "した", fr: "dessous", en: "below" }], "Un trait horizontal avec quelque chose qui pend vers le bas.", "A horizontal stroke with something hanging below."),
      k("左", "sa", 5, ["さ"], ["ひだり"], "gauche", "left", "S2", [{ word: "左", reading: "ひだり", fr: "gauche", en: "left" }, { word: "左手", reading: "ひだりて", fr: "main gauche", en: "left hand" }], "Un outil tenu dans la main gauche.", "A tool held in the left hand."),
      k("右", "migi", 5, ["う", "ゆう"], ["みぎ"], "droite", "right", "S2", [{ word: "右", reading: "みぎ", fr: "droite", en: "right" }, { word: "右手", reading: "みぎて", fr: "main droite", en: "right hand" }], "Une bouche 口 qui tient un outil à droite.", "A mouth 口 holding a tool on the right side."),
      k("北", "hoku", 5, ["ほく"], ["きた"], "nord", "north", "S2", [{ word: "北", reading: "きた", fr: "nord", en: "north" }, { word: "北海道", reading: "ほっかいどう", fr: "Hokkaido", en: "Hokkaido" }], "Deux personnes qui tournent le dos face au froid du nord.", "Two people turning their backs to the northern cold."),
      k("南", "nan", 9, ["なん"], ["みなみ"], "sud", "south", "S2", [{ word: "南", reading: "みなみ", fr: "sud", en: "south" }, { word: "南半球", reading: "なんはんきゅう", fr: "hémisphère sud", en: "southern hemisphere" }], "Un champ 田 en bas, couvert par des plantes qui poussent au soleil du sud.", "A field 田 at the bottom, covered by plants growing in the southern sun."),
      k("東", "tou", 8, ["とう"], ["ひがし"], "est", "east", "S2", [{ word: "東京", reading: "とうきょう", fr: "Tokyo", en: "Tokyo" }, { word: "東", reading: "ひがし", fr: "est (direction)", en: "east (direction)" }], "Un arbre 木 avec le soleil 日 qui se lève derrière.", "A tree 木 with the sun 日 rising behind it."),
      k("西", "nishi", 6, ["せい", "さい"], ["にし"], "ouest", "west", "S2", [{ word: "西", reading: "にし", fr: "ouest", en: "west" }, { word: "西部", reading: "せいぶ", fr: "partie ouest", en: "western part" }], "Un filet avec des éléments dedans, comme un panier posé à l'ouest.", "A net with things inside, like a basket set down in the west."),
    ],
  },
  {
    group: "Actions de base",
    groupEn: "Basic actions",
    description: "Les verbes essentiels du quotidien.",
    descriptionEn: "Essential everyday verbs.",
    kanji: [
      k("食", "shoku", 9, ["しょく"], ["た(べる)", "く(う)"], "manger, nourriture", "eat, food", "S2", [{ word: "食べ物", reading: "たべもの", fr: "nourriture", en: "food" }, { word: "朝食", reading: "ちょうしょく", fr: "petit-déjeuner", en: "breakfast" }], "Un entonnoir au-dessus d'une bouche : la nourriture qui descend.", "A funnel above a mouth: food going down."),
      k("飲", "in", 12, ["いん"], ["の(む)"], "boire", "drink", "S2", [{ word: "飲み物", reading: "のみもの", fr: "boisson", en: "beverage" }, { word: "飲む", reading: "のむ", fr: "boire", en: "to drink" }], "L'alcool (酉) dans un récipient : boire.", "Alcohol (酉) in a container: to drink."),
      k("見", "ken", 7, ["けん"], ["み(る)"], "voir, regarder", "see, look", "S2", [{ word: "映画を見る", reading: "えいがをみる", fr: "voir un film", en: "to watch a movie" }, { word: "花見", reading: "はなみ", fr: "contemplation des cerisiers en fleurs", en: "cherry blossom viewing" }], "Un œil 目 avec des jambes qui marchent vers ce qu'on regarde.", "An eye 目 with legs walking toward what you're looking at."),
      k("聞", "bun", 14, ["ぶん", "もん"], ["き(く)"], "entendre, écouter", "hear, listen", "S2", [{ word: "音楽を聞く", reading: "おんがくをきく", fr: "écouter de la musique", en: "to listen to music" }, { word: "新聞", reading: "しんぶん", fr: "journal", en: "newspaper" }], "Une oreille 耳 collée à une porte 門 : on écoute ce qui se passe derrière.", "An ear 耳 pressed against a door 門: listening to what's going on behind it."),
      k("行", "iku", 6, ["こう", "ぎょう"], ["い(く)", "ゆ(く)", "おこな(う)"], "aller, ligne", "go, line", "S2", [{ word: "銀行", reading: "ぎんこう", fr: "banque", en: "bank" }, { word: "行く", reading: "いく", fr: "aller", en: "to go" }], "Des pas sur un chemin : on marche, on va.", "Footsteps on a path: you walk, you go."),
      k("帰", "kaeru", 10, ["き"], ["かえ(る)", "かえ(す)"], "rentrer", "return, go home", "S2", [{ word: "帰る", reading: "かえる", fr: "rentrer chez soi", en: "to go home" }, { word: "帰国", reading: "きこく", fr: "retour au pays", en: "return to one's country" }], "Un vêtement 帀 sur un étui 刂 : on range ses affaires et on rentre.", "A garment 帀 on a stand 刂: you put your things away and head home."),
      k("話", "wa", 13, ["わ"], ["はな(す)"], "parler, discours", "talk, speak", "S2", [{ word: "電話", reading: "でんわ", fr: "téléphone", en: "telephone" }, { word: "話す", reading: "はなす", fr: "parler", en: "to speak" }], "La langue 舌 (qui parle) + la parole 訁 = conversation.", "The tongue 舌 (that speaks) + speech 訁 = conversation."),
      k("読", "doku", 14, ["どく", "とく"], ["よ(む)"], "lire", "read", "S2", [{ word: "本を読む", reading: "ほんをよむ", fr: "lire un livre", en: "to read a book" }, { word: "読書", reading: "どくしょ", fr: "lecture", en: "reading" }], "Les mots 言 + l'aliment 粟 : nourrir l'esprit en lisant.", "Words 言 + food 粟: nourishing the mind by reading."),
      k("書", "sho", 10, ["しょ"], ["か(く)"], "écrire", "write", "S2", [{ word: "手紙を書く", reading: "てがみをかく", fr: "écrire une lettre", en: "to write a letter" }, { word: "辞書", reading: "じしょ", fr: "dictionnaire", en: "dictionary" }], "Un pinceau sur du papier : l'acte d'écrire.", "A brush on paper: the act of writing."),
    ],
  },
  {
    group: "Lieu et maison",
    groupEn: "Places and home",
    description: "Les endroits de la vie quotidienne.",
    descriptionEn: "Everyday places.",
    kanji: [
      k("家", "ie", 10, ["か", "け"], ["いえ", "や"], "maison, famille", "house, family", "S2", [{ word: "家", reading: "いえ", fr: "maison", en: "house" }, { word: "家族", reading: "かぞく", fr: "famille", en: "family" }], "Un toit 覆 sous lequel vit un animal (porc) : la maison abrite la famille.", "A roof covering an animal (pig): the house shelters the family."),
      k("店", "mise", 8, ["てん"], ["みせ"], "boutique, magasin", "shop, store", "S2", [{ word: "お店", reading: "おみせ", fr: "boutique", en: "shop" }, { word: "喫茶店", reading: "きっさてん", fr: "café", en: "café" }], "Un toit 广 sous lequel on tend des marchandises (占).", "A roof 广 with merchandise displayed underneath (占)."),
      k("学", "gaku", 8, ["がく"], ["まな(ぶ)"], "étudier, apprendre", "study, learn", "S2", [{ word: "学校", reading: "がっこう", fr: "école", en: "school" }, { word: "学生", reading: "がくせい", fr: "étudiant", en: "student" }], "Un enfant 子 sous un toit : l'enfant qui étudie.", "A child 子 under a roof: the child who studies."),
      k("校", "kou", 10, ["こう"], [], "école", "school", "S2", [{ word: "学校", reading: "がっこう", fr: "école", en: "school" }, { word: "高校", reading: "こうこう", fr: "lycée", en: "high school" }], "L'arbre 木 + (交) croisement : l'endroit où l'on se croise pour apprendre.", "The tree 木 + 交 (cross): the place where people cross paths to learn."),
      k("車", "sha", 7, ["しゃ"], ["くるま"], "voiture, char", "vehicle, car", "S2", [{ word: "電車", reading: "でんしゃ", fr: "train", en: "train" }, { word: "車", reading: "くるま", fr: "voiture", en: "car" }], "Vue de face d'une roue avec un essieu au centre.", "Front view of a wheel with an axle in the center."),
      k("門", "mon", 8, ["もん"], ["かど"], "porte, gate", "gate, door", "S2", [{ word: "校門", reading: "こうもん", fr: "portail d'école", en: "school gate" }, { word: "門", reading: "かど", fr: "porte d'entrée", en: "entrance gate" }], "Deux battants de porte face à face.", "Two gate panels facing each other."),
    ],
  },
  {
    group: "Expressions abstraites",
    groupEn: "Abstract concepts",
    description: "Les idées de grand, petit, bien, mal, nouveau…",
    descriptionEn: "The ideas of big, small, good, bad, new...",
    kanji: [
      k("新", "shin", 13, ["しん"], ["あたら(しい)"], "nouveau", "new", "S2", [{ word: "新しい", reading: "あたらしい", fr: "nouveau, neuf", en: "new, brand-new" }, { word: "新聞", reading: "しんぶん", fr: "journal (nouvelles paroles)", en: "newspaper" }], "De l'huile 辛 versée sur un arbre 木 : une chose fraîchement coupée.", "Oil 辛 poured over a tree 木: something freshly cut."),
      k("古", "ko", 5, ["こ"], ["ふる(い)"], "ancien, vieux", "old, ancient", "S2", [{ word: "古い", reading: "ふるい", fr: "vieux, ancien", en: "old, ancient" }, { word: "古代", reading: "こだい", fr: "époque ancienne", en: "ancient times" }], "Un récipient 口 couvert de poussière 十 : quelque chose de bien rangé, et donc ancien.", "A container 口 covered in dust 十: something well-stored, and therefore old."),
      k("長", "chou", 8, ["ちょう"], ["なが(い)"], "long, chef", "long, leader", "S2", [{ word: "長い", reading: "ながい", fr: "long", en: "long" }, { word: "部長", reading: "ぶちょう", fr: "chef de service", en: "department head" }], "Une personne avec de longs cheveux : la longueur.", "A person with long hair: length."),
      k("好", "suki", 6, ["こう"], ["す(き)"], "aimer, bon", "like, good", "S2", [{ word: "好き", reading: "すき", fr: "aimer, à propos", en: "like, fond of" }, { word: "好き嫌い", reading: "すききらい", fr: "goûts et dégoûts", en: "likes and dislikes" }], "Une femme 女 et un enfant 子 ensemble : l'amour.", "A woman 女 and a child 子 together: love."),
      k("悪", "warui", 11, ["あく"], ["わる(い)"], "mauvais, mal", "bad, evil", "S3", [{ word: "悪い", reading: "わるい", fr: "mauvais", en: "bad" }, { word: "意地悪", reading: "いじわる", fr: "méchanceté", en: "cruelty" }], "Un cœur 心 sous un champ tordu 亜 : quelque chose ne va pas.", "A heart 心 under a twisted field 亜: something is wrong."),
      k("正", "tadashii", 5, ["せい", "しょう"], ["ただ(しい)"], "correct, juste", "correct, right", "S2", [{ word: "正しい", reading: "ただしい", fr: "correct, juste", en: "correct, right" }, { word: "お正月", reading: "おしょうがつ", fr: "le Nouvel An japonais", en: "Japanese New Year" }], "Un trait qui va tout droit sans dévier : la rectitude.", "A stroke going straight without deviating: correctness."),
      k("力", "ryoku", 2, ["りょく", "りき"], ["ちから"], "force, pouvoir", "power, strength", "S2", [{ word: "力", reading: "ちから", fr: "force", en: "power" }, { word: "努力", reading: "どりょく", fr: "effort", en: "effort" }], "Un bras musclé tendu vers le haut.", "A muscular arm reaching upward."),
      k("気", "ki", 6, ["き", "け"], ["いき"], "esprit, air, énergie", "spirit, energy, mood", "S2", [{ word: "元気", reading: "げんき", fr: "santé, énergie", en: "health, energy" }, { word: "気持ち", reading: "きもち", fr: "sentiment, humeur", en: "feeling, mood" }], "La vapeur qui s'élève du sol : l'énergie invisible.", "Steam rising from the ground: invisible energy."),
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
