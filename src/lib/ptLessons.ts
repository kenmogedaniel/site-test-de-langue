import type { LanguageCourse } from "./genericLessons";

export const PT_COURSE: LanguageCourse = {
  code: "pt",
  name: "Portugais",
  native: "Português",
  heroTitle1: { fr: "Aprende", en: "Learn" },
  heroTitle2: { fr: "le portugais", en: "Portuguese" },
  heroSubtitle: {
    fr: "Un parcours débutant en douze leçons : salutations, routine, travail, achats et entretien d'embauche — portugais européen.",
    en: "A beginner path in twelve lessons: greetings, daily routine, work, shopping and a job interview — European Portuguese.",
  },
  lessons: [
    {
      number: 1,
      slug: "pt-01",
      title: "Se présenter et saluer",
      titleEn: "Introducing yourself and greetings",
      summary:
        "Les salutations du matin au soir et les premiers mots pour te présenter : chamo-me, venho de.",
      summaryEn:
        "Greetings from morning to night and the first words to introduce yourself: chamo-me, venho de.",
      grammar: [
        "Salutations formelles et informelles (bom dia, boa tarde, olá)",
        "Présent du verbe pronominal chamar-se",
        "La préposition de : venho de + nom de ville ou de pays",
      ],
      explanation:
        "Au Portugal, on dit « bom dia » le matin, « boa tarde » l'après-midi et « boa noite » le soir ou la nuit ; « olá » est un bonjour familier à toute heure. Pour te présenter, utilise le verbe « chamar-se » : « chamo-me Ana » (littéralement « je m'appelle »). Pour indiquer ta provenance, tu emploies « venho de » suivi du lieu : « venho de Lisboa », « venho de França ».",
      explanationEn:
        "In Portugal you say « bom dia » in the morning, « boa tarde » in the afternoon and « boa noite » in the evening or at night; « olá » is a friendly hello at any time. To introduce yourself, use the verb « chamar-se »: « chamo-me Ana » (literally “I call myself”). To say where you come from, use « venho de » followed by the place: « venho de Lisboa », « venho de França ».",
      examples: [
        {
          target: "Olá, bom dia! Chamo-me Ana.",
          fr: "Bonjour ! Je m'appelle Ana.",
          en: "Hello, good morning! My name is Ana.",
        },
        {
          target: "Boa tarde, chamo-me Pedro.",
          fr: "Bonjour, je m'appelle Pedro. (l'après-midi)",
          en: "Good afternoon, my name is Pedro.",
        },
        {
          target: "Venho de Lisboa.",
          fr: "Je viens de Lisbonne.",
          en: "I come from Lisbon.",
        },
        {
          target: "Muito prazer! Até amanhã!",
          fr: "Enchanté ! À demain !",
          en: "Nice to meet you! See you tomorrow!",
        },
      ],
      vocab: [
        { target: "olá", fr: "salut, bonjour (familier)", en: "hello" },
        { target: "bom dia", fr: "bonjour (le matin)", en: "good morning" },
        { target: "boa tarde", fr: "bonsoir, bonjour (l'après-midi)", en: "good afternoon" },
        { target: "boa noite", fr: "bonne nuit, bonsoir", en: "good night" },
        { target: "chamo-me", fr: "je m'appelle", en: "my name is" },
        { target: "prazer", fr: "plaisir, enchanté", en: "pleasure, nice to meet you" },
        { target: "desculpe", fr: "excusez-moi, pardon", en: "excuse me, sorry" },
        { target: "até amanhã", fr: "à demain", en: "see you tomorrow" },
      ],
      exercises: [
        {
          prompt: "Comment dit-on « bonjour » le matin au Portugal ?",
          promptEn: "How do you say “good morning” in Portugal?",
          options: ["Bom dia", "Boa noite", "Até logo"],
          accept: ["Bom dia", "bom dia", "bomdia"],
          explain:
            "« Bom dia » signifie « bonjour » le matin ; « boa noite » et « até logo » (à bientôt) ne conviennent pas ici.",
          explainEn:
            "« Bom dia » means “good morning”; « boa noite » and « até logo » (see you soon) are not suitable here.",
        },
        {
          prompt: "Quelle phrase signifie « je m'appelle » ?",
          promptEn: "Which phrase means “my name is”?",
          options: ["Chamo-me", "Chama-se", "Chamas-te"],
          accept: ["Chamo-me", "chamo-me"],
          explain:
            "« Chamo-me » est la forme du verbe « chamar-se » avec « eu » : je m'appelle.",
          explainEn:
            "« Chamo-me » is the form of the verb « chamar-se » with “eu”: my name is.",
        },
        {
          prompt: "Complète : « Je viens de France. » → « _____ de França. »",
          promptEn: "Complete: “I come from France.” → « _____ de França. »",
          accept: ["Venho de França", "venho de França", "Eu venho de França", "Venho de Franca"],
          explain:
            "« Venho » est la 1re personne du singulier de « vir » (venir) : « venho de França ».",
          explainEn:
            "« Venho » is the first person singular of « vir » (to come): “I come from France”.",
        },
      ],
      interview: [
        {
          question: "Apresenta-te: quem és e de onde vens?",
          fr: "Présente-toi : qui es-tu et d'où viens-tu ?",
          en: "Introduce yourself: who are you and where are you from?",
          modelFr: "Je m'appelle Daniel et je viens de France. Je vis à Paris.",
          modelEn: "My name is Daniel and I come from France. I live in Paris.",
          accept: ["Chamo-me", "chamo-me", "Eu chamo-me", "O meu nome é", "o meu nome é"],
        },
      ],
    },
    {
      number: 2,
      slug: "pt-02",
      title: "Origine, nationalité et profession",
      titleEn: "Origin, nationality and profession",
      summary:
        "Le verbe « ser », les nationalités et les métiers : sou francês, moro em Lisboa, sou médico.",
      summaryEn:
        "The verb “ser”, nationalities and jobs: sou francês, moro em Lisboa, sou médico.",
      grammar: [
        "Le présent du verbe ser (sou, és, é...)",
        "Les nationalités et l'accord du genre (francês / francesa)",
        "Les verbes morar et trabalhar avec les prépositions em / de",
      ],
      explanation:
        "Le verbe « ser » exprime l'identité, la nationalité et la profession : « sou francês », « é engenheiro ». Les nationalités s'accordent en genre : o francês, a francesa. Pour dire où l'on habite, on utilise « morar em » (moro em Lisboa) et pour l'origine « ser de » (sou de França).",
      explanationEn:
        "The verb “ser” expresses identity, nationality and profession: “sou francês”, “é engenheiro”. Nationalities agree in gender: o francês, a francesa. To say where you live use “morar em” (moro em Lisboa) and for origin “ser de” (sou de França).",
      examples: [
        {
          target: "Sou de França e moro em Lisboa.",
          fr: "Je viens de France et j'habite à Lisbonne.",
          en: "I am from France and I live in Lisbon.",
        },
        {
          target: "Ela é francesa e é médica.",
          fr: "Elle est française et elle est médecin.",
          en: "She is French and she is a doctor.",
        },
        {
          target: "Ele é engenheiro numa grande empresa.",
          fr: "Il est ingénieur dans une grande entreprise.",
          en: "He is an engineer at a big company.",
        },
        {
          target: "Nós somos portugueses.",
          fr: "Nous sommes portugais.",
          en: "We are Portuguese.",
        },
      ],
      vocab: [
        { target: "sou", fr: "je suis", en: "I am" },
        { target: "moro em", fr: "j'habite à", en: "I live in" },
        { target: "francês / francesa", fr: "français / française", en: "French (man / woman)" },
        { target: "o país", fr: "le pays", en: "the country" },
        { target: "a nacionalidade", fr: "la nationalité", en: "the nationality" },
        { target: "o médico", fr: "le médecin", en: "the doctor" },
        { target: "a enfermeira", fr: "l'infirmière", en: "the nurse" },
        { target: "o engenheiro", fr: "l'ingénieur", en: "the engineer" },
      ],
      exercises: [
        {
          prompt: "« Je suis de France » se dit...",
          promptEn: "“I am from France” is...",
          options: ["Sou de França", "Sou francês", "Moro em França"],
          accept: ["Sou de França", "sou de França", "Eu sou de França"],
          explain:
            "« Sou de + pays » indique l'origine. « Sou francês » indique la nationalité et « moro em França » le lieu de résidence.",
          explainEn:
            "“Sou de + country” states origin. “Sou francês” states nationality and “moro em França” the place of residence.",
        },
        {
          prompt: "Quelle est la forme correcte pour une femme ?",
          promptEn: "What is the correct form for a woman?",
          options: ["francêsa", "francesa", "francês"],
          accept: ["francesa"],
          explain:
            "Au féminin, « francês » devient « francesa » ; l'accent disparaît.",
          explainEn:
            "In the feminine, “francês” becomes “francesa”; the accent disappears.",
        },
        {
          prompt: "Complète : « Nous sommes portugais. » → « Nós _____ portugueses. »",
          promptEn: "Complete: “We are Portuguese.” → « Nós _____ portugueses. »",
          accept: ["somos", "Somos"],
          explain:
            "« Nós somos » est la 1re personne du pluriel de « ser » (nous sommes).",
          explainEn:
            "“Nós somos” is the first person plural of “ser” (we are).",
        },
      ],
    },
    {
      number: 3,
      slug: "pt-03",
      title: "Ser, estar et ter : être et avoir",
      titleEn: "Ser, estar and ter: to be and to have",
      summary:
        "Les deux verbes « être » en portugais, ser et estar, et le verbe « ter » pour l'âge et les états.",
      summaryEn:
        "The two “to be” verbs in Portuguese, ser and estar, and the verb “ter” for age and states.",
      grammar: [
        "Ser : identité, origine, profession (permanent)",
        "Estar : état, émotion, localisation (temporaire)",
        "Ter : l'âge, la faim, la soif (tenho 28 anos)",
      ],
      explanation:
        "Le portugais possède deux verbes « être ». « Ser » exprime ce qui est durable : « sou de Portugal », « é médico ». « Estar » exprime un état passager : « estou cansado », « estou em casa ». Le verbe « ter » (avoir) sert aussi à dire l'âge et les sensations : « tenho 28 anos », « tenho fome ».",
      explanationEn:
        "Portuguese has two “to be” verbs. “Ser” expresses what is permanent: “sou de Portugal”, “é médico”. “Estar” expresses a temporary state: “estou cansado”, “estou em casa”. The verb “ter” (to have) is also used for age and sensations: “tenho 28 anos”, “tenho fome”.",
      examples: [
        {
          target: "Eu sou de Portugal.",
          fr: "Je suis du Portugal.",
          en: "I am from Portugal.",
        },
        {
          target: "Estou cansado hoje.",
          fr: "Je suis fatigué aujourd'hui.",
          en: "I am tired today.",
        },
        {
          target: "Tenho 28 anos.",
          fr: "J'ai 28 ans.",
          en: "I am 28 years old.",
        },
        {
          target: "Os clientes têm razão.",
          fr: "Les clients ont raison.",
          en: "The customers are right.",
        },
      ],
      vocab: [
        { target: "ser", fr: "être (permanent)", en: "to be (permanent)" },
        { target: "estar", fr: "être (état, lieu)", en: "to be (state, place)" },
        { target: "ter", fr: "avoir", en: "to have" },
        { target: "cansado", fr: "fatigué", en: "tired" },
        { target: "ocupado", fr: "occupé", en: "busy" },
        { target: "a idade", fr: "l'âge", en: "the age" },
        { target: "a fome", fr: "la faim", en: "hunger" },
        { target: "a sede", fr: "la soif", en: "thirst" },
      ],
      exercises: [
        {
          prompt: "Quel verbe utilise-t-on pour dire « j'ai 28 ans » ?",
          promptEn: "Which verb do you use to say “I am 28 years old”?",
          options: ["Ter", "Ser", "Estar"],
          accept: ["Ter", "ter"],
          explain:
            "L'âge se dit avec « ter » : « tenho 28 anos » = j'ai 28 ans.",
          explainEn:
            "Age is expressed with “ter”: “tenho 28 anos” = I have 28 years.",
        },
        {
          prompt: "Quel verbe convient pour un état temporaire ?",
          promptEn: "Which verb fits a temporary state?",
          options: ["Estar", "Ser", "Ter"],
          accept: ["Estar", "estar"],
          explain:
            "« Estar » exprime l'état passager : estou cansado, estou doente.",
          explainEn:
            "“Estar” expresses a temporary state: estou cansado, estou doente.",
        },
        {
          prompt: "Complète : « J'ai soif. » → « Tenho _____ . »",
          promptEn: "Complete: “I am thirsty.” → « Tenho _____ . »",
          accept: ["sede", "Sede"],
          explain:
            "« Tenho sede » = j'ai soif ; « ter sede » est l'expression correcte.",
          explainEn:
            "“Tenho sede” = I am thirsty; “ter sede” is the correct expression.",
        },
      ],
    },
    {
      number: 4,
      slug: "pt-04",
      title: "La routine quotidienne",
      titleEn: "The daily routine",
      summary:
        "Les verbes pronominaux et l'heure : levanto-me às sete, tomo o pequeno-almoço, trabalho.",
      summaryEn:
        "Reflexive verbs and the time: levanto-me às sete, tomo o pequeno-almoço, trabalho.",
      grammar: [
        "Les verbes pronominaux (levantar-se, deitar-se)",
        "L'heure et les moments de la journée (às sete horas)",
        "La fréquence : sempre, às vezes, nunca",
      ],
      explanation:
        "La routine utilise beaucoup de verbes pronominaux, avec le pronom placé après le verbe : « levanto-me », « deito-me ». Pour dire l'heure d'une action, on emploie « às » : « levanto-me às sete horas ». Les adverbes de fréquence « sempre » (toujours), « às vezes » (parfois) et « nunca » (jamais) se placent après le verbe.",
      explanationEn:
        "Daily routine uses many reflexive verbs, with the pronoun placed after the verb: “levanto-me”, “deito-me”. To say the time of an action use “às”: “levanto-me às sete horas”. The frequency adverbs “sempre” (always), “às vezes” (sometimes) and “nunca” (never) come after the verb.",
      examples: [
        {
          target: "Levanto-me às sete horas.",
          fr: "Je me lève à sept heures.",
          en: "I get up at seven o'clock.",
        },
        {
          target: "Tomo o pequeno-almoço às oito.",
          fr: "Je prends mon petit-déjeuner à huit heures.",
          en: "I have breakfast at eight.",
        },
        {
          target: "Trabalho das nove às cinco.",
          fr: "Je travaille de neuf heures à dix-sept heures.",
          en: "I work from nine to five.",
        },
        {
          target: "Nunca chego atrasado.",
          fr: "Je n'arrive jamais en retard.",
          en: "I am never late.",
        },
      ],
      vocab: [
        { target: "levantar-se", fr: "se lever", en: "to get up" },
        { target: "o pequeno-almoço", fr: "le petit-déjeuner", en: "breakfast" },
        { target: "almoçar", fr: "déjeuner", en: "to have lunch" },
        { target: "trabalhar", fr: "travailler", en: "to work" },
        { target: "chegar", fr: "arriver", en: "to arrive" },
        { target: "deitar-se", fr: "se coucher", en: "to go to bed" },
        { target: "às vezes", fr: "parfois", en: "sometimes" },
        { target: "sempre", fr: "toujours", en: "always" },
      ],
      exercises: [
        {
          prompt: "Comment dit-on « je me lève » ?",
          promptEn: "How do you say “I get up”?",
          options: ["Levanto-me", "Levanto", "Levanta-me"],
          accept: ["Levanto-me", "levanto-me", "Eu levanto-me"],
          explain:
            "Le verbe pronominal « levantar-se » avec « eu » donne « levanto-me ».",
          explainEn:
            "The reflexive verb “levantar-se” with “eu” gives “levanto-me”.",
        },
        {
          prompt: "« Je travaille de 9 h à 17 h » se dit...",
          promptEn: "“I work from 9 to 5” is...",
          options: ["Trabalho das nove às cinco", "Trabalho à nove para cinco", "Trabalho de nove a cinco horas"],
          accept: ["Trabalho das nove às cinco", "trabalho das nove às cinco", "das nove às cinco"],
          explain:
            "« Das nove às cinco » = de (heure) à (heure) ; « das... às... » est la forme correcte.",
          explainEn:
            "“Das nove às cinco” = from (time) to (time); “das... às...” is the correct form.",
        },
        {
          prompt: "Complète : « Va te coucher. » → « _____ cedo. » (deitar-se, présent)",
          promptEn: "Complete: “I go to bed early.” → « _____ cedo. » (deitar-se, present)",
          accept: ["Deito-me", "deito-me", "Eu deito-me"],
          explain:
            "« Eu deito-me » : le pronom « me » suit le verbe conjugué « deito ».",
          explainEn:
            "“Eu deito-me”: the pronoun “me” follows the conjugated verb “deito”.",
        },
      ],
    },
    {
      number: 5,
      slug: "pt-05",
      title: "Les goûts et les loisirs",
      titleEn: "Likes and hobbies",
      summary:
        "Exprimer tes goûts avec gosto de, adoro et detestar, et parler de tes loisirs favoris.",
      summaryEn:
        "Express your tastes with gosto de, adoro and detestar, and talk about your favorite hobbies.",
      grammar: [
        "gostar de + infinitif (gosto de ler)",
        "adorar / detestar pour exprimer l'intensité",
        "Les adverbes muito et pouco",
      ],
      explanation:
        "Pour parler de tes goûts, utilise « gostar de » suivi d'un infinitif : « gosto de ler ». « Adoro » traduit un fort plaisir et « detesto » un fort déplaisir. Tu peux moduler avec « muito » (beaucoup) et « pouco » (peu). Le verbe « gostar » exige toujours la préposition « de ».",
      explanationEn:
        "To talk about your tastes use “gostar de” followed by an infinitive: “gosto de ler”. “Adoro” expresses great pleasure and “detesto” great dislike. You can modulate with “muito” (a lot) and “pouco” (a little). The verb “gostar” always requires the preposition “de”.",
      examples: [
        {
          target: "Gosto de ler livros.",
          fr: "J'aime lire des livres.",
          en: "I like reading books.",
        },
        {
          target: "Adoro viajar.",
          fr: "J'adore voyager.",
          en: "I love traveling.",
        },
        {
          target: "Não gosto de acordar cedo.",
          fr: "Je n'aime pas me réveiller tôt.",
          en: "I don't like waking up early.",
        },
        {
          target: "O meu passatempo favorito é a fotografia.",
          fr: "Mon passe-temps favori est la photographie.",
          en: "My favorite hobby is photography.",
        },
      ],
      vocab: [
        { target: "gostar de", fr: "aimer, apprécier", en: "to like" },
        { target: "adorar", fr: "adorer", en: "to love" },
        { target: "detestar", fr: "détester", en: "to hate" },
        { target: "o passatempo", fr: "le passe-temps, le hobby", en: "the hobby" },
        { target: "a música", fr: "la musique", en: "music" },
        { target: "o desporto", fr: "le sport", en: "sport" },
        { target: "a leitura", fr: "la lecture", en: "reading" },
        { target: "viajar", fr: "voyager", en: "to travel" },
      ],
      exercises: [
        {
          prompt: "Quelle phrase signifie « j'adore voyager » ?",
          promptEn: "Which phrase means “I love traveling”?",
          options: ["Adoro viajar", "Gosto de viajar", "Não viajo"],
          accept: ["Adoro viajar", "adoro viajar", "Eu adoro viajar"],
          explain:
            "« Adoro » exprime un plaisir très fort ; « gosto de » est plus neutre.",
          explainEn:
            "“Adoro” expresses a very strong liking; “gosto de” is more neutral.",
        },
        {
          prompt: "Le verbe « gostar » est toujours suivi de...",
          promptEn: "The verb “gostar” is always followed by...",
          options: ["de", "a", "para"],
          accept: ["de", "De"],
          explain:
            "« Gostar de » est la construction correcte : gosto de música, gosto de viajar.",
          explainEn:
            "“Gostar de” is the correct construction: gosto de música, gosto de viajar.",
        },
        {
          prompt: "Complète : « Je n'aime pas le sport. » → « Não _____ de desporto. »",
          promptEn: "Complete: “I don't like sport.” → « Não _____ de desporto. »",
          accept: ["gosto", "Gosto"],
          explain:
            "« Não gosto de desporto » : la négation « não » se place avant le verbe.",
          explainEn:
            "“Não gosto de desporto”: the negation “não” comes before the verb.",
        },
      ],
    },
    {
      number: 6,
      slug: "pt-06",
      title: "La famille et les personnes",
      titleEn: "Family and people",
      summary:
        "Parler de ta famille avec les possessifs o meu / a minha et décrire les personnes.",
      summaryEn:
        "Talk about your family with the possessives o meu / a minha and describe people.",
      grammar: [
        "Les articles o / a et les possessifs o meu, a minha",
        "Le vocabulaire de la famille",
        "Accorder les adjectifs avec le nom",
      ],
      explanation:
        "En portugais, la possession se dit avec l'article : « o meu pai », « a minha mãe ». L'article et le possessif s'accordent en genre et en nombre avec la chose possédée, pas avec la personne. Décrire quelqu'un se fait avec « ser » et un adjectif accordé : « a minha irmã é simpática ».",
      explanationEn:
        "In Portuguese possession is expressed with the article: “o meu pai”, “a minha mãe”. The article and possessive agree in gender and number with the thing possessed, not the person. Describing someone uses “ser” plus an agreeing adjective: “a minha irmã é simpática”.",
      examples: [
        {
          target: "O meu pai chama-se José.",
          fr: "Mon père s'appelle José.",
          en: "My father's name is José.",
        },
        {
          target: "A minha irmã tem vinte anos.",
          fr: "Ma sœur a vingt ans.",
          en: "My sister is twenty years old.",
        },
        {
          target: "Esta é a minha família.",
          fr: "Voici ma famille.",
          en: "This is my family.",
        },
        {
          target: "Os meus avós moram no Porto.",
          fr: "Mes grands-parents habitent à Porto.",
          en: "My grandparents live in Porto.",
        },
      ],
      vocab: [
        { target: "o pai", fr: "le père", en: "the father" },
        { target: "a mãe", fr: "la mère", en: "the mother" },
        { target: "o irmão", fr: "le frère", en: "the brother" },
        { target: "a irmã", fr: "la sœur", en: "the sister" },
        { target: "o avô", fr: "le grand-père", en: "the grandfather" },
        { target: "a avó", fr: "la grand-mère", en: "the grandmother" },
        { target: "o filho", fr: "le fils", en: "the son" },
        { target: "a família", fr: "la famille", en: "the family" },
      ],
      exercises: [
        {
          prompt: "« Ma mère » se dit...",
          promptEn: "“My mother” is...",
          options: ["A minha mãe", "O minha mãe", "Minha o mãe"],
          accept: ["A minha mãe", "a minha mãe", "minha mãe"],
          explain:
            "« Mãe » est féminin, donc « a minha » ; l'article « o » irait avec un nom masculin.",
          explainEn:
            "“Mãe” is feminine, so “a minha”; the article “o” goes with a masculine noun.",
        },
        {
          prompt: "« Mes grands-parents » (pluriel) se dit...",
          promptEn: "“My grandparents” (plural) is...",
          options: ["Os meus avós", "O meu avô", "As minhas avós"],
          accept: ["Os meus avós", "os meus avós"],
          explain:
            "« Avós » est masculin pluriel → « os meus avós ». « As minhas avós » désignerait les grand-mères.",
          explainEn:
            "“Avós” is masculine plural → “os meus avós”. “As minhas avós” would mean the grandmothers.",
        },
        {
          prompt: "Complète : « Ma sœur est sympa. » → « A minha irmã é _____ . »",
          promptEn: "Complete: “My sister is nice.” → « A minha irmã é _____ . »",
          accept: ["simpática", "Simpática"],
          explain:
            "L'adjectif s'accorde au féminin : « simpática », car « irmã » est féminin.",
          explainEn:
            "The adjective agrees in the feminine: “simpática”, because “irmã” is feminine.",
        },
      ],
    },
    {
      number: 7,
      slug: "pt-07",
      title: "Le travail et le bureau",
      titleEn: "Work and the office",
      summary:
        "Le présent des verbes réguliers et le monde du bureau : o escritório, a reunião, os clientes.",
      summaryEn:
        "The present tense of regular verbs and the office world: o escritório, a reunião, os clientes.",
      grammar: [
        "Le présent des verbes en -ar, -er, -ir",
        "Être poli : você (singulier) et vocês (pluriel)",
        "Le rythme de la journée au bureau",
      ],
      explanation:
        "Au présent, les verbes réguliers s'organisent en trois groupes : « falar » (eu falo), « comer » (eu como), « partir » (eu parto). Pour vouvoyer une seule personne on utilise « você », pour plusieurs « vocês », suivis du verbe à la 3e personne. Exprime ta journée : « a reunião começa às dez », « falo com os clientes ».",
      explanationEn:
        "In the present tense, regular verbs fall into three groups: “falar” (eu falo), “comer” (eu como), “partir” (eu parto). To address a single person formally use “você”, for several “vocês”, followed by the third person verb form. Describe your day: “a reunião começa às dez”, “falo com os clientes”.",
      examples: [
        {
          target: "Eu trabalho numa empresa em Lisboa.",
          fr: "Je travaille dans une entreprise à Lisbonne.",
          en: "I work at a company in Lisbon.",
        },
        {
          target: "O que faz a tua colega?",
          fr: "Que fait ta collègue ?",
          en: "What does your colleague do?",
        },
        {
          target: "Nós falamos com os clientes todos os dias.",
          fr: "Nous parlons avec les clients tous les jours.",
          en: "We talk to the clients every day.",
        },
        {
          target: "A reunião começa às dez.",
          fr: "La réunion commence à dix heures.",
          en: "The meeting starts at ten.",
        },
      ],
      vocab: [
        { target: "o trabalho", fr: "le travail", en: "the job, work" },
        { target: "o escritório", fr: "le bureau", en: "the office" },
        { target: "a empresa", fr: "l'entreprise", en: "the company" },
        { target: "o colega", fr: "le collègue", en: "the colleague" },
        { target: "a reunião", fr: "la réunion", en: "the meeting" },
        { target: "o cliente", fr: "le client", en: "the client" },
        { target: "o chefe", fr: "le chef", en: "the boss" },
        { target: "falar", fr: "parler", en: "to speak" },
      ],
      exercises: [
        {
          prompt: "Quelle phrase signifie « la réunion commence à dix heures » ?",
          promptEn: "Which phrase means “the meeting starts at ten”?",
          options: ["A reunião começa às dez", "A reunião cumpre às dez", "A reunião fala às dez"],
          accept: ["A reunião começa às dez", "a reunião começa às dez"],
          explain:
            "« Começar » (commencer) + « às dez » (à dix heures).",
          explainEn:
            "“Começar” (to start) + “às dez” (at ten o'clock).",
        },
        {
          prompt: "Quelle est la 1re personne du présent de « falar » ?",
          promptEn: "What is the first person present of “falar”?",
          options: ["falo", "falei", "fala"],
          accept: ["falo"],
          explain:
            "« Eu falo » : au présent, -ar donne -o à la 1re personne.",
          explainEn:
            "“Eu falo”: in the present, -ar gives -o in the first person.",
        },
        {
          prompt: "Complète : « Je parle avec le chef. » → « Falo _____ o chefe. »",
          promptEn: "Complete: “I speak with the boss.” → « Falo _____ o chefe. »",
          accept: ["com", "Com"],
          explain:
            "« Falar com » = parler avec ; « com o chefe » = avec le chef.",
          explainEn:
            "“Falar com” = to speak with; “com o chefe” = with the boss.",
        },
      ],
    },
    {
      number: 8,
      slug: "pt-08",
      title: "Faire des achats et commander",
      titleEn: "Shopping and ordering",
      summary:
        "Au marché et au restaurant : quem quer, quanto custa, la conta, por favor.",
      summaryEn:
        "At the market and the restaurant: quero, quanto custa, a conta, por favor.",
      grammar: [
        "Le verbe querer au présent (quero, queremos)",
        "Demander le prix : quanto custa?",
        "La structure il-y-a : há + nom",
      ],
      explanation:
        "Pour commander, utilise le verbe « querer » (vouloir) : « quero um café », « quero pão ». Pour demander un prix : « quanto custa? » (combien ça coûte ?). La forme « há » (il y a) est invariable : « há pão no mercado ». La formule de politesse « por favor » accompagne toute demande.",
      explanationEn:
        "To order, use the verb “querer” (to want): “quero um café”, “quero pão”. To ask a price: “quanto custa?” (how much does it cost?). The form “há” (there is/are) is invariable: “há pão no mercado”. The polite phrase “por favor” accompanies any request.",
      examples: [
        {
          target: "Quero um café, por favor.",
          fr: "Je voudrais un café, s'il vous plaît.",
          en: "I would like a coffee, please.",
        },
        {
          target: "Quanto custa este pão?",
          fr: "Combien coûte ce pain ?",
          en: "How much is this bread?",
        },
        {
          target: "Há fruta fresca no mercado.",
          fr: "Il y a des fruits frais au marché.",
          en: "There is fresh fruit at the market.",
        },
        {
          target: "A conta, por favor.",
          fr: "L'addition, s'il vous plaît.",
          en: "The bill, please.",
        },
      ],
      vocab: [
        { target: "o mercado", fr: "le marché", en: "the market" },
        { target: "o restaurante", fr: "le restaurant", en: "the restaurant" },
        { target: "comprar", fr: "acheter", en: "to buy" },
        { target: "pagar", fr: "payer", en: "to pay" },
        { target: "o preço", fr: "le prix", en: "the price" },
        { target: "o pão", fr: "le pain", en: "bread" },
        { target: "a conta", fr: "l'addition, la note", en: "the bill" },
        { target: "por favor", fr: "s'il vous plaît", en: "please" },
      ],
      exercises: [
        {
          prompt: "Comment demandes-tu le prix ?",
          promptEn: "How do you ask the price?",
          options: ["Quanto custa?", "Que horas são?", "A conta, por favor."],
          accept: ["Quanto custa", "quanto custa", "Quanto custa?"],
          explain:
            "« Quanto custa? » signifie « combien ça coûte ? », la question du prix.",
          explainEn:
            "“Quanto custa?” means “how much does it cost?”, the price question.",
        },
        {
          prompt: "« IL Y A du pain au marché » se dit...",
          promptEn: "“There is bread at the market” is...",
          options: ["Há pão no mercado", "Ter pão no mercado", "Ser pão no mercado"],
          accept: ["Há pão no mercado", "há pão no mercado", "Ha pao no mercado"],
          explain:
            "« Há » = il y a (du verbe « haver »), invariable et impersonnel.",
          explainEn:
            "“Há” = there is/are (from the verb “haver”), invariable and impersonal.",
        },
        {
          prompt: "Complète : « Je voudrais un café. » → « Quero _____ café. »",
          promptEn: "Complete: “I would like a coffee.” → « Quero _____ café. »",
          accept: ["um", "Um"],
          explain:
            "L'article indéfini masculin est « um » : um café.",
          explainEn:
            "The masculine indefinite article is “um”: um café.",
        },
      ],
    },
    {
      number: 9,
      slug: "pt-09",
      title: "Le temps, les saisons et l'heure",
      titleEn: "Weather, seasons and time",
      summary:
        "Parler du temps qu'il fait avec fazer, des saisons et de l'heure : que horas são?",
      summaryEn:
        "Talk about the weather with fazer, the seasons and the time: que horas são?",
      grammar: [
        "Le verbe faire pour le temps : faz sol, faz frio",
        "Les quatre saisons (a primavera, o verão...)",
        "Quelle heure est-il : que horas são? são três horas",
      ],
      explanation:
        "En portugais, le temps qu'il fait se dit avec « fazer » : « faz sol », « faz frio » (il fait soleil, il fait froid). Les saisons sont « a primavera » (printemps), « o verão » (été), « o outono » (automne) et « o inverno » (hiver). Pour l'heure, demande « que horas são? » et réponds « são três horas » (il est trois heures), « é uma hora » (il est une heure).",
      explanationEn:
        "In Portuguese the weather is expressed with “fazer”: “faz sol”, “faz frio” (it is sunny, it is cold). The seasons are “a primavera” (spring), “o verão” (summer), “o outono” (autumn) and “o inverno” (winter). For the time, ask “que horas são?” and answer “são três horas” (it's three o'clock), “é uma hora” (it's one o'clock).",
      examples: [
        {
          target: "Hoje faz sol em Lisboa.",
          fr: "Aujourd'hui il fait soleil à Lisbonne.",
          en: "It is sunny in Lisbon today.",
        },
        {
          target: "Chove muito no inverno.",
          fr: "Il pleut beaucoup en hiver.",
          en: "It rains a lot in winter.",
        },
        {
          target: "São três horas.",
          fr: "Il est trois heures.",
          en: "It is three o'clock.",
        },
        {
          target: "O verão é a minha estação preferida.",
          fr: "L'été est ma saison préférée.",
          en: "Summer is my favorite season.",
        },
      ],
      vocab: [
        { target: "o tempo", fr: "le temps (météo, et aussi le temps qui passe)", en: "the weather" },
        { target: "a primavera", fr: "le printemps", en: "spring" },
        { target: "o verão", fr: "l'été", en: "summer" },
        { target: "o outono", fr: "l'automne", en: "autumn" },
        { target: "o inverno", fr: "l'hiver", en: "winter" },
        { target: "a hora", fr: "l'heure", en: "the hour" },
        { target: "hoje", fr: "aujourd'hui", en: "today" },
        { target: "a estação", fr: "la saison", en: "the season" },
      ],
      exercises: [
        {
          prompt: "Comment dit-on « il fait froid » ?",
          promptEn: "How do you say “it is cold”?",
          options: ["Faz frio", "Tem frio", "É frio"],
          accept: ["Faz frio", "faz frio"],
          explain:
            "Le temps qu'il fait se construit avec « fazer » : « faz frio », « faz calor ».",
          explainEn:
            "The weather is built with “fazer”: “faz frio”, “faz calor”.",
        },
        {
          prompt: "Quelle est la saison de l'été ?",
          promptEn: "Which is the season of summer?",
          options: ["o verão", "o inverno", "a primavera"],
          accept: ["o verão", "o verao", "verão", "verao"],
          explain:
            "« O verão » est l'été, entre la primavera (printemps) et l'outono (automne).",
          explainEn:
            "“O verão” is summer, between a primavera (spring) and o outono (autumn).",
        },
        {
          prompt: "Complète : « Il est une heure. » → « É _____ hora. »",
          promptEn: "Complete: “It is one o'clock.” → « É _____ hora. »",
          accept: ["uma", "Uma"],
          explain:
            "À une heure on dit « é uma hora » (singulier) ; « são » ne vient qu'à partir de deux heures.",
          explainEn:
            "At one o'clock you say “é uma hora” (singular); “são” only appears from two o'clock on.",
        },
      ],
    },
    {
      number: 10,
      slug: "pt-10",
      title: "Entretien : présente-toi et ton parcours",
      titleEn: "Interview: introduce yourself and your background",
      summary:
        "Raconter ton parcours avec le passé composé : estudei, trabalhei, e maintenant Procuro.",
      summaryEn:
        "Tell your background with the compound past: estudei, trabalhei, and now Procuro.",
      grammar: [
        "Le pretérito perfeito des verbes en -ar (falei, trabalhei)",
        "Structure du récit : primeiro, depois, agora",
        "Lier les idées : e, mas, porque",
      ],
      explanation:
        "Pour raconter tes expériences, utilise le « pretérito perfeito » (passé composé simple) : les verbes en -ar donnent -ei (« trabalhei », « estudei »), les verbes en -er et -ir donnent -i (« aprendi »). Structure ton récit avec « primeiro » (d'abord), « depois » (ensuite) et « agora » (maintenant). Les connecteurs « e », « mas » et « porque » relient tes idées naturellement.",
      explanationEn:
        "To describe your experience use the “pretérito perfeito” (simple past): -ar verbs give -ei (“trabalhei”, “estudei”), -er and -ir verbs give -i (“aprendi”). Structure your story with “primeiro” (first), “depois” (then) and “agora” (now). The connectors “e”, “mas” and “porque” link your ideas naturally.",
      examples: [
        {
          target: "Estudei na Universidade de Coimbra.",
          fr: "J'ai étudié à l'Université de Coimbra.",
          en: "I studied at the University of Coimbra.",
        },
        {
          target: "Trabalhei durante três anos nessa empresa.",
          fr: "J'ai travaillé pendant trois ans dans cette entreprise.",
          en: "I worked for three years at that company.",
        },
        {
          target: "Aprendi muito com a minha equipa.",
          fr: "J'ai beaucoup appris avec mon équipe.",
          en: "I learned a lot with my team.",
        },
        {
          target: "Agora procuro uma nova oportunidade.",
          fr: "Aujourd'hui je cherche une nouvelle opportunité.",
          en: "Now I am looking for a new opportunity.",
        },
      ],
      vocab: [
        { target: "o percurso", fr: "le parcours", en: "the background, career path" },
        { target: "a experiência", fr: "l'expérience", en: "experience" },
        { target: "a universidade", fr: "l'université", en: "the university" },
        { target: "estudei", fr: "j'ai étudié", en: "I studied" },
        { target: "trabalhei", fr: "j'ai travaillé", en: "I worked" },
        { target: "a formação", fr: "la formation", en: "training, education" },
        { target: "entretanto", fr: "entre-temps", en: "meanwhile" },
        { target: "o objetivo", fr: "l'objectif", en: "the goal, objective" },
      ],
      exercises: [
        {
          prompt: "Le passé composé de « trabalhar » (je) est...",
          promptEn: "The simple past of “trabalhar” (I) is...",
          options: ["trabalhei", "trabalho", "trabalhava"],
          accept: ["trabalhei"],
          explain:
            "« Trabalhei » : pour les verbes en -ar, le pretérito perfeito donne -ei.",
          explainEn:
            "“Trabalhei”: for -ar verbs, the pretérito perfeito gives -ei.",
        },
        {
          prompt: "« J'ai étudié » se dit...",
          promptEn: "“I studied” is...",
          options: ["Estudei", "Estudo", "Está"],
          accept: ["Estudei", "estudei", "Eu estudei"],
          explain:
            "« Estudei » est la 1re personne du pretérito perfeito de « estudar ».",
          explainEn:
            "“Estudei” is the first person pretérito perfeito of “estudar”.",
        },
        {
          prompt: "Complète : « Philosophie, j'ai beaucoup appris. » → « Aprendi _____ aqui. »",
          promptEn: "Complete: “Indeed, I learned a lot here.” → « Aprendi _____ aqui. »",
          accept: ["muito", "Muito"],
          explain:
            "« Aprendi muito » = j'ai beaucoup appris ; « muito » adverbe d'intensité.",
          explainEn:
            "“Aprendi muito” = I learned a lot; “muito” is an adverb of intensity.",
        },
      ],
      interview: [
        {
          question: "Fala um pouco do teu percurso. Como te descreves numa frase?",
          fr: "Comment te présentes-tu ? Parle un peu de ton parcours.",
          en: "Introduce yourself. Tell me a bit about your background.",
          modelFr:
            "Je m'appelle Daniel, j'ai étudié à Coimbra et j'ai travaillé pendant trois ans dans un service client. Je parle français, anglais et portugais.",
          modelEn:
            "My name is Daniel, I studied at Coimbra and I worked for three years in customer service. I speak French, English and Portuguese.",
          accept: [
            "Trabalhei durante três anos",
            "trabalhei durante três anos",
            "Estudei",
            "estudei",
            "O meu percurso",
            "o meu percurso",
          ],
        },
        {
          question: "Que fizeste no teu último emprego?",
          fr: "Qu'as-tu fait dans ton dernier emploi ?",
          en: "What did you do in your last job?",
          modelFr:
            "J'étais responsable client : je répondais aux demandes, je préparais des rapports et j'aidais mes collègues.",
          modelEn:
            "I was a customer service manager: I answered requests, prepared reports and helped my colleagues.",
          accept: [
            "Trabalhei com clientes",
            "trabalhei com clientes",
            "Respondia a clientes",
            "respondia a clientes",
          ],
        },
      ],
    },
    {
      number: 11,
      slug: "pt-11",
      title: "Entretien : atouts, faiblesses, motivation",
      titleEn: "Interview: strengths, weaknesses, motivation",
      summary:
        "Parler de tes points forts, de tes points faibles et de ta motivation grâce à « porque ».",
      summaryEn:
        "Talk about your strengths, weaknesses and motivation using “porque”.",
      grammar: [
        "Exprimer la cause avec porque",
        "Ses qualités : sou bom / boa em..., sou uma pessoa...",
        "Parler de tes faiblesses avec une piste d'amélioration",
      ],
      explanation:
        "Pour présenter tes atouts, utilise « sou » + nom ou adjectif : « sou uma pessoa organizada », « sou bom em comunicação ». Justifie ta motivation avec « porque » : « quero crescer profissionalmente ». Pour les faiblesses, parle de ce que tu améliores : « às vezes sou impaciente, mas estou a trabalhar nisso ».",
      explanationEn:
        "To present your strengths use “sou” + noun or adjective: “sou uma pessoa organizada”, “sou bom em comunicação”. Justify your motivation with “porque”: “quero crescer profissionalmente”. For weaknesses, mention what you are improving: “às vezes sou impaciente, mas estou a trabalhar nisso”.",
      examples: [
        {
          target: "Sou uma pessoa organizada e responsável.",
          fr: "Je suis une personne organisée et responsable.",
          en: "I am an organized and responsible person.",
        },
        {
          target: "A minha maior força é a comunicação.",
          fr: "Ma plus grande force est la communication.",
          en: "My greatest strength is communication.",
        },
        {
          target: "Quero esta vaga porque quero crescer profissionalmente.",
          fr: "Je veux ce poste parce que je veux évoluer professionnellement.",
          en: "I want this position because I want to grow professionally.",
        },
        {
          target: "Às vezes sou impaciente, mas estou a melhorar.",
          fr: "Parfois je suis impatient, mais je m'améliore.",
          en: "Sometimes I am impatient, but I am improving.",
        },
      ],
      vocab: [
        { target: "o ponto forte", fr: "le point fort", en: "the strength" },
        { target: "o ponto fraco", fr: "le point faible", en: "the weakness" },
        { target: "a força", fr: "la force", en: "the strength, force" },
        { target: "a responsabilidade", fr: "la responsabilité", en: "responsibility" },
        { target: "a comunicação", fr: "la communication", en: "communication" },
        { target: "a motivação", fr: "la motivation", en: "motivation" },
        { target: "a organização", fr: "l'organisation", en: "organization" },
        { target: "melhorar", fr: "s'améliorer", en: "to improve" },
      ],
      exercises: [
        {
          prompt: "Comment dis-tu « parce que je veux évoluer » ?",
          promptEn: "How do you say “because I want to grow”?",
          options: ["Porque quero crescer", "Porque cresço", "Porque vou crescer"],
          accept: ["Porque quero crescer", "porque quero crescer"],
          explain:
            "« Quero crescer » = je veux évoluer ; coordonné par la conjonction de cause « porque ».",
          explainEn:
            "“Quero crescer” = I want to grow; linked by the causal conjunction “porque”.",
        },
        {
          prompt: "Comment présentes-tu une qualité personnelle ?",
          promptEn: "How do you present a personal quality?",
          options: ["Sou uma pessoa organizada", "Tenho uma pessoa organizada", "Estou uma pessoa organizada"],
          accept: ["Sou uma pessoa organizada", "sou uma pessoa organizada", "sou uma pessoa"],
          explain:
            "Une qualité durable se construit avec « ser » : « sou uma pessoa organizada ».",
          explainEn:
            "A lasting quality is built with “ser”: “sou uma pessoa organizada”.",
        },
        {
          prompt: "Complète : « Communication est ma plus grande force. » → « A minha maior _____ é a comunicação. »",
          promptEn: "Complete: “Communication is my greatest force.” → « A minha maior _____ é a comunicação. »",
          accept: ["força", "Força"],
          explain:
            "« A força » est la force ; « a minha maior força » = ma plus grande force.",
          explainEn:
            "“A força” is the strength; “a minha maior força” = my greatest strength.",
        },
      ],
      interview: [
        {
          question: "Quais são os teus pontos fortes?",
          fr: "Quels sont tes points forts ?",
          en: "What are your strengths?",
          modelFr:
            "Je suis organisé, autonome et bon communicateur. Je sais aussi très bien travailler sous pression.",
          modelEn:
            "I am organized, autonomous and a good communicator. I also work very well under pressure.",
          accept: [
            "Sou organizado",
            "sou organizado",
            "Sou uma pessoa organizada",
            "sou uma pessoa organizada",
            "Sou bom em comunicação",
            "sou bom em comunicação",
          ],
        },
        {
          question: "Porque queres trabalhar nesta empresa?",
          fr: "Pourquoi veux-tu travailler dans cette entreprise ?",
          en: "Why do you want to work for this company?",
          modelFr:
            "J'admire vos produits et vos valeurs, et je veux contribuer à votre croissance en apportant mon expérience du service client.",
          modelEn:
            "I admire your products and values, and I want to contribute to your growth by bringing my customer service experience.",
          accept: [
            "Gosto desta empresa",
            "gosto desta empresa",
            "Admiro",
            "admiro",
            "Quero contribuir para a empresa",
            "quero contribuir para a empresa",
          ],
        },
        {
          question: "Quais são os teus pontos fracos?",
          fr: "Quels sont tes points faibles ?",
          en: "What are your weaknesses?",
          modelFr:
            "Parfois je veux tout faire moi-même et je me charge trop ; j'apprends maintenant à déléguer davantage.",
          modelEn:
            "Sometimes I want to do everything myself and overwork; I am now learning to delegate more.",
          accept: [
            "Sou impaciente",
            "sou impaciente",
            "O meu ponto fraco é",
            "o meu ponto fraco é",
            "Estou a melhorar",
            "estou a melhorar",
          ],
        },
      ],
    },
    {
      number: 12,
      slug: "pt-12",
      title: "Entretien : projets, travail d'équipe, gestion du stress",
      titleEn: "Interview: plans, teamwork, stress management",
      summary:
        "Exprimer tes projets avec le futur vou + infinitif, parler du travail en équipe et du stress.",
      summaryEn:
        "Express your plans with the future vou + infinitive, talk about teamwork and stress.",
      grammar: [
        "Le futur proche : vou + infinitif (vou continuar)",
        "Travailler en équipe : trabalhar em equipa, colaborar",
        "Gérer le stress et la pression : conseguir, lidar com",
      ],
      explanation:
        "Le futur proche se forme avec « ir » + infinitif : « vou continuar a aprender », « vou contribuir ». Pour l'équipe, utilise « trabalhar em equipa » et « colaborar ». La gestion du stress se dit « lidar com o stress » et la capacité « conseguir » : « consigo trabalhar sob pressão » (je peux travailler sous pression).",
      explanationEn:
        "The near future is formed with “ir” + infinitive: “vou continuar a aprender”, “vou contribuir”. For teamwork use “trabalhar em equipa” and “colaborar”. Stress management is “lidar com o stress” and ability is “conseguir”: “consigo trabalhar sob pressão” (I can work under pressure).",
      examples: [
        {
          target: "Daqui a cinco anos vejo-me nesta empresa.",
          fr: "Dans cinq ans, je me vois dans cette entreprise.",
          en: "In five years I see myself in this company.",
        },
        {
          target: "Gosto de trabalhar em equipa e colaborar.",
          fr: "J'aime travailler en équipe et collaborer.",
          en: "I like working in a team and collaborating.",
        },
        {
          target: "Consigo trabalhar sob pressão.",
          fr: "Je peux travailler sous pression.",
          en: "I can work under pressure.",
        },
        {
          target: "Vou continuar a desenvolver as minhas competências.",
          fr: "Je vais continuer à développer mes compétences.",
          en: "I will continue to develop my skills.",
        },
      ],
      vocab: [
        { target: "o futuro", fr: "le futur", en: "the future" },
        { target: "a equipa", fr: "l'équipe", en: "the team" },
        { target: "o stress", fr: "le stress", en: "stress" },
        { target: "a pressão", fr: "la pression", en: "pressure" },
        { target: "conseguir", fr: "réussir, pouvoir", en: "to be able to, to manage" },
        { target: "colaborar", fr: "collaborer", en: "to collaborate" },
        { target: "a competência", fr: "la compétence", en: "the skill, competence" },
        { target: "lidar com", fr: "faire face à, gérer", en: "to deal with" },
      ],
      exercises: [
        {
          prompt: "« Je vais continuer » se dit...",
          promptEn: "“I will continue” is...",
          options: ["Vou continuar", "Vou continuo", "Continuarei a vou"],
          accept: ["Vou continuar", "vou continuar", "Eu vou continuar"],
          explain:
            "Le futur proche = « ir » au présent (vou) + infinitif (continuar).",
          explainEn:
            "The near future = “ir” in the present (vou) + infinitive (continuar).",
        },
        {
          prompt: "Comment dis-tu « je peux travailler sous pression » ?",
          promptEn: "How do you say “I can work under pressure”?",
          options: ["Consigo trabalhar sob pressão", "Quero trabalhar sob pressão", "Sou trabalhar sob pressão"],
          accept: ["Consigo trabalhar sob pressão", "consigo trabalhar sob pressão", "consigo"],
          explain:
            "« Conseguir » exprime la capacité : « consigo trabalhar sob pressão ».",
          explainEn:
            "“Conseguir” expresses ability: “consigo trabalhar sob pressão”.",
        },
        {
          prompt: "Complète : « Travaille en équipe. » → « Trabalho em _____ . »",
          promptEn: "Complete: “I work in a team.” → « Trabalho em _____ . »",
          accept: ["equipa", "Equipa"],
          explain:
            "Au Portugal on écrit « equipa » (l'équipe) ; au Brésil ce serait « equipe ».",
          explainEn:
            "In Portugal you write “equipa” (team); in Brazil it would be “equipe”.",
        },
      ],
      interview: [
        {
          question: "Onde te vês daqui a cinco anos?",
          fr: "Où te vois-tu dans cinq ans ?",
          en: "Where do you see yourself in five years?",
          modelFr:
            "Je me vois évoluer dans cette entreprise, avec de nouvelles responsabilités et une équipe qui grandit.",
          modelEn:
            "I see myself growing in this company, with new responsibilities and a growing team.",
          accept: [
            "Vejo-me nesta empresa",
            "vejo-me nesta empresa",
            "Daqui a cinco anos",
            "daqui a cinco anos",
            "Quero crescer",
            "quero crescer",
          ],
        },
        {
          question: "Como trabalhas em equipa?",
          fr: "Comment travailles-tu en équipe ?",
          en: "How do you work in a team?",
          modelFr:
            "Je partage volontiers mes idées, j'écoute mes collègues et j'apprécie que chacun contribue avec ses points forts.",
          modelEn:
            "I readily share my ideas, listen to my colleagues and like that everyone contributes with their strengths.",
          accept: [
            "Gosto de trabalhar em equipa",
            "gosto de trabalhar em equipa",
            "Trabalho bem em equipa",
            "trabalho bem em equipa",
            "Colaboro",
            "colaboro",
          ],
        },
        {
          question: "Como lidas com o stress?",
          fr: "Comment gères-tu le stress ?",
          en: "How do you deal with stress?",
          modelFr:
            "Je m'organise, je fixe des priorités et je reste calme face aux délais ; le sport m'aide aussi à me détendre.",
          modelEn:
            "I stay organized, set priorities and stay calm with deadlines; sport also helps me relax.",
          accept: [
            "Consigo trabalhar sob pressão",
            "consigo trabalhar sob pressão",
            "Mantenho a calma",
            "mantenho a calma",
            "Organizo-me",
            "organizo-me",
          ],
        },
      ],
    },
  ],
};