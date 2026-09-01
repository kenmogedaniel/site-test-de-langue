import type { LanguageCourse } from "./genericLessons";

export const DE_COURSE: LanguageCourse = {
  code: "de",
  name: "Allemand",
  native: "Deutsch",
  heroTitle1: { fr: "Apprenez", en: "Learn" },
  heroTitle2: { fr: "l'allemand", en: "German" },
  heroSubtitle: {
    fr: "Un parcours débutant en douze leçons : salutations, vie quotidienne, travail et entretien d'embauche en allemand.",
    en: "A beginner path in twelve lessons: greetings, daily life, work and a job interview in German.",
  },
  lessons: [
    {
      number: 1,
      slug: "de-01",
      title: "Se présenter et saluer",
      titleEn: "Introducing yourself and greeting",
      summary:
        "Apprenez à dire bonjour, à donner votre prénom et votre origine avec Hallo, ich heiße, ich komme aus.",
      summaryEn:
        "Learn to say hello, give your name and your origin with Hallo, ich heiße, ich komme aus.",
      grammar: [
        "Le verbe présentatif « heißen » (s'appeler)",
        "La préposition + ville : « ich komme aus … »",
        "Les salutations formelles et informelles (du / Sie)",
      ],
      explanation:
        "En allemand, on se présente avec le verbe « heißen » : ich heiße (je m'appelle), du heißt (tu t'appelles), er/sie heißt (il/elle s'appelle). On indique son origine avec la préposition « aus », suivie du nom de la ville ou du pays : ich komme aus Frankreich. La première rencontre passe souvent par la formule polie « Wie heißen Sie? » (Comment vous appelez-vous ?) puis le tutoiement avec « Wie heißt du? ». N'oubliez pas que tous les noms communs prennent une majuscule en allemand et que la politesse (« Sie ») se conjugue comme la troisième personne du pluriel.",
      explanationEn:
        "In German, you introduce yourself with the verb « heißen »: ich heiße (my name is), du heißt (your name is), er/sie heißt (his/her name is). You indicate your origin with the preposition « aus », followed by the name of the town or country: ich komme aus Frankreich. A first meeting often uses the polite form « Wie heißen Sie? » (What is your name?) and then the familiar « Wie heißt du? ». Remember that all nouns take a capital letter in German and that the polite « Sie » conjugates like the third person plural.",
      examples: [
        { target: "Guten Morgen, ich heiße Anna.", fr: "Bonjour, je m'appelle Anna.", en: "Good morning, my name is Anna." },
        { target: "Hallo, wie heißt du?", fr: "Salut, comment t'appelles-tu ?", en: "Hello, what is your name?" },
        { target: "Ich komme aus Deutschland, aus Berlin.", fr: "Je viens d'Allemagne, de Berlin.", en: "I come from Germany, from Berlin." },
        { target: "Freut mich, Sie kennenzulernen.", fr: "Enchanté de faire votre connaissance.", en: "Nice to meet you." },
      ],
      vocab: [
        { target: "das Hallo", fr: "le salut", en: "hello" },
        { target: "Guten Morgen", fr: "bonjour (le matin)", en: "good morning" },
        { target: "Guten Tag", fr: "bonjour (la journée)", en: "good day" },
        { target: "Guten Abend", fr: "bonsoir", en: "good evening" },
        { target: "der Name", fr: "le nom", en: "the name" },
        { target: "heißen", fr: "s'appeler", en: "to be called" },
        { target: "kommen aus", fr: "venir de", en: "to come from" },
        { target: "die Frau", fr: "la femme / Madame", en: "the woman / Mrs." },
      ],
      exercises: [
        {
          prompt: "Complétez : « Guten ___, ich heiße Anna. » (bonjour le matin)",
          promptEn: "Complete: « Guten ___, ich heiße Anna. » (good morning)",
          accept: ["Morgen"],
          explain: "Le matin, on dit « Guten Morgen ». « Guten Tag » s'emploie pendant la journée.",
          explainEn: "In the morning you say « Guten Morgen ». « Guten Tag » is used during the day.",
        },
        {
          prompt: "Comment dit-on « Je m'appelle … » en allemand ?",
          promptEn: "How do you say « My name is … » in German?",
          options: ["Ich komme aus …", "Ich heiße …", "Wie heißt du?"],
          accept: ["Ich heiße …"],
          explain: "« Ich heiße … » signifie « Je m'appelle … ». « Ich komme aus … » veut dire « Je viens de … ».",
          explainEn: "« Ich heiße … » means « My name is … ». « Ich komme aus … » means « I come from … ».",
        },
        {
          prompt: "Complétez la question pour vouvoyer : « Wie ___ Sie? »",
          promptEn: "Complete the polite question: « Wie ___ Sie? »",
          accept: ["heißen"],
          explain: "Avec « Sie » (vous), on dit « Wie heißen Sie? ». « Wie heißt du? » est la forme familière.",
          explainEn: "With « Sie » (you, formal) you say « Wie heißen Sie? ». « Wie heißt du? » is the informal form.",
        },
      ],
    },
    {
      number: 2,
      slug: "de-02",
      title: "Nationalité, origine et profession",
      titleEn: "Nationality, origin and profession",
      summary:
        "Exprimez votre nationalité et votre travail avec ich bin, ich lebe in, der Beruf.",
      summaryEn:
        "Express your nationality and your job with ich bin, ich lebe in, der Beruf.",
      grammar: [
        "Le verbe « sein » au présent : ich bin, du bist, er/sie ist",
        "La nationalité : ich bin Franzose / ich bin deutsch",
        "La profession : ich bin + métier (Lehrer, Arzt, Ingenieur)",
      ],
      explanation:
        "Le verbe « sein » (être) est irrégulier : ich bin, du bist, er/sie ist, wir sind, ihr seid, sie sind. Pour les nationalités et les professions, l'allemand n'emploie pas d'article au présentatif : ich bin Franzose (je suis Français), sie ist Ärztin (elle est médecin). La nationalité s'écrit souvent avec une majuscule quand il s'agit d'un nom (der Franzose) et en minuscule comme adjectif. Pour exprimer le lieu de vie, on utilise « ich lebe in … » (je vis à…) ou « ich wohne in … ».",
      explanationEn:
        "The verb « sein » (to be) is irregular: ich bin, du bist, er/sie ist, wir sind, ihr seid, sie sind. For nationalities and professions, German does not use an article in predicative position: ich bin Franzose (I am French), sie ist Ärztin (she is a doctor). The nationality is written with a capital letter as a noun (der Franzose) and in lower case as an adjective. For where you live, use « ich lebe in … » (I live in…) or « ich wohne in … ».",
      examples: [
        { target: "Ich bin Franzose und ich lebe in Lyon.", fr: "Je suis Français et je vis à Lyon.", en: "I am French and I live in Lyon." },
        { target: "Sie ist Deutsche, sie kommt aus München.", fr: "Elle est Allemande, elle vient de Munich.", en: "She is German, she comes from Munich." },
        { target: "Ich bin Ingenieur von Beruf.", fr: "Je suis ingénieur de métier.", en: "I am an engineer by profession." },
        { target: "Wir sind aus Afrika.", fr: "Nous sommes d'Afrique.", en: "We are from Africa." },
      ],
      vocab: [
        { target: "sein", fr: "être", en: "to be" },
        { target: "der Beruf", fr: "le métier", en: "the job" },
        { target: "die Nationalität", fr: "la nationalité", en: "the nationality" },
        { target: "der Franzose / die Französin", fr: "le Français / la Française", en: "the French man / woman" },
        { target: "der Deutsche / die Deutsche", fr: "l'Allemand / l'Allemande", en: "the German (man/woman)" },
        { target: "leben in", fr: "vivre à", en: "to live in" },
        { target: "wohnen", fr: "habiter", en: "to reside" },
        { target: "der Lehrer / die Lehrerin", fr: "le professeur / la professeure", en: "the teacher" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ Franzose. »",
          promptEn: "Complete: « Ich ___ Franzose. »",
          accept: ["bin"],
          explain: "« sein » à la première personne du singulier : ich bin (je suis).",
          explainEn: "« sein » in the first person singular: ich bin (I am).",
        },
        {
          prompt: "Comment dit-on « Elle est Allemande » ?",
          promptEn: "How do you say « She is German »?",
          options: ["Sie ist Deutsche.", "Sie bist Deutsche.", "Ich ist Deutsche."],
          accept: ["Sie ist Deutsche."],
          explain: "À la troisième personne du singulier, « sein » donne « ist » : Sie ist Deutsche.",
          explainEn: "In the third person singular, « sein » becomes « ist »: Sie ist Deutsche.",
        },
        {
          prompt: "Complétez : « Ich ___ in Berlin. » (je vis)",
          promptEn: "Complete: « Ich ___ in Berlin. » (I live)",
          accept: ["lebe", "wohne"],
          explain: "« leben in » et « wohnen » expriment tous deux le lieu de vie : ich lebe / ich wohne in Berlin.",
          explainEn: "Both « leben in » and « wohnen » express where you live: ich lebe / ich wohne in Berlin.",
        },
      ],
    },
    {
      number: 3,
      slug: "de-03",
      title: "Être et avoir : présenter quelqu'un",
      titleEn: "To be and to have: presenting someone",
      summary:
        "Maîtrisez sein et haben pour décrire une personne : âge, famille, caractéristiques.",
      summaryEn:
        "Master sein and haben to describe a person: age, family, characteristics.",
      grammar: [
        "La conjugaison de « haben » : ich habe, du hast, er/sie hat",
        "L'accusatif : ich habe einen Bruder, eine Schwester",
        "Décrire une personne avec « sein » + adjectif",
      ],
      explanation:
        "Le verbe « haben » (avoir) est indispensable : ich habe, du hast, er/sie hat, wir haben, ihr habt, sie haben. Pour mentionner des personnes, on utilise souvent l'accusatif : einen Bruder (un frère), eine Schwester (une sœur), ein Kind (un enfant). Avec « haben », l'article « ein » devient « einen » au masculin et « ein » au neutre ; le masculin seul prend le suffixe -en. Pour décrire, on associe « sein » et un adjectif : er ist groß und freundlich (il est grand et sympathique). L'âge se dit avec « sein » + nombre + Jahre alt : ich bin dreißig Jahre alt.",
      explanationEn:
        "The verb « haben » (to have) is essential: ich habe, du hast, er/sie hat, wir haben, ihr habt, sie haben. To mention people, German often uses the accusative: einen Bruder (a brother), eine Schwester (a sister), ein Kind (a child). With « haben », the article « ein » becomes « einen » in the masculine and « ein » in the neuter; only the masculine takes the -en ending. To describe, combine « sein » with an adjective: er ist groß und freundlich (he is tall and friendly). Age is expressed with « sein » + number + Jahre alt: ich bin dreißig Jahre alt.",
      examples: [
        { target: "Ich habe einen Bruder und eine Schwester.", fr: "J'ai un frère et une sœur.", en: "I have one brother and one sister." },
        { target: "Er ist dreißig Jahre alt.", fr: "Il a trente ans.", en: "He is thirty years old." },
        { target: "Sie hat zwei Kinder.", fr: "Elle a deux enfants.", en: "She has two children." },
        { target: "Wir sind groß und freundlich.", fr: "Nous sommes grands et sympathiques.", en: "We are tall and friendly." },
      ],
      vocab: [
        { target: "haben", fr: "avoir", en: "to have" },
        { target: "der Bruder", fr: "le frère", en: "the brother" },
        { target: "die Schwester", fr: "la sœur", en: "the sister" },
        { target: "das Kind", fr: "l'enfant", en: "the child" },
        { target: "das Alter", fr: "l'âge", en: "the age" },
        { target: "Jahre alt", fr: "ans (âge)", en: "years old" },
        { target: "groß", fr: "grand", en: "tall" },
        { target: "freundlich", fr: "sympathique, aimable", en: "friendly" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ eine Schwester. »",
          promptEn: "Complete: « Ich ___ eine Schwester. »",
          accept: ["habe"],
          explain: "« haben » au présent, première personne : ich habe (j'ai).",
          explainEn: "« haben » in the present tense, first person: ich habe (I have).",
        },
        {
          prompt: "Comment dit-on « Il a un frère » ?",
          promptEn: "How do you say « He has a brother »?",
          options: ["Er hat einen Bruder.", "Er haben einen Bruder.", "Er hast einen Bruder."],
          accept: ["Er hat einen Bruder."],
          explain: "« haben » donne « hat » à la troisième personne, avec l'accusatif « einen Bruder ».",
          explainEn: "« haben » becomes « hat » in the third person, with the accusative « einen Bruder ».",
        },
        {
          prompt: "Complétez : « Sie ist dreißig ___ alt. »",
          promptEn: "Complete: « Sie ist dreißig ___ alt. »",
          accept: ["Jahre"],
          explain: "L'âge se dit « X Jahre alt » : Sie ist dreißig Jahre alt. « Jahre » prend une majuscule (nom).",
          explainEn: "Age is « X Jahre alt »: Sie ist dreißig Jahre alt. « Jahre » takes a capital letter (noun).",
        },
      ],
    },
    {
      number: 4,
      slug: "de-04",
      title: "La routine quotidienne",
      titleEn: "The daily routine",
      summary:
        "Décrivez votre journée : aufstehen, arbeiten, essen, und le présent de l'indicatif.",
      summaryEn:
        "Describe your day: aufstehen, arbeiten, essen, and the present indicative.",
      grammar: [
        "Les verbes réguliers au présent (arbeiten, machen)",
        "Les verbes à préverbe séparable (aufstehen : ich stehe auf)",
        "L'ordre des mots : das Verb ist die zweite Idee",
      ],
      explanation:
        "Au présent, les verbes réguliers reçoivent les terminaisons : -e, -st, -t, -en, -t, -en. Avec un radical en -t/-d, on insère un -e : du arbeitest, er arbeitet. Certains verbes ont un préverbe séparable : « aufstehen » devient « ich stehe auf » (je me lève), le préverbe part à la fin de la phrase. L'allemand exige le verbe en deuxième position : Um 7 Uhr stehe ich auf (À 7h je me lève). Pour « travailler », on emploie « arbeiten » dans la phrase ich arbeite von 9 bis 17 Uhr.",
      explanationEn:
        "In the present tense, regular verbs take the endings: -e, -st, -t, -en, -t, -en. With a stem ending in -t/-d, an extra -e is inserted: du arbeitest, er arbeitet. Some verbs have a separable prefix: « aufstehen » becomes « ich stehe auf » (I get up), and the prefix goes to the end of the sentence. German requires the verb in second position: Um 7 Uhr stehe ich auf (At 7 am I get up). For « to work » use « arbeiten » in ich arbeite von 9 bis 17 Uhr.",
      examples: [
        { target: "Ich stehe um sieben Uhr auf.", fr: "Je me lève à sept heures.", en: "I get up at seven o'clock." },
        { target: "Ich arbeite von 9 bis 17 Uhr.", fr: "Je travaille de 9 h à 17 h.", en: "I work from 9 to 5." },
        { target: "Dann frühstücke ich.", fr: "Ensuite je prends mon petit-déjeuner.", en: "Then I have breakfast." },
        { target: "Am Abend koche ich und esse zu Hause.", fr: "Le soir, je cuisine et je mange à la maison.", en: "In the evening, I cook and eat at home." },
      ],
      vocab: [
        { target: "aufstehen", fr: "se lever", en: "to get up" },
        { target: "frühstücken", fr: "prendre le petit-déjeuner", en: "to have breakfast" },
        { target: "arbeiten", fr: "travailler", en: "to work" },
        { target: "essen", fr: "manger", en: "to eat" },
        { target: "trinken", fr: "boire", en: "to drink" },
        { target: "kochen", fr: "cuisiner", en: "to cook" },
        { target: "schlafen", fr: "dormir", en: "to sleep" },
        { target: "die Uhr / die Stunde", fr: "l'heure / l'heure (durée)", en: "the clock / the hour" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ früh auf. » (je me lève)",
          promptEn: "Complete: « Ich ___ früh auf. » (I get up)",
          accept: ["stehe"],
          explain: "Le préverbe séparable se détache : « aufstehen » → « ich stehe … auf ».",
          explainEn: "The separable prefix detaches: « aufstehen » → « ich stehe … auf ».",
        },
        {
          prompt: "Comment dit-on « Il travaille » au présent ?",
          promptEn: "How do you say « He works » in the present tense?",
          options: ["er arbeitet", "er arbeitst", "er arbeitet auf"],
          accept: ["er arbeitet"],
          explain: "Avec un radical en -t, on insère -e : du arbeitest, er arbeitet.",
          explainEn: "With a stem ending in -t, you insert -e: du arbeitest, er arbeitet.",
        },
        {
          prompt: "Complétez la conjugaison : « Er ___ zu Hause. » (il mange)",
          promptEn: "Complete the conjugation: « Er ___ zu Hause. » (he eats)",
          accept: ["isst"],
          explain: "« essen » est irrégulier : ich esse, du isst, er isst (il mange).",
          explainEn: "« essen » is irregular: ich esse, du isst, er isst (he eats).",
        },
      ],
    },
    {
      number: 5,
      slug: "de-05",
      title: "Les goûts et les loisirs",
      titleEn: "Likes and hobbies",
      summary:
        "Parlez de vos passions avec mögen, ich spiele, ich höre et le verbe « gern ».",
      summaryEn:
        "Talk about your passions with mögen, ich spiele, ich höre and the adverb « gern ».",
      grammar: [
        "Le verbe « mögen » (aimer) : ich mag, ich mag nicht",
        "« gern » pour exprimer un goût : ich spiele gern Tennis",
        "L'expression des loisirs : Fußball spielen, Musik hören, lesen",
      ],
      explanation:
        "Pour exprimer ses goûts, l'allemand utilise le verbe « mögen » : ich mag (j'aime), ich mag nicht (je n'aime pas), suivi d'un nom : ich mag Musik. Pour les activités, on préfère l'adverbe « gern » placé après le verbe : ich spiele gern Fußball (j'aime jouer au football), ich höre gern Musik (j'aime écouter de la musique). La négation d'une activité se fait avec « nicht gern » : ich lese nicht gern (je n'aime pas lire). Le verbe « spielen » est régulier : du spielst, er spielt.",
      explanationEn:
        "To express likes, German uses the verb « mögen »: ich mag (I like), ich mag nicht (I don't like), followed by a noun: ich mag Musik. For activities, prefer the adverb « gern » placed after the verb: ich spiele gern Fußball (I like playing football), ich höre gern Musik (I like listening to music). Negate an activity with « nicht gern »: ich lese nicht gern (I don't like reading). The verb « spielen » is regular: du spielst, er spielt.",
      examples: [
        { target: "Ich spiele gern Fußball.", fr: "J'aime jouer au football.", en: "I like playing football." },
        { target: "Sie hört gern Musik.", fr: "Elle aime écouter de la musique.", en: "She likes listening to music." },
        { target: "Ich mag Filme und Bücher.", fr: "J'aime les films et les livres.", en: "I like films and books." },
        { target: "Er liest nicht gern.", fr: "Il n'aime pas lire.", en: "He doesn't like reading." },
      ],
      vocab: [
        { target: "mögen", fr: "aimer, apprécier", en: "to like" },
        { target: "gern", fr: "volontiers (avec plaisir)", en: "gladly" },
        { target: "das Hobby", fr: "le passe-temps", en: "the hobby" },
        { target: "spielen", fr: "jouer", en: "to play" },
        { target: "hören", fr: "écouter", en: "to listen" },
        { target: "lesen", fr: "lire", en: "to read" },
        { target: "die Musik", fr: "la musique", en: "the music" },
        { target: "der Fußball", fr: "le football", en: "football" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ gern Fußball. » (j'aime jouer)",
          promptEn: "Complete: « Ich ___ gern Fußball. » (I like playing)",
          accept: ["spiele"],
          explain: "L'adverbe « gern » s'ajoute au verbe « spielen » : ich spiele gern Fußball.",
          explainEn: "The adverb « gern » is added to the verb « spielen »: ich spiele gern Fußball.",
        },
        {
          prompt: "Comment traduit-on « J'aime la musique » ?",
          promptEn: "How do you translate « I like music »?",
          options: ["Ich mag Musik.", "Ich bin Musik.", "Ich spiele Musik."],
          accept: ["Ich mag Musik."],
          explain: "« mögen » exprime l'appréciation : ich mag Musik. « Ich bin Musik » n'est pas correct.",
          explainEn: "« mögen » expresses appreciation: ich mag Musik. « Ich bin Musik » is not correct.",
        },
        {
          prompt: "Complétez le verbe : « Er ___ gern Bücher. » (il lit)",
          promptEn: "Complete the verb: « Er ___ gern Bücher. » (he reads)",
          accept: ["liest"],
          explain: "« lesen » change sa voyelle : ich lese, du liest, er liest.",
          explainEn: "« lesen » changes its vowel: ich lese, du liest, er liest.",
        },
      ],
    },
    {
      number: 6,
      slug: "de-06",
      title: "La famille et les personnes",
      titleEn: "Family and people",
      summary:
        "Le vocabulaire de la famille, les possessifs mein/meine et les articles der, die, das.",
      summaryEn:
        "Family vocabulary, the possessives mein/meine and the articles der, die, das.",
      grammar: [
        "Les genres : der (masculin), die (féminin), das (neutre)",
        "Les possessifs mein/meine, dein/deine selon le genre",
        "Décrire les liens de famille (Eltern, Großeltern, Kinder)",
      ],
      explanation:
        "En allemand, chaque nom possède un genre qui détermine son article : der Vater (le père, masculin), die Mutter (la mère, féminin), das Kind (l'enfant, neutre). Le possessif s'accorde avec le genre du nom possédé : mein Vater, meine Mutter, mein Kind. Au pluriel, on emploie « meine » : meine Eltern (mes parents). Les liens familiaux importants : der Vater, die Mutter, die Eltern, der Sohn, die Tochter, die Großeltern (les grands-parents). Attention au pluriel : les enfants se disent « die Kinder », au singulier « das Kind ».",
      explanationEn:
        "In German, every noun has a gender that determines its article: der Vater (the father, masculine), die Mutter (the mother, feminine), das Kind (the child, neuter). The possessive agrees with the gender of the noun it modifies: mein Vater, meine Mutter, mein Kind. In the plural, use « meine »: meine Eltern (my parents). Key family links: der Vater, die Mutter, die Eltern, der Sohn, die Tochter, die Großeltern (the grandparents). Note the plural: children are « die Kinder », singular « das Kind ».",
      examples: [
        { target: "Das ist meine Familie: meine Eltern und mein Bruder.", fr: "Voici ma famille : mes parents et mon frère.", en: "This is my family: my parents and my brother." },
        { target: "Meine Großeltern wohnen auf dem Land.", fr: "Mes grands-parents habitent à la campagne.", en: "My grandparents live in the countryside." },
        { target: "Sein Vater arbeitet in einer Firma.", fr: "Son père travaille dans une entreprise.", en: "His father works in a company." },
        { target: "Der Sohn und die Tochter sind noch klein.", fr: "Le fils et la fille sont encore petits.", en: "The son and the daughter are still young." },
      ],
      vocab: [
        { target: "die Familie", fr: "la famille", en: "the family" },
        { target: "der Vater / die Mutter", fr: "le père / la mère", en: "the father / the mother" },
        { target: "die Eltern", fr: "les parents", en: "the parents" },
        { target: "der Sohn / die Tochter", fr: "le fils / la fille", en: "the son / the daughter" },
        { target: "die Geschwister", fr: "les frères et sœurs", en: "the siblings" },
        { target: "die Großeltern", fr: "les grands-parents", en: "the grandparents" },
        { target: "der Mann / die Frau", fr: "l'homme / la femme", en: "the man / the woman" },
        { target: "die Großmutter / der Großvater", fr: "la grand-mère / le grand-père", en: "the grandmother / the grandfather" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Das ist ___ Mutter. » (ma mère)",
          promptEn: "Complete: « Das ist ___ Mutter. » (my mother)",
          accept: ["meine"],
          explain: "« Mutter » est féminin → possessif féminin « meine ».",
          explainEn: "« Mutter » is feminine → feminine possessive « meine ».",
        },
        {
          prompt: "Quel est le pluriel correct de « das Kind » ?",
          promptEn: "What is the correct plural of « das Kind »?",
          options: ["die Kinde", "die Kinder", "das Kindern"],
          accept: ["die Kinder"],
          explain: "« das Kind » fait « die Kinder » au pluriel. Au singulier, « Kind » est neutre.",
          explainEn: "« das Kind » becomes « die Kinder » in the plural. In the singular, « Kind » is neuter.",
        },
        {
          prompt: "Complétez : « ___ Vater und meine Mutter sind meine Eltern. » (mon)",
          promptEn: "Complete: « ___ Vater und meine Mutter sind meine Eltern. » (my)",
          accept: ["Mein"],
          explain: "« Vater » est masculin → « mein Vater ». Les possessifs s'accordent avec le genre du nom.",
          explainEn: "« Vater » is masculine → « mein Vater ». Possessives agree with the gender of the noun.",
        },
      ],
    },
    {
      number: 7,
      slug: "de-07",
      title: "Le travail et le bureau",
      titleEn: "Work and the office",
      summary:
        "Parlez de votre travail, du bureau et des tâches quotidiennes : die Arbeit, das Büro, das Projekt.",
      summaryEn:
        "Talk about your job, the office and daily tasks: die Arbeit, das Büro, das Projekt.",
      grammar: [
        "Le vocabulaire du bureau et de l'entreprise",
        "Le verbe « arbeiten » et les prépositions auf/bei/in",
        "« an einem Projekt arbeiten » : travailler sur un projet",
      ],
      explanation:
        "Le bureau se dit « das Büro » et le travail « die Arbeit ». On travaille « bei einer Firma » (dans une entreprise) ou « in einem Unternehmen ». Pour dire sur quoi on travaille, l'allemand utilise « an » + datif : ich arbeite an einem Projekt (je travaille sur un projet). Le verbe « arbeiten » est régulier mais insère un -e au radical en -t : du arbeitest, sie arbeitet. Le lieu dépend de la préposition : auf dem Büro est faux, on dit im Büro ou im Büro arbeiten. L'ordinateur se dit « der Computer », la réunion « die Besprechung ».",
      explanationEn:
        "The office is « das Büro » and work is « die Arbeit ». You work « bei einer Firma » (in a company) or « in einem Unternehmen ». To say what you are working on, German uses « an » + dative: ich arbeite an einem Projekt (I am working on a project). The verb « arbeiten » is regular but inserts an -e after the -t stem: du arbeitest, sie arbeitet. The place depends on the preposition: auf dem Büro is wrong; say im Büro or am Schreibtisch. The computer is « der Computer », the meeting « die Besprechung ».",
      examples: [
        { target: "Ich arbeite bei einer Firma in Hamburg.", fr: "Je travaille dans une entreprise à Hambourg.", en: "I work at a company in Hamburg." },
        { target: "Wir arbeiten an einem neuen Projekt.", fr: "Nous travaillons sur un nouveau projet.", en: "We are working on a new project." },
        { target: "Meine Kollegen sind sehr freundlich.", fr: "Mes collègues sont très sympathiques.", en: "My colleagues are very friendly." },
        { target: "Die Besprechung ist um zehn Uhr im Büro.", fr: "La réunion est à dix heures au bureau.", en: "The meeting is at ten o'clock in the office." },
      ],
      vocab: [
        { target: "die Arbeit", fr: "le travail", en: "the work" },
        { target: "das Büro", fr: "le bureau", en: "the office" },
        { target: "die Firma", fr: "l'entreprise", en: "the company" },
        { target: "der Kollege / die Kollegin", fr: "le collègue / la collègue", en: "the colleague" },
        { target: "das Projekt", fr: "le projet", en: "the project" },
        { target: "die Besprechung", fr: "la réunion", en: "the meeting" },
        { target: "der Computer", fr: "l'ordinateur", en: "the computer" },
        { target: "der Termin", fr: "le rendez-vous", en: "the appointment" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Die Besprechung ist ___. » (dans le bureau)",
          promptEn: "Complete: « Die Besprechung ist ___. » (in the office)",
          accept: ["im Büro"],
          explain: "On travaille « im Büro » (dans le bureau) ; « auf » ne s'emploie pas avec « Büro » ici.",
          explainEn: "You work « im Büro » (in the office); « auf » is not used with « Büro » here.",
        },
        {
          prompt: "Comment dit-on « nous travaillons » ?",
          promptEn: "How do you say « we work »?",
          options: ["wir arbeiten", "wir arbeitet", "wir arbeitst"],
          accept: ["wir arbeiten"],
          explain: "« arbeiten » à la première personne du pluriel : wir arbeiten.",
          explainEn: "« arbeiten » in the first person plural: wir arbeiten.",
        },
        {
          prompt: "Complétez : « Wir arbeiten ___ einem Projekt. » (sur)",
          promptEn: "Complete: « Wir arbeiten ___ einem Projekt. » (on)",
          accept: ["an"],
          explain: "Travailler sur un projet se dit « an einem Projekt arbeiten » (an + datif).",
          explainEn: "Working on a project is « an einem Projekt arbeiten » (an + dative).",
        },
      ],
    },
    {
      number: 8,
      slug: "de-08",
      title: "Faire des achats et commander",
      titleEn: "Shopping and ordering",
      summary:
        "Achetez sur le marché et commandez au restaurant : der Markt, das Restaurant, möchten.",
      summaryEn:
        "Shop at the market and order at the restaurant: der Markt, das Restaurant, möchten.",
      grammar: [
        "Le conditionnel de politesse « möchte » (je voudrais)",
        "L'accusatif après « haben » et « kaufen »",
        "Les phrases utiles : Was kostet das? Die Rechnung, bitte.",
      ],
      explanation:
        "Au marché ou au restaurant, le verbe de politesse est « möchten » (je voudrais) : ich möchte einen Apfel, ich möchte ein Wasser. « möchten » régit l'accusatif : einen Apfel, eine Suppe, ein Bier. Pour demander le prix : « Was kostet das? » (Combien ça coûte ?). Pour commander, on dit aussi « Ich hätte gern … » (Je prendrais bien…). À la fin du repas, on demande l'addition : « Die Rechnung, bitte. » Les commerçants demandent « Kann ich Ihnen helfen? » (Puis-je vous aider ?).",
      explanationEn:
        "At the market or restaurant, the polite verb is « möchten » (I would like): ich möchte einen Apfel, ich möchte ein Wasser. « möchten » takes the accusative: einen Apfel, eine Suppe, ein Bier. To ask the price: « Was kostet das? » (How much does it cost?). To order, you can also say « Ich hätte gern … » (I would like…). At the end of the meal, ask for the bill: « Die Rechnung, bitte. » Shopkeepers ask « Kann ich Ihnen helfen? » (Can I help you?).",
      examples: [
        { target: "Ich möchte einen Apfel und ein Brot, bitte.", fr: "Je voudrais une pomme et un pain, s'il vous plaît.", en: "I would like an apple and a loaf of bread, please." },
        { target: "Was kostet das Kilo Äpfel?", fr: "Combien coûte le kilo de pommes ?", en: "How much is the kilo of apples?" },
        { target: "Die Suppe schmeckt sehr gut.", fr: "La soupe est très bonne.", en: "The soup tastes very good." },
        { target: "Die Rechnung, bitte!", fr: "L'addition, s'il vous plaît !", en: "The bill, please!" },
      ],
      vocab: [
        { target: "der Markt", fr: "le marché", en: "the market" },
        { target: "das Restaurant", fr: "le restaurant", en: "the restaurant" },
        { target: "kaufen", fr: "acheter", en: "to buy" },
        { target: "bestellen", fr: "commander", en: "to order" },
        { target: "der Apfel", fr: "la pomme", en: "the apple" },
        { target: "das Brot", fr: "le pain", en: "the bread" },
        { target: "das Wasser", fr: "l'eau", en: "the water" },
        { target: "die Rechnung", fr: "l'addition, la facture", en: "the bill" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ einen Apfel. » (je voudrais)",
          promptEn: "Complete: « Ich ___ einen Apfel. » (I would like)",
          accept: ["möchte"],
          explain: "« möchten » est la forme de politesse : ich möchte (je voudrais).",
          explainEn: "« möchten » is the polite form: ich möchte (I would like).",
        },
        {
          prompt: "Comment dit-on « Combien ça coûte ? » ?",
          promptEn: "How do you say « How much does it cost? »?",
          options: ["Was kostet das?", "Wie heißen Sie?", "Was ist das?"],
          accept: ["Was kostet das?"],
          explain: "Pour demander un prix : « Was kostet das? ». Les autres questions portent sur le nom et l'identité.",
          explainEn: "To ask a price: « Was kostet das? ». The other questions are about names and identity.",
        },
        {
          prompt: "Complétez : « ___ Rechnung, bitte! » (l'addition)",
          promptEn: "Complete: « ___ Rechnung, bitte! » (the bill)",
          accept: ["Die"],
          explain: "« Rechnung » est féminin : die Rechnung. On utilisera aussi « bitte » pour la politesse.",
          explainEn: "« Rechnung » is feminine: die Rechnung. Use « bitte » for politeness.",
        },
      ],
    },
    {
      number: 9,
      slug: "de-09",
      title: "Le temps, la météo et l'heure",
      titleEn: "Weather, time and clocks",
      summary:
        "Parlez du temps qu'il fait, des saisons et de l'heure : Es ist kalt, Um wie viel Uhr?",
      summaryEn:
        "Talk about the weather, the seasons and the time: Es ist kalt, Um wie viel Uhr?",
      grammar: [
        "La météo impersonnelle : es ist + adjectif, es regnet, es schneit",
        "L'heure : Es ist ein Uhr, Um wie viel Uhr?",
        "Les saisons : der Frühling, der Sommer, der Herbst, der Winter",
      ],
      explanation:
        "En allemand, la météo est impersonnelle : on emploie toujours « es » avec le verbe : es regnet (il pleut), es schneit (il neige), es ist kalt (il fait froid), es ist sonnig (il fait soleil). L'heure se dit avec « Es ist » et les chiffres : Es ist ein Uhr (il est une heure), Es ist drei Uhr. Pour demander l'heure d'un événement : « Um wie viel Uhr? » (À quelle heure ?). Les saisons s'emploient avec « im » : im Winter (en hiver), im Sommer (en été). Le froid comme le chaud se disent « Es ist kalt / Es ist heiß ».",
      explanationEn:
        "In German, weather is impersonal: you always use « es » with the verb: es regnet (it is raining), es schneit (it is snowing), es ist kalt (it is cold), es ist sonnig (it is sunny). Time is expressed with « Es ist » plus the numbers: Es ist ein Uhr (it is one o'clock), Es ist drei Uhr. To ask the time of an event: « Um wie viel Uhr? » (At what time?). Seasons take « im »: im Winter (in winter), im Sommer (in summer). Cold and hot are « Es ist kalt / Es ist heiß ».",
      examples: [
        { target: "Es ist kalt und es schneit.", fr: "Il fait froid et il neige.", en: "It is cold and it is snowing." },
        { target: "Es ist drei Uhr nachmittags.", fr: "Il est trois heures de l'après-midi.", en: "It is three o'clock in the afternoon." },
        { target: "Um wie viel Uhr beginnt die Sitzung?", fr: "À quelle heure commence la réunion ?", en: "At what time does the meeting begin?" },
        { target: "Im Sommer ist es warm und sonnig.", fr: "En été, il fait chaud et il fait soleil.", en: "In summer it is warm and sunny." },
      ],
      vocab: [
        { target: "das Wetter", fr: "le temps (qu'il fait)", en: "the weather" },
        { target: "die Sonne", fr: "le soleil", en: "the sun" },
        { target: "der Regen", fr: "la pluie", en: "the rain" },
        { target: "der Schnee", fr: "la neige", en: "the snow" },
        { target: "kalt / warm / heiß", fr: "froid / chaud / très chaud", en: "cold / warm / hot" },
        { target: "die Uhrzeit", fr: "l'heure (moment)", en: "the time" },
        { target: "der Frühling", fr: "le printemps", en: "the spring" },
        { target: "der Sommer", fr: "l'été", en: "the summer" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Es ___, es regnet. » (il pleut)",
          promptEn: "Complete: « Es ___, es regnet. » (it is raining)",
          accept: ["regnet"],
          explain: "La météo est impersonnelle : es regnet (il pleut), es schneit (il neige).",
          explainEn: "The weather is impersonal: es regnet (it is raining), es schneit (it is snowing).",
        },
        {
          prompt: "Comment dit-on « Il est deux heures » ?",
          promptEn: "How do you say « It is two o'clock »?",
          options: ["Es ist zwei Uhr.", "Es sind zwei.", "Um zwei Uhr."],
          accept: ["Es ist zwei Uhr."],
          explain: "L'heure se construit avec « Es ist » + chiffre + Uhr : Es ist zwei Uhr.",
          explainEn: "Time is built with « Es ist » + number + Uhr: Es ist zwei Uhr.",
        },
        {
          prompt: "Complétez : « ___ Winter ist es kalt. » (en)",
          promptEn: "Complete: « ___ Winter ist es kalt. » (in)",
          accept: ["Im", "Im "],
          explain: "Les saisons s'emploient avec « im » (in + dem) : im Winter, im Sommer.",
          explainEn: "Seasons take « im » (in + dem): im Winter, im Sommer.",
        },
      ],
    },
    {
      number: 10,
      slug: "de-10",
      title: "Entretien : présente-toi et ton parcours",
      titleEn: "Interview: introduce yourself and your background",
      summary:
        "Préparez l'entretien : Ich heiße …, ich komme aus …, mein Werdegang und meine Berufserfahrung.",
      summaryEn:
        "Prepare the interview: Ich heiße …, ich komme aus …, mein Werdegang und meine Berufserfahrung.",
      grammar: [
        "Le parfait : ich habe gearbeitet, ich habe studiert",
        "La phrase « Ich habe … studiert » pour le parcours",
        "Répondre à « Erzählen Sie uns von sich » (présentez-vous)",
      ],
      explanation:
        "À l'entretien d'embauche, « Erzählen Sie uns von sich! » (Présentez-vous !) est la question la plus fréquente. Répondez en trois temps : votre identité (Ich heiße …), votre origine (Ich komme aus …), puis votre parcours. Le passé composé allemand (parfait) se forme avec « haben » + participe en fin de phrase : ich habe in Paris studiert (j'ai étudié à Paris), ich habe bei einer Firma gearbeitet (j'ai travaillé dans une entreprise). Orchestrez la réponse : présentation, formation, expérience, ce que vous cherchez aujourd'hui.",
      explanationEn:
        "In a job interview, « Erzählen Sie uns von sich! » (Tell us about yourself!) is the most common question. Answer in three steps: your identity (Ich heiße …), your origin (Ich komme aus …), then your background. The German present perfect is formed with « haben » + a past participle at the end of the sentence: ich habe in Paris studiert (I studied in Paris), ich habe bei einer Firma gearbeitet (I worked in a company). Structure your answer: introduction, education, experience, and what you are looking for today.",
      examples: [
        { target: "Guten Tag, ich heiße Lukas und komme aus München.", fr: "Bonjour, je m'appelle Lukas et je viens de Munich.", en: "Good morning, my name is Lukas and I come from Munich." },
        { target: "Ich habe Betriebswirtschaft studiert.", fr: "J'ai étudié la gestion d'entreprise.", en: "I studied business administration." },
        { target: "Ich habe drei Jahre bei einer Firma gearbeitet.", fr: "J'ai travaillé trois ans dans une entreprise.", en: "I worked for a company for three years." },
        { target: "Heute suche ich eine neue Herausforderung.", fr: "Aujourd'hui, je cherche un nouveau défi.", en: "Today I am looking for a new challenge." },
      ],
      vocab: [
        { target: "der Werdegang", fr: "le parcours professionnel", en: "the career path" },
        { target: "die Berufserfahrung", fr: "l'expérience professionnelle", en: "the professional experience" },
        { target: "studiert haben", fr: "avoir étudié", en: "to have studied" },
        { target: "gearbeitet haben", fr: "avoir travaillé", en: "to have worked" },
        { target: "die Herausforderung", fr: "le défi", en: "the challenge" },
        { target: "suchen", fr: "chercher", en: "to look for" },
        { target: "das Praktikum", fr: "le stage", en: "the internship" },
        { target: "die Stelle", fr: "le poste", en: "the position" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ in Berlin studiert. » (j'ai étudié)",
          promptEn: "Complete: « Ich ___ in Berlin studiert. » (I studied)",
          accept: ["habe"],
          explain: "Le parfait se forme avec « haben » + participe : ich habe … studiert.",
          explainEn: "The perfect tense is formed with « haben » + past participle: ich habe … studiert.",
        },
        {
          prompt: "Quelle question de l'entretien demande de se présenter ?",
          promptEn: "Which interview question asks you to introduce yourself?",
          options: ["Erzählen Sie uns von sich.", "Was kostet das?", "Um wie viel Uhr ist es?"],
          accept: ["Erzählen Sie uns von sich."],
          explain: "« Erzählen Sie uns von sich » signifie « Présentez-vous » et ouvre l'entretien.",
          explainEn: "« Erzählen Sie uns von sich » means « Tell us about yourself » and opens the interview.",
        },
        {
          prompt: "Complétez le participe passé : « Ich habe als Ingenieur ___. » (travaillé)",
          promptEn: "Complete the past participle: « Ich habe als Ingenieur ___. » (worked)",
          accept: ["gearbeitet"],
          explain: "Le participe passé de « arbeiten » est « gearbeitet » : ich habe … gearbeitet.",
          explainEn: "The past participle of « arbeiten » is « gearbeitet »: ich habe … gearbeitet.",
        },
      ],
      interview: [
        {
          question: "Erzählen Sie uns von sich.",
          fr: "Présentez-vous.",
          en: "Tell us about yourself.",
          modelFr:
            "Je m'appelle Lukas, je viens de Munich. J'ai étudié la gestion d'entreprise et j'ai trois ans d'expérience dans une entreprise. Je cherche aujourd'hui une nouvelle opportunité.",
          modelEn:
            "My name is Lukas, I come from Munich. I studied business administration and have three years of experience in a company. Today I am looking for a new opportunity.",
          accept: [
            "Ich heiße Lukas, ich komme aus München, ich habe Betriebswirtschaft studiert und ich habe drei Jahre Berufserfahrung.",
          ],
        },
        {
          question: "Was haben Sie nach Ihrem Studium gemacht?",
          fr: "Qu'avez-vous fait après vos études ?",
          en: "What did you do after your studies?",
          modelFr:
            "Après mes études, j'ai fait un stage, puis une formation en gestion de projet avant d'être embauché dans une entreprise.",
          modelEn:
            "After my studies, I did an internship, then a project management training course before being hired in a company.",
          accept: [
            "Nach meinem Studium habe ich ein Praktikum gemacht und dann in einer Firma gearbeitet.",
          ],
        },
        {
          question: "Welche Stationen umfasst Ihr beruflicher Werdegang?",
          fr: "Quelles étapes comprend votre parcours professionnel ?",
          en: "What stages does your career path include?",
          modelFr:
            "J'ai débuté comme assistant commercial, puis j'ai évolué vers un poste de chef de projet après trois ans d'expérience.",
          modelEn:
            "I started as a sales assistant, then moved to a project manager position after three years of experience.",
          accept: [
            "Mein Werdegang umfasst eine Stelle als kaufmännischer Assistent und später eine Position als Projektleiter.",
          ],
        },
      ],
    },
    {
      number: 11,
      slug: "de-11",
      title: "Entretien : atouts, faiblesses, motivation",
      titleEn: "Interview: strengths, weaknesses, motivation",
      summary:
        "Parlez de vos Stärken, de vos Schwächen et de pourquoi vous choisissez ce Unternehmen.",
      summaryEn:
        "Talk about your Stärken, your Schwächen and why you choose this Unternehmen.",
      grammar: [
        "Exprimer la cause : weil + verbe en fin de phrase",
        "Les comparatifs : sogar, auch, vor allem",
        "Structurer : Einerseits … andererseits …",
      ],
      explanation:
        "La question « Was sind Ihre Stärken und Schwächen? » (Quels sont vos atouts et vos faiblesses ?) exige des réponses honnêtes mais structurées. Pour « pourquoi cette entreprise ? », l'allemand privilégie « weil » (parce que), qui rejette le verbe conjugué en fin de proposition : Ich habe mich hier beworben, weil Ihr Unternehmen innovativ ist (Je me suis présenté ici parce que votre entreprise est innovante). Pour nuancer, on utilise « vor allem » (surtout) et « eine Schwäche kann auch eine Stärke sein » (une faiblesse peut aussi être un atout). Présentez la motivation avec « ich möchte dazu beitragen » (je veux y contribuer).",
      explanationEn:
        "The question « Was sind Ihre Stärken und Schwächen? » (What are your strengths and weaknesses?) requires honest but structured answers. For « why this company? », German prefers « weil » (because), which sends the conjugated verb to the end of the clause: Ich habe mich hier beworben, weil Ihr Unternehmen innovativ ist (I applied here because your company is innovative). To nuance, use « vor allem » (above all) and « eine Schwäche kann auch eine Stärke sein » (a weakness can also be a strength). Present your motivation with « ich möchte dazu beitragen » (I want to contribute to it).",
      examples: [
        { target: "Meine größten Stärken sind Teamgeist und Motivation.", fr: "Mes plus grands atouts sont l'esprit d'équipe et la motivation.", en: "My greatest strengths are team spirit and motivation." },
        { target: "Ich habe mich beworben, weil Ihr Unternehmen innovativ ist.", fr: "Je me suis présenté parce que votre entreprise est innovante.", en: "I applied because your company is innovative." },
        { target: "Meine Schwäche ist die Ungeduld, aber ich arbeite daran.", fr: "Ma faiblesse, c'est l'impatience, mais j'y travaille.", en: "My weakness is impatience, but I am working on it." },
        { target: "Ich möchte gern zum Erfolg Ihres Teams beitragen.", fr: "Je souhaite contribuer au succès de votre équipe.", en: "I would like to contribute to your team's success." },
      ],
      vocab: [
        { target: "die Stärke", fr: "l'atout, la force", en: "the strength" },
        { target: "die Schwäche", fr: "la faiblesse", en: "the weakness" },
        { target: "die Motivation", fr: "la motivation", en: "the motivation" },
        { target: "das Unternehmen", fr: "l'entreprise", en: "the company" },
        { target: "der Teamgeist", fr: "l'esprit d'équipe", en: "the team spirit" },
        { target: "bewerben (sich)", fr: "postuler", en: "to apply" },
        { target: "beitragen (zu)", fr: "contribuer (à)", en: "to contribute (to)" },
        { target: "innovativ", fr: "innovant", en: "innovative" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich habe mich hier beworben, ___ Ihr Unternehmen innovativ ist. » (parce que)",
          promptEn: "Complete: « Ich habe mich hier beworben, ___ Ihr Unternehmen innovativ ist. » (because)",
          accept: ["weil"],
          explain: "« weil » rejette le verbe en fin de proposition : … , weil Ihr Unternehmen innovativ ist.",
          explainEn: "« weil » sends the verb to the end of the clause: … , weil Ihr Unternehmen innovativ ist.",
        },
        {
          prompt: "Comment dit-on « la force » et « la faiblesse » ?",
          promptEn: "How do you say « strength » and « weakness »?",
          options: ["die Stärke / die Schwäche", "die Arbeit / das Büro", "der Markt / das Wasser"],
          accept: ["die Stärke / die Schwäche"],
          explain: "Les atouts et faiblesses se disent « die Stärke » et « die Schwäche ».",
          explainEn: "Strengths and weaknesses are « die Stärke » and « die Schwäche ».",
        },
        {
          prompt: "Complétez : « Ich arbeite ___ meine Schwäche. » (sur)",
          promptEn: "Complete: « Ich arbeite ___ meine Schwäche. » (on)",
          accept: ["an"],
          explain: "« an etwas arbeiten » (travailler sur quelque chose) : ich arbeite an meiner Schwäche.",
          explainEn: "« an etwas arbeiten » (to work on something): ich arbeite an meiner Schwäche.",
        },
      ],
      interview: [
        {
          question: "Was sind Ihre größten Stärken und Schwächen?",
          fr: "Quels sont vos plus grands atouts et vos faiblesses ?",
          en: "What are your greatest strengths and weaknesses?",
          modelFr:
            "Mon atout principal est l'esprit d'équipe : j'aime le travail collectif et la communication. Ma faiblesse est l'impatience, mais j'ai appris à mieux planifier.",
          modelEn:
            "My main strength is team spirit: I love collaborative work and communication. My weakness is impatience, but I have learned to plan better.",
          accept: [
            "Meine größte Stärke ist der Teamgeist, und meine Schwäche ist die Ungeduld.",
            "Meine Stärken sind Teamgeist und Motivation, meine Schwäche ist ein wenig die Ungeduld.",
          ],
        },
        {
          question: "Warum möchten Sie bei diesem Unternehmen arbeiten?",
          fr: "Pourquoi souhaitez-vous travailler dans cette entreprise ?",
          en: "Why do you want to work at this company?",
          modelFr:
            "J'apprécie vos valeurs, votre culture de l'innovation et le développement de votre équipe. Je souhaite contribuer à des projets concrets qui ont un impact.",
          modelEn:
            "I appreciate your values, your innovation culture and your team's development. I want to contribute to concrete projects that have a real impact.",
          accept: [
            "Ich möchte bei Ihnen arbeiten, weil Ihr Unternehmen innovativ ist und Ihre Werte mir wichtig sind.",
          ],
        },
        {
          question: "Wovon sind Sie bei der Arbeit besonders motiviert?",
          fr: "Qu'est-ce qui vous motive particulièrement au travail ?",
          en: "What especially motivates you at work?",
          modelFr:
            "Je suis motivé par les défis, le travail d'équipe et le sentiment d'avoir un impact concret sur le résultat.",
          modelEn:
            "I am motivated by challenges, teamwork and the feeling of having a concrete impact on the result.",
          accept: [
            "Mich motivieren Herausforderungen, Teamarbeit und ein konkretes Ergebnis.",
          ],
        },
      ],
    },
    {
      number: 12,
      slug: "de-12",
      title: "Entretien : projets, équipe, gestion du stress",
      titleEn: "Interview: goals, teamwork, stress management",
      summary:
        "Exposez vos Ziele, votre rôle en équipe et votre gestion du stress : Stressbewältigung, Termine, Druck.",
      summaryEn:
        "Present your Ziele, your team role and stress management: Stressbewältigung, Termine, Druck.",
      grammar: [
        "Le futur simple : ich werde … arbeiten, ich möchte mich weiterentwickeln",
        "Les liens de cause : deshalb, weil, um … zu",
        "Répondre aux questions de comportement (stress, équipe)",
      ],
      explanation:
        "Sur les projets, l'allemand utilise « mein Ziel ist es » (mon objectif est de) et « ich möchte mich weiterentwickeln » (je souhaite me développer). Pour le futur : ich werde … (je vais …). Pour le travail d'équipe, on parle de « Teamarbeit » et de son rôle : « Ich bringe mich gern ein » (je m'implique volontiers). La gestion du stress se dit « Stressbewältigung » : prendre du recul « ich bleibe ruhig » (je reste calme), prioriser « ich priorisiere die Aufgaben ». Pour nuancer les causes, on enchaîne : deshalb (c'est pourquoi), weil (parce que), um … zu (afin de).",
      explanationEn:
        "About goals, German uses « mein Ziel ist es » (my goal is) and « ich möchte mich weiterentwickeln » (I want to develop). For the future: ich werde … (I will …). For teamwork, talk about « Teamarbeit » and your role: « Ich bringe mich gern ein » (I like to get involved). Stress management is « Stressbewältigung »: keep perspective « ich bleibe ruhig » (I stay calm), prioritize « ich priorisiere die Aufgaben ». To express causes, link ideas: deshalb (therefore), weil (because), um … zu (in order to).",
      examples: [
        { target: "Mein Ziel ist es, mich in Ihrem Unternehmen weiterzuentwickeln.", fr: "Mon objectif est de me développer au sein de votre entreprise.", en: "My goal is to develop within your company." },
        { target: "Ich bleibe auch unter Druck ruhig.", fr: "Je reste calme même sous pression.", en: "I stay calm even under pressure." },
        { target: "Ich bringe mich gern in das Team ein.", fr: "Je m'implique volontiers dans l'équipe.", en: "I like to get involved in the team." },
        { target: "Ich priorisiere die Aufgaben, weil ich effizient arbeiten möchte.", fr: "Je priorise les tâches parce que je veux travailler efficacement.", en: "I prioritize tasks because I want to work efficiently." },
      ],
      vocab: [
        { target: "das Ziel", fr: "l'objectif", en: "the goal" },
        { target: "das Team", fr: "l'équipe", en: "the team" },
        { target: "die Teamarbeit", fr: "le travail d'équipe", en: "the teamwork" },
        { target: "der Stress", fr: "le stress", en: "the stress" },
        { target: "der Druck", fr: "la pression", en: "the pressure" },
        { target: "priorisieren", fr: "prioriser", en: "to prioritize" },
        { target: "weiterentwickeln (sich)", fr: "se développer, progresser", en: "to develop further" },
        { target: "ruhig bleiben", fr: "rester calme", en: "to stay calm" },
      ],
      exercises: [
        {
          prompt: "Complétez : « Ich ___ unter Druck ruhig. » (je reste calme)",
          promptEn: "Complete: « Ich ___ unter Druck ruhig. » (I stay calm)",
          accept: ["bleibe"],
          explain: "« bleiben » est irrégulier : ich bleibe ruhig = je reste calme.",
          explainEn: "« bleiben » is irregular: ich bleibe ruhig = I stay calm.",
        },
        {
          prompt: "Comment dit-on « le travail d'équipe » ?",
          promptEn: "How do you say « teamwork »?",
          options: ["die Teamarbeit", "das Ziel", "der Druck"],
          accept: ["die Teamarbeit"],
          explain: "« die Teamarbeit » désigne le travail d'équipe. « das Ziel » est l'objectif.",
          explainEn: "« die Teamarbeit » means teamwork. « das Ziel » is the goal.",
        },
        {
          prompt: "Complétez : « Ich möchte mich beim Team ___. » (m'impliquer)",
          promptEn: "Complete: « Ich möchte mich beim Team ___. » (get involved)",
          accept: ["einbringen"],
          explain: "« sich einbringen » = s'impliquer ; le préverbe se place en fin de phrase : mit einbringen.",
          explainEn: "« sich einbringen » = to get involved; the prefix goes to the end of the sentence.",
        },
      ],
      interview: [
        {
          question: "Wie sehen Sie sich in fünf Jahren?",
          fr: "Où vous voyez-vous dans cinq ans ?",
          en: "Where do you see yourself in five years?",
          modelFr:
            "Dans cinq ans, je souhaite être un membre clé de votre équipe, avoir développé mes compétences et dirigé des projets d'importance.",
          modelEn:
            "In five years, I hope to be a key member of your team, having developed my skills and led significant projects.",
          accept: [
            "In fünf Jahren möchte ich mich weiterentwickelt haben und wichtigere Projekte verantworten.",
          ],
        },
        {
          question: "Wie gehen Sie mit Stress und Druck um?",
          fr: "Comment gérez-vous le stress et la pression ?",
          en: "How do you deal with stress and pressure?",
          modelFr:
            "Je reste calme, je priorise mes tâches et je communique avec l'équipe pour trouver des solutions ensemble.",
          modelEn:
            "I stay calm, I prioritize my tasks and I communicate with the team to find solutions together.",
          accept: [
            "Ich bleibe ruhig, ich priorisiere die Aufgaben und ich spreche offen mit dem Team.",
          ],
        },
        {
          question: "Beschreiben Sie eine Erfahrung in einem Team.",
          fr: "Décrivez une expérience en équipe.",
          en: "Describe an experience in a team.",
          modelFr:
            "Lors d'un projet, nous avons dû repenser la planification. J'ai écouté chaque membre et j'ai proposé une nouvelle répartition des tâches, ce qui nous a permis de tenir le délai.",
          modelEn:
            "During a project, we had to rethink the planning. I listened to each member and proposed a new distribution of tasks, which allowed us to meet the deadline.",
          accept: [
            "In einem Projekt mussten wir die Planung neu denken; ich habe zugehört und eine neue Aufgabenverteilung vorgeschlagen, sodass wir den Termin gehalten haben.",
          ],
        },
      ],
    },
  ],
};