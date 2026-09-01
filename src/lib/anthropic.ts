/**
 * Appelle l'API Anthropic (Claude) côté serveur pour deux usages :
 * - correction sémantique des réponses libres (modes Moyen/Difficile), plutôt qu'une
 *   comparaison mécanique à un texte de référence — une question ouverte a un nombre
 *   quasi infini de bonnes réponses possibles, seule une vraie compréhension du sens
 *   permet de les accepter toutes ;
 * - conversion d'une transcription vocale (kanji-mixte) en hiragana pur.
 *
 * Nécessite la variable d'environnement ANTHROPIC_API_KEY. En son absence, ou en cas
 * d'erreur réseau, retourne null : l'appelant doit alors se rabattre sur une méthode
 * de secours (voir answerMatching.ts) pour que l'application reste fonctionnelle.
 */
export async function callClaude(system: string, userMessage: string, maxTokens = 400): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.warn("[anthropic] Aucune clé API configurée, bascule sur le mode de secours.");
    return null;
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: maxTokens,
        temperature: 0,
        system,
        messages: [{ role: "user", content: userMessage }],
      }),
      // Évite de bloquer indéfiniment l'utilisateur si l'API est lente/indisponible.
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      // On différencie les causes pour pouvoir agir : quota, clé invalide ou erreur serveur.
      if (res.status === 429) {
        console.warn("[anthropic] Quota ou limite de débit atteint (429), bascule sur le secours.");
      } else if (res.status === 401 || res.status === 403) {
        console.error("[anthropic] Clé API invalide ou refusée (HTTP " + res.status + "), vérifiez ANTHROPIC_API_KEY.");
      } else {
        const detail = await res.text().then((t) => t.slice(0, 200)).catch(() => "");
        console.error("[anthropic] Erreur API HTTP " + res.status + " : " + detail);
      }
      return null;
    }

    const data = await res.json();
    const textBlock = (data?.content ?? []).find((b: { type: string }) => b.type === "text");
    // Réponse réussie mais sans bloc de texte attendu : anomalie côté API, à signaler.
    if (!textBlock?.text) {
      console.error("[anthropic] Réponse inattendue sans bloc texte, bascule sur le secours.");
      return null;
    }
    return textBlock.text as string;
  } catch (err) {
    // Timeout (AbortSignal.timeout) ou erreur réseau : l'appelant bascule sur le secours.
    const reason = err instanceof Error ? err.name : "inconnue";
    console.warn("[anthropic] Échec réseau/timeout (" + reason + "), bascule sur le secours.");
    return null;
  }
}

/** Extrait un objet JSON de la réponse du modèle, en tolérant d'éventuelles balises ```json. */
export function parseJsonFromModel(text: string): unknown | null {
  const cleaned = text.trim().replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```\s*$/, "");
  try {
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}
