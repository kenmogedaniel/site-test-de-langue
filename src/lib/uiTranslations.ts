/** Langues d'interface supportées par le site. */
export type InterfaceLang = "fr" | "en";

/** Dictionnaire FR/EN des textes d'interface partagés (landing, header, footer). */
type Entry = { fr: string; en: string };

export const UI: Record<string, Entry> = {
  // Header
  "nav.langues": { fr: "Langues", en: "Languages" },
  "nav.lecons": { fr: "Leçons", en: "Lessons" },
  "nav.fonctionnalites": { fr: "Fonctionnalités", en: "Features" },
  "nav.guides": { fr: "Guides", en: "Guides" },
  "header.tagline": { fr: "langues", en: "languages" },
  "header.langueToLearn": { fr: "Langue à apprendre", en: "Language to learn" },
  "header.actif": { fr: "Actif", en: "Active" },
  "header.bientot": { fr: "Bientôt", en: "Soon" },
  "header.monEspace": { fr: "Mon espace", en: "My space" },
  "header.seConnecter": { fr: "Se connecter", en: "Log in" },
  "header.commencer": { fr: "Commencer", en: "Start" },
  "header.creerCompte": { fr: "Créer un compte gratuit", en: "Create a free account" },
  "header.menu": { fr: "Menu", en: "Menu" },

  // Hero landing
  "hero.welcome": { fr: "Bonjour {name}", en: "Hello {name}" },
  "hero.welcomeGuest": { fr: "Bonjour et bienvenue", en: "Hello and welcome" },
  "hero.back": { fr: "Ravis de vous revoir. Chaque langue a sa porte : ouvrez la vôtre.", en: "Glad to see you again. Every language has its door: open yours." },
  "hero.eyebrow": { fr: "Plateforme d'apprentissage des langues", en: "Language learning platform" },
  "hero.title1": { fr: "Chaque langue a sa porte.", en: "Every language has its door." },
  "hero.title2": { fr: "Ouvrez la vôtre.", en: "Open yours." },
  "hero.subtitle": {
    fr: "Alphabets, niveaux officiels, tests blancs et entraînement à l'entretien — tout ce qu'il faut pour se présenter le jour J avec confiance. Des millions d'apprenants mémorisent chaque jour quelques mots de plus ; rejoignez-les.",
    en: "Alphabets, official levels, mock tests and interview practice — everything you need to show up on the big day with confidence. Millions of learners memorize a few more words every day; join them.",
  },
  "hero.ctaStart": { fr: "Commencer gratuitement", en: "Start for free" },
  "hero.ctaDashboard": { fr: "Mon entraînement", en: "My training" },
  "hero.ctaLogin": { fr: "J'ai déjà un compte", en: "I already have an account" },

  // Stats
  "stat.langues": { fr: "langues disponibles", en: "languages available" },
  "stat.lecons": { fr: "leçons guidées", en: "guided lessons" },
  "stat.modes": { fr: "modes d'exercice", en: "exercise modes" },

  // Section langues
  "langues.title": { fr: "Choisissez une langue", en: "Choose a language" },
  "langues.subtitle": {
    fr: "Deux langues sont disponibles pour l'instant ; les autres arrivent bientôt.",
    en: "Two languages are available for now; the others are coming soon.",
  },
  "langues.discover": { fr: "Découvrir →", en: "Discover →" },
  "langues.soon": { fr: "Bientôt disponible", en: "Coming soon" },
  "langues.desc.ja": {
    fr: "Alphabets, kanji, niveaux officiels et entraînement à l'entretien.",
    en: "Alphabets, kanji, official levels and interview practice.",
  },
  "langues.desc.en": {
    fr: "Leçons guidées, vocabulaire et audio natif pour débuter.",
    en: "Guided lessons, vocabulary and native audio to get started.",
  },

  // Fonctionnalités
  "features.eyebrow": { fr: "Tout est réuni", en: "Everything in one place" },
  "features.title": {
    fr: "Comment apprendre une langue — et tenir sur la durée ?",
    en: "How do you learn a language — and stick with it?",
  },
  "features.subtitle": {
    fr: "La motivation est la clé : elle fait réussir, son absence fait abandonner. L'application est conçue pour vous la maintenir, leçon après leçon.",
    en: "Motivation is key: it makes you succeed, its absence makes you quit. The app is designed to keep it going, lesson after lesson.",
  },

  // Features cards
  "feat.leconsGuides": { fr: "Leçons guidées", en: "Guided lessons" },
  "feat.leconsGuides.desc": {
    fr: "Alphabets pas à pas, avec audio natif et auto-évaluation honnête.",
    en: "Step-by-step alphabets, with native audio and honest self-assessment.",
  },
  "feat.entretien": { fr: "Entraînement à l'entretien", en: "Interview practice" },
  "feat.entretien.desc": {
    fr: "Des questions réelles, en 3 modes d'exercice : QCM, réponse libre ou structurée.",
    en: "Real questions in 3 exercise modes: multiple choice, free or structured answers.",
  },
  "feat.correction": { fr: "Correction intelligente", en: "Smart correction" },
  "feat.correction.desc": {
    fr: "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
    en: "An AI assesses your written and spoken answers and tells you how to improve.",
  },
  "feat.audio": { fr: "Audio intégré", en: "Built-in audio" },
  "feat.audio.desc": {
    fr: "Écoutez chaque mot et chaque question à voix haute pour travailler l'oreille.",
    en: "Listen to every word and question aloud to train your ear.",
  },
  "feat.progression": { fr: "Suivi de progression", en: "Progress tracking" },
  "feat.progression.desc": {
    fr: "Historique complet, statistiques par session et points à revoir signalés.",
    en: "Full history, per-session stats and flagged review points.",
  },
  "feat.certification": { fr: "Objectif certification", en: "Certification goal" },
  "feat.certification.desc": {
    fr: "Parcours aligné sur les niveaux officiels, pour viser le certificat.",
    en: "A path aligned to official levels, to aim for the certificate.",
  },

  // CTA final
  "cta.title": { fr: "Faites fleurir votre apprentissage", en: "Make your learning bloom" },
  "cta.subtitle": {
    fr: "Commencez les leçons gratuitement, progressez à votre rythme et arrivez prêt le jour de l'examen ou de l'entretien.",
    en: "Start the lessons for free, progress at your own pace and arrive ready on exam or interview day.",
  },
  "cta.retour": { fr: "Retourner à mon entraînement", en: "Back to my training" },
  "cta.creerCompte": { fr: "Créer un compte gratuit", en: "Create a free account" },
  "cta.discoverJa": { fr: "Découvrir le japonais", en: "Discover Japanese" },
  "cta.discoverEn": { fr: "Découvrir l'anglais", en: "Discover English" },

  // Footer
  "footer.tagline": {
    fr: "Plateforme d'apprentissage des langues pensée pour les francophones : alphabets, vocabulaire, examens et entretiens.",
    en: "A language learning platform: alphabets, vocabulary, exams and interviews.",
  },
  "footer.web": { fr: "Disponible sur le web — aucun téléchargement requis", en: "Available on the web — no download required" },
  "footer.findLang": { fr: "Trouve ta langue", en: "Find your language" },
  "footer.explore": { fr: "Explorer", en: "Explore" },
  "footer.allLangs": { fr: "Toutes les langues", en: "All languages" },
  "footer.learnJa": { fr: "Apprendre le japonais", en: "Learn Japanese" },
  "footer.leconsKana": { fr: "Leçons (kana + cours)", en: "Lessons (kana + course)" },
  "footer.trainHiragana": { fr: "Entraînement hiragana", en: "Hiragana trainer" },
  "footer.guides": { fr: "Guides et articles", en: "Guides and articles" },
  "footer.learnEn": { fr: "Apprendre l'anglais", en: "Learn English" },
  "footer.leconsEn": { fr: "Leçons d'anglais", en: "English lessons" },
  "footer.createAccount": { fr: "Créer un compte", en: "Create an account" },
  "footer.login": { fr: "Se connecter", en: "Log in" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.motto": { fr: "Chaque langue a sa porte : ouvrez la vôtre.", en: "Every language has its door: open yours." },

  // --- Hublot japonais (ja/) ---
  "ja.allLangs": { fr: "← Toutes les langues", en: "← All languages" },
  "ja.heroTitle1": { fr: "Apprenez", en: "Learn" },
  "ja.heroTitle2": { fr: "le japonais", en: "Japanese" },
  "ja.heroSubtitle": {
    fr: "Un parcours complet, de l'alphabet à l'entretien d'admission : leçons, audio, correction intelligente et suivi de progression. Commencez gratuitement, progressez à votre rythme.",
    en: "A complete path, from the alphabet to the admission interview: lessons, audio, smart correction and progress tracking. Start for free, progress at your own pace.",
  },
  "ja.ctaContinue": { fr: "Continuer", en: "Continue" },
  "ja.ctaStart": { fr: "Commencer gratuitement", en: "Start for free" },
  "ja.tryHiragana": { fr: "Essayer les hiragana", en: "Try hiragana" },

  "ja.methodEyebrow": { fr: "La méthode", en: "The method" },
  "ja.methodTitle": { fr: "Comment apprendre le japonais ?", en: "How do you learn Japanese?" },
  "ja.methodSubtitle": {
    fr: "Ce n'est un secret pour personne : la motivation est la clé. Choisissez les sujets qui vous intéressent, la méthode qui vous convient, et laissez la progression faire le reste.",
    en: "It's no secret: motivation is key. Choose the topics you care about, the method that suits you, and let progress do the rest.",
  },
  "ja.feat.leconsGuidees": { fr: "Leçons guidées", en: "Guided lessons" },
  "ja.feat.leconsGuidees.desc": {
    fr: "Les 46 hiragana pas à pas, avec audio natif et auto-évaluation honnête.",
    en: "The 46 hiragana step by step, with native audio and honest self-assessment.",
  },
  "ja.feat.entretien": { fr: "Entraînement à l'entretien", en: "Interview practice" },
  "ja.feat.entretien.desc": {
    fr: "95 questions réelles d'entretien, 3 modes d'exercice, du QCM à la réponse libre.",
    en: "95 real interview questions, 3 exercise modes, from multiple choice to free answers.",
  },
  "ja.feat.correction": { fr: "Correction intelligente", en: "Smart correction" },
  "ja.feat.correction.desc": {
    fr: "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
    en: "An AI assesses your written and spoken answers and tells you how to improve.",
  },
  "ja.feat.audio": { fr: "Audio intégré", en: "Built-in audio" },
  "ja.feat.audio.desc": {
    fr: "Écoutez chaque mot et chaque question à voix haute pour travailler l'oreille.",
    en: "Listen to every word and question aloud to train your ear.",
  },
  "ja.feat.suivi": { fr: "Suivi de progression", en: "Progress tracking" },
  "ja.feat.suivi.desc": {
    fr: "Historique complet, statistiques par session et questions à revoir signalées.",
    en: "Full history, per-session stats and flagged review points.",
  },
  "ja.feat.certification": { fr: "Objectif certification", en: "Certification goal" },
  "ja.feat.certification.desc": {
    fr: "Parcours aligné sur les niveaux du JLPT, de N5 à N1, pour viser le certificat.",
    en: "A path aligned to JLPT levels, from N5 to N1, to aim for the certificate.",
  },

  "ja.jlpt.title": { fr: "Progression par niveau", en: "Progress by level" },
  "ja.soon": { fr: "Bientôt disponible", en: "Coming soon" },

  "ja.modulesTitle": { fr: "Modules", en: "Modules" },
  "ja.modules.hiragana.title": { fr: "Hiragana", en: "Hiragana" },
  "ja.modules.katakana.title": { fr: "Katakana", en: "Katakana" },
  "ja.modules.lecons.title": { fr: "Leçons guidées", en: "Guided lessons" },
  "ja.modules.kanji.title": { fr: "Kanji", en: "Kanji" },
  "ja.modules.entretien.title": { fr: "Entraînement à l'entretien", en: "Interview practice" },
  "ja.modules.jlpt.title": { fr: "Tests blancs JLPT", en: "JLPT mock tests" },
  "ja.modules.hiragana.desc": {
    fr: "Les 46 sons de base, avec audio et auto-évaluation.",
    en: "The 46 basic sounds, with audio and self-assessment.",
  },
  "ja.modules.katakana.desc": {
    fr: "Pour les mots d'origine étrangère, avec ordre de traits.",
    en: "For words of foreign origin, with stroke order.",
  },
  "ja.modules.lecons.desc": {
    fr: "Kana ligne par ligne + cours structuré en 25 leçons, tout en audio.",
    en: "Kana line by line + a structured course in 25 lessons, all with audio.",
  },
  "ja.modules.kanji.desc": {
    fr: "80 kanji N5 par thème, avec lectures, mots et ordre des traits.",
    en: "80 N5 kanji by theme, with readings, words and stroke order.",
  },
  "ja.modules.entretien.desc": {
    fr: "95 questions réelles, 3 modes, audio, correction intelligente.",
    en: "95 real questions, 3 modes, audio, smart correction.",
  },
  "ja.modules.jlpt.desc": {
    fr: "Épreuves chronométrées de vocabulaire, grammaire et écoute.",
    en: "Timed vocabulary, grammar and listening tests.",
  },
  "ja.modules.continuer": { fr: "Ouvrir →", en: "Open →" },

  "ja.guidesTitle": { fr: "Guides & articles", en: "Guides & articles" },
  "ja.guide.hiragana.cat": { fr: "Alphabet · Guide", en: "Alphabet · Guide" },
  "ja.guide.hiragana.title": {
    fr: "Mémoriser les 46 hiragana sans y passer des heures",
    en: "Memorize all 46 hiragana without spending hours",
  },
  "ja.guide.hiragana.excerpt": {
    fr: "La méthode des petits pas : révision espacée, audio et auto-évaluation pour ancrer chaque son durablement.",
    en: "The small-steps method: spaced review, audio and self-assessment to anchor every sound for good.",
  },
  "ja.guide.entretien.cat": { fr: "Entretien · Conseils", en: "Interview · Tips" },
  "ja.guide.entretien.title": {
    fr: "Réussir un entretien au Japon : les questions incontournables",
    en: "Succeeding at a job interview in Japan: the must-know questions",
  },
  "ja.guide.entretien.excerpt": {
    fr: "Jikoshōkai, motivations, points faibles : découvrez les questions qui reviennent et entraînez-vous dessus.",
    en: "Jikoshōkai, motivations, weaknesses: discover the recurring questions and practice on them.",
  },
  "ja.guide.ljpt.cat": { fr: "JLPT · Bientôt", en: "JLPT · Soon" },
  "ja.guide.jlpt.title": {
    fr: "Tout savoir du JLPT : niveaux, format et stratégie",
    en: "All you need to know about the JLPT: levels, format and strategy",
  },
  "ja.guide.jlpt.excerpt": {
    fr: "De N5 à N1 : ce que chaque niveau exige, comment l'épreuve se déroule et par où commencer selon votre profil.",
    en: "From N5 to N1: what each level requires, how the exam works and where to start based on your profile.",
  },
  "ja.guide.lire": { fr: "Lire le guide →", en: "Read the guide →" },
  "ja.guide.preparation": { fr: "En préparation", en: "In preparation" },

  "ja.testimonialsTitle": { fr: "Ils apprennent avec nous", en: "They learn with us" },
  "ja.t1.quote": {
    fr: "Les hiragana me résistaient depuis des mois. Trois semaines avec le mode révision et ça rentre tout seul.",
    en: "Hiragana had been resisting me for months. Three weeks with the review mode and it just sticks.",
  },
  "ja.t1.ctx": { fr: "prépare le N5", en: "preparing for N5" },
  "ja.t2.quote": {
    fr: "Le mode entretien avec correction automatique, c'est exactement ce qu'il me fallait avant mon dossier pour Tokyo.",
    en: "The interview mode with automatic correction is exactly what I needed before my application for Tokyo.",
  },
  "ja.t2.ctx": { fr: "échange universitaire", en: "university exchange" },
  "ja.t3.quote": {
    fr: "J'écoute chaque question à voix haute, je répète, je progresse. Simple et efficace.",
    en: "I listen to every question out loud, I repeat, I improve. Simple and effective.",
  },
  "ja.t3.ctx": { fr: "voyage au Japon", en: "trip to Japan" },

  "ja.ctaFinalTitle": { fr: "Faites fleurir votre japonais", en: "Make your Japanese bloom" },
  "ja.ctaFinalSubtitle": {
    fr: "Créez votre compte gratuit et faites vos premiers pas aujourd'hui — le premier hiragana n'attend que vous.",
    en: "Create your free account and take your first steps today — your first hiragana is waiting.",
  },
  "ja.ctaDashboard": { fr: "Retourner à mon espace", en: "Back to my space" },
  "ja.ctaCreate": { fr: "Créer un compte gratuit", en: "Create a free account" },
  "ja.ctaLogin": { fr: "Se connecter", en: "Log in" },

  // --- Hublot anglais (en/) ---
  "en.heroTitle1": { fr: "Apprenez", en: "Learn" },
  "en.heroTitle2": { fr: "l'anglais", en: "English" },
  "en.heroSubtitle": {
    fr: "Un parcours débutant en dix leçons : vocabulaire, grammaire simple et audio intégré. Commencez gratuitement, progressez à votre rythme.",
    en: "A beginner path in ten lessons: vocabulary, simple grammar and built-in audio. Start for free, progress at your own pace.",
  },
  "en.ctaContinue": { fr: "Continuer", en: "Continue" },
  "en.ctaStart": { fr: "Commencer gratuitement", en: "Start for free" },
  "en.seeLessons": { fr: "Voir les leçons", en: "See the lessons" },
  "en.methodTitle": { fr: "Comment apprendre l'anglais ?", en: "How do you learn English?" },
  "en.methodSubtitle": {
    fr: "Choisissez les sujets qui vous intéressent, la méthode qui vous convient, et laissez la progression faire le reste.",
    en: "Choose the topics you care about, the method that suits you, and let progress do the rest.",
  },

  "en.feat.leconsGuidees": { fr: "Leçons guidées", en: "Guided lessons" },
  "en.feat.leconsGuidees.desc": {
    fr: "Dix leçons débutant pas à pas : grammaire simple, vocabulaire et exemples en audio.",
    en: "Ten beginner lessons step by step: simple grammar, vocabulary and audio examples.",
  },
  "en.feat.audio": { fr: "Audio natif", en: "Native audio" },
  "en.feat.audio.desc": {
    fr: "Écoutez chaque mot et chaque phrase à voix haute pour travailler l'oreille et la prononciation.",
    en: "Listen to every word and sentence out loud to train your ear and pronunciation.",
  },
  "en.feat.suivi": { fr: "Suivi de progression", en: "Progress tracking" },
  "en.feat.suivi.desc": {
    fr: "Historique complet, statistiques par session et points à revoir signalés.",
    en: "Full history, per-session stats and flagged review points.",
  },
  "en.feat.correction": { fr: "Correction intelligente", en: "Smart correction" },
  "en.feat.correction.desc": {
    fr: "Une IA évalue vos réponses écrites et orales et vous explique comment progresser.",
    en: "An AI assesses your written and spoken answers and tells you how to improve.",
  },

  "en.programTitle": { fr: "Le programme en dix leçons", en: "The ten-lesson program" },
  "en.programSubtitle": {
    fr: "De la présentation aux comparaisons : un parcours débutant cohérent, avec vocabulaire et prononciation en audio à chaque étape.",
    en: "From introductions to comparisons: a coherent beginner path, with vocabulary and pronunciation in audio at every step.",
  },
  "en.lessonNumber": { fr: "Leçon", en: "Lesson" },
  "en.open": { fr: "Ouvrir →", en: "Open →" },

  "en.ctaFinalTitle": { fr: "Faites fleurir votre anglais", en: "Make your English bloom" },
  "en.ctaFinalSubtitle": {
    fr: "Créez votre compte gratuit et faites vos premiers pas aujourd'hui — la première leçon n'attend que vous.",
    en: "Create your free account and take your first steps today — your first lesson is waiting.",
  },

  // --- Hiragana (ja/hiragana) ---
  "hiragana.back": { fr: "← Retour aux modules", en: "← Back to modules" },
  "hiragana.intro": {
    fr: "Les 46 sons de base de l'écriture japonaise. Cliquez sur un caractère pour l'entendre, puis testez-vous une fois à l'aise.",
    en: "The 46 basic sounds of Japanese writing. Click a character to hear it, then test yourself once you're comfortable.",
  },
};

/** Renvoie le texte d'interface pour la langue demandée, avec remplacement {tokens}. */
export function t(key: string, lang: InterfaceLang, vars?: Record<string, string>): string {
  const entry = UI[key];
  if (!entry) return key;
  let text = entry[lang];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, v);
    }
  }
  return text;
}
