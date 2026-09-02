// Phrase du jour : contenu statique déterministe (pas de base), rotatif par date.

export interface DailyPhrase {
  lang: string;
  text: string;
  reading?: string;
  translation: string;
}

const POOL: Record<string, DailyPhrase[]> = {
  ja: [
    { lang: "ja", text: "継続は力なり", reading: "けいぞくは ちからなり", translation: "La persévérance est une force." },
    { lang: "ja", text: "七転び八起き", reading: "ななころび やおき", translation: "Tombe sept fois, relève-toi huit." },
    { lang: "ja", text: "一期一会", reading: "いちご いちえ", translation: "Chaque rencontre est unique." },
    { lang: "ja", text: "文武両道", reading: "ぶんぶ りょうどう", translation: "Être fort aussi bien par l'esprit que par le corps." },
    { lang: "ja", text: "雨ニモ負ケズ", reading: "あめにも まけず", translation: "Ne ceder ni à la pluie ni au vent." },
  ],
  en: [
    { lang: "en", text: "Practice makes perfect.", translation: "C'est en forgeant qu'on devient forgeron." },
    { lang: "en", text: "Little by little, one travels far.", translation: "Petit à petit, l'oiseau fait son nid." },
    { lang: "en", text: "Every day is a second chance.", translation: "Chaque jour est une seconde chance." },
  ],
  es: [
    { lang: "es", text: "No hay mal que por bien no venga.", translation: "À quelque chose malheur est bon." },
    { lang: "es", text: "Aprender nunca ocupa lugar.", translation: "Apprendre n'occupe jamais de place." },
  ],
  de: [
    { lang: "de", text: "Übung macht den Meister.", translation: "C'est en forgeant qu'on devient forgeron." },
    { lang: "de", text: "Lernen ist wie Rudern gegen den Strom.", translation: "Apprendre, c'est ramer à contre-courant." },
  ],
  it: [
    { lang: "it", text: "Chi va piano va sano e va lontano.", translation: "Qui va doucement va sûrement et va loin." },
    { lang: "it", text: "Imparare non è un gioco da ragazzi.", translation: "Apprendre n'est pas un jeu d'enfant." },
  ],
  pt: [
    { lang: "pt", text: "A pressa é inimiga da perfeição.", translation: "La précipitation est l'ennemie de la perfection." },
  ],
  ru: [
    { lang: "ru", text: "Ученье свет, а неученье тьма.", translation: "Le savoir est la lumière, l'ignorance est les ténèbres." },
  ],
  cn: [
    { lang: "cn", text: "学如逆水行舟，不进则退。", translation: "Étudier, c'est comme naviguer à contre-courant : si on n'avance pas, on recule." },
  ],
  ar: [
    { lang: "ar", text: "من طلب العلا سهر الليالي.", translation: "Celui qui vise les sommets veille la nuit." },
  ],
  hi: [
    { lang: "hi", text: "मेहनत का फल मीठा होता है।", translation: "Le fruit du travail est doux." },
  ],
  tr: [
    { lang: "tr", text: "Yolculuk, bin bir adımla başlar.", translation: "Le voyage commence par mille et un pas." },
  ],
};

function dayIndex(today: string): number {
  const t = new Date(today + "T00:00:00");
  return Math.floor(t.getTime() / 86_400_000);
}

/** Phrase du jour pour une langue donnée (stable toute la journée, tourne chaque jour). */
export function phraseForLang(lang: string, today: string): DailyPhrase | null {
  const list = POOL[lang];
  if (!list || list.length === 0) return null;
  return list[dayIndex(today) % list.length];
}