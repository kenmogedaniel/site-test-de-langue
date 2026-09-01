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
