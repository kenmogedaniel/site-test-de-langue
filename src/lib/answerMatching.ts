import { kanjiToHiraganaApprox } from "./kanjiDictionary";

/**
 * Normalise un texte japonais pour la comparaison : convertit les kanji connus
 * en hiragana (un utilisateur tape naturellement en kanji, nos réponses de
 * référence sont en hiragana pur), enlève les espaces et la ponctuation.
 */
function normalize(text: string): string {
  return kanjiToHiraganaApprox(text)
    .trim()
    .replace(/[。、！？\s　]/g, "")
    .replace(/[!?.,]/g, "")
    .toLowerCase();
}

/** Distance de Levenshtein simple, suffisante pour des phrases courtes. */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

/** Similarité entre 0 et 1 (1 = identique) basée sur la distance de Levenshtein normalisée. */
function charSimilarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}

/**
 * Extrait les "mots de contenu" d'une phrase japonaise en la découpant sur les
 * particules grammaticales courantes. Approximatif (pas de vraie tokenisation
 * morphologique) mais suffisant pour mesurer un recouvrement de sens.
 */
function extractContentWords(text: string): string[] {
  return Array.from(
    new Set(
      kanjiToHiraganaApprox(text)
        .replace(/[。、！？]/g, " ")
        .split(/[はがをにでともへからまでやも]/)
        .map((w) => w.trim())
        .filter((w) => w.length >= 2)
    )
  );
}

/** Recouvrement de mots de contenu entre la réponse utilisateur et une réponse candidate (0 à 1). */
function keywordOverlap(userWords: string[], candidateWords: string[]): number {
  if (candidateWords.length === 0) return 0;
  const matched = candidateWords.filter((w) => userWords.some((uw) => uw.includes(w) || w.includes(uw)));
  return matched.length / candidateWords.length;
}

/** Détecte une polarité oui/non explicite en début de réponse. */
function detectPolarity(text: string): "yes" | "no" | null {
  const t = text.trim();
  if (/^(はい|うん|ええ)/.test(t)) return "yes";
  if (/^(いいえ|いや|ううん)/.test(t)) return "no";
  return null;
}

export interface MatchResult {
  isCorrect: boolean;
  score: number; // 0-100
  closestMatch: string;
}

/**
 * Mode Moyen : compare la réponse libre de l'utilisateur à la réponse modèle et à
 * ses variantes acceptables. Combine une similarité au niveau caractère (tolère les
 * petites fautes) et un recouvrement de mots de contenu (tolère une formulation
 * différente pourvu que le sens et les mots-clés attendus soient présents), avec
 * un bonus si la polarité oui/non correspond. Les kanji sont normalisés en hiragana
 * avant comparaison pour ne pas pénaliser une écriture standard (ex: 楽しい = たのしい).
 */
export function matchMediumAnswer(
  userAnswer: string,
  modelKana: string,
  acceptableVariants: string[],
  threshold = 0.5
): MatchResult {
  const candidates = [modelKana, ...acceptableVariants];
  const normalizedUser = normalize(userAnswer);
  const userWords = extractContentWords(userAnswer);
  const userPolarity = detectPolarity(userAnswer);

  let best = { text: modelKana, score: 0 };
  for (const candidate of candidates) {
    const charScore = charSimilarity(normalizedUser, normalize(candidate));
    const wordScore = keywordOverlap(userWords, extractContentWords(candidate));
    let combined = Math.max(charScore, wordScore);

    const candidatePolarity = detectPolarity(candidate);
    if (candidatePolarity && userPolarity && candidatePolarity === userPolarity) {
      combined = Math.min(1, combined + 0.25);
    } else if (candidatePolarity && userPolarity && candidatePolarity !== userPolarity) {
      combined = Math.max(0, combined - 0.3);
    }

    if (combined > best.score) best = { text: candidate, score: combined };
  }

  return {
    isCorrect: best.score >= threshold,
    score: Math.round(best.score * 100),
    closestMatch: best.text,
  };
}

export interface AdvancedEvaluation {
  score: number; // 0-100
  isCorrect: boolean;
  feedback: string[];
}

/**
 * Mode Avancé : évaluation plus riche qu'un simple vrai/faux.
 * Vérifie la longueur minimale, la présence de mots-clés attendus (extraits de la réponse modèle),
 * et donne des suggestions d'amélioration concrètes.
 */
export function evaluateAdvancedAnswer(
  userAnswer: string,
  modelKana: string,
  modelFr: string | null
): AdvancedEvaluation {
  const feedback: string[] = [];
  const trimmed = userAnswer.trim();
  let score = 0;

  // 1. Longueur : une réponse d'entretien avancée doit être structurée, pas juste "はい".
  const MIN_LENGTH = 6;
  if (trimmed.length < MIN_LENGTH) {
    feedback.push("La réponse est très courte pour ce niveau. Essayez de développer avec une raison ou un exemple.");
  } else {
    score += 30;
  }

  // 2. Présence de mots-clés significatifs extraits de la réponse modèle.
  const modelKeywords = extractContentWords(modelKana);
  const userWords = extractContentWords(trimmed);
  const matchedKeywords = modelKeywords.filter((kw) => userWords.some((uw) => uw.includes(kw) || kw.includes(uw)));
  const keywordRatio = modelKeywords.length > 0 ? matchedKeywords.length / modelKeywords.length : 0;
  score += Math.round(keywordRatio * 40);

  if (keywordRatio < 0.25) {
    feedback.push("Votre réponse s'éloigne beaucoup du sujet attendu. Relisez la question et essayez de répondre plus directement.");
  }

  // 3. Structure : présence d'une justification (どうして/から/ので indique un raisonnement).
  const hasReasoning = /(から|ので|とおもいます|たいです)/.test(kanjiToHiraganaApprox(trimmed));
  if (hasReasoning) {
    score += 30;
  } else {
    feedback.push("Pour un niveau avancé, essayez d'ajouter une justification avec « ～から » ou « ～ので ».");
  }

  score = Math.min(100, score);

  if (score >= 65) {
    feedback.unshift("Bonne réponse, bien structurée.");
  } else if (score >= 35) {
    feedback.unshift("Réponse correcte dans l'idée, mais peut être améliorée.");
  } else {
    feedback.unshift("Réponse à retravailler.");
  }

  if (modelFr) {
    feedback.push(`Exemple de réponse modèle : ${modelKana} (${modelFr})`);
  }

  return { score, isCorrect: score >= 55, feedback };
}
