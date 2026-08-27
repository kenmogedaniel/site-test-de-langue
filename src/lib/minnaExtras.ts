export interface DialogueLine {
  speaker: string;
  jp: string;
  kana: string;
  fr: string;
}

export interface LessonDialogue {
  scene: string;
  lines: DialogueLine[];
}

export interface Exercise {
  prompt: string;
  options?: string[];
  accept: string[];
  explain: string;
}

export const MINNA_DIALOGUES: Record<string, LessonDialogue> = {
  "minna-01": {
    scene: "Premier jour dans une entreprise japonaise",
    lines: [
      { speaker: "Tanaka", jp: "はじめまして。田中です。", kana: "はじめまして。たなかです。", fr: "Enchanté. Je suis Tanaka." },
      { speaker: "Léa", jp: "はじめまして。レアです。フランスから来ました。", kana: "はじめまして。レアです。フランスからきました。", fr: "Enchantée. Je suis Léa. Je viens de France." },
      { speaker: "Tanaka", jp: "どうぞよろしくお願いします。", kana: "どうぞよろしくおねがいします。", fr: "Ravi de travailler avec vous." },
      { speaker: "Léa", jp: "こちらこそ、よろしくお願いします。", kana: "こちらこそ、よろしくおねがいします。", fr: "Moi aussi, ravi(e) de vous connaître." },
    ],
  },
  "minna-02": {
    scene: "Au bureau, Léa montre ses affaires",
    lines: [
      { speaker: "Léa", jp: "これは私の辞書です。", kana: "これはわたしのじしょです。", fr: "Ceci est mon dictionnaire." },
      { speaker: "Yamada", jp: "それは何ですか。", kana: "それはなんですか。", fr: "Qu'est-ce que c'est, cela ?" },
      { speaker: "Léa", jp: "これですか。日本語の新聞です。", kana: "これですか。にほんごのしんぶんです。", fr: "Ceci ? C'est un journal en japonais." },
      { speaker: "Yamada", jp: "ああ、そうですか。", kana: "ああ、そうですか。", fr: "Ah bon, je vois." },
    ],
  },
  "minna-03": {
    scene: "Léa cherche son chemin dans le bâtiment",
    lines: [
      { speaker: "Léa", jp: "すみません、トイレはどこですか。", kana: "すみません、トイレはどこですか。", fr: "Excusez-moi, où sont les toilettes ?" },
      { speaker: "Yamada", jp: "あそこです。エレベーターの隣です。", kana: "あそこです。エレベーターのとなりです。", fr: "C'est là-bas, à côté de l'ascenseur." },
      { speaker: "Léa", jp: "受付はこの階ですか。", kana: "うけつけはこのかいですか。", fr: "L'accueil est à cet étage ?" },
      { speaker: "Yamada", jp: "いいえ、一階です。", kana: "いいえ、いっかいです。", fr: "Non, au rez-de-chaussée." },
    ],
  },
  "minna-04": {
    scene: "Le matin, avant le travail",
    lines: [
      { speaker: "Karim", jp: "毎日何時に起きますか。", kana: "まいにちなんじにおきますか。", fr: "À quelle heure te lèves-tu chaque jour ?" },
      { speaker: "Sato", jp: "6時半に起きます。あなたは？", kana: "ろくじはんにおきます。あなたは？", fr: "Je me lève à 6 h 30. Et toi ?" },
      { speaker: "Karim", jp: "私は7時に起きます。夜は11時に寝ます。", kana: "わたしはしちじにおきます。よるはじゅういちじにねます。", fr: "Je me lève à 7 h. Le soir je me couche à 23 h." },
      { speaker: "Sato", jp: "土曜日も働きますか。", kana: "どようびもはたらきますか。", fr: "Tu travailles aussi le samedi ?" },
      { speaker: "Karim", jp: "いいえ、働きません。勉強します。", kana: "いいえ、はたらきません。べんきょうします。", fr: "Non, je ne travaille pas. J'étudie." },
    ],
  },
  "minna-05": {
    scene: "Léa explique sa semaine à un collègue",
    lines: [
      { speaker: "Yamada", jp: "週末はどこへ行きますか。", kana: "しゅうまつはどこへいきますか。", fr: "Où vas-tu le week-end ?" },
      { speaker: "Léa", jp: "図書館へ行きます。電車で行きます。", kana: "としょかんへいきます。でんしゃでいきます。", fr: "Je vais à la bibliothèque, en train." },
      { speaker: "Yamada", jp: "誰と行きますか。", kana: "だれといきますか。", fr: "Avec qui y vas-tu ?" },
      { speaker: "Léa", jp: "友達と行きます。9時から12時まで勉強します。", kana: "ともだちといきます。くじからじゅうにじまでべんきょうします。", fr: "Avec des amis. J'étudie de 9 h à midi." },
    ],
  },
  "minna-06": {
    scene: "Après le travail, on sort manger",
    lines: [
      { speaker: "Sato", jp: "何を食べますか。", kana: "なにをたべますか。", fr: "Qu'est-ce que tu manges ?" },
      { speaker: "Karim", jp: "ラーメンを食べます。ビールも飲みます。", kana: "ラーメンをたべます。ビールものみます。", fr: "Je mange des ramen. Je bois aussi une bière." },
      { speaker: "Sato", jp: "映画を見ませんか。", kana: "えいがをみませんか。", fr: "On va voir un film ?" },
      { speaker: "Karim", jp: "いいですね。でも、ちょっと高いですね。", kana: "いいですね。でも、ちょっとたかいですね。", fr: "Bonne idée ! Mais c'est un peu cher, non ?" },
    ],
  },
  "minna-07": {
    scene: "Léa coupe, colle et envoie pour son travail",
    lines: [
      { speaker: "Tanaka", jp: "この手紙、切手を貼りましたか。", kana: "このてがみ、きってをはりましたか。", fr: "Cette lettre, tu y as mis un timbre ?" },
      { speaker: "Léa", jp: "いいえ、まだです。今貼ります。", kana: "いいえ、まだです。いまはります。", fr: "Non, pas encore. Je le mets maintenant." },
      { speaker: "Tanaka", jp: "写真も送りますか。", kana: "しゃしんもおくりますか。", fr: "Tu envoies aussi les photos ?" },
      { speaker: "Léa", jp: "はい、メールで送ります。", kana: "はい、メールでおくります。", fr: "Oui, je les envoie par mail." },
    ],
  },
  "minna-08": {
    scene: "Karim décrit sa chambre",
    lines: [
      { speaker: "Anna", jp: "部屋には何がありますか。", kana: "へやにはなにがありますか。", fr: "Qu'y a-t-il dans ta chambre ?" },
      { speaker: "Karim", jp: "机と椅子があります。パソコンもあります。", kana: "つくえといすがあります。パソコンもあります。", fr: "Il y a un bureau et une chaise. Il y a aussi un ordinateur." },
      { speaker: "Anna", jp: "窓はいくつありますか。", kana: "まどはいくつありますか。", fr: "Combien y a-t-il de fenêtres ?" },
      { speaker: "Karim", jp: "二つあります。とても明るいです。", kana: "ふたつあります。とてもあかるいです。", fr: "Il y en a deux. C'est très lumineux." },
    ],
  },
  "minna-09": {
    scene: "La chambre de Léa, côté style",
    lines: [
      { speaker: "Yamada", jp: "新しい部屋はどうですか。", kana: "あたらしいへやはどうですか。", fr: "Comment est ta nouvelle chambre ?" },
      { speaker: "Léa", jp: "広くて、きれいです。でも、ちょっと静かすぎます。", kana: "ひろくて、きれいです。でも、ちょっとしずかすぎます。", fr: "Grande et propre. Mais un peu trop calme." },
      { speaker: "Yamada", jp: "山の写真がありますね。素敵ですね。", kana: "やまのしゃしんがありますね。すてきですね。", fr: "Il y a une photo de montagne. C'est joli !" },
      { speaker: "Léa", jp: "ありがとう。日本語の言葉も書いてあります。", kana: "ありがとうございます。にほんごのことばもかいてあります。", fr: "Merci. Il y a aussi des mots japonais écrits dessus." },
    ],
  },
  "minna-10": {
    scene: "Chez Sato, on rencontre la famille",
    lines: [
      { speaker: "Sato", jp: "私の家族です。父と母と妹です。", kana: "わたしのかぞくです。ちちとははといもうとです。", fr: "Voici ma famille : mon père, ma mère et ma petite sœur." },
      { speaker: "Anna", jp: "お兄さんはいますか。", kana: "おにいさんはいますか。", fr: "Tu as un grand frère ?" },
      { speaker: "Sato", jp: "はい、大阪にいます。会社員です。", kana: "はい、おおさかにいます。かいしゃいんです。", fr: "Oui, il est à Osaka. Il travaille en entreprise." },
      { speaker: "Anna", jp: "ご両親はお元気ですか。", kana: "ごりょうしんはおげんきですか。", fr: "Vos parents vont bien ?" },
      { speaker: "Sato", jp: "はい、元気です。", kana: "はい、げんきです。", fr: "Oui, ils vont bien." },
    ],
  },
  "minna-11": {
    scene: "Au marché, on compte et on paie",
    lines: [
      { speaker: "Karim", jp: "このりんごはいくらですか。", kana: "このりんごはいくらですか。", fr: "Ces pommes, elles coûtent combien ?" },
      { speaker: "Vendeur", jp: "三つで500円です。", kana: "みっつでごひゃくえんです。", fr: "Trois pour 500 yens." },
      { speaker: "Karim", jp: "じゃ、五つください。", kana: "じゃ、いつつください。", fr: "Alors, cinq s'il vous plaît." },
      { speaker: "Vendeur", jp: "800円です。毎週どうも。", kana: "はっぴゃくえんです。まいしゅうどうも。", fr: "Ce sera 800 yens. Merci de votre fidélité hebdomadaire !" },
    ],
  },
  "minna-12": {
    scene: "Anna raconte son passé",
    lines: [
      { speaker: "Tanaka", jp: "去年、どこへ行きましたか。", kana: "きょねん、どこへいきましたか。", fr: "Où êtes-vous allée l'année dernière ?" },
      { speaker: "Anna", jp: "京都へ行きました。お寺を見ました。", kana: "きょうとへいきました。おてらをみました。", fr: "Je suis allée à Kyoto. J'ai vu des temples." },
      { speaker: "Tanaka", jp: "何を食べましたか。", kana: "なにをたべましたか。", fr: "Qu'est-ce que vous y avez mangé ?" },
      { speaker: "Anna", jp: "お好み焼きを食べました。とてもおいしかったです。", kana: "おこのみやきをたべました。とてもおいしかったです。", fr: "Des okonomiyaki. C'était très bon !" },
    ],
  },
  "minna-13": {
    scene: "Après les vacances",
    lines: [
      { speaker: "Léa", jp: "夏休みはどうでしたか。", kana: "なつやすみはどうでしたか。", fr: "Comment étaient tes vacances d'été ?" },
      { speaker: "Karim", jp: "楽しかったです。海へ行きました。", kana: "たのしかったです。うみへいきました。", fr: "C'était génial. Je suis allé à la mer." },
      { speaker: "Léa", jp: "泳ぎましたか。", kana: "およぎましたか。", fr: "Tu as nagé ?" },
      { speaker: "Karim", jp: "はい。でも、少し疲れました。", kana: "はい。でも、すこしつかれました。", fr: "Oui ! Mais j'étais un peu fatigué après." },
    ],
  },
  "minna-14": {
    scene: "Au téléphone avec l'école",
    lines: [
      { speaker: "Secrétaire", jp: "明日10時に来てください。", kana: "あしたじゅうじにきてください。", fr: "Venez demain à 10 h, s'il vous plaît." },
      { speaker: "Anna", jp: "10時ですか。分かりました。", kana: "じゅうじですか。わかりました。", fr: "À 10 h ? Très bien." },
      { speaker: "Secrétaire", jp: "名前と住所を教えてください。", kana: "なまえとじゅうしょをおしえてください。", fr: "Donnez-moi votre nom et votre adresse, s'il vous plaît." },
      { speaker: "Anna", jp: "アンナ・デュポンです。電話番号は090…です。", kana: "アンナ・デュポンです。でんわばんごうはゼロキューゼロ…です。", fr: "Je suis Anna Dupont. Mon numéro est le 090…" },
    ],
  },
  "minna-15": {
    scene: "Une soirée entre amis",
    lines: [
      { speaker: "Sato", jp: "一緒に歌いませんか。", kana: "いっしょにうたいませんか。", fr: "On chante ensemble ?" },
      { speaker: "Léa", jp: "すみません、歌うことが好きじゃないです。", kana: "すみません、うたうことがすきじゃないです。", fr: "Désolée, je n'aime pas trop chanter." },
      { speaker: "Sato", jp: "じゃ、写真を撮りましょう。", kana: "じゃ、しゃしんをとりましょう。", fr: "Alors prenons-nous en photo !" },
      { speaker: "Léa", jp: "いいですね。ちょっと待ってください。", kana: "いいですね。ちょっとまってください。", fr: "Bonne idée ! Attendez un peu." },
    ],
  },
  "minna-16": {
    scene: "Dans le train pour Kyoto",
    lines: [
      { speaker: "Anna", jp: "電車の中で携帯を使わないでください。", kana: "でんしゃのなかでけいたいをつかわないでください。", fr: "Ne pas utiliser son téléphone dans le train." },
      { speaker: "Karim", jp: "あ、すみません。ここでタバコを吸ってもいいですか。", kana: "あ、すみません。ここでタバコをすってもいいですか。", fr: "Ah pardon. Est-ce que je peux fumer ici ?" },
      { speaker: "Anna", jp: "いいえ、吸ってはいけません。", kana: "いいえ、すってはいけません。", fr: "Non, c'est interdit." },
      { speaker: "Karim", jp: "分かりました。気を付けます。", kana: "わかりました。きをつけます。", fr: "Compris, je ferai attention." },
    ],
  },
  "minna-17": {
    scene: "Conseils d'une amie japonaise",
    lines: [
      { speaker: "Sato", jp: "漢字を覚えるのは大変ですか。", kana: "かんじをおぼえるのはたいへんですか。", fr: "Apprendre les kanji, c'est dur ?" },
      { speaker: "Léa", jp: "はい、難しいです。毎日書いたほうがいいですか。", kana: "はい、むずかしいです。まいにちかいたほうがいいですか。", fr: "Oui, difficile. Mieux vaut en écrire tous les jours ?" },
      { speaker: "Sato", jp: "そうですね。毎朝10分ずつ書くのが一番いいです。", kana: "そうですね。まいあさじっぷんずつかくのがいちばんいいです。", fr: "Exactement. Écrire 10 minutes chaque matin, c'est le mieux." },
      { speaker: "Léa", jp: "そうします。ありがとうございます。", kana: "そうします。ありがとうございます。", fr: "Je vais faire ça, merci !" },
    ],
  },
  "minna-18": {
    scene: "Pendant une pause café",
    lines: [
      { speaker: "Yamada", jp: "趣味は何ですか。", kana: "しゅみはなんですか。", fr: "Quel est ton passe-temps ?" },
      { speaker: "Anna", jp: "趣味は音楽を聞くことです。ギターも弾きます。", kana: "しゅみはおんがくをきくことです。ギターもひきます。", fr: "J'adore écouter de la musique. Je joue aussi de la guitare." },
      { speaker: "Yamada", jp: "すごいですね。寝る前に練習しますか。", kana: "すごいですね。ねるまえにれんしゅうしますか。", fr: "Impressionnant ! Tu pratiques avant de dormir ?" },
      { speaker: "Anna", jp: "はい、でも夜遅くには練習しません（笑）。", kana: "はい、でもよるおそくにはれんしゅうしません（えがお）。", fr: "Oui, mais pas tard le soir (rires)." },
    ],
  },
  "minna-19": {
    scene: "Entretien d'embauche chez Tanaka",
    lines: [
      { speaker: "Tanaka", jp: "日本語を話することができますか。", kana: "にほんごをはなすことができますか。", fr: "Savez-vous parler japonais ?" },
      { speaker: "Karim", jp: "はい、日常会話ならできます。", kana: "はい、にちじょうかいわならできます。", fr: "Oui, pour la conversation courante." },
      { speaker: "Tanaka", jp: "車を運転することができますか。", kana: "くるまをうんてんすることができますか。", fr: "Savez-vous conduire ?" },
      { speaker: "Karim", jp: "はい、運転免許があります。", kana: "はい、うんてんめんきょがあります。", fr: "Oui, j'ai le permis." },
    ],
  },
  "minna-20": {
    scene: "Le week-end de Léa",
    lines: [
      { speaker: "Anna", jp: "週末は何をしましたか。", kana: "しゅうまつはなにをしましたか。", fr: "Qu'as-tu fait ce week-end ?" },
      { speaker: "Léa", jp: "掃除したり、洗濯したりしました。", kana: "そうじしたり、せんたくしたりしました。", fr: "J'ai fait le ménage, la lessive, ce genre de choses." },
      { speaker: "Anna", jp: "忙しかったですね。", kana: "いそがしかったですね。", fr: "Ça a dû être chargé !" },
      { speaker: "Léa", jp: "ええ。でも、紅茶を飲みながら音楽も聞きました。", kana: "ええ。でも、こうちゃをのみながらおんがくもききました。", fr: "Oui… mais j'ai aussi écouté de la musique en buvant du thé." },
    ],
  },
  "minna-21": {
    scene: "On rapporte les ragots du bureau",
    lines: [
      { speaker: "Yamada", jp: "田中さんは何と言いましたか。", kana: "たなかさんはなんといいましたか。", fr: "Qu'est-ce que M. Tanaka a dit ?" },
      { speaker: "Sato", jp: "明日は会議がないと言いました。", kana: "あしたはかいぎがないといいました。", fr: "Il a dit qu'il n'y avait pas de réunion demain." },
      { speaker: "Yamada", jp: "本当ですか。良かったですね。", kana: "ほんとうですか。よかったですね。", fr: "C'est vrai ? Bonne nouvelle !" },
      { speaker: "Sato", jp: "多分そうです。でも、確認したほうがいいですよ。", kana: "たぶんそうです。でも、かくにんしたほうがいいですよ。", fr: "Probablement. Mais mieux vaut vérifier quand même." },
    ],
  },
  "minna-22": {
    scene: "Projets pour l'année prochaine",
    lines: [
      { speaker: "Karim", jp: "来年どうするつもりですか。", kana: "らいねんどうするつもりですか。", fr: "Que comptes-tu faire l'année prochaine ?" },
      { speaker: "Anna", jp: "日本で働こうと思っています。", kana: "にほんではたらこうとおもっています。", fr: "Je pense travailler au Japon." },
      { speaker: "Karim", jp: " JLPTを受ける予定は？", kana: "ジェーエルピーティーをうけるよていは？", fr: "Et tu comptes passer le JLPT ?" },
      { speaker: "Anna", jp: "はい、12月に受けようと思っています。", kana: "はい、じゅうにがつにうけようとおもっています。", fr: "Oui, je pense le passer en décembre." },
    ],
  },
  "minna-23": {
    scene: "Un cadeau pour la mère de Sato",
    lines: [
      { speaker: "Léa", jp: "これは母にあげるプレゼントです。", kana: "これはははにあげるプレゼントです。", fr: "Voici le cadeau que j'offre à ma mère." },
      { speaker: "Sato", jp: "きれいな花ですね。お母さんは喜びますよ。", kana: "きれいなはなですね。おかあさんはよろこびますよ。", fr: "De belles fleurs ! Ta mère sera ravie." },
      { speaker: "Léa", jp: "田中さんにも借りた本を返さなければなりません。", kana: "たなかさんにもかりたほんをかえさなければなりません。", fr: "Je dois aussi rendre le livre qu'il m'a prêté." },
      { speaker: "Sato", jp: "じゃ、一緒に会社へ持って行きましょう。", kana: "じゃ、いっしょにかいしゃへもっていきましょう。", fr: "Alors apportons-le ensemble au bureau." },
    ],
  },
  "minna-24": {
    scene: "Anna donne un coup de main",
    lines: [
      { speaker: "Anna", jp: "荷物を持ってあげましょうか。", kana: "にもつをもってあげましょうか。", fr: "Je te porte ton sac ?" },
      { speaker: "Yamada", jp: "ありがとう。助かります。", kana: "ありがとう。たすかります。", fr: "Merci, ça aide beaucoup." },
      { speaker: "Anna", jp: "先週、課長に資料を見せてもらいました。", kana: "せんしゅう、かちょうにしりょうをみせてもらいました。", fr: "La semaine passée, le chef m'a montré les documents." },
      { speaker: "Yamada", jp: "課長は親切な人ですね。", kana: "かちょうはしんせつなひとですね。", fr: "Le chef est quelqu'un de gentil." },
    ],
  },
  "minna-25": {
    scene: "Avant le départ pour Kyoto",
    lines: [
      { speaker: "Sato", jp: "雨が降ったら、傘を持って行ってください。", kana: "あめがふったら、かさをもっていってください。", fr: "S'il pleut, prends un parapluie." },
      { speaker: "Léa", jp: "はい。京都に着いたら、連絡します。", kana: "はい。きょうとについたら、れんらくします。", fr: "D'accord. Dès que j'arrive à Kyoto, je t'envoie un message." },
      { speaker: "Sato", jp: "時間があったら、金閣寺へ行ってみてください。", kana: "じかんがあったら、きんかくじへいってみてください。", fr: "Si tu as le temps, va voir le Kinkaku-ji !" },
      { speaker: "Léa", jp: "いいですね。楽しみです！", kana: "いいですね。たのしみです！", fr: "Bonne idée, j'ai hâte !" },
    ],
  },
};

export const MINNA_EXERCISES: Record<string, Exercise[]> = {
  "minna-01": [
    { prompt: "Complétez : « Enchanté, je suis Tanaka » → はじめまして。田中＿＿。", accept: ["です"], explain: "X です = « je suis X ». La politesse passe par です/ます." },
    { prompt: "« Ravi de vous connaître » se dit…", options: ["どうぞよろしくお願いします", "こんにちは", "さようなら"], accept: ["どうぞよろしくおねがいします", "よろしくおねがいします", "どうぞよろしくお願いします"], explain: "よろしくお願いします est LA formule de présentation au Japon." },
    { prompt: "« Je viens de France » → フランス＿＿来ました。", accept: ["から"], explain: "から marque l'origine (« depuis »)." },
  ],
  "minna-02": [
    { prompt: "« Qu'est-ce que c'est ? » → それ＿＿何ですか。", accept: ["は"], explain: "は marque le thème de la phrase." },
    { prompt: "« C'est mon journal » → それは＿＿新聞です。", options: ["私の", "あなた", "どの"], accept: ["私の", "わたしの"], explain: "私の = « le mien / mon »." },
    { prompt: "Choisissez le mot « dictionnaire » :", options: ["じしょ", "しんぶん", "ざっし"], accept: ["じしょ"], explain: "辞書（じしょ）= dictionnaire, 新聞 = journal, 雑誌 = magazine." },
  ],
  "minna-03": [
    { prompt: "« Où sont les toilettes ? » → トイレは＿＿ですか。", accept: ["どこ"], explain: "どこ = « où »." },
    { prompt: "« Là-bas » (loin de nous deux) :", options: ["そこ", "あそこ", "ここ"], accept: ["あそこ"], explain: "ここ (ici) < そこ (près de toi) < あそこ (là-bas)." },
    { prompt: "« À côté de l'ascenseur » → エレベーターの＿＿です。", accept: ["となり", "隣"], explain: "A の B = A adjacent à B : X の隣 = à côté de X." },
  ],
  "minna-04": [
    { prompt: "« Je me lève à 7 heures » → 7時＿＿起きます。", accept: ["に"], explain: "に s'ajoute après un moment précis (heures, jours…)." },
    { prompt: "Forme négative polie de 働きます :", options: ["働きません", "働きます", "働いて"], accept: ["はたらきません", "働きません"], explain: "ます → ません pour nier." },
    { prompt: "« Quelle heure est-il ? » → 今、＿＿ですか。", accept: ["なんじ", "何時"], explain: "何時（なんじ）= quelle heure." },
  ],
  "minna-05": [
    { prompt: "« Je vais à Tokyo » → 東京＿＿行きます。(2 particules possibles)", accept: ["へ", "に"], explain: "へ (direction) ou に (destination) conviennent tous deux ici." },
    { prompt: "« En train » → 電車＿＿行きます。", accept: ["で"], explain: "で indique le moyen de transport." },
    { prompt: "« De 9 h à 17 h » → 9時＿＿5時＿＿働きます。", accept: ["から まで", "からまで"], explain: "から…まで = de…à… (plage horaire ou spatiale)." },
  ],
  "minna-06": [
    { prompt: "« Je mange des nouilles » → ラーメン＿＿食べます。", accept: ["を"], explain: "を marque l'objet direct du verbe." },
    { prompt: "Invitation : « On boit un verre ? » → 一緒に飲み＿＿か。", accept: ["ません"], explain: "V-ませんか = invitation polie." },
    { prompt: "Accepter chaleureusement :", options: ["いいですね", "高いです", "違います"], accept: ["いいですね"], explain: "いいですね exprime l'accord enthousiaste." },
  ],
  "minna-07": [
    { prompt: "« Envoyer une lettre » → 手紙を＿＿。", accept: ["おくります", "送ります"], explain: "送る（おくる）= envoyer." },
    { prompt: "« Couper avec des ciseaux » → はさみ＿＿切ります。", accept: ["で"], explain: "で marque aussi l'instrument." },
    { prompt: "Proposition : « Je vous l'envoie ? » → 送り＿＿か。", accept: ["ましょう"], explain: "V-ましょうか = proposer son aide." },
  ],
  "minna-08": [
    { prompt: "« Il y a une table » → テーブル＿＿あります。", accept: ["が"], explain: "存在 : が marque ce qui existe (avec あります/います)." },
    { prompt: "Pour une personne vivante, on utilise :", options: ["あります", "います", "です"], accept: ["います"], explain: "Animé → います ; inanimé → あります." },
    { prompt: "« Combien ? » (comptage) :", options: ["いくら", "いくつ", "いつ"], accept: ["いくつ"], explain: "いくつ = combien (nombre), いくら = combien (prix)." },
  ],
  "minna-09": [
    { prompt: "Adjectif en い : « cher » devient au passé…", options: ["高かったです", "高いでした", "高いました"], accept: ["たかかったです", "高かったです"], explain: "Les い font leur passé en -かったです." },
    { prompt: "Adjectif en な : « célèbre » devant un nom → ＿＿人", accept: ["ゆうめいな", "有名な"], explain: "Devant un nom, les な prennent な : 有名な人." },
    { prompt: "« Pas très calme » → 静か＿＿ありません。", accept: ["じゃ"], explain: "Négation douce : じゃ (+ あまり) ありません." },
  ],
  "minna-10": [
    { prompt: "« Ma famille » (mot humble) :", options: ["ご家族", "家族", "お家族"], accept: ["かぞく", "家族"], explain: "Sa propre famille : 家族, sans honorifique ; ご家族 pour celle des autres." },
    { prompt: "« Mon père » (humble) :", options: ["お父さん", "父", "親父"], accept: ["ちち", "父"], explain: "父 (chichi) pour le sien, お父さん pour celui des autres." },
    { prompt: "« Il y a quatre personnes » → 四人＿＿います。", accept: ["が"], explain: "Encore la particule d'existence : が + います." },
  ],
  "minna-11": [
    { prompt: "« Combien ça coûte ? » → ＿＿ですか。", accept: ["いくら"], explain: "いくら = quel prix." },
    { prompt: "10 000 yens s'écrit…", options: ["千円", "万円", "十万円"], accept: ["一万えん", "1万円", "一万円", "まんえん"], explain: "Le japonais compte par dizaines de milliers : 万 = 10 000." },
    { prompt: "« Donnez-moi trois pommes » → りんごを三つ＿＿。", accept: ["ください"], explain: "〜をください pour commander/demander." },
  ],
  "minna-12": [
    { prompt: "Passé de 行きます :", options: ["行ったです", "行きました", "行くでした"], accept: ["いきました", "行きました"], explain: "ます → ました au passé poli." },
    { prompt: "Passé de です :", options: ["でした", "だったです", "でしたか"], accept: ["でした"], explain: "です → でした." },
    { prompt: "Passé de おいしいです :", options: ["おいしいでした", "おいしかったです", "おいしくでした"], accept: ["おいしかったです"], explain: "Adjectif en い : supprimer い et ajouter かったです." },
  ],
  "minna-13": [
    { prompt: "Passé négatif : « Ce n'était pas amusant » → 楽しくないです → …", options: ["楽しくなかったです", "楽しくないでした", "楽しくありました"], accept: ["たのしくなかったです", "楽しくなかったです"], explain: "ない → なかった au passé." },
    { prompt: "Comparaison : « Le shinkansen est plus rapide » → 新幹線のほうが＿＿。", accept: ["はやい", "速い", "早い"], explain: "A のほうが B より (adjectif) : A est plus … que B." },
    { prompt: "« Lequel est le plus rapide ? » → ＿＿が一番速いですか。", accept: ["どれ"], explain: "どれ + が + 一番 = superlatif interrogatif." },
  ],
  "minna-14": [
    { prompt: "« Comptez de l'argent » → お金を数えます。Forme en て ?", options: ["数えて", "数って", "数ちて"], accept: ["かぞえて", "数えて"], explain: "数えます → 数えて (groupe 2 : -ます → -て)." },
    { prompt: "« Attendez un instant, s'il vous plaît » → 少し待って＿＿。", accept: ["ください"], explain: "V-てください = requête polie." },
    { prompt: "« Pardon » (s'excuser) :", options: ["ありがとう", "すみません", "おはよう"], accept: ["すみません"], explain: "すみません sert aussi d'excuse et d'appel poli." },
  ],
  "minna-15": [
    { prompt: "Forme en て de 見ます :", options: ["見って", "見て", "見いで"], accept: ["みて", "見て"], explain: "Groupe 2 régulier : -ます → -て." },
    { prompt: "« Ne photographiez pas ici » → ここで写真を撮らない＿＿ください。", accept: ["で"], explain: "V-naï + でください = interdiction polie." },
    { prompt: "Forme en て de 書きます :", options: ["書いて", "書きて", "書いてる"], accept: ["かいて", "書いて"], explain: "き→いて pour les verbes en -きます." },
  ],
  "minna-16": [
    { prompt: "« Je peux m'asseoir ici ? » → 座って＿＿いいですか。", accept: ["も"], explain: "V-てもいいですか = demander la permission." },
    { prompt: "« Interdit de fumer » → 吸っては＿＿。", accept: ["いけません", "だめです"], explain: "V-てはいけません = défense formelle." },
    { prompt: "Forme en て de 来ます :", options: ["きて", "来って", "くて"], accept: ["きて", "来て"], explain: "来ます → 来て（きて）— irrégulier mais très courant." },
  ],
  "minna-17": [
    { prompt: "« Mieux vaut étudier » → 勉強した＿＿がいいです。", accept: ["ほう"], explain: "V-passé + ほうがいい = conseil fort." },
    { prompt: "« Il faut porter la ceinture » → ベルトをしなければ＿＿。", accept: ["なりません"], explain: "V-naï + なければなりません = obligation." },
    { prompt: "« Je dois y aller » → 行かなきゃ＿＿。(familier)", accept: ["いけません", "だめです"], explain: "行かなきゃ + いけません/だめです : registre familier de l'obligation." },
  ],
  "minna-18": [
    { prompt: "« Mon hobby est lire » → 趣味は本を読む＿＿です。", accept: ["こと"], explain: "こと nominalise le verbe : « le fait de lire »." },
    { prompt: "« Avant de dormir » → 寝る＿＿に本を読みます。", accept: ["まえ", "前"], explain: "Forme du dictionnaire + 前（に）= avant de…" },
    { prompt: "Forme du dictionnaire de 食べます :", options: ["食べる", "食べて", "食べた"], accept: ["たべる", "食べる"], explain: "-ます → -る pour le groupe 2." },
  ],
  "minna-19": [
    { prompt: "« Je peux nager » → 泳ぐ＿＿ができます。", accept: ["こと"], explain: "Forme du dictionnaire + ことができます." },
    { prompt: "Version courte potentielle de « je peux lire » : 読む → ", accept: ["よめます", "読めます"], explain: "読む → 読める → 読めます (forme potentielle)." },
    { prompt: "« Avant de partir » (2e façon) → 出かける＿＿に確認します。", accept: ["まえ", "前"], explain: "前 s'attache à la forme du dictionnaire." },
  ],
  "minna-20": [
    { prompt: "« Je lis, je regarde des films, etc. » → 本を読んだり映画を見たり＿＿。", accept: ["します"], explain: "V-たり V-たり します énumère des activités." },
    { prompt: "« J'aime cuisiner » → 料理を作る＿＿が好きです。", accept: ["のが", "こと"], explain: "の (ou こと) transforme le verbe en nom sujet." },
    { prompt: "Forme た (passé court) de 飲みます :", options: ["飲んだ", "飲いた", "飲みた"], accept: ["のんだ", "飲んだ"], explain: "み→んだ : même alternance que la forme て." },
  ],
  "minna-21": [
    { prompt: "« Je pense qu'il viendra » → 来る＿＿思います。", accept: ["と"], explain: "と cite le contenu d'une pensée/parole." },
    { prompt: "Humble : « Je suis Dupont » → デュポン＿＿申します。", accept: ["と"], explain: "Nom + と申します : présentation humble." },
    { prompt: "« Il a dit qu'il pleuvrait » → 雨が降ると＿＿。", accept: ["言いました", "いいました"], explain: "Phrase + と言いました : discours rapporté." },
  ],
  "minna-22": [
    { prompt: "« Je compte voyager » → 旅行し＿＿と思っています。", accept: ["よう"], explain: "Volition + と思っています : intention durable." },
    { prompt: "« J'ai prévu de rentrer à 6 h » → 6時に帰る＿＿です。", accept: ["よてい", "予定"], explain: "V + 予定（よてい）です : plan arrêté." },
    { prompt: "Forme volitive de 食べます :", options: ["食べよう", "食べますよう", "食べたい"], accept: ["たべよう", "食べよう"], explain: "Groupe 2 : -ます → -よう (食べよう)." },
  ],
  "minna-23": [
    { prompt: "« Je dois finir » → 終えなければ＿＿。(forme courte familière)", accept: ["いけません", "ならない", "だめ"], explain: "なければ + いけません/ならない (ou なきゃ en ultra-court)." },
    { prompt: "« Je lui ai prêté » → 彼に本を貸し＿＿。", accept: ["ました"], explain: "貸します = prêter (à quelqu'un : に)." },
    { prompt: "« Recevoir/prêter de qqn » → 友達＿＿お金を借りました。", accept: ["に", "から"], explain: "Emprunter : に ou から marquent la source." },
  ],
  "minna-24": [
    { prompt: "« Je lui porte son sac (lui rendre service) » → 持って＿＿。", accept: ["あげます", "あげる"], explain: "V-てあげる : service vers un égal/inférieur." },
    { prompt: "« On me prête » (bénéfice reçu) → 貸して＿＿。", accept: ["もらいます", "もらう"], explain: "V-てもらう : recevoir un service." },
    { prompt: "« Merci de me l'avoir montré » → 見せてくれて、＿＿。", accept: ["ありがとうございます", "ありがとう"], explain: "V-てくれてありがとうございます remercie un service reçu." },
  ],
  "minna-25": [
    { prompt: "« S'il pleut » → 雨が降っ＿＿、出かけません。", accept: ["たら"], explain: "Forme passée + ら : hypothèse." },
    { prompt: "« Dès que j'arrive, je t'appelle » → 着いた＿＿電話します。", accept: ["ら"], explain: "たら exprime aussi la succession immédiate." },
    { prompt: "« Si j'ai le temps » → 時間が＿＿たら、行きます。", accept: ["あっ"], explain: "ある → あった → あったら (irrégulier régulier !)." },
  ],
};
