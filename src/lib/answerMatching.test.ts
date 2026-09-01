import { describe, it, expect } from "vitest";
import { matchMediumAnswer, evaluateAdvancedAnswer } from "./answerMatching";
import { parseJsonFromModel } from "./anthropic";

describe("matchMediumAnswer", () => {
  const model = "きのうがいにいきました";
  const variants = ["きのういちばにいきました"];

  it("accepte une réponse identique au modèle", () => {
    const r = matchMediumAnswer("きのう が い に い き ま し た".replace(/ /g, ""), model, variants);
    expect(r.isCorrect).toBe(true);
    expect(r.score).toBeGreaterThanOrEqual(50);
  });

  it("accepte une réponse équivalente mal formulée", () => {
    const r = matchMediumAnswer("きのう いちば に いきまし た".replace(/ /g, ""), model, variants);
    expect(r.isCorrect).toBe(true);
  });

  it("rejette une réponse hors sujet", () => {
    const r = matchMediumAnswer("わたしはねこがすきです", model, variants);
    expect(r.isCorrect).toBe(false);
  });

  it("normalise les kanji en hiragana", () => {
    const r = matchMediumAnswer("毎日 会社 に 行きます", "まいにちかいしゃにいきます", []);
    expect(r.isCorrect).toBe(true);
  });

  it("reconnaît la polarité oui/non (bonus)", () => {
    const rNo = matchMediumAnswer("いいえ、いきません", "こどもがいます", [], 0.5);
    // Réponse "no" vs modèle positif : la pénalité ne doit pas l'empêcher d'être fausse.
    expect(rNo.isCorrect).toBe(false);
  });
});

describe("evaluateAdvancedAnswer", () => {
  const model = "わたしはまいにちでんしゃでかいしゃにいきます";

  it("donne un score bas à une réponse très courte", () => {
    const r = evaluateAdvancedAnswer("はい", model, "Je vais au travail");
    expect(r.score).toBeLessThan(35);
    expect(r.feedback.length).toBeGreaterThan(0);
  });

  it("récompense une réponse complète avec justification", () => {
    const r = evaluateAdvancedAnswer("わたしはまいにちでんしゃでかいしゃにいきますから、はやいです", model, "");
    expect(r.score).toBeGreaterThanOrEqual(55);
    expect(r.isCorrect).toBe(true);
  });

  it("retourne un feedback non vide dans tous les cas", () => {
    const r = evaluateAdvancedAnswer("まったくわからないねこたろうです", model, null);
    expect(Array.isArray(r.feedback)).toBe(true);
    expect(r.feedback.length).toBeGreaterThan(0);
  });
});

describe("parseJsonFromModel", () => {
  it("parse un objet JSON simple", () => {
    expect(parseJsonFromModel('{"ok":true}')).toEqual({ ok: true });
  });

  it("tolère les blocs de code ```json", () => {
    expect(parseJsonFromModel('```json\n{"a":1}\n```')).toEqual({ a: 1 });
  });

  it("retourne null sur un JSON invalide", () => {
    expect(parseJsonFromModel("pas de json")).toBeNull();
  });
});