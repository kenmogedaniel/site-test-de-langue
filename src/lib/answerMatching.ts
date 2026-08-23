/**
 * Normalise un texte japonais pour la comparaison :
 * enlève les espaces, la ponctuation courante, met en forme uniforme.
 */
function normalize(text: string): string {
  return text
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
function similarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}

export interface MatchResult {
  isCorrect: boolean;
  score: number; // 0-100
  closestMatch: string;
}

/**
 * Mode Moyen : compare la réponse libre de l'utilisateur à la réponse modèle
 * et à ses variantes acceptables, avec une tolérance à la casse/ponctuation/légères fautes.
 */
export function matchMediumAnswer(
  userAnswer: string,
  modelKana: string,
  acceptableVariants: string[],
  threshold = 0.6
): MatchResult {
  const candidates = [modelKana, ...acceptableVariants];
  const normalizedUser = normalize(userAnswer);

  let best = { text: modelKana, score: 0 };
  for (const candidate of candidates) {
    const sim = similarity(normalizedUser, normalize(candidate));
    if (sim > best.score) best = { text: candidate, score: sim };
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

  // 2. Présence de mots-clés significatifs extraits de la réponse modèle (hiragana/kanji de contenu, mots > 1 caractère).
  const modelKeywords = Array.from(
    new Set(
      modelKana
        .replace(/[。、！？]/g, " ")
        .split(/[はがをにでともへからまでや]/)
        .map((w) => w.trim())
        .filter((w) => w.length >= 2)
    )
  );
  const matchedKeywords = modelKeywords.filter((kw) => trimmed.includes(kw));
  const keywordRatio = modelKeywords.length > 0 ? matchedKeywords.length / modelKeywords.length : 0;
  score += Math.round(keywordRatio * 40);

  if (keywordRatio < 0.3) {
    feedback.push("Votre réponse s'éloigne beaucoup du sujet attendu. Relisez la question et essayez de répondre plus directement.");
  }

  // 3. Structure : présence d'une justification (どうして/から/ので indique un raisonnement).
  const hasReasoning = /(から|ので|とおもいます|たいです)/.test(trimmed);
  if (hasReasoning) {
    score += 30;
  } else {
    feedback.push("Pour un niveau avancé, essayez d'ajouter une justification avec « ～から » ou « ～ので ».");
  }

  score = Math.min(100, score);

  if (score >= 70) {
    feedback.unshift("Bonne réponse, bien structurée.");
  } else if (score >= 40) {
    feedback.unshift("Réponse correcte dans l'idée, mais peut être améliorée.");
  } else {
    feedback.unshift("Réponse à retravailler.");
  }

  if (modelFr) {
    feedback.push(`Exemple de réponse modèle : ${modelKana} (${modelFr})`);
  }

  return { score, isCorrect: score >= 60, feedback };
}
