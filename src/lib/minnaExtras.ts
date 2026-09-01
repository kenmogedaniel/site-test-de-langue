export interface DialogueLine {
  speaker: string;
  jp: string;
  kana: string;
  fr: string;
  en: string;
}

export interface LessonDialogue {
  scene: string;
  sceneEn: string;
  lines: DialogueLine[];
}

export interface Exercise {
  prompt: string;
  promptEn: string;
  options?: string[];
  accept: string[];
  explain: string;
  explainEn: string;
}

export const MINNA_DIALOGUES: Record<string, LessonDialogue> = {
  "minna-01": {
    scene: "Premier jour dans une entreprise japonaise",
    sceneEn: "First day at a Japanese company",
    lines: [
      { speaker: "Tanaka", jp: "はじめまして。田中です。", kana: "はじめまして。たなかです。", fr: "Enchanté. Je suis Tanaka.", en: "Nice to meet you. I'm Tanaka." },
      { speaker: "Léa", jp: "はじめまして。レアです。フランスから来ました。", kana: "はじめまして。レアです。フランスからきました。", fr: "Enchantée. Je suis Léa. Je viens de France.", en: "Nice to meet you. I'm Léa. I come from France." },
      { speaker: "Tanaka", jp: "どうぞよろしくお願いします。", kana: "どうぞよろしくおねがいします。", fr: "Ravi de travailler avec vous.", en: "Pleased to work with you." },
      { speaker: "Léa", jp: "こちらこそ、よろしくお願いします。", kana: "こちらこそ、よろしくおねがいします。", fr: "Moi aussi, ravi(e) de vous connaître.", en: "Same here, pleased to meet you." },
    ],
  },
  "minna-02": {
    scene: "Au bureau, Léa montre ses affaires",
    sceneEn: "At the office, Léa shows her things",
    lines: [
      { speaker: "Léa", jp: "これは私の辞書です。", kana: "これはわたしのじしょです。", fr: "Ceci est mon dictionnaire.", en: "This is my dictionary." },
      { speaker: "Yamada", jp: "それは何ですか。", kana: "それはなんですか。", fr: "Qu'est-ce que c'est, cela ?", en: "What is that?" },
      { speaker: "Léa", jp: "これですか。日本語の新聞です。", kana: "これですか。にほんごのしんぶんです。", fr: "Ceci ? C'est un journal en japonais.", en: "This? It's a Japanese newspaper." },
      { speaker: "Yamada", jp: "ああ、そうですか。", kana: "ああ、そうですか。", fr: "Ah bon, je vois.", en: "Ah, I see." },
    ],
  },
  "minna-03": {
    scene: "Léa cherche son chemin dans le bâtiment",
    sceneEn: "Léa looks for her way around the building",
    lines: [
      { speaker: "Léa", jp: "すみません、トイレはどこですか。", kana: "すみません、トイレはどこですか。", fr: "Excusez-moi, où sont les toilettes ?", en: "Excuse me, where are the restrooms?" },
      { speaker: "Yamada", jp: "あそこです。エレベーターの隣です。", kana: "あそこです。エレベーターのとなりです。", fr: "C'est là-bas, à côté de l'ascenseur.", en: "It's over there, next to the elevator." },
      { speaker: "Léa", jp: "受付はこの階ですか。", kana: "うけつけはこのかいですか。", fr: "L'accueil est à cet étage ?", en: "Is the reception desk on this floor?" },
      { speaker: "Yamada", jp: "いいえ、一階です。", kana: "いいえ、いっかいです。", fr: "Non, au rez-de-chaussée.", en: "No, on the ground floor." },
    ],
  },
  "minna-04": {
    scene: "Le matin, avant le travail",
    sceneEn: "In the morning, before work",
    lines: [
      { speaker: "Karim", jp: "毎日何時に起きますか。", kana: "まいにちなんじにおきますか。", fr: "À quelle heure te lèves-tu chaque jour ?", en: "What time do you wake up every day?" },
      { speaker: "Sato", jp: "6時半に起きます。あなたは？", kana: "ろくじはんにおきます。あなたは？", fr: "Je me lève à 6 h 30. Et toi ?", en: "I wake up at 6:30. And you?" },
      { speaker: "Karim", jp: "私は7時に起きます。夜は11時に寝ます。", kana: "わたしはしちじにおきます。よるはじゅういちじにねます。", fr: "Je me lève à 7 h. Le soir je me couche à 23 h.", en: "I get up at 7. In the evening I go to bed at 11." },
      { speaker: "Sato", jp: "土曜日も働きますか。", kana: "どようびもはたらきますか。", fr: "Tu travailles aussi le samedi ?", en: "Do you also work on Saturdays?" },
      { speaker: "Karim", jp: "いいえ、働きません。勉強します。", kana: "いいえ、はたらきません。べんきょうします。", fr: "Non, je ne travaille pas. J'étudie.", en: "No, I don't work. I study." },
    ],
  },
  "minna-05": {
    scene: "Léa explique sa semaine à un collègue",
    sceneEn: "Léa tells a colleague about her week",
    lines: [
      { speaker: "Yamada", jp: "週末はどこへ行きますか。", kana: "しゅうまつはどこへいきますか。", fr: "Où vas-tu le week-end ?", en: "Where do you go on the weekend?" },
      { speaker: "Léa", jp: "図書館へ行きます。電車で行きます。", kana: "としょかんへいきます。でんしゃでいきます。", fr: "Je vais à la bibliothèque, en train.", en: "I go to the library by train." },
      { speaker: "Yamada", jp: "誰と行きますか。", kana: "だれといきますか。", fr: "Avec qui y vas-tu ?", en: "Who do you go with?" },
      { speaker: "Léa", jp: "友達と行きます。9時から12時まで勉強します。", kana: "ともだちといきます。くじからじゅうにじまでべんきょうします。", fr: "Avec des amis. J'étudie de 9 h à midi.", en: "With friends. I study from 9 to noon." },
    ],
  },
  "minna-06": {
    scene: "Après le travail, on sort manger",
    sceneEn: "After work, they go out to eat",
    lines: [
      { speaker: "Sato", jp: "何を食べますか。", kana: "なにをたべますか。", fr: "Qu'est-ce que tu manges ?", en: "What are you eating?" },
      { speaker: "Karim", jp: "ラーメンを食べます。ビールも飲みます。", kana: "ラーメンをたべます。ビールものみます。", fr: "Je mange des ramen. Je bois aussi une bière.", en: "I'm eating ramen. I'm also drinking a beer." },
      { speaker: "Sato", jp: "映画を見ませんか。", kana: "えいがをみませんか。", fr: "On va voir un film ?", en: "Shall we go see a movie?" },
      { speaker: "Karim", jp: "いいですね。でも、ちょっと高いですね。", kana: "いいですね。でも、ちょっとたかいですね。", fr: "Bonne idée ! Mais c'est un peu cher, non ?", en: "Good idea! But it's a bit expensive, isn't it?" },
    ],
  },
  "minna-07": {
    scene: "Léa coupe, colle et envoie pour son travail",
    sceneEn: "Léa cuts, glues, and sends mail for work",
    lines: [
      { speaker: "Tanaka", jp: "この手紙、切手を貼りましたか。", kana: "このてがみ、きってをはりましたか。", fr: "Cette lettre, tu y as mis un timbre ?", en: "Did you put a stamp on this letter?" },
      { speaker: "Léa", jp: "いいえ、まだです。今貼ります。", kana: "いいえ、まだです。いまはります。", fr: "Non, pas encore. Je le mets maintenant.", en: "No, not yet. I'll put it on now." },
      { speaker: "Tanaka", jp: "写真も送りますか。", kana: "しゃしんもおくりますか。", fr: "Tu envoies aussi les photos ?", en: "Are you sending the photos too?" },
      { speaker: "Léa", jp: "はい、メールで送ります。", kana: "はい、メールでおくります。", fr: "Oui, je les envoie par mail.", en: "Yes, I'll send them by email." },
    ],
  },
  "minna-08": {
    scene: "Karim décrit sa chambre",
    sceneEn: "Karim describes his room",
    lines: [
      { speaker: "Anna", jp: "部屋には何がありますか。", kana: "へやにはなにがありますか。", fr: "Qu'y a-t-il dans ta chambre ?", en: "What's in your room?" },
      { speaker: "Karim", jp: "机と椅子があります。パソコンもあります。", kana: "つくえといすがあります。パソコンもあります。", fr: "Il y a un bureau et une chaise. Il y a aussi un ordinateur.", en: "There's a desk and a chair. There's also a computer." },
      { speaker: "Anna", jp: "窓はいくつありますか。", kana: "まどはいくつありますか。", fr: "Combien y a-t-il de fenêtres ?", en: "How many windows are there?" },
      { speaker: "Karim", jp: "二つあります。とても明るいです。", kana: "ふたつあります。とてもあかるいです。", fr: "Il y en a deux. C'est très lumineux.", en: "There are two. It's very bright." },
    ],
  },
  "minna-09": {
    scene: "La chambre de Léa, côté style",
    sceneEn: "Léa's room, style-wise",
    lines: [
      { speaker: "Yamada", jp: "新しい部屋はどうですか。", kana: "あたらしいへやはどうですか。", fr: "Comment est ta nouvelle chambre ?", en: "How is your new room?" },
      { speaker: "Léa", jp: "広くて、きれいです。でも、ちょっと静かすぎます。", kana: "ひろくて、きれいです。でも、ちょっとしずかすぎます。", fr: "Grande et propre. Mais un peu trop calme.", en: "Big and clean. But a little too quiet." },
      { speaker: "Yamada", jp: "山の写真がありますね。素敵ですね。", kana: "やまのしゃしんがありますね。すてきですね。", fr: "Il y a une photo de montagne. C'est joli !", en: "There's a photo of a mountain. That's lovely!" },
      { speaker: "Léa", jp: "ありがとう。日本語の言葉も書いてあります。", kana: "ありがとうございます。にほんごのことばもかいてあります。", fr: "Merci. Il y a aussi des mots japonais écrits dessus.", en: "Thanks. There are also Japanese words written on it." },
    ],
  },
  "minna-10": {
    scene: "Chez Sato, on rencontre la famille",
    sceneEn: "At Sato's place, meeting the family",
    lines: [
      { speaker: "Sato", jp: "私の家族です。父と母と妹です。", kana: "わたしのかぞくです。ちちとははといもうとです。", fr: "Voici ma famille : mon père, ma mère et ma petite sœur.", en: "This is my family: my father, my mother, and my little sister." },
      { speaker: "Anna", jp: "お兄さんはいますか。", kana: "おにいさんはいますか。", fr: "Tu as un grand frère ?", en: "Do you have an older brother?" },
      { speaker: "Sato", jp: "はい、大阪にいます。会社員です。", kana: "はい、おおさかにいます。かいしゃいんです。", fr: "Oui, il est à Osaka. Il travaille en entreprise.", en: "Yes, he's in Osaka. He works for a company." },
      { speaker: "Anna", jp: "ご両親はお元気ですか。", kana: "ごりょうしんはおげんきですか。", fr: "Vos parents vont bien ?", en: "Are your parents doing well?" },
      { speaker: "Sato", jp: "はい、元気です。", kana: "はい、げんきです。", fr: "Oui, ils vont bien.", en: "Yes, they're fine." },
    ],
  },
  "minna-11": {
    scene: "Au marché, on compte et on paie",
    sceneEn: "At the market, counting and paying",
    lines: [
      { speaker: "Karim", jp: "このりんごはいくらですか。", kana: "このりんごはいくらですか。", fr: "Ces pommes, elles coûtent combien ?", en: "How much do these apples cost?" },
      { speaker: "Vendeur", jp: "三つで500円です。", kana: "みっつでごひゃくえんです。", fr: "Trois pour 500 yens.", en: "Three for 500 yen." },
      { speaker: "Karim", jp: "じゃ、五つください。", kana: "じゃ、いつつください。", fr: "Alors, cinq s'il vous plaît.", en: "Then I'll take five, please." },
      { speaker: "Vendeur", jp: "800円です。毎週どうも。", kana: "はっぴゃくえんです。まいしゅうどうも。", fr: "Ce sera 800 yens. Merci de votre fidélité hebdomadaire !", en: "That's 800 yen. Thank you for coming every week!" },
    ],
  },
  "minna-12": {
    scene: "Anna raconte son passé",
    sceneEn: "Anna talks about her past",
    lines: [
      { speaker: "Tanaka", jp: "去年、どこへ行きましたか。", kana: "きょねん、どこへいきましたか。", fr: "Où êtes-vous allée l'année dernière ?", en: "Where did you go last year?" },
      { speaker: "Anna", jp: "京都へ行きました。お寺を見ました。", kana: "きょうとへいきました。おてらをみました。", fr: "Je suis allée à Kyoto. J'ai vu des temples.", en: "I went to Kyoto. I saw temples." },
      { speaker: "Tanaka", jp: "何を食べましたか。", kana: "なにをたべましたか。", fr: "Qu'est-ce que vous y avez mangé ?", en: "What did you eat there?" },
      { speaker: "Anna", jp: "お好み焼きを食べました。とてもおいしかったです。", kana: "おこのみやきをたべました。とてもおいしかったです。", fr: "Des okonomiyaki. C'était très bon !", en: "Okonomiyaki. It was delicious!" },
    ],
  },
  "minna-13": {
    scene: "Après les vacances",
    sceneEn: "After the holidays",
    lines: [
      { speaker: "Léa", jp: "夏休みはどうでしたか。", kana: "なつやすみはどうでしたか。", fr: "Comment étaient tes vacances d'été ?", en: "How were your summer holidays?" },
      { speaker: "Karim", jp: "楽しかったです。海へ行きました。", kana: "たのしかったです。うみへいきました。", fr: "C'était génial. Je suis allé à la mer.", en: "It was great. I went to the sea." },
      { speaker: "Léa", jp: "泳ぎましたか。", kana: "およぎましたか。", fr: "Tu as nagé ?", en: "Did you swim?" },
      { speaker: "Karim", jp: "はい。でも、少し疲れました。", kana: "はい。でも、すこしつかれました。", fr: "Oui ! Mais j'étais un peu fatigué après.", en: "Yes! But I was a bit tired afterwards." },
    ],
  },
  "minna-14": {
    scene: "Au téléphone avec l'école",
    sceneEn: "On the phone with the school",
    lines: [
      { speaker: "Secrétaire", jp: "明日10時に来てください。", kana: "あしたじゅうじにきてください。", fr: "Venez demain à 10 h, s'il vous plaît.", en: "Please come tomorrow at 10." },
      { speaker: "Anna", jp: "10時ですか。分かりました。", kana: "じゅうじですか。わかりました。", fr: "À 10 h ? Très bien.", en: "At 10? Understood." },
      { speaker: "Secrétaire", jp: "名前と住所を教えてください。", kana: "なまえとじゅうしょをおしえてください。", fr: "Donnez-moi votre nom et votre adresse, s'il vous plaît.", en: "Please tell me your name and address." },
      { speaker: "Anna", jp: "アンナ・デュポンです。電話番号は090…です。", kana: "アンナ・デュポンです。でんわばんごうはゼロキューゼロ…です。", fr: "Je suis Anna Dupont. Mon numéro est le 090…", en: "I'm Anna Dupont. My number is 090…" },
    ],
  },
  "minna-15": {
    scene: "Une soirée entre amis",
    sceneEn: "An evening among friends",
    lines: [
      { speaker: "Sato", jp: "一緒に歌いませんか。", kana: "いっしょにうたいませんか。", fr: "On chante ensemble ?", en: "Shall we sing together?" },
      { speaker: "Léa", jp: "すみません、歌うことが好きじゃないです。", kana: "すみません、うたうことがすきじゃないです。", fr: "Désolée, je n'aime pas trop chanter.", en: "Sorry, I don't really like singing." },
      { speaker: "Sato", jp: "じゃ、写真を撮りましょう。", kana: "じゃ、しゃしんをとりましょう。", fr: "Alors prenons-nous en photo !", en: "Then let's take a photo!" },
      { speaker: "Léa", jp: "いいですね。ちょっと待ってください。", kana: "いいですね。ちょっとまってください。", fr: "Bonne idée ! Attendez un peu.", en: "Good idea! Wait a moment." },
    ],
  },
  "minna-16": {
    scene: "Dans le train pour Kyoto",
    sceneEn: "On the train to Kyoto",
    lines: [
      { speaker: "Anna", jp: "電車の中で携帯を使わないでください。", kana: "でんしゃのなかでけいたいをつかわないでください。", fr: "Ne pas utiliser son téléphone dans le train.", en: "Please don't use your phone in the train." },
      { speaker: "Karim", jp: "あ、すみません。ここでタバコを吸ってもいいですか。", kana: "あ、すみません。ここでタバコをすってもいいですか。", fr: "Ah pardon. Est-ce que je peux fumer ici ?", en: "Oh, sorry. Is it okay to smoke here?" },
      { speaker: "Anna", jp: "いいえ、吸ってはいけません。", kana: "いいえ、すってはいけません。", fr: "Non, c'est interdit.", en: "No, you mustn't." },
      { speaker: "Karim", jp: "分かりました。気を付けます。", kana: "わかりました。きをつけます。", fr: "Compris, je ferai attention.", en: "Understood, I'll be careful." },
    ],
  },
  "minna-17": {
    scene: "Conseils d'une amie japonaise",
    sceneEn: "Advice from a Japanese friend",
    lines: [
      { speaker: "Sato", jp: "漢字を覚えるのは大変ですか。", kana: "かんじをおぼえるのはたいへんですか。", fr: "Apprendre les kanji, c'est dur ?", en: "Is memorizing kanji hard?" },
      { speaker: "Léa", jp: "はい、難しいです。毎日書いたほうがいいですか。", kana: "はい、むずかしいです。まいにちかいたほうがいいですか。", fr: "Oui, difficile. Mieux vaut en écrire tous les jours ?", en: "Yes, it's difficult. Is it better to write them every day?" },
      { speaker: "Sato", jp: "そうですね。毎朝10分ずつ書くのが一番いいです。", kana: "そうですね。まいあさじっぷんずつかくのがいちばんいいです。", fr: "Exactement. Écrire 10 minutes chaque matin, c'est le mieux.", en: "Exactly. Writing 10 minutes every morning is the best." },
      { speaker: "Léa", jp: "そうします。ありがとうございます。", kana: "そうします。ありがとうございます。", fr: "Je vais faire ça, merci !", en: "I'll do that, thank you!" },
    ],
  },
  "minna-18": {
    scene: "Pendant une pause café",
    sceneEn: "During a coffee break",
    lines: [
      { speaker: "Yamada", jp: "趣味は何ですか。", kana: "しゅみはなんですか。", fr: "Quel est ton passe-temps ?", en: "What's your hobby?" },
      { speaker: "Anna", jp: "趣味は音楽を聞くことです。ギターも弾きます。", kana: "しゅみはおんがくをきくことです。ギターもひきます。", fr: "J'adore écouter de la musique. Je joue aussi de la guitare.", en: "I love listening to music. I also play the guitar." },
      { speaker: "Yamada", jp: "すごいですね。寝る前に練習しますか。", kana: "すごいですね。ねるまえにれんしゅうしますか。", fr: "Impressionnant ! Tu pratiques avant de dormir ?", en: "Impressive! Do you practice before going to bed?" },
      { speaker: "Anna", jp: "はい、でも夜遅くには練習しません（笑）。", kana: "はい、でもよるおそくにはれんしゅうしません（えがお）。", fr: "Oui, mais pas tard le soir (rires).", en: "Yes, but not late at night (laughs)." },
    ],
  },
  "minna-19": {
    scene: "Entretien d'embauche chez Tanaka",
    sceneEn: "Job interview at Tanaka's company",
    lines: [
      { speaker: "Tanaka", jp: "日本語を話することができますか。", kana: "にほんごをはなすことができますか。", fr: "Savez-vous parler japonais ?", en: "Can you speak Japanese?" },
      { speaker: "Karim", jp: "はい、日常会話ならできます。", kana: "はい、にちじょうかいわならできます。", fr: "Oui, pour la conversation courante.", en: "Yes, for everyday conversation." },
      { speaker: "Tanaka", jp: "車を運転することができますか。", kana: "くるまをうんてんすることができますか。", fr: "Savez-vous conduire ?", en: "Can you drive?" },
      { speaker: "Karim", jp: "はい、運転免許があります。", kana: "はい、うんてんめんきょがあります。", fr: "Oui, j'ai le permis.", en: "Yes, I have a driver's license." },
    ],
  },
  "minna-20": {
    scene: "Le week-end de Léa",
    sceneEn: "Léa's weekend",
    lines: [
      { speaker: "Anna", jp: "週末は何をしましたか。", kana: "しゅうまつはなにをしましたか。", fr: "Qu'as-tu fait ce week-end ?", en: "What did you do this weekend?" },
      { speaker: "Léa", jp: "掃除したり、洗濯したりしました。", kana: "そうじしたり、せんたくしたりしました。", fr: "J'ai fait le ménage, la lessive, ce genre de choses.", en: "I cleaned, did laundry, things like that." },
      { speaker: "Anna", jp: "忙しかったですね。", kana: "いそがしかったですね。", fr: "Ça a dû être chargé !", en: "That sounds busy!" },
      { speaker: "Léa", jp: "ええ。でも、紅茶を飲みながら音楽も聞きました。", kana: "ええ。でも、こうちゃをのみながらおんがくもききました。", fr: "Oui… mais j'ai aussi écouté de la musique en buvant du thé.", en: "Yes... but I also listened to music while drinking tea." },
    ],
  },
  "minna-21": {
    scene: "On rapporte les ragots du bureau",
    sceneEn: "Sharing office gossip",
    lines: [
      { speaker: "Yamada", jp: "田中さんは何と言いましたか。", kana: "たなかさんはなんといいましたか。", fr: "Qu'est-ce que M. Tanaka a dit ?", en: "What did Tanaka-san say?" },
      { speaker: "Sato", jp: "明日は会議がないと言いました。", kana: "あしたはかいぎがないといいました。", fr: "Il a dit qu'il n'y avait pas de réunion demain.", en: "He said there's no meeting tomorrow." },
      { speaker: "Yamada", jp: "本当ですか。良かったですね。", kana: "ほんとうですか。よかったですね。", fr: "C'est vrai ? Bonne nouvelle !", en: "Really? That's good news!" },
      { speaker: "Sato", jp: "多分そうです。でも、確認したほうがいいですよ。", kana: "たぶんそうです。でも、かくにんしたほうがいいですよ。", fr: "Probablement. Mais mieux vaut vérifier quand même.", en: "Probably. But you'd better check anyway." },
    ],
  },
  "minna-22": {
    scene: "Projets pour l'année prochaine",
    sceneEn: "Plans for next year",
    lines: [
      { speaker: "Karim", jp: "来年どうするつもりですか。", kana: "らいねんどうするつもりですか。", fr: "Que comptes-tu faire l'année prochaine ?", en: "What do you intend to do next year?" },
      { speaker: "Anna", jp: "日本で働こうと思っています。", kana: "にほんではたらこうとおもっています。", fr: "Je pense travailler au Japon.", en: "I'm thinking of working in Japan." },
      { speaker: "Karim", jp: " JLPTを受ける予定は？", kana: "ジェーエルピーティーをうけるよていは？", fr: "Et tu comptes passer le JLPT ?", en: "Are you planning to take the JLPT?" },
      { speaker: "Anna", jp: "はい、12月に受けようと思っています。", kana: "はい、じゅうにがつにうけようとおもっています。", fr: "Oui, je pense le passer en décembre.", en: "Yes, I'm thinking of taking it in December." },
    ],
  },
  "minna-23": {
    scene: "Un cadeau pour la mère de Sato",
    sceneEn: "A gift for Sato's mother",
    lines: [
      { speaker: "Léa", jp: "これは母にあげるプレゼントです。", kana: "これはははにあげるプレゼントです。", fr: "Voici le cadeau que j'offre à ma mère.", en: "This is the present I'm giving to my mother." },
      { speaker: "Sato", jp: "きれいな花ですね。お母さんは喜びますよ。", kana: "きれいなはなですね。おかあさんはよろこびますよ。", fr: "De belles fleurs ! Ta mère sera ravie.", en: "Beautiful flowers! Your mother will be delighted." },
      { speaker: "Léa", jp: "田中さんにも借りた本を返さなければなりません。", kana: "たなかさんにもかりたほんをかえさなければなりません。", fr: "Je dois aussi rendre le livre qu'il m'a prêté.", en: "I also have to return the book he lent me." },
      { speaker: "Sato", jp: "じゃ、一緒に会社へ持って行きましょう。", kana: "じゃ、いっしょにかいしゃへもっていきましょう。", fr: "Alors apportons-le ensemble au bureau.", en: "Then let's bring it to the office together." },
    ],
  },
  "minna-24": {
    scene: "Anna donne un coup de main",
    sceneEn: "Anna lends a hand",
    lines: [
      { speaker: "Anna", jp: "荷物を持ってあげましょうか。", kana: "にもつをもってあげましょうか。", fr: "Je te porte ton sac ?", en: "Shall I carry your bag for you?" },
      { speaker: "Yamada", jp: "ありがとう。助かります。", kana: "ありがとう。たすかります。", fr: "Merci, ça aide beaucoup.", en: "Thanks, that's a big help." },
      { speaker: "Anna", jp: "先週、課長に資料を見せてもらいました。", kana: "せんしゅう、かちょうにしりょうをみせてもらいました。", fr: "La semaine passée, le chef m'a montré les documents.", en: "Last week, the manager showed me the documents." },
      { speaker: "Yamada", jp: "課長は親切な人ですね。", kana: "かちょうはしんせつなひとですね。", fr: "Le chef est quelqu'un de gentil.", en: "The manager is a kind person." },
    ],
  },
  "minna-25": {
    scene: "Avant le départ pour Kyoto",
    sceneEn: "Before leaving for Kyoto",
    lines: [
      { speaker: "Sato", jp: "雨が降ったら、傘を持って行ってください。", kana: "あめがふったら、かさをもっていってください。", fr: "S'il pleut, prends un parapluie.", en: "If it rains, take an umbrella." },
      { speaker: "Léa", jp: "はい。京都に着いたら、連絡します。", kana: "はい。きょうとについたら、れんらくします。", fr: "D'accord. Dès que j'arrive à Kyoto, je t'envoie un message.", en: "Okay. As soon as I arrive in Kyoto, I'll message you." },
      { speaker: "Sato", jp: "時間があったら、金閣寺へ行ってみてください。", kana: "じかんがあったら、きんかくじへいってみてください。", fr: "Si tu as le temps, va voir le Kinkaku-ji !", en: "If you have time, go see Kinkaku-ji!" },
      { speaker: "Léa", jp: "いいですね。楽しみです！", kana: "いいですね。たのしみです！", fr: "Bonne idée, j'ai hâte !", en: "Good idea, I can't wait!" },
    ],
  },
};

export const MINNA_EXERCISES: Record<string, Exercise[]> = {
  "minna-01": [
    { prompt: "Complétez : « Enchanté, je suis Tanaka » → はじめまして。田中＿＿。", promptEn: "Complete: « Nice to meet you, I'm Tanaka » → はじめまして。田中＿＿。", accept: ["です"], explain: "X です = « je suis X ». La politesse passe par です/ます.", explainEn: "X です = « I am X ». Politeness comes through です/ます." },
    { prompt: "« Ravi de vous connaître » se dit…", promptEn: "« Nice to meet you » is said…", options: ["どうぞよろしくお願いします", "こんにちは", "さようなら"], accept: ["どうぞよろしくおねがいします", "よろしくおねがいします", "どうぞよろしくお願いします"], explain: "よろしくお願いします est LA formule de présentation au Japon.", explainEn: "よろしくお願いします is THE greeting formula when introducing yourself in Japan." },
    { prompt: "« Je viens de France » → フランス＿＿来ました。", promptEn: "« I come from France » → フランス＿＿来ました。", accept: ["から"], explain: "から marque l'origine (« depuis »).", explainEn: "から marks origin (« from »)." },
  ],
  "minna-02": [
    { prompt: "« Qu'est-ce que c'est ? » → それ＿＿何ですか。", promptEn: "« What is that? » → それ＿＿何ですか。", accept: ["は"], explain: "は marque le thème de la phrase.", explainEn: "は marks the topic of the sentence." },
    { prompt: "« C'est mon journal » → それは＿＿新聞です。", promptEn: "« That is my newspaper » → それは＿＿新聞です。", options: ["私の", "あなた", "どの"], accept: ["私の", "わたしの"], explain: "私の = « le mien / mon ».", explainEn: "私の = « mine / my »." },
    { prompt: "Choisissez le mot « dictionnaire » :", promptEn: "Choose the word for « dictionary »:", options: ["じしょ", "しんぶん", "ざっし"], accept: ["じしょ"], explain: "辞書（じしょ）= dictionnaire, 新聞 = journal, 雑誌 = magazine.", explainEn: "辞書（じしょ）= dictionary, 新聞 = newspaper, 雑誌 = magazine." },
  ],
  "minna-03": [
    { prompt: "« Où sont les toilettes ? » → トイレは＿＿ですか。", promptEn: "« Where is the restroom? » → トイレは＿＿ですか。", accept: ["どこ"], explain: "どこ = « où ».", explainEn: "どこ = « where »." },
    { prompt: "« Là-bas » (loin de nous deux) :", promptEn: "« Over there » (far from both of us):", options: ["そこ", "あそこ", "ここ"], accept: ["あそこ"], explain: "ここ (ici) < そこ (près de toi) < あそこ (là-bas).", explainEn: "ここ (here) < そこ (near you) < あそこ (over there)." },
    { prompt: "« À côté de l'ascenseur » → エレベーターの＿＿です。", promptEn: "« Next to the elevator » → エレベーターの＿＿です。", accept: ["となり", "隣"], explain: "A の B = A adjacent à B : X の隣 = à côté de X.", explainEn: "A の B = A adjacent to B: X の隣 = next to X." },
  ],
  "minna-04": [
    { prompt: "« Je me lève à 7 heures » → 7時＿＿起きます。", promptEn: "« I get up at 7 o'clock » → 7時＿＿起きます。", accept: ["に"], explain: "に s'ajoute après un moment précis (heures, jours…).", explainEn: "に is added after a specific time (hours, days…)." },
    { prompt: "Forme négative polie de 働きます :", promptEn: "Polite negative form of 働きます :", options: ["働きません", "働きます", "働いて"], accept: ["はたらきません", "働きません"], explain: "ます → ません pour nier.", explainEn: "ます → ません to negate." },
    { prompt: "« Quelle heure est-il ? » → 今、＿＿ですか。", promptEn: "« What time is it? » → 今、＿＿ですか。", accept: ["なんじ", "何時"], explain: "何時（なんじ）= quelle heure.", explainEn: "何時（なんじ）= what time." },
  ],
  "minna-05": [
    { prompt: "« Je vais à Tokyo » → 東京＿＿行きます。(2 particules possibles)", promptEn: "« I go to Tokyo » → 東京＿＿行きます。(2 possible particles)", accept: ["へ", "に"], explain: "へ (direction) ou に (destination) conviennent tous deux ici.", explainEn: "へ (direction) or に (destination) both work here." },
    { prompt: "« En train » → 電車＿＿行きます。", promptEn: "« By train » → 電車＿＿行きます。", accept: ["で"], explain: "で indique le moyen de transport.", explainEn: "で indicates the means of transportation." },
    { prompt: "« De 9 h à 17 h » → 9時＿＿5時＿＿働きます。", promptEn: "« From 9 a.m. to 5 p.m. » → 9時＿＿5時＿＿働きます。", accept: ["から まで", "からまで"], explain: "から…まで = de…à… (plage horaire ou spatiale).", explainEn: "から…まで = from…to… (time or place range)." },
  ],
  "minna-06": [
    { prompt: "« Je mange des nouilles » → ラーメン＿＿食べます。", promptEn: "« I eat noodles » → ラーメン＿＿食べます。", accept: ["を"], explain: "を marque l'objet direct du verbe.", explainEn: "を marks the direct object of the verb." },
    { prompt: "Invitation : « On boit un verre ? » → 一緒に飲み＿＿か。", promptEn: "Invitation: « Shall we have a drink? » → 一緒に飲み＿＿か。", accept: ["ません"], explain: "V-ませんか = invitation polie.", explainEn: "V-ませんか = polite invitation." },
    { prompt: "Accepter chaleureusement :", promptEn: "To accept enthusiastically:", options: ["いいですね", "高いです", "違います"], accept: ["いいですね"], explain: "いいですね exprime l'accord enthousiaste.", explainEn: "いいですね expresses enthusiastic agreement." },
  ],
  "minna-07": [
    { prompt: "« Envoyer une lettre » → 手紙を＿＿。", promptEn: "« To send a letter » → 手紙を＿＿。", accept: ["おくります", "送ります"], explain: "送る（おくる）= envoyer.", explainEn: "送る（おくる）= to send." },
    { prompt: "« Couper avec des ciseaux » → はさみ＿＿切ります。", promptEn: "« To cut with scissors » → はさみ＿＿切ります。", accept: ["で"], explain: "で marque aussi l'instrument.", explainEn: "で also marks the instrument." },
    { prompt: "Proposition : « Je vous l'envoie ? » → 送り＿＿か。", promptEn: "Offer: « Shall I send it to you? » → 送り＿＿か。", accept: ["ましょう"], explain: "V-ましょうか = proposer son aide.", explainEn: "V-ましょうか = offering help." },
  ],
  "minna-08": [
    { prompt: "« Il y a une table » → テーブル＿＿あります。", promptEn: "« There is a table » → テーブル＿＿あります。", accept: ["が"], explain: "存在 : が marque ce qui existe (avec あります/います).", explainEn: "Existence: が marks what exists (with あります/います)." },
    { prompt: "Pour une personne vivante, on utilise :", promptEn: "For a living person, use:", options: ["あります", "います", "です"], accept: ["います"], explain: "Animé → います ; inanimé → あります.", explainEn: "Animate → います ; inanimate → あります." },
    { prompt: "« Combien ? » (comptage) :", promptEn: "« How many? » (counting):", options: ["いくら", "いくつ", "いつ"], accept: ["いくつ"], explain: "いくつ = combien (nombre), いくら = combien (prix).", explainEn: "いくつ = how many (number), いくら = how much (price)." },
  ],
  "minna-09": [
    { prompt: "Adjectif en い : « cher » devient au passé…", promptEn: "い-adjective: « expensive » in the past…", options: ["高かったです", "高いでした", "高いました"], accept: ["たかかったです", "高かったです"], explain: "Les い font leur passé en -かったです.", explainEn: "い-adjectives form their past in -かったです." },
    { prompt: "Adjectif en な : « célèbre » devant un nom → ＿＿人", promptEn: "な-adjective: « famous » before a noun → ＿＿人", accept: ["ゆうめいな", "有名な"], explain: "Devant un nom, les な prennent な : 有名な人.", explainEn: "Before a noun, な-adjectives take な : 有名な人." },
    { prompt: "« Pas très calme » → 静か＿＿ありません。", promptEn: "« Not very quiet » → 静か＿＿ありません。", accept: ["じゃ"], explain: "Négation douce : じゃ (+ あまり) ありません.", explainEn: "Soft negation: じゃ (+ あまり) ありません." },
  ],
  "minna-10": [
    { prompt: "« Ma famille » (mot humble) :", promptEn: "« My family » (humble word):", options: ["ご家族", "家族", "お家族"], accept: ["かぞく", "家族"], explain: "Sa propre famille : 家族, sans honorifique ; ご家族 pour celle des autres.", explainEn: "One's own family: 家族, without honorifics; ご家族 for someone else's." },
    { prompt: "« Mon père » (humble) :", promptEn: "« My father » (humble):", options: ["お父さん", "父", "親父"], accept: ["ちち", "父"], explain: "父 (chichi) pour le sien, お父さん pour celui des autres.", explainEn: "父 (chichi) for one's own, お父さん for someone else's." },
    { prompt: "« Il y a quatre personnes » → 四人＿＿います。", promptEn: "« There are four people » → 四人＿＿います。", accept: ["が"], explain: "Encore la particule d'existence : が + います.", explainEn: "Again the existence particle: が + います." },
  ],
  "minna-11": [
    { prompt: "« Combien ça coûte ? » → ＿＿ですか。", promptEn: "« How much does it cost? » → ＿＿ですか。", accept: ["いくら"], explain: "いくら = quel prix.", explainEn: "いくら = what price." },
    { prompt: "10 000 yens s'écrit…", promptEn: "10,000 yen is written…", options: ["千円", "万円", "十万円"], accept: ["一万えん", "1万円", "一万円", "まんえん"], explain: "Le japonais compte par dizaines de milliers : 万 = 10 000.", explainEn: "Japanese counts in ten thousands: 万 = 10,000." },
    { prompt: "« Donnez-moi trois pommes » → りんごを三つ＿＿。", promptEn: "« Give me three apples » → りんごを三つ＿＿。", accept: ["ください"], explain: "〜をください pour commander/demander.", explainEn: "〜をください to order/ask for something." },
  ],
  "minna-12": [
    { prompt: "Passé de 行きます :", promptEn: "Past of 行きます :", options: ["行ったです", "行きました", "行くでした"], accept: ["いきました", "行きました"], explain: "ます → ました au passé poli.", explainEn: "ます → ました in the polite past." },
    { prompt: "Passé de です :", promptEn: "Past of です :", options: ["でした", "だったです", "でしたか"], accept: ["でした"], explain: "です → でした.", explainEn: "です → でした." },
    { prompt: "Passé de おいしいです :", promptEn: "Past of おいしいです :", options: ["おいしいでした", "おいしかったです", "おいしくでした"], accept: ["おいしかったです"], explain: "Adjectif en い : supprimer い et ajouter かったです.", explainEn: "い-adjective: drop い and add かったです." },
  ],
  "minna-13": [
    { prompt: "Passé négatif : « Ce n'était pas amusant » → 楽しくないです → …", promptEn: "Negative past: « It wasn't fun » → 楽しくないです → …", options: ["楽しくなかったです", "楽しくないでした", "楽しくありました"], accept: ["たのしくなかったです", "楽しくなかったです"], explain: "ない → なかった au passé.", explainEn: "ない → なかった in the past." },
    { prompt: "Comparaison : « Le shinkansen est plus rapide » → 新幹線のほうが＿＿。", promptEn: "Comparison: « The shinkansen is faster » → 新幹線のほうが＿＿。", accept: ["はやい", "速い", "早い"], explain: "A のほうが B より (adjectif) : A est plus … que B.", explainEn: "A のほうが B より (adjective): A is more … than B." },
    { prompt: "« Lequel est le plus rapide ? » → ＿＿が一番速いですか。", promptEn: "« Which is the fastest? » → ＿＿が一番速いですか。", accept: ["どれ"], explain: "どれ + が + 一番 = superlatif interrogatif.", explainEn: "どれ + が + 一番 = interrogative superlative." },
  ],
  "minna-14": [
    { prompt: "« Comptez de l'argent » → お金を数えます。Forme en て ?", promptEn: "« Count money » → お金を数えます。て-form?", options: ["数えて", "数って", "数ちて"], accept: ["かぞえて", "数えて"], explain: "数えます → 数えて (groupe 2 : -ます → -て).", explainEn: "数えます → 数えて (group 2: -ます → -て)." },
    { prompt: "« Attendez un instant, s'il vous plaît » → 少し待って＿＿。", promptEn: "« Please wait a moment » → 少し待って＿＿。", accept: ["ください"], explain: "V-てください = requête polie.", explainEn: "V-てください = polite request." },
    { prompt: "« Pardon » (s'excuser) :", promptEn: "« Excuse me » (apologizing):", options: ["ありがとう", "すみません", "おはよう"], accept: ["すみません"], explain: "すみません sert aussi d'excuse et d'appel poli.", explainEn: "すみません also serves as an apology and a polite way to get attention." },
  ],
  "minna-15": [
    { prompt: "Forme en て de 見ます :", promptEn: "て-form of 見ます :", options: ["見って", "見て", "見いで"], accept: ["みて", "見て"], explain: "Groupe 2 régulier : -ます → -て.", explainEn: "Regular group 2: -ます → -て." },
    { prompt: "« Ne photographiez pas ici » → ここで写真を撮らない＿＿ください。", promptEn: "« Don't take pictures here » → ここで写真を撮らない＿＿ください。", accept: ["で"], explain: "V-naï + でください = interdiction polie.", explainEn: "V-naï + でください = polite prohibition." },
    { prompt: "Forme en て de 書きます :", promptEn: "て-form of 書きます :", options: ["書いて", "書きて", "書いてる"], accept: ["かいて", "書いて"], explain: "き→いて pour les verbes en -きます.", explainEn: "き→いて for verbs ending in -きます." },
  ],
  "minna-16": [
    { prompt: "« Je peux m'asseoir ici ? » → 座って＿＿いいですか。", promptEn: "« Can I sit here? » → 座って＿＿いいですか。", accept: ["も"], explain: "V-てもいいですか = demander la permission.", explainEn: "V-てもいいですか = asking permission." },
    { prompt: "« Interdit de fumer » → 吸っては＿＿。", promptEn: "« Smoking forbidden » → 吸っては＿＿。", accept: ["いけません", "だめです"], explain: "V-てはいけません = défense formelle.", explainEn: "V-てはいけません = formal prohibition." },
    { prompt: "Forme en て de 来ます :", promptEn: "て-form of 来ます :", options: ["きて", "来って", "くて"], accept: ["きて", "来て"], explain: "来ます → 来て（きて）— irrégulier mais très courant.", explainEn: "来ます → 来て（きて）— irregular but very common." },
  ],
  "minna-17": [
    { prompt: "« Mieux vaut étudier » → 勉強した＿＿がいいです。", promptEn: "« It's better to study » → 勉強した＿＿がいいです。", accept: ["ほう"], explain: "V-passé + ほうがいい = conseil fort.", explainEn: "V-past + ほうがいい = strong advice." },
    { prompt: "« Il faut porter la ceinture » → ベルトをしなければ＿＿。", promptEn: "« I must wear the seatbelt » → ベルトをしなければ＿＿。", accept: ["なりません"], explain: "V-naï + なければなりません = obligation.", explainEn: "V-naï + なければなりません = obligation." },
    { prompt: "« Je dois y aller » → 行かなきゃ＿＿。(familier)", promptEn: "« I have to go » → 行かなきゃ＿＿。(colloquial)", accept: ["いけません", "だめです"], explain: "行かなきゃ + いけません/だめです : registre familier de l'obligation.", explainEn: "行かなきゃ + いけません/だめです : colloquial register of obligation." },
  ],
  "minna-18": [
    { prompt: "« Mon hobby est lire » → 趣味は本を読む＿＿です。", promptEn: "« My hobby is reading » → 趣味は本を読む＿＿です。", accept: ["こと"], explain: "こと nominalise le verbe : « le fait de lire ».", explainEn: "こと nominalizes the verb: « the act of reading »." },
    { prompt: "« Avant de dormir » → 寝る＿＿に本を読みます。", promptEn: "« Before sleeping » → 寝る＿＿に本を読みます。", accept: ["まえ", "前"], explain: "Forme du dictionnaire + 前（に）= avant de…", explainEn: "Dictionary form + 前（に）= before…" },
    { prompt: "Forme du dictionnaire de 食べます :", promptEn: "Dictionary form of 食べます :", options: ["食べる", "食べて", "食べた"], accept: ["たべる", "食べる"], explain: "-ます → -る pour le groupe 2.", explainEn: "-ます → -る for group 2." },
  ],
  "minna-19": [
    { prompt: "« Je peux nager » → 泳ぐ＿＿ができます。", promptEn: "« I can swim » → 泳ぐ＿＿ができます。", accept: ["こと"], explain: "Forme du dictionnaire + ことができます.", explainEn: "Dictionary form + ことができます." },
    { prompt: "Version courte potentielle de « je peux lire » : 読む → ", promptEn: "Short potential form of « I can read »: 読む → ", accept: ["よめます", "読めます"], explain: "読む → 読める → 読めます (forme potentielle).", explainEn: "読む → 読める → 読めます (potential form)." },
    { prompt: "« Avant de partir » (2e façon) → 出かける＿＿に確認します。", promptEn: "« Before leaving » (2nd way) → 出かける＿＿に確認します。", accept: ["まえ", "前"], explain: "前 s'attache à la forme du dictionnaire.", explainEn: "前 attaches to the dictionary form." },
  ],
  "minna-20": [
    { prompt: "« Je lis, je regarde des films, etc. » → 本を読んだり映画を見たり＿＿。", promptEn: "« I read books, watch movies, etc. » → 本を読んだり映画を見たり＿＿。", accept: ["します"], explain: "V-たり V-たり します énumère des activités.", explainEn: "V-たり V-たり します lists activities." },
    { prompt: "« J'aime cuisiner » → 料理を作る＿＿が好きです。", promptEn: "« I like cooking » → 料理を作る＿＿が好きです。", accept: ["のが", "こと"], explain: "の (ou こと) transforme le verbe en nom sujet.", explainEn: "の (or こと) turns the verb into a subject noun." },
    { prompt: "Forme た (passé court) de 飲みます :", promptEn: "た-form (short past) of 飲みます :", options: ["飲んだ", "飲いた", "飲みた"], accept: ["のんだ", "飲んだ"], explain: "み→んだ : même alternance que la forme て.", explainEn: "み→んだ : same sound change as the て-form." },
  ],
  "minna-21": [
    { prompt: "« Je pense qu'il viendra » → 来る＿＿思います。", promptEn: "« I think he will come » → 来る＿＿思います。", accept: ["と"], explain: "と cite le contenu d'une pensée/parole.", explainEn: "と quotes the content of a thought/statement." },
    { prompt: "Humble : « Je suis Dupont » → デュポン＿＿申します。", promptEn: "Humble: « I am Dupont » → デュポン＿＿申します。", accept: ["と"], explain: "Nom + と申します : présentation humble.", explainEn: "Name + と申します : humble self-introduction." },
    { prompt: "« Il a dit qu'il pleuvrait » → 雨が降ると＿＿。", promptEn: "« He said it would rain » → 雨が降ると＿＿。", accept: ["言いました", "いいました"], explain: "Phrase + と言いました : discours rapporté.", explainEn: "Sentence + と言いました : reported speech." },
  ],
  "minna-22": [
    { prompt: "« Je compte voyager » → 旅行し＿＿と思っています。", promptEn: "« I plan to travel » → 旅行し＿＿と思っています。", accept: ["よう"], explain: "Volition + と思っています : intention durable.", explainEn: "Volitional + と思っています : lasting intention." },
    { prompt: "« J'ai prévu de rentrer à 6 h » → 6時に帰る＿＿です。", promptEn: "« I plan to go home at 6 » → 6時に帰る＿＿です。", accept: ["よてい", "予定"], explain: "V + 予定（よてい）です : plan arrêté.", explainEn: "V + 予定（よてい）です : settled plan." },
    { prompt: "Forme volitive de 食べます :", promptEn: "Volitional form of 食べます :", options: ["食べよう", "食べますよう", "食べたい"], accept: ["たべよう", "食べよう"], explain: "Groupe 2 : -ます → -よう (食べよう).", explainEn: "Group 2: -ます → -よう (食べよう)." },
  ],
  "minna-23": [
    { prompt: "« Je dois finir » → 終えなければ＿＿。(forme courte familière)", promptEn: "« I have to finish » → 終えなければ＿＿。(short colloquial form)", accept: ["いけません", "ならない", "だめ"], explain: "なければ + いけません/ならない (ou なきゃ en ultra-court).", explainEn: "なければ + いけません/ならない (or なきゃ in an ultra-short form)." },
    { prompt: "« Je lui ai prêté » → 彼に本を貸し＿＿。", promptEn: "« I lent him a book » → 彼に本を貸し＿＿。", accept: ["ました"], explain: "貸します = prêter (à quelqu'un : に).", explainEn: "貸します = to lend (to someone: に)." },
    { prompt: "« Recevoir/prêter de qqn » → 友達＿＿お金を借りました。", promptEn: "« To borrow from someone » → 友達＿＿お金を借りました。", accept: ["に", "から"], explain: "Emprunter : に ou から marquent la source.", explainEn: "To borrow: に or から mark the source." },
  ],
  "minna-24": [
    { prompt: "« Je lui porte son sac (lui rendre service) » → 持って＿＿。", promptEn: "« I carry his bag for him (doing a favor) » → 持って＿＿。", accept: ["あげます", "あげる"], explain: "V-てあげる : service vers un égal/inférieur.", explainEn: "V-てあげる : a favor done for an equal/inferior." },
    { prompt: "« On me prête » (bénéfice reçu) → 貸して＿＿。", promptEn: "« Someone lends me » (received favor) → 貸して＿＿。", accept: ["もらいます", "もらう"], explain: "V-てもらう : recevoir un service.", explainEn: "V-てもらう : to receive a favor." },
    { prompt: "« Merci de me l'avoir montré » → 見せてくれて、＿＿。", promptEn: "« Thank you for showing it to me » → 見せてくれて、＿＿。", accept: ["ありがとうございます", "ありがとう"], explain: "V-てくれてありがとうございます remercie un service reçu.", explainEn: "V-てくれてありがとうございます thanks someone for a received favor." },
  ],
  "minna-25": [
    { prompt: "« S'il pleut » → 雨が降っ＿＿、出かけません。", promptEn: "« If it rains » → 雨が降っ＿＿、出かけません。", accept: ["たら"], explain: "Forme passée + ら : hypothèse.", explainEn: "Past form + ら : hypothesis." },
    { prompt: "« Dès que j'arrive, je t'appelle » → 着いた＿＿電話します。", promptEn: "« As soon as I arrive, I'll call you » → 着いた＿＿電話します。", accept: ["ら"], explain: "たら exprime aussi la succession immédiate.", explainEn: "たら also expresses immediate sequence." },
    { prompt: "« Si j'ai le temps » → 時間が＿＿たら、行きます。", promptEn: "« If I have time » → 時間が＿＿たら、行きます。", accept: ["あっ"], explain: "ある → あった → あったら (irrégulier régulier !).", explainEn: "ある → あった → あったら (regular irregularity!)." },
  ],
};