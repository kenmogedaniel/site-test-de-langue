export interface LessonVocab {
  jp: string;
  kana: string;
  fr: string;
}

export interface LessonExample {
  jp: string;
  kana: string;
  fr: string;
}

export interface MinnaLesson {
  number: number;
  slug: string;
  title: string;
  summary: string;
  grammar: string[];
  explanation: string;
  examples: LessonExample[];
  vocab: LessonVocab[];
}

export const MINNA_LESSONS: MinnaLesson[] = [
  {
    number: 1,
    slug: "minna-01",
    title: "Se présenter",
    summary: "La phrase d'identification AはBです et les présentations de base.",
    grammar: ["A は B です", "Négation : じゃありません", "Le possessif の"],
    explanation:
      "En japonais, la phrase la plus simple relie un thème à une information : わたしは学生です (« moi, je suis étudiant »). La particule は [wa] marque le thème de la phrase, です est la copule polie, et sa négation devient じゃありません. La particule の lie deux noms pour exprimer la possession ou l'appartenance : わたしの名前 (« mon nom »).",
    examples: [
      { jp: "わたしはダニエルです。", kana: "わたしはダニエルです。", fr: "Je suis Daniel." },
      { jp: "マリーさんはフランス人じゃありません。", kana: "マリーさんはフランスじんじゃありません。", fr: "Marie n'est pas française." },
      { jp: "これはわたしの本です。", kana: "これはわたしのほんです。", fr: "C'est mon livre." },
    ],
    vocab: [
      { jp: "私", kana: "わたし", fr: "je, moi" },
      { jp: "あなた", kana: "あなた", fr: "tu, vous" },
      { jp: "先生", kana: "せんせい", fr: "professeur" },
      { jp: "学生", kana: "がくせい", fr: "étudiant" },
      { jp: "会社員", kana: "かいしゃいん", fr: "employé de bureau" },
      { jp: "研究者", kana: "けんきゅうしゃ", fr: "chercheur" },
      { jp: "日本", kana: "にほん", fr: "Japon" },
      { jp: "人", kana: "ひと", fr: "personne" },
      { jp: "名前", kana: "なまえ", fr: "nom" },
    ],
  },
  {
    number: 2,
    slug: "minna-02",
    title: "Désigner les objets",
    summary: "Les démonstratifs これ・それ・あれ et leurs formes avec nom.",
    grammar: ["これ・それ・あれ", "この／その／あの ＋ nom", "Question : 何ですか"],
    explanation:
      "これ désigne quelque chose proche du locuteur, それ proche de l'interlocuteur, あれ loin des deux. Devant un nom, ils deviennent この本 (« ce livre »), その本, あの本. Pour demander ce qu'est une chose : これは何ですか (« qu'est-ce que c'est ? »).",
    examples: [
      { jp: "これは辞書です。", kana: "これはじしょです。", fr: "Ceci est un dictionnaire." },
      { jp: "それはあなたの新聞です。", kana: "それはあなたのしんぶんです。", fr: "Cela (près de toi) est ton journal." },
      { jp: "あれは何ですか。", kana: "あれはなんですか。", fr: "Qu'est-ce que c'est, là-bas ?" },
    ],
    vocab: [
      { jp: "これ", kana: "これ", fr: "ceci" },
      { jp: "それ", kana: "それ", fr: "cela (côté interlocuteur)" },
      { jp: "あれ", kana: "あれ", fr: "cela (loin)" },
      { jp: "本", kana: "ほん", fr: "livre" },
      { jp: "辞書", kana: "じしょ", fr: "dictionnaire" },
      { jp: "新聞", kana: "しんぶん", fr: "journal" },
      { jp: "雑誌", kana: "ざっし", fr: "magazine" },
      { jp: "電話", kana: "でんわ", fr: "téléphone" },
      { jp: "何", kana: "なに", fr: "quoi" },
    ],
  },
  {
    number: 3,
    slug: "minna-03",
    title: "Situer dans l'espace",
    summary: "Les lieux ここ・そこ・あそこ・どこ et demander son chemin.",
    grammar: ["ここ・そこ・あそこ・どこ", "だれの (à qui)", "Politesse : こちら"],
    explanation:
      "Comme pour les objets, on distingue trois zones : ここ (ici), そこ (là), あそこ (là-bas), et la question どこ (« où ? »). Pour demander l'appartenance d'une personne : だれのかさですか (« c'est le parapluie de qui ? »). La réception se dit 受付, très utile dès le premier jour au Japon.",
    examples: [
      { jp: "トイレはどこですか。", kana: "トイレはどこですか。", fr: "Où sont les toilettes ?" },
      { jp: "ここは受付です。", kana: "ここはうけつけです。", fr: "Ici, c'est l'accueil." },
      { jp: "あの人はどなたですか。", kana: "あのひとはどなたですか。", fr: "Qui est cette personne là-bas ?" },
    ],
    vocab: [
      { jp: "ここ", kana: "ここ", fr: "ici" },
      { jp: "そこ", kana: "そこ", fr: "là" },
      { jp: "あそこ", kana: "あそこ", fr: "là-bas" },
      { jp: "どこ", kana: "どこ", fr: "où" },
      { jp: "トイレ", kana: "トイレ", fr: "toilettes" },
      { jp: "受付", kana: "うけつけ", fr: "accueil, réception" },
      { jp: "エレベーター", kana: "エレベーター", fr: "ascenseur" },
      { jp: "国", kana: "くに", fr: "pays" },
      { jp: "会社", kana: "かいしゃ", fr: "entreprise" },
    ],
  },
  {
    number: 4,
    slug: "minna-04",
    title: "L'heure et les verbes au présent",
    summary: "Dire l'heure et utiliser les verbes en ます / ません.",
    grammar: ["今、何時ですか", "Verbes : ます / ません", "に (moment précis)"],
    explanation:
      "Pour demander l'heure : 今、何時ですか (« il est quelle heure maintenant ? »). On répond avec un nombre + 時 (heures) et 分 (minutes) : la demie se dit 半. Les verbes polis finissent par ます (affirmatif) ou ません (négatif), et couvrent aussi bien le présent que le futur : 明日起きます signifie « je me lèverai demain ». On ajoute に après un moment précis : 7時に (« à 7 heures »).",
    examples: [
      { jp: "今、何時ですか。", kana: "いま、なんじですか。", fr: "Quelle heure est-il maintenant ?" },
      { jp: "7時に起きます。", kana: "しちじにおきます。", fr: "Je me lève à 7 heures." },
      { jp: "日曜日は働きません。", kana: "にちようびははたらきません。", fr: "Le dimanche, je ne travaille pas." },
    ],
    vocab: [
      { jp: "今", kana: "いま", fr: "maintenant" },
      { jp: "〜時", kana: "〜じ", fr: "heure(s)" },
      { jp: "〜分", kana: "〜ふん", fr: "minute(s)" },
      { jp: "半", kana: "はん", fr: "et demie" },
      { jp: "起きます", kana: "おきます", fr: "se lever" },
      { jp: "寝ます", kana: "ねます", fr: "dormir, se coucher" },
      { jp: "働きます", kana: "はたらきます", fr: "travailler" },
      { jp: "勉強します", kana: "べんきょうします", fr: "étudier" },
      { jp: "終わります", kana: "おわります", fr: "se terminer" },
    ],
  },
  {
    number: 5,
    slug: "minna-05",
    title: "Aller, venir, rentrer",
    summary: "Les verbes de mouvement et les particules へ・で・と.",
    grammar: ["へ (direction)", "で (moyen de transport)", "と (accompagnement)", "〜から〜まで (de…à…)"],
    explanation:
      "Avec 行きます・来ます・帰ります, la direction est marquée par へ : 東京へ行きます (« je vais à Tokyo »). Le moyen de transport prend で : 電車で (« en train »), 歩いて (« à pied », forme spéciale). L'accompagnateur prend と : 友達と (« avec un ami »). Une plage horaire s'exprime avec から…まで (« de… à… »).",
    examples: [
      { jp: "東京へ行きます。", kana: "とうきょうへいきます。", fr: "Je vais à Tokyo." },
      { jp: "バスで学校へ行きます。", kana: "バスでがっこうへいきます。", fr: "Je vais à l'école en bus." },
      { jp: "9時から5時まで働きます。", kana: "くじからごじまではたらきます。", fr: "Je travaille de 9 h à 17 h." },
    ],
    vocab: [
      { jp: "行きます", kana: "いきます", fr: "aller" },
      { jp: "来ます", kana: "きます", fr: "venir" },
      { jp: "帰ります", kana: "かえります", fr: "rentrer chez soi" },
      { jp: "電車", kana: "でんしゃ", fr: "train" },
      { jp: "自転車", kana: "じてんしゃ", fr: "vélo" },
      { jp: "友達", kana: "ともだち", fr: "ami(e)" },
      { jp: "学校", kana: "がっこう", fr: "école" },
      { jp: "東京", kana: "とうきょう", fr: "Tokyo" },
      { jp: "一緒に", kana: "いっしょに", fr: "ensemble" },
    ],
  },
  {
    number: 6,
    slug: "minna-06",
    title: "Faire une action sur quelque chose",
    summary: "La particule を marque l'objet direct du verbe.",
    grammar: ["を (objet direct)", "何を…ますか", "で (lieu de l'action)"],
    explanation:
      "L'objet direct d'un verbe est suivi de を [o] : コーヒーを飲みます (« je bois un café »). La question correspondante est 何を飲みますか (« que buvez-vous ? »). Le lieu où se déroule l'action prend lui aussi で : 図書館で本を読みます (« je lis un livre à la bibliothèque »).",
    examples: [
      { jp: "コーヒーを飲みます。", kana: "コーヒーをのみます。", fr: "Je bois un café." },
      { jp: "朝ご飯を食べます。", kana: "あさごはんをたべます。", fr: "Je mange le petit-déjeuner." },
      { jp: "図書館で本を読みます。", kana: "としょかんでほんをよみます。", fr: "Je lis un livre à la bibliothèque." },
    ],
    vocab: [
      { jp: "食べます", kana: "たべます", fr: "manger" },
      { jp: "飲みます", kana: "のみます", fr: "boire" },
      { jp: "見ます", kana: "みます", fr: "regarder, voir" },
      { jp: "読みます", kana: "よみます", fr: "lire" },
      { jp: "買います", kana: "かいます", fr: "acheter" },
      { jp: "コーヒー", kana: "コーヒー", fr: "café" },
      { jp: "パン", kana: "パン", fr: "pain" },
      { jp: "朝ご飯", kana: "あさごはん", fr: "petit-déjeuner" },
      { jp: "図書館", kana: "としょかん", fr: "bibliothèque" },
    ],
  },
  {
    number: 7,
    slug: "minna-07",
    title: "Inviter et proposer",
    summary: "L'outil de l'action (で) et les invitations ましょう.",
    grammar: ["で (instrument, moyen)", "〜ましょう (invitation)", "〜ましょうか (proposition d'aide)"],
    explanation:
      "L'instrument ou l'outil utilisé prend で : はさみで切ります (« couper aux ciseaux »). Pour inviter quelqu'un, on utilise ましょう (« allons-y ! »), et ましょうか propose gentiment son aide ou une action conjointe : 写真を撮りましょうか (« on prend la photo ? »).",
    examples: [
      { jp: "はさみで紙を切ります。", kana: "はさみでかみをきります。", fr: "Je coupe le papier aux ciseaux." },
      { jp: "写真を撮りましょう。", kana: "しゃしんをとりましょう。", fr: "Prenons une photo !" },
      { jp: "手紙を送りましょうか。", kana: "てがみをおくりましょうか。", fr: "Shall I send the letter for you?" },
    ],
    vocab: [
      { jp: "切ります", kana: "きります", fr: "couper" },
      { jp: "送ります", kana: "おくります", fr: "envoyer" },
      { jp: "作ります", kana: "つくります", fr: "fabriquer, préparer" },
      { jp: "使います", kana: "つかいます", fr: "utiliser" },
      { jp: "手紙", kana: "てがみ", fr: "lettre" },
      { jp: "写真", kana: "しゃしん", fr: "photo" },
      { jp: "はさみ", kana: "はさみ", fr: "ciseaux" },
      { jp: "プール", kana: "プール", fr: "piscine" },
    ],
  },
  {
    number: 8,
    slug: "minna-08",
    title: "Les adjectifs",
    summary: "Adjectifs en い et en な au présent, positif et négatif.",
    grammar: ["Adjectifs en い", "Adjectifs en な", "Négation : くないです / じゃありません"],
    explanation:
      "Il y a deux familles d'adjectifs. Ceux en い se conjuguent eux-mêmes : 高いです (« c'est cher ») → 高くないです (« ce n'est pas cher »). Ceux en な se comportent comme des noms : 静かな町 (« une ville calme ») → 静かじゃありません (« ce n'est pas calme »). Attention : いい (bon) devient よくないです au négatif.",
    examples: [
      { jp: "富士山は高いです。", kana: "ふじさんはたかいです。", fr: "Le mont Fuji est haut." },
      { jp: "この町は静かじゃありません。", kana: "このまちはしずかじゃありません。", fr: "Cette ville n'est pas calme." },
      { jp: "元気ですか。", kana: "げんきですか。", fr: "Comment allez-vous ?" },
    ],
    vocab: [
      { jp: "高い", kana: "たかい", fr: "cher, haut" },
      { jp: "安い", kana: "やすい", fr: "bon marché" },
      { jp: "大きい", kana: "おおきい", fr: "grand" },
      { jp: "小さい", kana: "ちいさい", fr: "petit" },
      { jp: "元気", kana: "げんき", fr: "en forme, énergique" },
      { jp: "静か", kana: "しずか", fr: "calme, silencieux" },
      { jp: "有名", kana: "ゆうめい", fr: "célèbre" },
      { jp: "便利", kana: "べんり", fr: "pratique, commode" },
      { jp: "町", kana: "まち", fr: "ville" },
    ],
  },
  {
    number: 9,
    slug: "minna-09",
    title: "Comparer et exprimer ses goûts",
    summary: "Passé des adjectifs, préférences 好き et compétence 上手.",
    grammar: ["Passé : かったです / でした", "好き（な）／嫌い（な）＋ が", "上手（な）／下手（な）＋ が"],
    explanation:
      "Au passé, les adjectifs en い deviennent かったです (高かったです : « c'était cher ») et ceux en な prennent でした. Les goûts utilisent un adjectif + が : 音楽が好きです (« j'aime la musique »), 日本語が上手です (« vous parlez bien japonais »).",
    examples: [
      { jp: "京都はよかったです。", kana: "きょうとはよかったです。", fr: "Kyoto était super." },
      { jp: "音楽が好きです。", kana: "おんがくがすきです。", fr: "J'aime la musique." },
      { jp: "田中さんは料理が上手です。", kana: "たなかさんはりょうりがじょうずです。", fr: "M. Tanaka cuisine bien." },
    ],
    vocab: [
      { jp: "好き", kana: "すき", fr: "aimé, préféré" },
      { jp: "嫌い", kana: "きらい", fr: "détesté" },
      { jp: "上手", kana: "じょうず", fr: "doué, habile" },
      { jp: "下手", kana: "へた", fr: "maladroit" },
      { jp: "温かい", kana: "あたたかい", fr: "tiède, chaleureux" },
      { jp: "涼しい", kana: "すずしい", fr: "frais (agréable)" },
      { jp: "忙しい", kana: "いそがしい", fr: "occupé" },
      { jp: "料理", kana: "りょうり", fr: "plat, cuisine" },
      { jp: "音楽", kana: "おんがく", fr: "musique" },
    ],
  },
  {
    number: 10,
    slug: "minna-10",
    title: "Dire qu'il y a / qu'il existe",
    summary: "Existence あります・います et localisation précise.",
    grammar: ["あります (objets)", "います (êtres vivants)", "に (lieu d'existence)", "Position : 上・下・中・前・後ろ・隣"],
    explanation:
      "Pour dire qu'une chose existe : 机の上に本があります (« il y a un livre sur le bureau »). Pour un être vivant, on utilise います : ネコがいます (« il y a un chat »). Le lieu prend に et on précise la position : 上 (sur), 下 (sous), 中 (dans), 前 (devant), 後ろ (derrière), 隣 (à côté).",
    examples: [
      { jp: "机の上に本があります。", kana: "つくえのうえにほんがあります。", fr: "Il y a un livre sur le bureau." },
      { jp: "ネコはどこにいますか。", kana: "ネコはどこにいますか。", fr: "Où est le chat ?" },
      { jp: "家族は4人います。", kana: "かぞくはよにんいます。", fr: "Nous sommes quatre dans ma famille." },
    ],
    vocab: [
      { jp: "あります", kana: "あります", fr: "il y a (choses)" },
      { jp: "います", kana: "います", fr: "il y a (êtres vivants)" },
      { jp: "上", kana: "うえ", fr: "dessus, sur" },
      { jp: "下", kana: "した", fr: "dessous, sous" },
      { jp: "中", kana: "なか", fr: "dedans" },
      { jp: "前", kana: "まえ", fr: "devant" },
      { jp: "後ろ", kana: "うしろ", fr: "derrière" },
      { jp: "隣", kana: "となり", fr: "à côté" },
      { jp: "机", kana: "つくえ", fr: "bureau (meuble)" },
      { jp: "家族", kana: "かぞく", fr: "famille" },
    ],
  },
  {
    number: 11,
    slug: "minna-11",
    title: "Les nombres et les prix",
    summary: "Compter, demander un prix, dire combien de temps ça prend.",
    grammar: ["Compteurs : 円・時間・週間", "かかります (coûter / prendre du temps)", "だけ (seulement)"],
    explanation:
      "Les grands nombres se construisent par dizaines de milliers : 千 (1 000), 万 (10 000). Le prix se demande いくらですか (« combien ça coûte ? »). La durée prend かかります : 30分かかります (« ça prend 30 minutes »). だけ limite : これだけください (« seulement ceci, s'il vous plaît »).",
    examples: [
      { jp: "これはいくらですか。", kana: "これはいくらですか。", fr: "Combien coûte ceci ?" },
      { jp: "駅まで30分かかります。", kana: "えきまでさんじゅっぷんかかります。", fr: "Ça prend 30 minutes jusqu'à la gare." },
      { jp: "切符を2枚買いました。", kana: "きっぷをにまいかいました。", fr: "J'ai acheté deux billets." },
    ],
    vocab: [
      { jp: "円", kana: "えん", fr: "yen" },
      { jp: "いくら", kana: "いくら", fr: "combien (prix)" },
      { jp: "時間", kana: "じかん", fr: "durée en heures" },
      { jp: "週間", kana: "しゅうかん", fr: "durée en semaines" },
      { jp: "千", kana: "せん", fr: "mille" },
      { jp: "万", kana: "まん", fr: "dix mille" },
      { jp: "かかります", kana: "かかります", fr: "coûter, prendre (temps)" },
      { jp: "だけ", kana: "だけ", fr: "seulement" },
      { jp: "全部", kana: "ぜんぶ", fr: "tout" },
      { jp: "切符", kana: "きっぷ", fr: "billet, ticket" },
    ],
  },
  {
    number: 12,
    slug: "minna-12",
    title: "Parler du passé",
    summary: "Les verbes au passé : ました / ませんでした.",
    grammar: ["Passé : ました", "Passé négatif : ませんでした", "Repères temporels"],
    explanation:
      "Le passé poli remplace ます par しました (会いました : « j'ai rencontré ») et ません par ませんでした (食べませんでした : « je n'ai pas mangé »). Les repères temporels s'ajoutent simplement : 昨日 (hier), 今日 (aujourd'hui), 明日 (demain).",
    examples: [
      { jp: "昨日、友達に会いました。", kana: "きのう、ともだちにあいました。", fr: "Hier, j'ai vu un ami." },
      { jp: "今朝は何も食べませんでした。", kana: "けさはなにもたべませんでした。", fr: "Ce matin, je n'ai rien mangé." },
      { jp: "宿題をしました。", kana: "しゅくだいをしました。", fr: "J'ai fait mes devoirs." },
    ],
    vocab: [
      { jp: "昨日", kana: "きのう", fr: "hier" },
      { jp: "今日", kana: "きょう", fr: "aujourd'hui" },
      { jp: "明日", kana: "あした", fr: "demain" },
      { jp: "朝", kana: "あさ", fr: "matin" },
      { jp: "夜", kana: "よる", fr: "soir, nuit" },
      { jp: "会います", kana: "あいます", fr: "rencontrer, voir" },
      { jp: "します", kana: "します", fr: "faire" },
      { jp: "宿題", kana: "しゅくだい", fr: "devoirs" },
      { jp: "テスト", kana: "テスト", fr: "examen, test" },
    ],
  },
  {
    number: 13,
    slug: "minna-13",
    title: "Exprimer l'envie",
    summary: "Dire ce qu'on veut faire avec たいです.",
    grammar: ["V + たいです", "〜に行きたい (aller pour faire)", "~ませんか / ~ましょう invitations"],
    explanation:
      "On forme le désir en remplaçant ます par たいです : 泳ぎます → 泳ぎたいです (« j'ai envie de nager »). La destination d'une activité prend に : 富士山に登りたいです (« je veux gravir le mont Fuji »).",
    examples: [
      { jp: "日本へ行きたいです。", kana: "にほんへいきたいです。", fr: "Je veux aller au Japon." },
      { jp: "海で泳ぎたいです。", kana: "うみでおよぎたいです。", fr: "Je veux nager dans la mer." },
      { jp: "京都に行きたいです。", kana: "きょうとにいきたいです。", fr: "J'ai envie d'aller à Kyoto." },
    ],
    vocab: [
      { jp: "旅行", kana: "りょこう", fr: "voyage" },
      { jp: "海", kana: "うみ", fr: "mer" },
      { jp: "泳ぎます", kana: "およぎます", fr: "nager" },
      { jp: "登ります", kana: "のぼります", fr: "gravir, escalader" },
      { jp: "撮ります", kana: "とります", fr: "photographier" },
      { jp: "京都", kana: "きょうと", fr: "Kyoto" },
      { jp: "富士山", kana: "ふじさん", fr: "mont Fuji" },
      { jp: "世界", kana: "せかい", fr: "le monde" },
    ],
  },
  {
    number: 14,
    slug: "minna-14",
    title: "La forme en て et les demandes",
    summary: "Demander poliment une action avec てください.",
    grammar: ["Forme en て", "〜てください (demande)", "〜ています (action en cours)"],
    explanation:
      "La forme en て est l'un des pivots du japonais : chaque verbe a sa forme て à mémoriser. Avec ください, elle transforme un verbe en demande polie : 待ってください (« attendez, s'il vous plaît »). C'est aussi la base de nombreuses autres constructions que vous verrez ensuite.",
    examples: [
      { jp: "ちょっと待ってください。", kana: "ちょっとまってください。", fr: "Attendez un instant, s'il vous plaît." },
      { jp: "もう一度言ってください。", kana: "もういちどいってください。", fr: "Répétez encore une fois, s'il vous plaît." },
      { jp: "ここに座ってください。", kana: "ここにすわってください。", fr: "Asseyez-vous ici, s'il vous plaît." },
    ],
    vocab: [
      { jp: "待ちます", kana: "まちます", fr: "attendre" },
      { jp: "取ります", kana: "とります", fr: "prendre" },
      { jp: "手伝います", kana: "てつだいます", fr: "aider" },
      { jp: "座ります", kana: "すわります", fr: "s'asseoir" },
      { jp: "立ちます", kana: "たちます", fr: "se lever" },
      { jp: "電話します", kana: "でんわします", fr: "téléphoner" },
      { jp: "すみません", kana: "すみません", fr: "excusez-moi, pardon" },
      { jp: "ちょっと", kana: "ちょっと", fr: "un petit peu" },
      { jp: "もう一度", kana: "もういちど", fr: "encore une fois" },
    ],
  },
  {
    number: 15,
    slug: "minna-15",
    title: "Permission et interdiction",
    summary: "Demander le droit de faire : てもいいですか.",
    grammar: ["〜てもいいです (permission)", "〜てはいけません (interdiction)", "Focus sur la forme て"],
    explanation:
      "Pour demander la permission : 入ってもいいですか (« puis-je entrer ? »). Pour interdire : ここでタバコを吸ってはいけません (« il est interdit de fumer ici »). Ces tournures réutilisent la forme て vue à la leçon précédente — c'est le moment de bien la maîtriser.",
    examples: [
      { jp: "入ってもいいですか。", kana: "はいってもいいですか。", fr: "Puis-je entrer ?" },
      { jp: "ここで写真を撮ってはいけません。", kana: "ここでしゃしんをとってはいけません。", fr: "Il est interdit de photographier ici." },
      { jp: "帰ってもいいですか。", kana: "かえってもいいですか。", fr: "Puis-je rentrer ?" },
    ],
    vocab: [
      { jp: "入ります", kana: "はいります", fr: "entrer" },
      { jp: "出ます", kana: "でます", fr: "sortir" },
      { jp: "授業", kana: "じゅぎょう", fr: "cours, leçon" },
      { jp: "質問", kana: "しつもん", fr: "question" },
      { jp: "忘れます", kana: "わすれます", fr: "oublier" },
      { jp: "タバコ", kana: "タバコ", fr: "tabac, cigarette" },
      { jp: "吸います", kana: "すいます", fr: "fumer" },
      { jp: "あとで", kana: "あとで", fr: "plus tard" },
    ],
  },
  {
    number: 16,
    slug: "minna-16",
    title: "Décrire des habitudes et des personnes",
    summary: "ています pour les habitudes et les états durables.",
    grammar: ["〜ています (habitude)", "〜を持っています (posséder)", "Décrire quelqu'un"],
    explanation:
      "ています ne sert pas qu'à l'action en cours : il décrit aussi les habitudes (東京に住んでいます : « j'habite à Tokyo », état durable) et la possession physique (眼鏡をかけています : « il porte des lunettes »). Le contexte indique le sens.",
    examples: [
      { jp: "東京に住んでいます。", kana: "とうきょうにすんでいます。", fr: "J'habite à Tokyo." },
      { jp: "メガネをかけています。", kana: "メガネをかけています。", fr: "Il porte des lunettes." },
      { jp: "子どもが3人います。", kana: "こどもがさんにんいます。", fr: "Elle a trois enfants." },
    ],
    vocab: [
      { jp: "住みます", kana: "すみます", fr: "habiter, demeurer" },
      { jp: "着ます", kana: "きます", fr: "porter (un vêtement)" },
      { jp: "かけます", kana: "かけます", fr: "porter (lunettes)" },
      { jp: "眼鏡", kana: "めがね", fr: "lunettes" },
      { jp: "子ども", kana: "こども", fr: "enfant" },
      { jp: "知っています", kana: "しっています", fr: "savoir, connaître" },
      { jp: "分かります", kana: "わかります", fr: "comprendre" },
      { jp: "太ります", kana: "ふとります", fr: "grossir" },
      { jp: "痩せます", kana: "やせます", fr: "maigrir" },
    ],
  },
  {
    number: 17,
    slug: "minna-17",
    title: "Mais, parce que… relier ses phrases",
    summary: "Les connecteurs が (mais) et から (parce que).",
    grammar: ["〜が、〜 (mais)", "〜から (parce que)", "Expressions de sentiment"],
    explanation:
      "が relie deux phrases opposées : この本は面白いですが、高いです (« ce livre est intéressant, mais cher »). かりから exprime la cause, placée en fin de proposition : 雨が降っていますから、傘を持って行きます (« comme il pleut, je prends un parapluie »). En japonais, la cause vient avant la conséquence.",
    examples: [
      { jp: "雨が降っていますから、傘を持って行きます。", kana: "あめがふっていますから、かさをもっていきます。", fr: "Comme il pleut, je prends un parapluie." },
      { jp: "日本語は大変ですが、面白いです。", kana: "にほんごはたいへんですが、おもしろいです。", fr: "Le japonais est exigeant, mais passionnant." },
      { jp: "桜が咲きました。", kana: "さくらがさきました。", fr: "Les cerisiers ont fleuri." },
    ],
    vocab: [
      { jp: "花", kana: "はな", fr: "fleur" },
      { jp: "桜", kana: "さくら", fr: "cerisier du Japon" },
      { jp: "咲きます", kana: "さきます", fr: "fleurir" },
      { jp: "降ります", kana: "ふります", fr: "tomber (pluie, neige)" },
      { jp: "雨", kana: "あめ", fr: "pluie" },
      { jp: "天気", kana: "てんき", fr: "beau temps" },
      { jp: "でも", kana: "でも", fr: "mais" },
      { jp: "だから", kana: "だから", fr: "alors, c'est pourquoi" },
      { jp: "大変", kana: "たいへん", fr: "rude, exigeant" },
    ],
  },
  {
    number: 18,
    slug: "minna-18",
    title: "Parler de ses passe-temps",
    summary: "La forme du dictionnaire et 趣味は〜ことです.",
    grammar: ["Forme du dictionnaire", "趣味は〜ことです", "〜前に (avant de…)"],
    explanation:
      "La forme du dictionnaire (食べる, 読む…) est celle trouvée dans les dictionnaires. Nominalisée avec こと, elle permet de définir ses loisirs : 趣味は音楽を聞くことです (« mon passe-temps, c'est écouter de la musique »). Avec 前, elle dit « avant de » : 寝る前に本を読みます (« je lis avant de dormir »).",
    examples: [
      { jp: "趣味は音楽を聞くことです。", kana: "しゅみはおんがくをきくことです。", fr: "Mon passe-temps, c'est écouter de la musique." },
      { jp: "寝る前に本を読みます。", kana: "ねるまえにほんをよみます。", fr: "Je lis un livre avant de dormir." },
      { jp: "私の特技は料理を作ることです。", kana: "わたしのとくぎはりょうりをつくることです。", fr: "Mon talent particulier, c'est cuisiner." },
    ],
    vocab: [
      { jp: "趣味", kana: "しゅみ", fr: "passe-temps" },
      { jp: "特技", kana: "とくぎ", fr: "talent particulier" },
      { jp: "映画", kana: "えいが", fr: "film" },
      { jp: "買い物", kana: "かいもの", fr: "courses, achats" },
      { jp: "水泳", kana: "すいえい", fr: "natation" },
      { jp: "ピアノ", kana: "ピアノ", fr: "piano" },
      { jp: "ギター", kana: "ギター", fr: "guitare" },
      { jp: "聞きます", kana: "ききます", fr: "écouter" },
    ],
  },
  {
    number: 19,
    slug: "minna-19",
    title: "Dire qu'on peut faire",
    summary: "La possibilité avec ことができます.",
    grammar: ["〜ことができます", "Utilisations concrètes", "Questions de capacité"],
    explanation:
      "La capacité s'exprime avec ことができます placé après la forme du dictionnaire : 私は漢字を読むことができます (« je sais lire les kanji »). La question inverse est toute simple : 車を運転することができますか (« savez-vous conduire ? »). Version courte courante : 漢字が読めます (forme potentielle), que vous rencontrerez partout.",
    examples: [
      { jp: "私は漢字を読むことができます。", kana: "わたしはかんじをよむことができます。", fr: "Je peux lire les kanji." },
      { jp: "ここで弁当を買うことができます。", kana: "ここでべんとうをかうことができます。", fr: "On peut acheter un bento ici." },
      { jp: "車を運転することができますか。", kana: "くるまをうんてんすることができますか。", fr: "Savez-vous conduire une voiture ?" },
    ],
    vocab: [
      { jp: "漢字", kana: "かんじ", fr: "caractères chinois (kanji)" },
      { jp: "日本語", kana: "にほんご", fr: "langue japonaise" },
      { jp: "運転", kana: "うんてん", fr: "conduite" },
      { jp: "弁当", kana: "べんとう", fr: "repas en boîte" },
      { jp: "払います", kana: "はらいます", fr: "payer" },
      { jp: "予約", kana: "よやく", fr: "réservation" },
      { jp: "外国人", kana: "がいこくじん", fr: "étranger" },
      { jp: "直します", kana: "なおします", fr: "réparer, corriger" },
    ],
  },
  {
    number: 20,
    slug: "minna-20",
    title: "Énumérer ses activités",
    summary: "Lister des actions avec たり…たりします.",
    grammar: ["〜たり〜たりする", "Goûts : 〜のが好きです", "Forme た (passé court)"],
    explanation:
      "Pour énumérer plusieurs activités sans être exhaustif : 週末は本を読んだり、映画を見たりします (« le week-end, je lis, je regarde des films, etc. »). On utilise la forme た (passé court) répétée + します. Combiné avec のが好きです, on dit ses goûts : 料理を作るのが好きです (« j'aime cuisiner »).",
    examples: [
      { jp: "週末は本を読んだり、映画を見たりします。", kana: "しゅうまつはほんをよんだり、えいがをみたりします。", fr: "Le week-end, je lis des livres, je regarde des films…" },
      { jp: "私は料理を作るのが好きです。", kana: "わたしはりょうりをつくるのがすきです。", fr: "J'aime cuisiner." },
      { jp: "日曜日は掃除したり洗濯したりします。", kana: "にちようびはそうじしたりせんたくしたりします。", fr: "Le dimanche, je fais le ménage, la lessive, etc." },
    ],
    vocab: [
      { jp: "紅茶", kana: "こうちゃ", fr: "thé noir" },
      { jp: "お茶", kana: "おちゃ", fr: "thé vert" },
      { jp: "歌", kana: "うた", fr: "chanson" },
      { jp: "歌います", kana: "うたいます", fr: "chanter" },
      { jp: "ダンス", kana: "ダンス", fr: "danse" },
      { jp: "絵", kana: "え", fr: "dessin, tableau" },
      { jp: "週末", kana: "しゅうまつ", fr: "week-end" },
      { jp: "掃除", kana: "そうじ", fr: "nettoyage" },
      { jp: "洗濯", kana: "せんたく", fr: "lessive" },
    ],
  },
  {
    number: 21,
    slug: "minna-21",
    title: "Rapporter ce que l'on pense",
    summary: "Les citations avec と思います et と言いました.",
    grammar: ["〜と思います (je pense que)", "〜と言いました (a dit que)", "Humble : と申します"],
    explanation:
      "Pour rapporter une pensée ou une parole, on cite la phrase en forme du dictionnaire suivie de と思います (« je pense que… ») ou と言いました (« il a dit que… ») : 明日は晴れると思います (« je pense que demain il fera beau »). Pour se présenter humblement : 田中と申します (« je m'appelle Tanaka », poli renforcé).",
    examples: [
      { jp: "明日は晴れると思います。", kana: "あしたははれるとおもいます。", fr: "Je pense que demain il fera beau." },
      { jp: "田中さんは10時に来ると言いました。", kana: "たなかさんはじゅうじにくると いいました。", fr: "M. Tanaka a dit qu'il viendrait à 10 h." },
      { jp: "田中と申します。", kana: "たなかともうします。", fr: "Je m'appelle Tanaka (forme humble)." },
    ],
    vocab: [
      { jp: "思います", kana: "おもいます", fr: "penser, considérer" },
      { jp: "言います", kana: "いいます", fr: "dire" },
      { jp: "申します", kana: "もうします", fr: "dire (forme humble)" },
      { jp: "多分", kana: "たぶん", fr: "probablement" },
      { jp: "皆さん", kana: "みなさん", fr: "tout le monde" },
      { jp: "電話番号", kana: "でんわばんごう", fr: "numéro de téléphone" },
      { jp: "住所", kana: "じゅうしょ", fr: "adresse" },
      { jp: "違います", kana: "ちがいます", fr: "différer ; se tromper" },
    ],
  },
  {
    number: 22,
    slug: "minna-22",
    title: "Exprimer une intention",
    summary: "Annoncer ses projets avec つもりです.",
    grammar: ["〜つもりです (intention)", "まだ (pas encore)", "もう (déjà)"],
    explanation:
      "つもりです suit la forme du dictionnaire pour annoncer un projet arrêté : 夏休みに国へ帰るつもりです (« j'ai l'intention de rentrer au pays pendant les vacances d'été »). まだ (« pas encore ») et もう (« déjà ») nuancent l'état d'avancement : まだです (« pas encore »), もう食べました (« j'ai déjà mangé »).",
    examples: [
      { jp: "夏休みに国へ帰るつもりです。", kana: "なつやすみにくにかえるつもりです。", fr: "J'ai l'intention de rentrer au pays cet été." },
      { jp: "もう昼ご飯を食べましたか。", kana: "もうひるごはんをたべましたか。", fr: "Avez-vous déjà déjeuner ?" },
      { jp: "まだです。", kana: "まだです。", fr: "Pas encore." },
    ],
    vocab: [
      { jp: "つもり", kana: "つもり", fr: "intention de" },
      { jp: "予定", kana: "よてい", fr: "plan, programme prévu" },
      { jp: "まだ", kana: "まだ", fr: "pas encore" },
      { jp: "もう", kana: "もう", fr: "déjà" },
      { jp: "デパート", kana: "デパート", fr: "grand magasin" },
      { jp: "プレゼント", kana: "プレゼント", fr: "cadeau" },
      { jp: "会議", kana: "かいぎ", fr: "réunion" },
      { jp: "準備", kana: "じゅんび", fr: "préparation" },
      { jp: "遊びます", kana: "あそびます", fr: "s'amuser, jouer" },
    ],
  },
  {
    number: 23,
    slug: "minna-23",
    title: "Quand… et probablement",
    summary: "La temporalité とき et la conjecture でしょう.",
    grammar: ["〜とき (quand, lorsque)", "〜でしょう (probablement)", "Saisons et météo"],
    explanation:
      "とき relie deux situations dans le temps : 子どものとき、京都に住んでいました (« quand j'étais enfant, j'habitais Kyoto »), 時間がないとき、タクシーを使います (« quand je manque de temps, je prends le taxi »). Pour conjecturer sur l'avenir : 明日はいい天気でしょう (« demain sera probablement beau », d'après la météo).",
    examples: [
      { jp: "子どものとき、京都に住んでいました。", kana: "こどものとき、きょうとにすんでいました。", fr: "Enfant, j'habitais à Kyoto." },
      { jp: "明日もいい天気でしょう。", kana: "あしたもいいてんきでしょう。", fr: "Demain aussi, il fera probablement beau." },
      { jp: "時間がないとき、タクシーを使います。", kana: "じかんがないとき、タクシーをつかいます。", fr: "Quand je manque de temps, je prends le taxi." },
    ],
    vocab: [
      { jp: "春", kana: "はる", fr: "printemps" },
      { jp: "夏", kana: "なつ", fr: "été" },
      { jp: "秋", kana: "あき", fr: "automne" },
      { jp: "冬", kana: "ふゆ", fr: "hiver" },
      { jp: "暑い", kana: "あつい", fr: "chaud (météo)" },
      { jp: "寒い", kana: "さむい", fr: "froid" },
      { jp: "風", kana: "かぜ", fr: "vent" },
      { jp: "天気予報", kana: "てんきよほう", fr: "prévisions météo" },
      { jp: "〜とき", kana: "〜とき", fr: "quand, lorsque" },
    ],
  },
  {
    number: 24,
    slug: "minna-24",
    title: "Obligation et dispense",
    summary: "Ce qu'on doit faire : なければなりません.",
    grammar: ["〜なければなりません (obligation)", "〜なくてもいいです (dispense)", "Chez le médecin"],
    explanation:
      "L'obligation utilise la forme négative en ない transformée : 薬を飲まなければなりません (« je dois prendre mes médicaments »). À l'inverse, なくてもいいです dispense d'une action : 今日は掃除しなくてもいいです (« aujourd'hui, pas besoin de faire le ménage »). Logique déroutante mais très régulière !",
    examples: [
      { jp: "薬を飲まなければなりません。", kana: "くすりをのまなければなりません。", fr: "Je dois prendre le médicament." },
      { jp: "今日は来なくてもいいです。", kana: "きょうはこなくてもいいです。", fr: "Pas besoin de venir aujourd'hui." },
      { jp: "熱がありますから、休みます。", kana: "ねつがありますから、やすみます。", fr: "J'ai de la fièvre, alors je me repose." },
    ],
    vocab: [
      { jp: "薬", kana: "くすり", fr: "médicament" },
      { jp: "風邪", kana: "かぜ", fr: "rhume" },
      { jp: "病院", kana: "びょういん", fr: "hôpital" },
      { jp: "医者", kana: "いしゃ", fr: "médecin" },
      { jp: "熱", kana: "ねつ", fr: "fièvre" },
      { jp: "頭", kana: "あたま", fr: "tête" },
      { jp: "早く", kana: "はやく", fr: "tôt, vite" },
      { jp: "大丈夫", kana: "だいじょうぶ", fr: "ça va, sans danger" },
    ],
  },
  {
    number: 25,
    slug: "minna-25",
    title: "Si… alors",
    summary: "L'hypothèse avec たら pour parler du futur.",
    grammar: ["〜たら (si, hypothèse)", "Projets conditionnels", "Bilan des 25 leçons"],
    explanation:
      "La forme たら exprime l'hypothèse : on prend la forme passée courte du verbe et on ajoute ら. Ainsi 雨が降ったら、出かけません (« s'il pleut, je ne sortirai pas »), 時間があったら、京都へ行きたいです (« si j'ai le temps, je voudrais aller à Kyoto »). Avec cette leçon, vous avez bouclé tout le socle grammatical du niveau débutant : félicitations, 合格おめでとう !",
    examples: [
      { jp: "雨が降ったら、出かけません。", kana: "あめがふったら、でかけません。", fr: "S'il pleut, je ne sortirai pas." },
      { jp: "時間があったら、京都へ行きたいです。", kana: "じかんがあったら、きょうとへいきたいです。", fr: "Si j'ai le temps, je voudrais aller à Kyoto." },
      { jp: "日本に着いたら、電話してください。", kana: "にほんについたら、でんわしてください。", fr: "Une fois arrivé au Japon, appelez-moi." },
    ],
    vocab: [
      { jp: "もし", kana: "もし", fr: "si (hypothèse)" },
      { jp: "卒業", kana: "そつぎょう", fr: "obtention du diplôme" },
      { jp: "就職", kana: "しゅうしょく", fr: "prise d'emploi" },
      { jp: "試験", kana: "しけん", fr: "examen" },
      { jp: "合格", kana: "ごうかく", fr: "réussite (à un examen)" },
      { jp: "練習", kana: "れんしゅう", fr: "entraînement, pratique" },
      { jp: "連絡", kana: "れんらく", fr: "contact, information" },
      { jp: "着きます", kana: "つきます", fr: "arriver" },
    ],
  },
];

export function getMinnaLesson(slug: string): MinnaLesson | undefined {
  return MINNA_LESSONS.find((l) => l.slug === slug);
}
