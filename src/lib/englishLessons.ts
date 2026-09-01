export interface EnglishVocab {
  en: string;
  fr: string;
}

export interface EnglishExample {
  en: string;
  fr: string;
}

export interface EnglishLesson {
  number: number;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  grammar: string[];
  explanation: string;
  explanationEn: string;
  examples: EnglishExample[];
  vocab: EnglishVocab[];
}

export const ENGLISH_LESSONS: EnglishLesson[] = [
  {
    number: 1,
    slug: "en-01",
    title: "Se présenter en anglais",
    titleEn: "Introducing yourself in English",
    summary: "Le verbe to be et les présentations de base : dire son nom, son pays, son travail.",
    summaryEn: "The verb to be and basic introductions: saying your name, your country, your job.",
    grammar: ["to be (am, is, are)", "I am / You are / He is", "Questions Yes/No"],
    explanation:
      "Tout démarre avec le verbe to be (être). Il se conjugue ainsi : I am ('Je suis'), you are, he/she/it is, we are, they are. En anglais, on ne peut jamais omettre ce verbe : on dit toujours « I am Daniel » (jamais « I Daniel »). Pour poser une question oui/non, on inverse le sujet et le verbe : « Are you French? ». Attention aux contractions très fréquentes à l'oral : I'm, you're, he's.",
    explanationEn:
      "It all starts with the verb to be. It is conjugated as follows: I am, you are, he/she/it is, we are, they are. In English, you can never omit this verb: you always say \"I am Daniel\" (never \"I Daniel\"). To ask a yes/no question, you invert the subject and the verb: \"Are you French?\" Be aware of the very common contractions used in speech: I'm, you're, he's.",
    examples: [
      { en: "Hi, I'm Daniel. Nice to meet you.", fr: "Salut, je suis Daniel. Enchanté de te rencontrer." },
      { en: "I am French. I am a student.", fr: "Je suis français. Je suis étudiant." },
      { en: "Are you from Japan?", fr: "Es-tu du Japon ?" },
      { en: "She is a teacher. They are engineers.", fr: "Elle est professeure. Ils sont ingénieurs." },
    ],
    vocab: [
      { en: "I", fr: "je" },
      { en: "you", fr: "tu, vous" },
      { en: "he / she / it", fr: "il / elle / il·elle (neutre)" },
      { en: "to be", fr: "être" },
      { en: "student", fr: "étudiant(e)" },
      { en: "teacher", fr: "professeur(e)" },
      { en: "from", fr: "de, originaire de" },
      { en: "nice to meet you", fr: "enchanté de vous rencontrer" },
    ],
  },
  {
    number: 2,
    slug: "en-02",
    title: "Salutations et politesse",
    titleEn: "Greetings and politeness",
    summary: "Les salutations du matin au soir et les formules de politesse essentielles.",
    summaryEn: "Greetings from morning to evening and essential polite expressions.",
    grammar: ["Good morning / afternoon / evening", "Comment ça va ?", "Exclamations de base"],
    explanation:
      "Les salutations varient selon le moment de la journée : Good morning (bonjour, le matin), Good afternoon (bonjour, l'après-midi), Good evening (bonsoir), Good night (bonne nuit). Pour demander comment quelqu'un va : « How are you? » On répond « I'm fine, thank you » ou « I'm good ». Après une salutation, on peut ajouter « Please » (s'il vous plaît), « Thank you / Thanks » (merci), et « You're welcome » (de rien).",
    explanationEn:
      "Greetings vary depending on the time of day: Good morning (morning greeting), Good afternoon (afternoon greeting), Good evening (evening greeting), Good night (said when going to bed). To ask how someone is doing: \"How are you?\" You reply \"I'm fine, thank you\" or \"I'm good.\" After a greeting, you can add \"Please,\" \"Thank you / Thanks,\" and \"You're welcome.\"",
    examples: [
      { en: "Good morning! How are you today?", fr: "Bonjour ! Comment ça va aujourd'hui ?" },
      { en: "I'm fine, thank you. And you?", fr: "Je vais bien, merci. Et toi ?" },
      { en: "Thank you very much. You're welcome.", fr: "Merci beaucoup. De rien." },
      { en: "Excuse me, please. Good night!", fr: "Excusez-moi, s'il vous plaît. Bonne nuit !" },
    ],
    vocab: [
      { en: "good morning", fr: "bonjour (matin)" },
      { en: "good afternoon", fr: "bonjour (après-midi)" },
      { en: "good evening", fr: "bonsoir" },
      { en: "good night", fr: "bonne nuit" },
      { en: "please", fr: "s'il vous plaît" },
      { en: "thank you", fr: "merci" },
      { en: "you're welcome", fr: "de rien" },
      { en: "excuse me", fr: "excusez-moi" },
    ],
  },
  {
    number: 3,
    slug: "en-03",
    title: "Les nombres et l'heure",
    titleEn: "Numbers and telling the time",
    summary: "Compter de 1 à 100, dire l'heure et les numéros de téléphone.",
    summaryEn: "Counting from 1 to 100, telling the time, and phone numbers.",
    grammar: ["Nombres 0–100", "Dire l'heure (o'clock, half past, quarter)", "Numéros de téléphone"],
    explanation:
      "Les nombres de 1 à 20 sont à mémoriser (one, two, three… twenty). Puis on combine les dizaines et les unités : 25 se dit twenty-five, 67 se dit sixty-seven. Pour l'heure : « It's three o'clock » (il est trois heures), « half past three » (trois heures et demie), « quarter past » (et quart), « quarter to » (moins le quart). Un numéro de téléphone se lit chiffre par chiffre.",
    explanationEn:
      "The numbers from 1 to 20 must be memorized (one, two, three… twenty). Then you combine the tens and the units: 25 is twenty-five, 67 is sixty-seven. For the time: \"It's three o'clock,\" \"half past three\" (three-thirty), \"quarter past\" (a quarter after), \"quarter to\" (a quarter before). A phone number is read digit by digit.",
    examples: [
      { en: "I have three brothers and two sisters.", fr: "J'ai trois frères et deux sœurs." },
      { en: "What time is it? It's half past eight.", fr: "Quelle heure est-il ? Il est huit heures et demie." },
      { en: "My phone number is 06 12 34 56 78.", fr: "Mon numéro de téléphone est le 06 12 34 56 78." },
      { en: "She is twenty-five years old.", fr: "Elle a vingt-cinq ans." },
    ],
    vocab: [
      { en: "one / two / three", fr: "un / deux / trois" },
      { en: "ten / twenty / hundred", fr: "dix / vingt / cent" },
      { en: "time", fr: "heure, temps" },
      { en: "o'clock", fr: "heures (pile)" },
      { en: "half past", fr: "et demie" },
      { en: "years old", fr: "ans (âge)" },
      { en: "phone number", fr: "numéro de téléphone" },
    ],
  },
  {
    number: 4,
    slug: "en-04",
    title: "La famille et les personnes",
    titleEn: "Family and people",
    summary: "Le vocabulaire de la famille et les adjectifs possessifs (my, your, his…).",
    summaryEn: "Family vocabulary and possessive adjectives (my, your, his…).",
    grammar: ["Adjectifs possessifs (my, your, his, her)", "Vocabulaire de la famille", "Décrire une personne"],
    explanation:
      "Les adjectifs possessifs s'accordent avec le possesseur, pas avec l'objet : my (mon/ma), your (ton/ta), his (son, à lui), her (son, à elle), our (notre), their (leur). Exemple : « her brother » (son frère à elle) mais « his sister » (sa sœur à lui). Ils sont invariables : on ne dit jamais « my sœurs », mais « my sisters ». Pour décrire quelqu'un, on utilise to be : « She is tall » (elle est grande).",
    explanationEn:
      "Possessive adjectives agree with the possessor, not with the object: my, your, his (his), her (hers), our, their. For example: \"her brother\" but \"his sister.\" They are invariable, so the adjective never changes form. To describe someone, you use to be: \"She is tall.\"",
    examples: [
      { en: "This is my family. This is my mother.", fr: "Voici ma famille. Voici ma mère." },
      { en: "Her brother is a doctor. His sister is a nurse.", fr: "Son frère (à elle) est médecin. Sa sœur (à lui) est infirmière." },
      { en: "Our parents live in Lyon.", fr: "Nos parents habitent à Lyon." },
      { en: "Your father is very kind.", fr: "Ton père est très gentil." },
    ],
    vocab: [
      { en: "family", fr: "famille" },
      { en: "mother / father", fr: "mère / père" },
      { en: "brother / sister", fr: "frère / sœur" },
      { en: "son / daughter", fr: "fils / fille" },
      { en: "my / your / his / her", fr: "mon/ma / ton/ta / son / sa" },
      { en: "parents", fr: "parents" },
      { en: "tall / kind", fr: "grand / gentil" },
    ],
  },
  {
    number: 5,
    slug: "en-05",
    title: "Manger et boire",
    titleEn: "Eating and drinking",
    summary: "Le vocabulaire des aliments et le présent simple pour commander.",
    summaryEn: "Food vocabulary and the simple present for ordering.",
    grammar: ["Présent simple (I eat, you drink)", "Le verbe have (prendre, manger)", "Commander poliment"],
    explanation:
      "Le présent simple décrit des habitudes et des vérités générales : « I eat breakfast at seven » (je prends le petit-déjeuner à sept heures), « They drink coffee every morning ». À la 3e personne du singulier (he/she/it), on ajoute -s : « She eats rice ». Le verbe have sert souvent pour manger/boire : « I have a sandwich ». Utilisez « I would like… » pour commander poliment.",
    explanationEn:
      "The simple present describes habits and general truths: \"I eat breakfast at seven,\" \"They drink coffee every morning.\" In the third person singular (he/she/it), you add -s: \"She eats rice.\" The verb have is often used for eating and drinking: \"I have a sandwich.\" Use \"I would like…\" to order politely.",
    examples: [
      { en: "I eat breakfast at seven o'clock.", fr: "Je prends le petit-déjeuner à sept heures." },
      { en: "She drinks tea every morning.", fr: "Elle boit du thé chaque matin." },
      { en: "I would like a sandwich and a coffee, please.", fr: "Je voudrais un sandwich et un café, s'il vous plaît." },
      { en: "They have dinner at eight in the evening.", fr: "Ils dînent à huit heures du soir." },
    ],
    vocab: [
      { en: "breakfast / lunch / dinner", fr: "petit-déj / déjeuner / dîner" },
      { en: "to eat / to drink", fr: "manger / boire" },
      { en: "to have", fr: "avoir (aussi : prendre)" },
      { en: "bread / rice / water", fr: "pain / riz / eau" },
      { en: "coffee / tea", fr: "café / thé" },
      { en: "I would like", fr: "je voudrais" },
      { en: "every morning", fr: "chaque matin" },
    ],
  },
  {
    number: 6,
    slug: "en-06",
    title: "Le temps et les saisons",
    titleEn: "Weather and seasons",
    summary: "Parler de la météo, des saisons et des activités selon le temps.",
    summaryEn: "Talking about the weather, seasons, and activities depending on the weather.",
    grammar: ["It is + adjectif", "Le présent simple pour les goûts", "seasons (pourquoi) / therefore"],
    explanation:
      "Pour la météo, on utilise toujours « It » comme sujet : « It is sunny » (il fait soleil), « It is raining » (il pleut), « It is cold » (il fait froid). Pour les goûts, le verbe like se conjugue au présent simple : « I like summer » mais « She likes winter » (avec -s). On peut relier une idée avec so (donc) : « It is sunny, so I play outside » (il fait soleil, donc je joue dehors).",
    explanationEn:
      "For the weather, you always use \"It\" as the subject: \"It is sunny,\" \"It is raining,\" \"It is cold.\" For likes, the verb like is conjugated in the simple present: \"I like summer\" but \"She likes winter\" (with -s). You can link two ideas with so (therefore): \"It is sunny, so I play outside.\"",
    examples: [
      { en: "It is sunny today. Let's go outside!", fr: "Il fait soleil aujourd'hui. Sortons !" },
      { en: "I like winter because I love the snow.", fr: "J'aime l'hiver parce que j'adore la neige." },
      { en: "It is raining, so we stay at home.", fr: "Il pleut, donc nous restons à la maison." },
      { en: "In summer, we go to the beach.", fr: "En été, nous allons à la plage." },
    ],
    vocab: [
      { en: "weather", fr: "météo, temps qu'il fait" },
      { en: "sunny / rainy / cloudy", fr: "ensoleillé / pluvieux / nuageux" },
      { en: "cold / hot / windy", fr: "froid / chaud / venteux" },
      { en: "spring / summer / autumn / winter", fr: "printemps / été / automne / hiver" },
      { en: "to like", fr: "aimer" },
      { en: "because", fr: "parce que" },
      { en: "so", fr: "donc" },
    ],
  },
  {
    number: 7,
    slug: "en-07",
    title: "Les transports et se déplacer",
    titleEn: "Transport and getting around",
    summary: "Demander son chemin et prendre les transports en commun.",
    summaryEn: "Asking for directions and using public transport.",
    grammar: ["Prepositions (on, at, from…to)", "Impératif poli (turn left, go straight)", "How far / How long"],
    explanation:
      "Les moyens de transport utilisent l'article zéro avec by : « by bus », « by train », « on foot » (à pied). Pour donner un itinéraire : « Turn left » (tournez à gauche), « Turn right » (à droite), « Go straight » (tout droit). Demandez avec « Excuse me, where is the station? ». « From A to B » exprime un trajet : « from Paris to Lyon ». « How long does it take? » pour la durée.",
    explanationEn:
      "Means of transport use the zero article with by: \"by bus,\" \"by train,\" \"on foot.\" To give directions: \"Turn left,\" \"Turn right,\" \"Go straight.\" Ask with \"Excuse me, where is the station?\" \"From A to B\" expresses a journey: \"from Paris to Lyon.\" Use \"How long does it take?\" for the duration.",
    examples: [
      { en: "Excuse me, where is the bus station?", fr: "Excusez-moi, où est la gare routière ?" },
      { en: "Turn left at the traffic light.", fr: "Tournez à gauche au feu." },
      { en: "Go straight ahead, the bank is on your right.", fr: "Allez tout droit, la banque est sur votre droite." },
      { en: "I go to work by train every day.", fr: "Je vais au travail en train chaque jour." },
    ],
    vocab: [
      { en: "bus / train / plane", fr: "bus / train / avion" },
      { en: "station / airport", fr: "gare / aéroport" },
      { en: "to turn left/right", fr: "tourner à gauche/droite" },
      { en: "go straight", fr: "aller tout droit" },
      { en: "on foot", fr: "à pied" },
      { en: "traffic light", fr: "feu de circulation" },
      { en: "how long", fr: "combien de temps" },
    ],
  },
  {
    number: 8,
    slug: "en-08",
    title: "Les vêtements et les couleurs",
    titleEn: "Clothes and colours",
    summary: "Décrire ce qu'on porte : vêtements, couleurs et adjectifs.",
    summaryEn: "Describing what you wear: clothes, colours, and adjectives.",
    grammar: ["to wear (porter)", "Adjectifs et ordre des mots", "Couleurs"],
    explanation:
      "Pour dire ce qu'on porte, on utilise to wear : « I wear a blue shirt » (je porte une chemise bleue). En anglais, l'adjectif se place toujours avant le nom, jamais après : « a red dress », pas « a dress red ». L'ordre est souvent : couleur + nom. Pour demander la couleur : « What color is it? ». Les vêtements au pluriel portent toujours un -s et se comptent avec a pair of : « a pair of shoes » (une paire de chaussures).",
    explanationEn:
      "To say what you are wearing, you use to wear: \"I wear a blue shirt.\" In English, the adjective always goes before the noun, never after: \"a red dress,\" not \"a dress red.\" The order is often: colour + noun. To ask about colour: \"What color is it?\" Plural items of clothing always end in -s and are counted with a pair of: \"a pair of shoes.\"",
    examples: [
      { en: "Today I am wearing a blue shirt.", fr: "Aujourd'hui, je porte une chemise bleue." },
      { en: "She has a beautiful red dress.", fr: "Elle a une belle robe rouge." },
      { en: "Where are my shoes? I need a pair of socks.", fr: "Où sont mes chaussures ? J'ai besoin d'une paire de chaussettes." },
      { en: "What color is your jacket? It's black.", fr: "De quelle couleur est ta veste ? Elle est noire." },
    ],
    vocab: [
      { en: "to wear", fr: "porter (un vêtement)" },
      { en: "shirt / dress / shoes", fr: "chemise / robe / chaussures" },
      { en: "jacket / coat", fr: "veste / manteau" },
      { en: "red / blue / black / white", fr: "rouge / bleu / noir / blanc" },
      { en: "a pair of", fr: "une paire de" },
      { en: "color", fr: "couleur" },
      { en: "beautiful", fr: "beau, belle" },
    ],
  },
  {
    number: 9,
    slug: "en-09",
    title: "Les jours, les mois et le calendrier",
    titleEn: "Days, months, and the calendar",
    summary: "La semaine, les mois, les dates et les rendez-vous.",
    summaryEn: "The week, the months, dates, and appointments.",
    grammar: ["Jours et mois", "Prépositions on / in", "Dire la date"],
    explanation:
      "Les jours portent une majuscule en anglais : Monday, Tuesday… Sunday. On emploie on devant un jour précis (« on Monday ») ou une date complète (« on May 5th »), et in devant un mois ou une année (« in May », « in 2025 »). Pour écrire une date, le mois vient souvent avant le jour : May 5th (le 5 mai). Demandez le jour avec « What day is it today? » et la date avec « What's the date today? ».",
    explanationEn:
      "The days are capitalized in English: Monday, Tuesday… Sunday. You use on before a specific day (\"on Monday\") or a complete date (\"on May 5th\"), and in before a month or a year (\"in May,\" \"in 2025\"). To write a date, the month often comes before the day: May 5th. Ask for the day with \"What day is it today?\" and for the date with \"What's the date today?\"",
    examples: [
      { en: "Today is Monday. Tomorrow is Tuesday.", fr: "Aujourd'hui c'est lundi. Demain c'est mardi." },
      { en: "My birthday is on June 10th.", fr: "Mon anniversaire est le 10 juin." },
      { en: "We have a meeting on Friday at nine.", fr: "Nous avons une réunion vendredi à neuf heures." },
      { en: "In December, it's very cold.", fr: "En décembre, il fait très froid." },
    ],
    vocab: [
      { en: "Monday / Tuesday / Sunday", fr: "lundi / mardi / dimanche" },
      { en: "January / May / December", fr: "janvier / mai / décembre" },
      { en: "today / tomorrow / yesterday", fr: "aujourd'hui / demain / hier" },
      { en: "birthday", fr: "anniversaire" },
      { en: "meeting / appointment", fr: "réunion / rendez-vous" },
      { en: "date", fr: "date" },
    ],
  },
  {
    number: 10,
    slug: "en-10",
    title: "Décrire et comparer",
    titleEn: "Describing and comparing",
    summary: "Les adjectifs et le comparatif pour décrire les choses et les personnes.",
    summaryEn: "Adjectives and the comparative for describing things and people.",
    grammar: ["Adjectifs qualificatifs", "Comparatif (bigger, more…)", "Superlatif (the biggest)"],
    explanation:
      "Pour comparer, les adjectifs courts prennent -er : big → bigger (plus grand), tall → taller, et le superlatif -est : the biggest (le plus grand). Les adjectifs longs utilisent more et the most : expensive → more expensive → the most expensive. Attention aux irréguliers : good/better/the best et bad/worse/the worst. « Than » signifie « que » dans une comparaison : « She is taller than me » (elle est plus grande que moi).",
    explanationEn:
      "To compare, short adjectives take -er: big → bigger, tall → taller, and the superlative -est: the biggest. Long adjectives use more and the most: expensive → more expensive → the most expensive. Watch out for the irregular ones: good/better/the best and bad/worse/the worst. \"Than\" means \"que\" in a comparison: \"She is taller than me.\"",
    examples: [
      { en: "Paris is bigger than Lyon.", fr: "Paris est plus grand que Lyon." },
      { en: "This house is more expensive than that one.", fr: "Cette maison est plus chère que celle-là." },
      { en: "He is the best player on the team.", fr: "C'est le meilleur joueur de l'équipe." },
      { en: "My car is faster than yours, but yours is more comfortable.", fr: "Ma voiture est plus rapide que la tienne, mais la tienne est plus confortable." },
    ],
    vocab: [
      { en: "big / bigger / the biggest", fr: "grand / plus grand / le plus grand" },
      { en: "good / better / the best", fr: "bon / meilleur / le meilleur" },
      { en: "bad / worse / the worst", fr: "mauvais / pire / le pire" },
      { en: "than", fr: "que (comparatif)" },
      { en: "expensive", fr: "cher, coûteux" },
      { en: "fast / slow", fr: "rapide / lent" },
      { en: "comfortable", fr: "confortable" },
    ],
  },
];

export function getEnglishLesson(slug: string): EnglishLesson | undefined {
  return ENGLISH_LESSONS.find((l) => l.slug === slug);
}
