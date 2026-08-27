export interface Language {
  code: string;
  flag: string;
  name: string;
  native: string;
  /** Lecture en hiragana pour le furigana — n'a de sens que pour le japonais
   *  (les autres écritures : hangul, hanzi, cyrillique, etc. n'utilisent pas
   *  cette convention). Laisser vide pour toute autre langue. */
  reading?: string;
  active: boolean;
}

export const LANGUAGES: Language[] = [
  { code: "ja", flag: "jp", name: "Japonais", native: "日本語", reading: "にほんご", active: true },
  { code: "en", flag: "gb", name: "Anglais", native: "English", active: false },
  { code: "ko", flag: "kr", name: "Coréen", native: "한국어", active: false },
  { code: "es", flag: "es", name: "Espagnol", native: "Español", active: false },
  { code: "de", flag: "de", name: "Allemand", native: "Deutsch", active: false },
  { code: "it", flag: "it", name: "Italien", native: "Italiano", active: false },
  { code: "pt", flag: "pt", name: "Portugais", native: "Português", active: false },
  { code: "ru", flag: "ru", name: "Russe", native: "Русский", active: false },
  { code: "cn", flag: "cn", name: "Chinois", native: "中文", active: false },
  { code: "ar", flag: "sa", name: "Arabe", native: "العربية", active: false },
  { code: "hi", flag: "in", name: "Hindi", native: "हिन्दी", active: false },
  { code: "tr", flag: "tr", name: "Turc", native: "Türkçe", active: false },
];
