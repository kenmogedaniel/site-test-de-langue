export interface LessonVocab {
  jp: string;
  kana: string;
  fr: string;
  en: string;
}

export interface LessonExample {
  jp: string;
  kana: string;
  fr: string;
  en: string;
}

export interface MinnaLesson {
  number: number;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  grammar: string[];
  explanation: string;
  explanationEn: string;
  examples: LessonExample[];
  vocab: LessonVocab[];
}

export const MINNA_LESSONS: MinnaLesson[] = [
  {
    number: 1,
    slug: "minna-01",
    title: "Se présenter",
    titleEn: "Introducing yourself",
    summary: "La phrase d'identification AはBです et les présentations de base.",
    summaryEn: "The identification sentence AはBです and basic introductions.",
    grammar: ["A は B です", "Négation : じゃありません", "Le possessif の"],
    explanation:
      "En japonais, la phrase la plus simple relie un thème à une information : わたしは学生です (« moi, je suis étudiant »). La particule は [wa] marque le thème de la phrase, です est la copule polie, et sa négation devient じゃありません. La particule の lie deux noms pour exprimer la possession ou l'appartenance : わたしの名前 (« mon nom »).",
    explanationEn:
      "In Japanese, the simplest sentence links a topic to information: わたしは学生です ('I am a student'). The particle は [wa] marks the topic of the sentence, です is the polite copula, and its negative form is じゃありません. The particle の connects two nouns to express possession or belonging: わたしの名前 ('my name').",
    examples: [
      { jp: "わたしはダニエルです。", kana: "わたしはダニエルです。", fr: "Je suis Daniel.", en: "I am Daniel." },
      { jp: "マリーさんはフランス人じゃありません。", kana: "マリーさんはフランスじんじゃありません。", fr: "Marie n'est pas française.", en: "Marie is not French." },
      { jp: "これはわたしの本です。", kana: "これはわたしのほんです。", fr: "C'est mon livre.", en: "This is my book." },
    ],
    vocab: [
      { jp: "私", kana: "わたし", fr: "je, moi", en: "I, me" },
      { jp: "あなた", kana: "あなた", fr: "tu, vous", en: "you" },
      { jp: "先生", kana: "せんせい", fr: "professeur", en: "teacher" },
      { jp: "学生", kana: "がくせい", fr: "étudiant", en: "student" },
      { jp: "会社員", kana: "かいしゃいん", fr: "employé de bureau", en: "office worker" },
      { jp: "研究者", kana: "けんきゅうしゃ", fr: "chercheur", en: "researcher" },
      { jp: "日本", kana: "にほん", fr: "Japon", en: "Japan" },
      { jp: "人", kana: "ひと", fr: "personne", en: "person" },
      { jp: "名前", kana: "なまえ", fr: "nom", en: "name" },
    ],
  },
  {
    number: 2,
    slug: "minna-02",
    title: "Désigner les objets",
    titleEn: "Pointing out objects",
    summary: "Les démonstratifs これ・それ・あれ et leurs formes avec nom.",
    summaryEn: "The demonstratives これ・それ・あれ and their forms with nouns.",
    grammar: ["これ・それ・あれ", "この／その／あの ＋ nom", "Question : 何ですか"],
    explanation:
      "これ désigne quelque chose proche du locuteur, それ proche de l'interlocuteur, あれ loin des deux. Devant un nom, ils deviennent この本 (« ce livre »), その本, あの本. Pour demander ce qu'est une chose : これは何ですか (« qu'est-ce que c'est ? »).",
    explanationEn:
      "これ refers to something near the speaker, それ to something near the listener, and あれ to something far from both. Before a noun, they become この本 ('this book'), その本, あの本. To ask what something is: これは何ですか ('what is this?').",
    examples: [
      { jp: "これは辞書です。", kana: "これはじしょです。", fr: "Ceci est un dictionnaire.", en: "This is a dictionary." },
      { jp: "それはあなたの新聞です。", kana: "それはあなたのしんぶんです。", fr: "Cela (près de toi) est ton journal.", en: "That (near you) is your newspaper." },
      { jp: "あれは何ですか。", kana: "あれはなんですか。", fr: "Qu'est-ce que c'est, là-bas ?", en: "What is that over there?" },
    ],
    vocab: [
      { jp: "これ", kana: "これ", fr: "ceci", en: "this" },
      { jp: "それ", kana: "それ", fr: "cela (côté interlocuteur)", en: "that (near the listener)" },
      { jp: "あれ", kana: "あれ", fr: "cela (loin)", en: "that (over there)" },
      { jp: "本", kana: "ほん", fr: "livre", en: "book" },
      { jp: "辞書", kana: "じしょ", fr: "dictionnaire", en: "dictionary" },
      { jp: "新聞", kana: "しんぶん", fr: "journal", en: "newspaper" },
      { jp: "雑誌", kana: "ざっし", fr: "magazine", en: "magazine" },
      { jp: "電話", kana: "でんわ", fr: "téléphone", en: "telephone" },
      { jp: "何", kana: "なに", fr: "quoi", en: "what" },
    ],
  },
  {
    number: 3,
    slug: "minna-03",
    title: "Situer dans l'espace",
    titleEn: "Locating things in space",
    summary: "Les lieux ここ・そこ・あそこ・どこ et demander son chemin.",
    summaryEn: "The locations ここ・そこ・あそこ・どこ and asking for directions.",
    grammar: ["ここ・そこ・あそこ・どこ", "だれの (à qui)", "Politesse : こちら"],
    explanation:
      "Comme pour les objets, on distingue trois zones : ここ (ici), そこ (là), あそこ (là-bas), et la question どこ (« où ? »). Pour demander l'appartenance d'une personne : だれのかさですか (« c'est le parapluie de qui ? »). La réception se dit 受付, très utile dès le premier jour au Japon.",
    explanationEn:
      "As with objects, three zones are distinguished: ここ (here), そこ (there), あそこ (over there), and the question word どこ ('where?'). To ask about someone's belonging: だれのかさですか ('whose umbrella is this?'). The reception desk is called 受付, very useful from your first day in Japan.",
    examples: [
      { jp: "トイレはどこですか。", kana: "トイレはどこですか。", fr: "Où sont les toilettes ?", en: "Where are the restrooms?" },
      { jp: "ここは受付です。", kana: "ここはうけつけです。", fr: "Ici, c'est l'accueil.", en: "This is the reception desk." },
      { jp: "あの人はどなたですか。", kana: "あのひとはどなたですか。", fr: "Qui est cette personne là-bas ?", en: "Who is that person over there?" },
    ],
    vocab: [
      { jp: "ここ", kana: "ここ", fr: "ici", en: "here" },
      { jp: "そこ", kana: "そこ", fr: "là", en: "there" },
      { jp: "あそこ", kana: "あそこ", fr: "là-bas", en: "over there" },
      { jp: "どこ", kana: "どこ", fr: "où", en: "where" },
      { jp: "トイレ", kana: "トイレ", fr: "toilettes", en: "restroom" },
      { jp: "受付", kana: "うけつけ", fr: "accueil, réception", en: "reception, front desk" },
      { jp: "エレベーター", kana: "エレベーター", fr: "ascenseur", en: "elevator" },
      { jp: "国", kana: "くに", fr: "pays", en: "country" },
      { jp: "会社", kana: "かいしゃ", fr: "entreprise", en: "company" },
    ],
  },
  {
    number: 4,
    slug: "minna-04",
    title: "L'heure et les verbes au présent",
    titleEn: "Telling time and present tense verbs",
    summary: "Dire l'heure et utiliser les verbes en ます / ません.",
    summaryEn: "Telling time and using verbs in the ます / ません form.",
    grammar: ["今、何時ですか", "Verbes : ます / ません", "に (moment précis)"],
    explanation:
      "Pour demander l'heure : 今、何時ですか (« il est quelle heure maintenant ? »). On répond avec un nombre + 時 (heures) et 分 (minutes) : la demie se dit 半. Les verbes polis finissent par ます (affirmatif) ou ません (négatif), et couvrent aussi bien le présent que le futur : 明日起きます signifie « je me lèverai demain ». On ajoute に après un moment précis : 7時に (« à 7 heures »).",
    explanationEn:
      "To ask the time: 今、何時ですか ('what time is it now?'). You answer with a number + 時 (hours) and 分 (minutes): the half hour is called 半. Polite verbs end in ます (affirmative) or ません (negative), and cover both the present and the future: 明日起きます means 'I will get up tomorrow'. You add に after a specific time: 7時に ('at 7 o'clock').",
    examples: [
      { jp: "今、何時ですか。", kana: "いま、なんじですか。", fr: "Quelle heure est-il maintenant ?", en: "What time is it now?" },
      { jp: "7時に起きます。", kana: "しちじにおきます。", fr: "Je me lève à 7 heures.", en: "I get up at 7 o'clock." },
      { jp: "日曜日は働きません。", kana: "にちようびははたらきません。", fr: "Le dimanche, je ne travaille pas.", en: "I don't work on Sundays." },
    ],
    vocab: [
      { jp: "今", kana: "いま", fr: "maintenant", en: "now" },
      { jp: "〜時", kana: "〜じ", fr: "heure(s)", en: "hour(s)" },
      { jp: "〜分", kana: "〜ふん", fr: "minute(s)", en: "minute(s)" },
      { jp: "半", kana: "はん", fr: "et demie", en: "half (past)" },
      { jp: "起きます", kana: "おきます", fr: "se lever", en: "to get up" },
      { jp: "寝ます", kana: "ねます", fr: "dormir, se coucher", en: "to sleep, to go to bed" },
      { jp: "働きます", kana: "はたらきます", fr: "travailler", en: "to work" },
      { jp: "勉強します", kana: "べんきょうします", fr: "étudier", en: "to study" },
      { jp: "終わります", kana: "おわります", fr: "se terminer", en: "to finish, to end" },
    ],
  },
  {
    number: 5,
    slug: "minna-05",
    title: "Aller, venir, rentrer",
    titleEn: "Going, coming, returning",
    summary: "Les verbes de mouvement et les particules へ・で・と.",
    summaryEn: "Movement verbs and the particles へ・で・と.",
    grammar: ["へ (direction)", "で (moyen de transport)", "と (accompagnement)", "〜から〜まで (de…à…)"],
    explanation:
      "Avec 行きます・来ます・帰ります, la direction est marquée par へ : 東京へ行きます (« je vais à Tokyo »). Le moyen de transport prend で : 電車で (« en train »), 歩いて (« à pied », forme spéciale). L'accompagnateur prend と : 友達と (« avec un ami »). Une plage horaire s'exprime avec から…まで (« de… à… »).",
    explanationEn:
      "With 行きます・来ます・帰ります, the direction is marked by へ: 東京へ行きます ('I'm going to Tokyo'). The means of transportation takes で: 電車で ('by train'), 歩いて ('on foot', a special form). The companion particle is と: 友達と ('with a friend'). A time range is expressed with から…まで ('from...to...').",
    examples: [
      { jp: "東京へ行きます。", kana: "とうきょうへいきます。", fr: "Je vais à Tokyo.", en: "I am going to Tokyo." },
      { jp: "バスで学校へ行きます。", kana: "バスでがっこうへいきます。", fr: "Je vais à l'école en bus.", en: "I go to school by bus." },
      { jp: "9時から5時まで働きます。", kana: "くじからごじまではたらきます。", fr: "Je travaille de 9 h à 17 h.", en: "I work from 9 a.m. to 5 p.m." },
    ],
    vocab: [
      { jp: "行きます", kana: "いきます", fr: "aller", en: "to go" },
      { jp: "来ます", kana: "きます", fr: "venir", en: "to come" },
      { jp: "帰ります", kana: "かえります", fr: "rentrer chez soi", en: "to go home" },
      { jp: "電車", kana: "でんしゃ", fr: "train", en: "train" },
      { jp: "自転車", kana: "じてんしゃ", fr: "vélo", en: "bicycle" },
      { jp: "友達", kana: "ともだち", fr: "ami(e)", en: "friend" },
      { jp: "学校", kana: "がっこう", fr: "école", en: "school" },
      { jp: "東京", kana: "とうきょう", fr: "Tokyo", en: "Tokyo" },
      { jp: "一緒に", kana: "いっしょに", fr: "ensemble", en: "together" },
    ],
  },
  {
    number: 6,
    slug: "minna-06",
    title: "Faire une action sur quelque chose",
    titleEn: "Performing an action on something",
    summary: "La particule を marque l'objet direct du verbe.",
    summaryEn: "The particle を marks the direct object of the verb.",
    grammar: ["を (objet direct)", "何を…ますか", "で (lieu de l'action)"],
    explanation:
      "L'objet direct d'un verbe est suivi de を [o] : コーヒーを飲みます (« je bois un café »). La question correspondante est 何を飲みますか (« que buvez-vous ? »). Le lieu où se déroule l'action prend lui aussi で : 図書館で本を読みます (« je lis un livre à la bibliothèque »).",
    explanationEn:
      "The direct object of a verb is followed by を [o]: コーヒーを飲みます ('I drink coffee'). The corresponding question is 何を飲みますか ('what do you drink?'). The place where the action takes place also takes で: 図書館で本を読みます ('I read a book at the library').",
    examples: [
      { jp: "コーヒーを飲みます。", kana: "コーヒーをのみます。", fr: "Je bois un café.", en: "I drink coffee." },
      { jp: "朝ご飯を食べます。", kana: "あさごはんをたべます。", fr: "Je mange le petit-déjeuner.", en: "I eat breakfast." },
      { jp: "図書館で本を読みます。", kana: "としょかんでほんをよみます。", fr: "Je lis un livre à la bibliothèque.", en: "I read a book at the library." },
    ],
    vocab: [
      { jp: "食べます", kana: "たべます", fr: "manger", en: "to eat" },
      { jp: "飲みます", kana: "のみます", fr: "boire", en: "to drink" },
      { jp: "見ます", kana: "みます", fr: "regarder, voir", en: "to watch, to see" },
      { jp: "読みます", kana: "よみます", fr: "lire", en: "to read" },
      { jp: "買います", kana: "かいます", fr: "acheter", en: "to buy" },
      { jp: "コーヒー", kana: "コーヒー", fr: "café", en: "coffee" },
      { jp: "パン", kana: "パン", fr: "pain", en: "bread" },
      { jp: "朝ご飯", kana: "あさごはん", fr: "petit-déjeuner", en: "breakfast" },
      { jp: "図書館", kana: "としょかん", fr: "bibliothèque", en: "library" },
    ],
  },
  {
    number: 7,
    slug: "minna-07",
    title: "Inviter et proposer",
    titleEn: "Inviting and suggesting",
    summary: "L'outil de l'action (で) et les invitations ましょう.",
    summaryEn: "The instrument of action (で) and invitations with ましょう.",
    grammar: ["で (instrument, moyen)", "〜ましょう (invitation)", "〜ましょうか (proposition d'aide)"],
    explanation:
      "L'instrument ou l'outil utilisé prend で : はさみで切ります (« couper aux ciseaux »). Pour inviter quelqu'un, on utilise ましょう (« allons-y ! »), et ましょうか propose gentiment son aide ou une action conjointe : 写真を撮りましょうか (« on prend la photo ? »).",
    explanationEn:
      "The instrument or tool used takes で: はさみで切ります ('cut with scissors'). To invite someone, you use ましょう ('let's go!'), and ましょうか kindly offers help or proposes a joint action: 写真を撮りましょうか ('shall we take a photo?').",
    examples: [
      { jp: "はさみで紙を切ります。", kana: "はさみでかみをきります。", fr: "Je coupe le papier aux ciseaux.", en: "I cut the paper with scissors." },
      { jp: "写真を撮りましょう。", kana: "しゃしんをとりましょう。", fr: "Prenons une photo !", en: "Let's take a photo!" },
      { jp: "手紙を送りましょうか。", kana: "てがみをおくりましょうか。", fr: "Shall I send the letter for you?", en: "Shall I send the letter for you?" },
    ],
    vocab: [
      { jp: "切ります", kana: "きります", fr: "couper", en: "to cut" },
      { jp: "送ります", kana: "おくります", fr: "envoyer", en: "to send" },
      { jp: "作ります", kana: "つくります", fr: "fabriquer, préparer", en: "to make, to prepare" },
      { jp: "使います", kana: "つかいます", fr: "utiliser", en: "to use" },
      { jp: "手紙", kana: "てがみ", fr: "lettre", en: "letter" },
      { jp: "写真", kana: "しゃしん", fr: "photo", en: "photo" },
      { jp: "はさみ", kana: "はさみ", fr: "ciseaux", en: "scissors" },
      { jp: "プール", kana: "プール", fr: "piscine", en: "swimming pool" },
    ],
  },
  {
    number: 8,
    slug: "minna-08",
    title: "Les adjectifs",
    titleEn: "Adjectives",
    summary: "Adjectifs en い et en な au présent, positif et négatif.",
    summaryEn: "Adjectives ending in い and な in the present tense, affirmative and negative.",
    grammar: ["Adjectifs en い", "Adjectifs en な", "Négation : くないです / じゃありません"],
    explanation:
      "Il y a deux familles d'adjectifs. Ceux en い se conjuguent eux-mêmes : 高いです (« c'est cher ») → 高くないです (« ce n'est pas cher »). Ceux en な se comportent comme des noms : 静かな町 (« une ville calme ») → 静かじゃありません (« ce n'est pas calme »). Attention : いい (bon) devient よくないです au négatif.",
    explanationEn:
      "There are two families of adjectives. Those ending in い conjugate by themselves: 高いです ('it's expensive') → 高くないです ('it's not expensive'). Those ending in な behave like nouns: 静かな町 ('a quiet town') → 静かじゃありません ('it's not quiet'). Note: いい (good) becomes よくないです in the negative form.",
    examples: [
      { jp: "富士山は高いです。", kana: "ふじさんはたかいです。", fr: "Le mont Fuji est haut.", en: "Mount Fuji is tall." },
      { jp: "この町は静かじゃありません。", kana: "このまちはしずかじゃありません。", fr: "Cette ville n'est pas calme.", en: "This city is not quiet." },
      { jp: "元気ですか。", kana: "げんきですか。", fr: "Comment allez-vous ?", en: "How are you?" },
    ],
    vocab: [
      { jp: "高い", kana: "たかい", fr: "cher, haut", en: "expensive, tall" },
      { jp: "安い", kana: "やすい", fr: "bon marché", en: "cheap, inexpensive" },
      { jp: "大きい", kana: "おおきい", fr: "grand", en: "big, large" },
      { jp: "小さい", kana: "ちいさい", fr: "petit", en: "small" },
      { jp: "元気", kana: "げんき", fr: "en forme, énergique", en: "healthy, energetic" },
      { jp: "静か", kana: "しずか", fr: "calme, silencieux", en: "quiet, peaceful" },
      { jp: "有名", kana: "ゆうめい", fr: "célèbre", en: "famous" },
      { jp: "便利", kana: "べんり", fr: "pratique, commode", en: "convenient, handy" },
      { jp: "町", kana: "まち", fr: "ville", en: "city, town" },
    ],
  },
  {
    number: 9,
    slug: "minna-09",
    title: "Comparer et exprimer ses goûts",
    titleEn: "Comparing and expressing preferences",
    summary: "Passé des adjectifs, préférences 好き et compétence 上手.",
    summaryEn: "Past tense of adjectives, preferences with 好き and skill with 上手.",
    grammar: ["Passé : かったです / でした", "好き（な）／嫌い（な）＋ が", "上手（な）／下手（な）＋ が"],
    explanation:
      "Au passé, les adjectifs en い deviennent かったです (高かったです : « c'était cher ») et ceux en な prennent でした. Les goûts utilisent un adjectif + が : 音楽が好きです (« j'aime la musique »), 日本語が上手です (« vous parlez bien japonais »).",
    explanationEn:
      "In the past tense, adjectives ending in い become かったです (高かったです: 'it was expensive') and those ending in な take でした. Preferences use an adjective + が: 音楽が好きです ('I like music'), 日本語が上手です ('you speak Japanese well').",
    examples: [
      { jp: "京都はよかったです。", kana: "きょうとはよかったです。", fr: "Kyoto était super.", en: "Kyoto was great." },
      { jp: "音楽が好きです。", kana: "おんがくがすきです。", fr: "J'aime la musique.", en: "I like music." },
      { jp: "田中さんは料理が上手です。", kana: "たなかさんはりょうりがじょうずです。", fr: "M. Tanaka cuisine bien.", en: "Mr. Tanaka is good at cooking." },
    ],
    vocab: [
      { jp: "好き", kana: "すき", fr: "aimé, préféré", en: "liked, favorite" },
      { jp: "嫌い", kana: "きらい", fr: "détesté", en: "disliked" },
      { jp: "上手", kana: "じょうず", fr: "doué, habile", en: "skilled, good at" },
      { jp: "下手", kana: "へた", fr: "maladroit", en: "unskilled, clumsy" },
      { jp: "温かい", kana: "あたたかい", fr: "tiède, chaleureux", en: "warm, mild" },
      { jp: "涼しい", kana: "すずしい", fr: "frais (agréable)", en: "cool, refreshing" },
      { jp: "忙しい", kana: "いそがしい", fr: "occupé", en: "busy" },
      { jp: "料理", kana: "りょうり", fr: "plat, cuisine", en: "dish, cooking" },
      { jp: "音楽", kana: "おんがく", fr: "musique", en: "music" },
    ],
  },
  {
    number: 10,
    slug: "minna-10",
    title: "Dire qu'il y a / qu'il existe",
    titleEn: "Saying something exists",
    summary: "Existence あります・います et localisation précise.",
    summaryEn: "Existence with あります・います and precise location.",
    grammar: ["あります (objets)", "います (êtres vivants)", "に (lieu d'existence)", "Position : 上・下・中・前・後ろ・隣"],
    explanation:
      "Pour dire qu'une chose existe : 机の上に本があります (« il y a un livre sur le bureau »). Pour un être vivant, on utilise います : ネコがいます (« il y a un chat »). Le lieu prend に et on précise la position : 上 (sur), 下 (sous), 中 (dans), 前 (devant), 後ろ (derrière), 隣 (à côté).",
    explanationEn:
      "To say something exists: 机の上に本があります ('there is a book on the desk'). For living beings, you use います: ネコがいます ('there is a cat'). The location takes に and you specify the position: 上 (on top), 下 (under), 中 (inside), 前 (in front), 後ろ (behind), 隣 (next to).",
    examples: [
      { jp: "机の上に本があります。", kana: "つくえのうえにほんがあります。", fr: "Il y a un livre sur le bureau.", en: "There is a book on the desk." },
      { jp: "ネコはどこにいますか。", kana: "ネコはどこにいますか。", fr: "Où est le chat ?", en: "Where is the cat?" },
      { jp: "家族は4人います。", kana: "かぞくはよにんいます。", fr: "Nous sommes quatre dans ma famille.", en: "There are four people in my family." },
    ],
    vocab: [
      { jp: "あります", kana: "あります", fr: "il y a (choses)", en: "there is/are (things)" },
      { jp: "います", kana: "います", fr: "il y a (êtres vivants)", en: "there is/are (living beings)" },
      { jp: "上", kana: "うえ", fr: "dessus, sur", en: "on top, above" },
      { jp: "下", kana: "した", fr: "dessous, sous", en: "under, below" },
      { jp: "中", kana: "なか", fr: "dedans", en: "inside" },
      { jp: "前", kana: "まえ", fr: "devant", en: "in front of" },
      { jp: "後ろ", kana: "うしろ", fr: "derrière", en: "behind" },
      { jp: "隣", kana: "となり", fr: "à côté", en: "next to, beside" },
      { jp: "机", kana: "つくえ", fr: "bureau (meuble)", en: "desk" },
      { jp: "家族", kana: "かぞく", fr: "famille", en: "family" },
    ],
  },
  {
    number: 11,
    slug: "minna-11",
    title: "Les nombres et les prix",
    titleEn: "Numbers and prices",
    summary: "Compter, demander un prix, dire combien de temps ça prend.",
    summaryEn: "Counting, asking for a price, saying how long something takes.",
    grammar: ["Compteurs : 円・時間・週間", "かかります (coûter / prendre du temps)", "だけ (seulement)"],
    explanation:
      "Les grands nombres se construisent par dizaines de milliers : 千 (1 000), 万 (10 000). Le prix se demande ですか (« combien ça coûte ? »). La durée prend かかります : 30分かかります (« ça prend 30 minutes »). だけ limite : これだけください (« seulement ceci, s'il vous plaît »).",
    explanationEn:
      "Large numbers are built by tens of thousands: 千 (1,000), 万 (10,000). The price is asked with いくらですか ('how much does it cost?'). Duration uses かかります: 30分かかります ('it takes 30 minutes'). だけ limits the scope: これだけください ('only this, please').",
    examples: [
      { jp: "これはいくらですか。", kana: "これはいくらですか。", fr: "Combien coûte ceci ?", en: "How much does this cost?" },
      { jp: "駅まで30分かかります。", kana: "えきまでさんじゅっぷんかかります。", fr: "Ça prend 30 minutes jusqu'à la gare.", en: "It takes 30 minutes to get to the station." },
      { jp: "切符を2枚買いました。", kana: "きっぷをにまいかいました。", fr: "J'ai acheté deux billets.", en: "I bought two tickets." },
    ],
    vocab: [
      { jp: "円", kana: "えん", fr: "yen", en: "yen" },
      { jp: "いくら", kana: "いくら", fr: "combien (prix)", en: "how much (price)" },
      { jp: "時間", kana: "じかん", fr: "durée en heures", en: "duration in hours" },
      { jp: "週間", kana: "しゅうかん", fr: "durée en semaines", en: "duration in weeks" },
      { jp: "千", kana: "せん", fr: "mille", en: "thousand" },
      { jp: "万", kana: "まん", fr: "dix mille", en: "ten thousand" },
      { jp: "かかります", kana: "かかります", fr: "coûter, prendre (temps)", en: "to cost, to take (time)" },
      { jp: "だけ", kana: "だけ", fr: "seulement", en: "only" },
      { jp: "全部", kana: "ぜんぶ", fr: "tout", en: "all, everything" },
      { jp: "切符", kana: "きっぷ", fr: "billet, ticket", en: "ticket" },
    ],
  },
  {
    number: 12,
    slug: "minna-12",
    title: "Parler du passé",
    titleEn: "Talking about the past",
    summary: "Les verbes au passé : ました / ませんでした.",
    summaryEn: "Verbs in the past tense: ました / ませんでした.",
    grammar: ["Passé : ました", "Passé négatif : ませんでした", "Repères temporels"],
    explanation:
      "Le passé poli remplace ます par しました (会いました : « j'ai rencontré ») et ません par ませんでした (食べませんでした : « je n'ai pas mangé »). Les repères temporels s'ajoutent simplement : 昨日 (hier), 今日 (aujourd'hui), 明日 (demain).",
    explanationEn:
      "The polite past tense replaces ます with しました (会いました: 'I met') and ません with ませんでした (食べませんでした: 'I didn't eat'). Time markers are added simply: 昨日 (yesterday), 今日 (today), 明日 (tomorrow).",
    examples: [
      { jp: "昨日、友達に会いました。", kana: "きのう、ともだちにあいました。", fr: "Hier, j'ai vu un ami.", en: "Yesterday, I saw a friend." },
      { jp: "今朝は何も食べませんでした。", kana: "けさはなにもたべませんでした。", fr: "Ce matin, je n'ai rien mangé.", en: "I didn't eat anything this morning." },
      { jp: "宿題をしました。", kana: "しゅくだいをしました。", fr: "J'ai fait mes devoirs.", en: "I did my homework." },
    ],
    vocab: [
      { jp: "昨日", kana: "きのう", fr: "hier", en: "yesterday" },
      { jp: "今日", kana: "きょう", fr: "aujourd'hui", en: "today" },
      { jp: "明日", kana: "あした", fr: "demain", en: "tomorrow" },
      { jp: "朝", kana: "あさ", fr: "matin", en: "morning" },
      { jp: "夜", kana: "よる", fr: "soir, nuit", en: "evening, night" },
      { jp: "会います", kana: "あいます", fr: "rencontrer, voir", en: "to meet, to see" },
      { jp: "します", kana: "します", fr: "faire", en: "to do" },
      { jp: "宿題", kana: "しゅくだい", fr: "devoirs", en: "homework" },
      { jp: "テスト", kana: "テスト", fr: "examen, test", en: "test, exam" },
    ],
  },
  {
    number: 13,
    slug: "minna-13",
    title: "Exprimer l'envie",
    titleEn: "Expressing desire",
    summary: "Dire ce qu'on veut faire avec たいです.",
    summaryEn: "Saying what you want to do with たいです.",
    grammar: ["V + たいです", "〜に行きたい (aller pour faire)", "~ませんか / ~ましょう invitations"],
    explanation:
      "On forme le désir en remplaçant ます par たいです : 泳ぎます → 泳ぎたいです (« j'ai envie de nager »). La destination d'une activité prend に : 富士山に登りたいです (« je veux gravir le mont Fuji »).",
    explanationEn:
      "You form the desire by replacing ます with たいです: 泳ぎます → 泳ぎたいです ('I want to swim'). The destination of an activity takes に: 富士山に登りたいです ('I want to climb Mount Fuji').",
    examples: [
      { jp: "日本へ行きたいです。", kana: "にほんへいきたいです。", fr: "Je veux aller au Japon.", en: "I want to go to Japan." },
      { jp: "海で泳ぎたいです。", kana: "うみでおよぎたいです。", fr: "Je veux nager dans la mer.", en: "I want to swim in the sea." },
      { jp: "京都に行きたいです。", kana: "きょうとにいきたいです。", fr: "J'ai envie d'aller à Kyoto.", en: "I want to go to Kyoto." },
    ],
    vocab: [
      { jp: "旅行", kana: "りょこう", fr: "voyage", en: "travel, trip" },
      { jp: "海", kana: "うみ", fr: "mer", en: "sea" },
      { jp: "泳ぎます", kana: "およぎます", fr: "nager", en: "to swim" },
      { jp: "登ります", kana: "のぼります", fr: "gravir, escalader", en: "to climb" },
      { jp: "撮ります", kana: "とります", fr: "photographier", en: "to take a photo" },
      { jp: "京都", kana: "きょうと", fr: "Kyoto", en: "Kyoto" },
      { jp: "富士山", kana: "ふじさん", fr: "mont Fuji", en: "Mount Fuji" },
      { jp: "世界", kana: "せかい", fr: "le monde", en: "the world" },
    ],
  },
  {
    number: 14,
    slug: "minna-14",
    title: "La forme en て et les demandes",
    titleEn: "The て form and making requests",
    summary: "Demander poliment une action avec てください.",
    summaryEn: "Politely requesting an action with てください.",
    grammar: ["Forme en て", "〜てください (demande)", "〜ています (action en cours)"],
    explanation:
      "La forme en て est l'un des pivots du japonais : chaque verbe a sa forme て à mémoriser. Avec ください, elle transforme un verbe en demande polie : 待ってください (« attendez, s'il vous plaît »). C'est aussi la base de nombreuses autres constructions que vous verrez ensuite.",
    explanationEn:
      "The て form is one of the pillars of Japanese: each verb has its て form to memorize. With ください, it turns a verb into a polite request: 待ってください ('please wait'). It is also the foundation of many other constructions that you will learn afterward.",
    examples: [
      { jp: "ちょっと待ってください。", kana: "ちょっとまってください。", fr: "Attendez un instant, s'il vous plaît.", en: "Please wait a moment." },
      { jp: "もう一度言ってください。", kana: "もういちどいってください。", fr: "Répétez encore une fois, s'il vous plaît.", en: "Please say it one more time." },
      { jp: "ここに座ってください。", kana: "ここにすわってください。", fr: "Asseyez-vous ici, s'il vous plaît.", en: "Please sit down here." },
    ],
    vocab: [
      { jp: "待ちます", kana: "まちます", fr: "attendre", en: "to wait" },
      { jp: "取ります", kana: "とります", fr: "prendre", en: "to take" },
      { jp: "手伝います", kana: "てつだいます", fr: "aider", en: "to help" },
      { jp: "座ります", kana: "すわります", fr: "s'asseoir", en: "to sit down" },
      { jp: "立ちます", kana: "たちます", fr: "se lever", en: "to stand up" },
      { jp: "電話します", kana: "でんわします", fr: "téléphoner", en: "to make a phone call" },
      { jp: "すみません", kana: "すみません", fr: "excusez-moi, pardon", en: "excuse me, sorry" },
      { jp: "ちょっと", kana: "ちょっと", fr: "un petit peu", en: "a little bit" },
      { jp: "もう一度", kana: "もういちど", fr: "encore une fois", en: "one more time" },
    ],
  },
  {
    number: 15,
    slug: "minna-15",
    title: "Permission et interdiction",
    titleEn: "Permission and prohibition",
    summary: "Demander le droit de faire : てもいいですか.",
    summaryEn: "Asking for permission: てもいいですか.",
    grammar: ["〜てもいいです (permission)", "〜てはいけません (interdiction)", "Focus sur la forme て"],
    explanation:
      "Pour demander la permission : 入ってもいいですか (« puis-je entrer ? »). Pour interdire : ここでタバコを吸ってはいけません (« il est interdit de fumer ici »). Ces tournures réutilisent la forme て vue à la leçon précédente — c'est le moment de bien la maîtriser.",
    explanationEn:
      "To ask for permission: 入ってもいいですか ('may I come in?'). To prohibit: ここでタバコを吸ってはいけません ('smoking is not allowed here'). These patterns reuse the て form from the previous lesson — this is the time to master it well.",
    examples: [
      { jp: "入ってもいいですか。", kana: "はいってもいいですか。", fr: "Puis-je entrer ?", en: "May I come in?" },
      { jp: "ここで写真を撮ってはいけません。", kana: "ここでしゃしんをとってはいけません。", fr: "Il est interdit de photographier ici.", en: "Photography is not allowed here." },
      { jp: "帰ってもいいですか。", kana: "かえってもいいですか。", fr: "Puis-je rentrer ?", en: "May I go home?" },
    ],
    vocab: [
      { jp: "入ります", kana: "はいります", fr: "entrer", en: "to enter" },
      { jp: "出ます", kana: "でます", fr: "sortir", en: "to go out" },
      { jp: "授業", kana: "じゅぎょう", fr: "cours, leçon", en: "class, lesson" },
      { jp: "質問", kana: "しつもん", fr: "question", en: "question" },
      { jp: "忘れます", kana: "わすれます", fr: "oublier", en: "to forget" },
      { jp: "タバコ", kana: "タバコ", fr: "tabac, cigarette", en: "tobacco, cigarette" },
      { jp: "吸います", kana: "すいます", fr: "fumer", en: "to smoke" },
      { jp: "あとで", kana: "あとで", fr: "plus tard", en: "later" },
    ],
  },
  {
    number: 16,
    slug: "minna-16",
    title: "Décrire des habitudes et des personnes",
    titleEn: "Describing habits and people",
    summary: "ています pour les habitudes et les états durables.",
    summaryEn: "Using ています for habits and lasting states.",
    grammar: ["〜ています (habitude)", "〜を持っています (posséder)", "Décrire quelqu'un"],
    explanation:
      "ています ne sert pas qu'à l'action en cours : il décrit aussi les habitudes (東京に住んでいます : « j'habite à Tokyo », état durable) et la possession physique (眼鏡をかけています : « il porte des lunettes »). Le contexte indique le sens.",
    explanationEn:
      "ています is not only used for ongoing actions: it also describes habits (東京に住んでいます: 'I live in Tokyo', a lasting state) and physical possession (眼鏡をかけています: 'he/she wears glasses'). The context determines the meaning.",
    examples: [
      { jp: "東京に住んでいます。", kana: "とうきょうにすんでいます。", fr: "J'habite à Tokyo.", en: "I live in Tokyo." },
      { jp: "メガネをかけています。", kana: "メガネをかけています。", fr: "Il porte des lunettes.", en: "He/she wears glasses." },
      { jp: "子どもが3人います。", kana: "こどもがさんにんいます。", fr: "Elle a trois enfants.", en: "She has three children." },
    ],
    vocab: [
      { jp: "住みます", kana: "すみます", fr: "habiter, demeurer", en: "to live, to reside" },
      { jp: "着ます", kana: "きます", fr: "porter (un vêtement)", en: "to wear (clothing)" },
      { jp: "かけます", kana: "かけます", fr: "porter (lunettes)", en: "to wear (glasses)" },
      { jp: "眼鏡", kana: "めがね", fr: "lunettes", en: "glasses" },
      { jp: "子ども", kana: "こども", fr: "enfant", en: "child" },
      { jp: "知っています", kana: "しっています", fr: "savoir, connaître", en: "to know" },
      { jp: "分かります", kana: "わかります", fr: "comprendre", en: "to understand" },
      { jp: "太ります", kana: "ふとります", fr: "grossir", en: "to gain weight" },
      { jp: "痩せます", kana: "やせます", fr: "maigrir", en: "to lose weight" },
    ],
  },
  {
    number: 17,
    slug: "minna-17",
    title: "Mais, parce que… relier ses phrases",
    titleEn: "But, because... connecting your sentences",
    summary: "Les connecteurs が (mais) et から (parce que).",
    summaryEn: "The connectors が (but) and から (because).",
    grammar: ["〜が、〜 (mais)", "〜から (parce que)", "Expressions de sentiment"],
    explanation:
      "が relie deux phrases opposées : この本は面白いですが、高いです (« ce livre est intéressant, mais cher »). から exprime la cause, placée en fin de proposition : 雨が降っていますから、傘を持って行きます (« comme il pleut, je prends un parapluie »). En japonais, la cause vient avant la conséquence.",
    explanationEn:
      "が connects two opposing sentences: この本は面白いですが、高いです ('this book is interesting, but expensive'). から expresses cause, placed at the end of the clause: 雨が降っていますから、傘を持って行きます ('since it's raining, I'll take an umbrella'). In Japanese, the cause comes before the consequence.",
    examples: [
      { jp: "雨が降っていますから、傘を持って行きます。", kana: "あめがふっていますから、かさをもっていきます。", fr: "Comme il pleut, je prends un parapluie.", en: "Since it's raining, I'll take an umbrella." },
      { jp: "日本語は大変ですが、面白いです。", kana: "にほんごはたいへんですが、おもしろいです。", fr: "Le japonais est exigeant, mais passionnant.", en: "Japanese is challenging, but interesting." },
      { jp: "桜が咲きました。", kana: "さくらがさきました。", fr: "Les cerisiers ont fleuri.", en: "The cherry blossoms have bloomed." },
    ],
    vocab: [
      { jp: "花", kana: "はな", fr: "fleur", en: "flower" },
      { jp: "桜", kana: "さくら", fr: "cerisier du Japon", en: "cherry blossom tree" },
      { jp: "咲きます", kana: "さきます", fr: "fleurir", en: "to bloom" },
      { jp: "降ります", kana: "ふります", fr: "tomber (pluie, neige)", en: "to fall (rain, snow)" },
      { jp: "雨", kana: "あめ", fr: "pluie", en: "rain" },
      { jp: "天気", kana: "てんき", fr: "beau temps", en: "good weather" },
      { jp: "でも", kana: "でも", fr: "mais", en: "but" },
      { jp: "だから", kana: "だから", fr: "alors, c'est pourquoi", en: "so, that's why" },
      { jp: "大変", kana: "たいへん", fr: "rude, exigeant", en: "tough, demanding" },
    ],
  },
  {
    number: 18,
    slug: "minna-18",
    title: "Parler de ses passe-temps",
    titleEn: "Talking about your hobbies",
    summary: "La forme du dictionnaire et 趣味は〜ことです.",
    summaryEn: "The dictionary form and 趣味は〜ことです.",
    grammar: ["Forme du dictionnaire", "趣味は〜ことです", "〜前に (avant de…)"],
    explanation:
      "La forme du dictionnaire (食べる, 読む…) est celle trouvée dans les dictionnaires. Nominalisée avec こと, elle permet de définir ses loisirs : 趣味は音楽を聞くことです (« mon passe-temps, c'est écouter de la musique »). Avec 前, elle dit « avant de » : 寝る前に本を読みます (« je lis avant de dormir »).",
    explanationEn:
      "The dictionary form (食べる, 読む, etc.) is the form found in dictionaries. When nominalized with こと, it allows you to define your hobbies: 趣味は音楽を聞くことです ('my hobby is listening to music'). With 前, it means 'before doing': 寝る前に本を読みます ('I read a book before going to sleep').",
    examples: [
      { jp: "趣味は音楽を聞くことです。", kana: "しゅみはおんがくをきくことです。", fr: "Mon passe-temps, c'est écouter de la musique.", en: "My hobby is listening to music." },
      { jp: "寝る前に本を読みます。", kana: "ねるまえにほんをよみます。", fr: "Je lis un livre avant de dormir.", en: "I read a book before going to bed." },
      { jp: "私の特技は料理を作ることです。", kana: "わたしのとくぎはりょうりをつくることです。", fr: "Mon talent particulier, c'est cuisiner.", en: "My special skill is cooking." },
    ],
    vocab: [
      { jp: "趣味", kana: "しゅみ", fr: "passe-temps", en: "hobby" },
      { jp: "特技", kana: "とくぎ", fr: "talent particulier", en: "special skill" },
      { jp: "映画", kana: "えいが", fr: "film", en: "movie" },
      { jp: "買い物", kana: "かいもの", fr: "courses, achats", en: "shopping" },
      { jp: "水泳", kana: "すいえい", fr: "natation", en: "swimming" },
      { jp: "ピアノ", kana: "ピアノ", fr: "piano", en: "piano" },
      { jp: "ギター", kana: "ギター", fr: "guitare", en: "guitar" },
      { jp: "聞きます", kana: "ききます", fr: "écouter", en: "to listen" },
    ],
  },
  {
    number: 19,
    slug: "minna-19",
    title: "Dire qu'on peut faire",
    titleEn: "Saying you can do something",
    summary: "La possibilité avec ことができます.",
    summaryEn: "Expressing ability with ことができます.",
    grammar: ["〜ことができます", "Utilisations concrètes", "Questions de capacité"],
    explanation:
      "La capacité s'exprime avec ことができます placé après la forme du dictionnaire : 私は漢字を読むことができます (« je sais lire les kanji »). La question inverse est toute simple : 車を運転することができますか (« savez-vous conduire ? »). Version courte courante : 漢字が読めます (forme potentielle), que vous rencontrerez partout.",
    explanationEn:
      "Ability is expressed with ことができます placed after the dictionary form: 私は漢字を読むことができます ('I can read kanji'). The inverse question is straightforward: 車を運転することができますか ('can you drive a car?'). A common shorter version is 漢字が読めます (potential form), which you will encounter everywhere.",
    examples: [
      { jp: "私は漢字を読むことができます。", kana: "わたしはかんじをよむことができます。", fr: "Je peux lire les kanji.", en: "I can read kanji." },
      { jp: "ここで弁当を買うことができます。", kana: "ここでべんとうをかうことができます。", fr: "On peut acheter un bento ici.", en: "You can buy a bento here." },
      { jp: "車を運転することができますか。", kana: "くるまをうんてんすることができますか。", fr: "Savez-vous conduire une voiture ?", en: "Can you drive a car?" },
    ],
    vocab: [
      { jp: "漢字", kana: "かんじ", fr: "caractères chinois (kanji)", en: "kanji (Chinese characters)" },
      { jp: "日本語", kana: "にほんご", fr: "langue japonaise", en: "Japanese language" },
      { jp: "運転", kana: "うんてん", fr: "conduite", en: "driving" },
      { jp: "弁当", kana: "べんとう", fr: "repas en boîte", en: "boxed meal, bento" },
      { jp: "払います", kana: "はらいます", fr: "payer", en: "to pay" },
      { jp: "予約", kana: "よやく", fr: "réservation", en: "reservation" },
      { jp: "外国人", kana: "がいこくじん", fr: "étranger", en: "foreigner" },
      { jp: "直します", kana: "なおします", fr: "réparer, corriger", en: "to repair, to fix" },
    ],
  },
  {
    number: 20,
    slug: "minna-20",
    title: "Énumérer ses activités",
    titleEn: "Listing your activities",
    summary: "Lister des actions avec たり…たりします.",
    summaryEn: "Listing actions with たり…たりします.",
    grammar: ["〜たり〜たりする", "Goûts : 〜のが好きです", "Forme た (passé court)"],
    explanation:
      "Pour énumérer plusieurs activités sans être exhaustif : 週末は本を読んだり、映画を見たりします (« le week-end, je lis, je regarde des films, etc. »). On utilise la forme た (passé court) répétée + します. Combiné avec のが好きです, on dit ses goûts : 料理を作るのが好きです (« j'aime cuisiner »).",
    explanationEn:
      "To list several activities without being exhaustive: 週末は本を読んだり、映画を見たりします ('on weekends, I read books, watch movies, etc.'). You use the short past form (た) repeated + します. Combined with のが好きです, you express your preferences: 料理を作るのが好きです ('I like cooking').",
    examples: [
      { jp: "週末は本を読んだり、映画を見たりします。", kana: "しゅうまつはほんをよんだり、えいがをみたりします。", fr: "Le week-end, je lis des livres, je regarde des films…", en: "On weekends, I read books, watch movies, etc." },
      { jp: "私は料理を作るのが好きです。", kana: "わたしはりょうりをつくるのがすきです。", fr: "J'aime cuisiner.", en: "I like cooking." },
      { jp: "日曜日は掃除したり洗濯したりします。", kana: "にちようびはそうじしたりせんたくしたりします。", fr: "Le dimanche, je fais le ménage, la lessive, etc.", en: "On Sundays, I do the cleaning, the laundry, etc." },
    ],
    vocab: [
      { jp: "紅茶", kana: "こうちゃ", fr: "thé noir", en: "black tea" },
      { jp: "お茶", kana: "おちゃ", fr: "thé vert", en: "green tea" },
      { jp: "歌", kana: "うた", fr: "chanson", en: "song" },
      { jp: "歌います", kana: "うたいます", fr: "chanter", en: "to sing" },
      { jp: "ダンス", kana: "ダンス", fr: "danse", en: "dance" },
      { jp: "絵", kana: "え", fr: "dessin, tableau", en: "picture, painting" },
      { jp: "週末", kana: "しゅうまつ", fr: "week-end", en: "weekend" },
      { jp: "掃除", kana: "そうじ", fr: "nettoyage", en: "cleaning" },
      { jp: "洗濯", kana: "せんたく", fr: "lessive", en: "laundry" },
    ],
  },
  {
    number: 21,
    slug: "minna-21",
    title: "Rapporter ce que l'on pense",
    titleEn: "Reporting what you think",
    summary: "Les citations avec と思います et と言いました.",
    summaryEn: "Quotations with と思います and と言いました.",
    grammar: ["〜と思います (je pense que)", "〜と言いました (a dit que)", "Humble : と申します"],
    explanation:
      "Pour rapporter une pensée ou une parole, on cite la phrase en forme du dictionnaire suivie de と思います (« je pense que… ») ou と言いました (« il a dit que… ») : 明日は晴れると思います (« je pense que demain il fera beau »). Pour se présenter humblement : 田中と申します (« je m'appelle Tanaka », poli renforcé).",
    explanationEn:
      "To report a thought or statement, you quote the sentence in dictionary form followed by と思います ('I think that...') or と言いました ('he/she said that...'): 明日は晴れると思います ('I think it will be sunny tomorrow'). To introduce yourself humbly: 田中と申します ('my name is Tanaka', reinforced politeness).",
    examples: [
      { jp: "明日は晴れると思います。", kana: "あしたははれるとおもいます。", fr: "Je pense que demain il fera beau.", en: "I think it will be sunny tomorrow." },
      { jp: "田中さんは10時に来ると言いました。", kana: "たなかさんはじゅうじにくるといいました。", fr: "M. Tanaka a dit qu'il viendrait à 10 h.", en: "Mr. Tanaka said he would come at 10 o'clock." },
      { jp: "田中と申します。", kana: "たなかともうします。", fr: "Je m'appelle Tanaka (forme humble).", en: "My name is Tanaka (humble form)." },
    ],
    vocab: [
      { jp: "思います", kana: "おもいます", fr: "penser, considérer", en: "to think, to consider" },
      { jp: "言います", kana: "いいます", fr: "dire", en: "to say" },
      { jp: "申します", kana: "もうします", fr: "dire (forme humble)", en: "to say (humble form)" },
      { jp: "多分", kana: "たぶん", fr: "probablement", en: "probably" },
      { jp: "皆さん", kana: "みなさん", fr: "tout le monde", en: "everyone" },
      { jp: "電話番号", kana: "でんわばんごう", fr: "numéro de téléphone", en: "phone number" },
      { jp: "住所", kana: "じゅうしょ", fr: "adresse", en: "address" },
      { jp: "違います", kana: "ちがいます", fr: "différer ; se tromper", en: "to be different; to be mistaken" },
    ],
  },
  {
    number: 22,
    slug: "minna-22",
    title: "Exprimer une intention",
    titleEn: "Expressing intention",
    summary: "Annoncer ses projets avec つもりです.",
    summaryEn: "Announcing your plans with つもりです.",
    grammar: ["〜つもりです (intention)", "まだ (pas encore)", "もう (déjà)"],
    explanation:
      "つもりです suit la forme du dictionnaire pour annoncer un projet arrêté : 夏休みに国へ帰るつもりです (« j'ai l'intention de rentrer au pays pendant les vacances d'été »). まだ (« pas encore ») et もう (« déjà ») nuancent l'état d'avancement : まだです (« pas encore »), もう食べました (« j'ai déjà mangé »).",
    explanationEn:
      "つもりです follows the dictionary form to announce a firm plan: 夏休みに国へ帰るつもりです ('I intend to return to my home country during summer vacation'). まだ ('not yet') and もう ('already') provide nuance on the progress of things: まだです ('not yet'), もう食べました ('I've already eaten').",
    examples: [
      { jp: "夏休みに国へ帰るつもりです。", kana: "なつやすみにくにかえるつもりです。", fr: "J'ai l'intention de rentrer au pays cet été.", en: "I plan to return to my home country this summer." },
      { jp: "もう昼ご飯を食べましたか。", kana: "もうひるごはんをたべましたか。", fr: "Avez-vous déjà déjeuné ?", en: "Have you already had lunch?" },
      { jp: "まだです。", kana: "まだです。", fr: "Pas encore.", en: "Not yet." },
    ],
    vocab: [
      { jp: "つもり", kana: "つもり", fr: "intention de", en: "intention of" },
      { jp: "予定", kana: "よてい", fr: "plan, programme prévu", en: "plan, schedule" },
      { jp: "まだ", kana: "まだ", fr: "pas encore", en: "not yet" },
      { jp: "もう", kana: "もう", fr: "déjà", en: "already" },
      { jp: "デパート", kana: "デパート", fr: "grand magasin", en: "department store" },
      { jp: "プレゼント", kana: "プレゼント", fr: "cadeau", en: "gift, present" },
      { jp: "会議", kana: "かいぎ", fr: "réunion", en: "meeting" },
      { jp: "準備", kana: "じゅんび", fr: "préparation", en: "preparation" },
      { jp: "遊びます", kana: "あそびます", fr: "s'amuser, jouer", en: "to have fun, to hang out" },
    ],
  },
  {
    number: 23,
    slug: "minna-23",
    title: "Quand… et probablement",
    titleEn: "When... and probably",
    summary: "La temporalité とき et la conjecture でしょう.",
    summaryEn: "Time expressions with とき and conjecture with でしょう.",
    grammar: ["〜とき (quand, lorsque)", "〜でしょう (probablement)", "Saisons et météo"],
    explanation:
      "とき relie deux situations dans le temps : 子どものとき、京都に住んでいました (« quand j'étais enfant, j'habitais Kyoto »), 時間がないとき、タクシーを使います (« quand je manque de temps, je prends le taxi »). Pour conjecturer sur l'avenir : 明日はいい天気でしょう (« demain sera probablement beau », d'après la météo).",
    explanationEn:
      "とき connects two situations in time: 子どものとき、京都に住んでいました ('when I was a child, I lived in Kyoto'), 時間がないとき、タクシーを使います ('when I don't have time, I take a taxi'). To make a conjecture about the future: 明日はいい天気でしょう ('tomorrow will probably be nice', based on the weather forecast).",
    examples: [
      { jp: "子どものとき、京都に住んでいました。", kana: "こどものとき、きょうとにすんでいました。", fr: "Enfant, j'habitais à Kyoto.", en: "When I was a child, I lived in Kyoto." },
      { jp: "明日もいい天気でしょう。", kana: "あしたもいいてんきでしょう。", fr: "Demain aussi, il fera probablement beau.", en: "Tomorrow will probably be nice too." },
      { jp: "時間がないとき、タクシーを使います。", kana: "じかんがないとき、タクシーをつかいます。", fr: "Quand je manque de temps, je prends le taxi.", en: "When I don't have time, I take a taxi." },
    ],
    vocab: [
      { jp: "春", kana: "はる", fr: "printemps", en: "spring" },
      { jp: "夏", kana: "なつ", fr: "été", en: "summer" },
      { jp: "秋", kana: "あき", fr: "automne", en: "autumn" },
      { jp: "冬", kana: "ふゆ", fr: "hiver", en: "winter" },
      { jp: "暑い", kana: "あつい", fr: "chaud (météo)", en: "hot (weather)" },
      { jp: "寒い", kana: "さむい", fr: "froid", en: "cold" },
      { jp: "風", kana: "かぜ", fr: "vent", en: "wind" },
      { jp: "天気予報", kana: "てんきよほう", fr: "prévisions météo", en: "weather forecast" },
      { jp: "〜とき", kana: "〜とき", fr: "quand, lorsque", en: "when, whenever" },
    ],
  },
  {
    number: 24,
    slug: "minna-24",
    title: "Obligation et dispense",
    titleEn: "Obligation and exemption",
    summary: "Ce qu'on doit faire : なければなりません.",
    summaryEn: "What you must do: なければなりません.",
    grammar: ["〜なければなりません (obligation)", "〜なくてもいいです (dispense)", "Chez le médecin"],
    explanation:
      "L'obligation utilise la forme négative en ない transformée : 薬を飲まなければなりません (« je dois prendre mes médicaments »). À l'inverse, なくてもいいです dispense d'une action : 今日は掃除しなくてもいいです (« aujourd'hui, pas besoin de faire le ménage »). Logique déroutante mais très régulière !",
    explanationEn:
      "Obligation uses the negative form in ない, transformed: 薬を飲まなければなりません ('I must take my medicine'). Conversely, なくてもいいです exempts you from an action: 今日は掃除しなくてもいいです ('today, you don't need to clean'). A puzzling but very regular pattern!",
    examples: [
      { jp: "薬を飲まなければなりません。", kana: "くすりをのまなければなりません。", fr: "Je dois prendre le médicament.", en: "I have to take my medicine." },
      { jp: "今日は来なくてもいいです。", kana: "きょうはこなくてもいいです。", fr: "Pas besoin de venir aujourd'hui.", en: "You don't need to come today." },
      { jp: "熱がありますから、休みます。", kana: "ねつがありますから、やすみます。", fr: "J'ai de la fièvre, alors je me repose.", en: "I have a fever, so I'm resting." },
    ],
    vocab: [
      { jp: "薬", kana: "くすり", fr: "médicament", en: "medicine" },
      { jp: "風邪", kana: "かぜ", fr: "rhume", en: "cold (illness)" },
      { jp: "病院", kana: "びょういん", fr: "hôpital", en: "hospital" },
      { jp: "医者", kana: "いしゃ", fr: "médecin", en: "doctor" },
      { jp: "熱", kana: "ねつ", fr: "fièvre", en: "fever" },
      { jp: "頭", kana: "あたま", fr: "tête", en: "head" },
      { jp: "早く", kana: "はやく", fr: "tôt, vite", en: "early, fast" },
      { jp: "大丈夫", kana: "だいじょうぶ", fr: "ça va, sans danger", en: "it's okay, no problem" },
    ],
  },
  {
    number: 25,
    slug: "minna-25",
    title: "Si… alors",
    titleEn: "If... then",
    summary: "L'hypothèse avec たら pour parler du futur.",
    summaryEn: "Hypothesis with たら to talk about the future.",
    grammar: ["〜たら (si, hypothèse)", "Projets conditionnels", "Bilan des 25 leçons"],
    explanation:
      "La forme たら exprime l'hypothèse : on prend la forme passée courte du verbe et on ajoute ら. Ainsi 雨が降ったら、出かけません (« s'il pleut, je ne sortirai pas »), 時間があったら、京都へ行きたいです (« si j'ai le temps, je voudrais aller à Kyoto »). Avec cette leçon, vous avez bouclé tout le socle grammatical du niveau débutant : félicitations, 合格おめでとう !",
    explanationEn:
      "The たら form expresses a hypothesis: you take the short past form of the verb and add ら. Thus 雨が降ったら、出かけません ('if it rains, I won't go out'), 時間があったら、京都へ行きたいです ('if I have time, I'd like to go to Kyoto'). With this lesson, you have completed the entire grammatical foundation of the beginner level: congratulations, 合格おめでとう!",
    examples: [
      { jp: "雨が降ったら、出かけません。", kana: "あめがふったら、でかけません。", fr: "S'il pleut, je ne sortirai pas.", en: "If it rains, I won't go out." },
      { jp: "時間があったら、京都へ行きたいです。", kana: "じかんがあったら、きょうとへいきたいです。", fr: "Si j'ai le temps, je voudrais aller à Kyoto.", en: "If I have time, I'd like to go to Kyoto." },
      { jp: "日本に着いたら、電話してください。", kana: "にほんについたら、でんわしてください。", fr: "Une fois arrivé au Japon, appelez-moi.", en: "Once you arrive in Japan, please call me." },
    ],
    vocab: [
      { jp: "もし", kana: "もし", fr: "si (hypothèse)", en: "if (hypothesis)" },
      { jp: "卒業", kana: "そつぎょう", fr: "obtention du diplôme", en: "graduation" },
      { jp: "就職", kana: "しゅうしょく", fr: "prise d'emploi", en: "getting a job" },
      { jp: "試験", kana: "しけん", fr: "examen", en: "exam" },
      { jp: "合格", kana: "ごうかく", fr: "réussite (à un examen)", en: "passing (an exam)" },
      { jp: "練習", kana: "れんしゅう", fr: "entraînement, pratique", en: "practice, training" },
      { jp: "連絡", kana: "れんらく", fr: "contact, information", en: "contact, information" },
      { jp: "着きます", kana: "つきます", fr: "arriver", en: "to arrive" },
    ],
  },
];

export function getMinnaLesson(slug: string): MinnaLesson | undefined {
  return MINNA_LESSONS.find((l) => l.slug === slug);
}
