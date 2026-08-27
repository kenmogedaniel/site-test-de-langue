import { z } from "zod";
import { callClaude, parseJsonFromModel } from "./anthropic";
import { matchMediumAnswer, evaluateAdvancedAnswer } from "./answerMatching";

const AI_GRADE_SCHEMA = z.object({
  isCorrect: z.boolean(),
  score: z.number().min(0).max(100),
  feedback: z.array(z.string()).min(1).max(3),
});

export interface GradeResult {
  isCorrect: boolean;
  score: number;
  feedback: string[];
  gradedByAI: boolean;
}

const MEDIUM_SYSTEM_PROMPT = `Tu es un correcteur bienveillant qui évalue la réponse d'un étudiant camerounais à une question d'entretien japonais de niveau débutant (JLPT N5).

RÈGLE ESSENTIELLE : la réponse de l'étudiant N'A PAS besoin de ressembler à l'exemple fourni. Il existe de nombreuses façons correctes de répondre à une même question. Accepte TOUTE réponse qui répond raisonnablement au sens de la question en japonais compréhensible, même avec des fautes mineures de particules, de conjugaison ou d'orthographe (kanji vs hiragana, ça n'a AUCUNE importance).

Rejette seulement si : la réponse ne répond pas à la question posée, est hors-sujet, est vide/incompréhensible, ou est dans une langue autre que le japonais.

Réponds UNIQUEMENT avec un objet JSON de cette forme, sans aucun texte avant ou après :
{"isCorrect": true|false, "score": 0-100, "feedback": ["une ou deux phrases courtes en français, bienveillantes, qui disent ce qui est bien et éventuellement une piste d'amélioration"]}`;

const HARD_SYSTEM_PROMPT = `Tu es un correcteur exigeant mais bienveillant qui évalue la réponse d'un étudiant camerounais à une question d'entretien japonais de niveau avancé (préparation à un vrai entretien d'admission).

RÈGLE ESSENTIELLE : la réponse N'A PAS besoin de ressembler à l'exemple fourni — il existe de nombreuses bonnes réponses possibles. Juge sur : (1) la réponse répond-elle clairement à la question, (2) la réponse est-elle structurée avec une justification (raison, exemple, ou détail), pas juste une phrase minimale, (3) le japonais est-il compréhensible (les petites fautes de particules/conjugaison sont acceptables, kanji ou hiragana n'a AUCUNE importance).

Réponds UNIQUEMENT avec un objet JSON de cette forme, sans aucun texte avant ou après :
{"isCorrect": true|false, "score": 0-100, "feedback": ["1 à 3 phrases courtes en français : ce qui est réussi, et une suggestion concrète d'amélioration si pertinent"]}`;

/**
 * Corrige une réponse libre (mode Moyen ou Difficile) en évaluant son sens réel via
 * Claude plutôt qu'en la comparant mécaniquement à un texte de référence figé. Si l'API
 * n'est pas configurée (ANTHROPIC_API_KEY absente) ou échoue, se rabat automatiquement
 * sur l'algorithme local (comparaison + recouvrement de mots-clés) pour que l'app reste
 * utilisable, avec un résultat moins fin.
 */
export async function gradeFreeAnswer(
  mode: "medium" | "hard",
  question: string,
  userAnswer: string,
  modelKana: string,
  modelFr: string | null,
  acceptableVariants: string[]
): Promise<GradeResult> {
  const systemPrompt = mode === "medium" ? MEDIUM_SYSTEM_PROMPT : HARD_SYSTEM_PROMPT;
  const userMessage = [
    `Question posée (en japonais) : ${question}`,
    `Exemple de bonne réponse (une possibilité parmi d'autres) : ${modelKana}${modelFr ? ` (${modelFr})` : ""}`,
    `Réponse de l'étudiant : ${userAnswer}`,
  ].join("\n");

  const raw = await callClaude(systemPrompt, userMessage, 300);
  if (raw) {
    const parsed = parseJsonFromModel(raw);
    const result = AI_GRADE_SCHEMA.safeParse(parsed);
    if (result.success) {
      return { ...result.data, gradedByAI: true };
    }
  }

  // Repli algorithmique si l'IA n'est pas disponible ou a renvoyé un format inattendu.
  if (mode === "medium") {
    const fallback = matchMediumAnswer(userAnswer, modelKana, acceptableVariants);
    return {
      isCorrect: fallback.isCorrect,
      score: fallback.score,
      feedback: [
        fallback.isCorrect
          ? "正解（せいかい）！ Bonne réponse."
          : `Pas tout à fait sûr — réponse modèle possible : ${fallback.closestMatch}`,
      ],
      gradedByAI: false,
    };
  }

  const fallback = evaluateAdvancedAnswer(userAnswer, modelKana, modelFr);
  return { isCorrect: fallback.isCorrect, score: fallback.score, feedback: fallback.feedback, gradedByAI: false };
}
