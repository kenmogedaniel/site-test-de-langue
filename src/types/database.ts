export type Difficulty = "easy" | "medium" | "hard";
export type VoicePref = "male" | "female";
export type ThemePref = "light" | "dark";

export interface Profile {
  id: string;
  display_name: string | null;
  voice_preference: VoicePref;
  theme_pref: ThemePref;
  created_at: string;
}

export interface Theme {
  id: number;
  name: string;
  sort_order: number;
}

export interface Question {
  id: string;
  theme_id: number;
  text_kana: string;
  text_romaji: string | null;
  text_fr: string | null;
  difficulty: Difficulty;
  created_at: string;
}

export interface QcmOption {
  id: string;
  question_id: string;
  text_kana: string;
  is_correct: boolean;
}

export interface ModelAnswer {
  id: string;
  question_id: string;
  text_kana: string;
  text_fr: string | null;
  acceptable_variants: string[];
}

export interface Session {
  id: string;
  user_id: string;
  mode: Difficulty;
  timed: boolean;
  theme_filter: number | null;
  started_at: string;
  ended_at: string | null;
}

export interface SessionAnswer {
  id: string;
  session_id: string;
  question_id: string;
  user_answer: string | null;
  selected_option_id: string | null;
  is_correct: boolean | null;
  score: number | null;
  feedback: string | null;
  answered_at: string;
}

export interface ReviewFlag {
  id: string;
  user_id: string;
  question_id: string;
  created_at: string;
}

// Squelette minimal compatible avec le generic Database de @supabase/supabase-js.
// Peut être remplacé par `supabase gen types typescript` une fois la CLI installée localement.
// L'intersection avec Record<string, unknown> est nécessaire : supabase-js contraint
// chaque Row/Insert/Update par `extends Record<string, unknown>`, ce qu'une interface
// TypeScript sans signature d'index explicite ne satisfait pas telle quelle.
type TableDef<Row> = {
  Row: Row & Record<string, unknown>;
  Insert: Partial<Row> & Record<string, unknown>;
  Update: Partial<Row> & Record<string, unknown>;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      profiles: TableDef<Profile>;
      themes: TableDef<Theme>;
      questions: TableDef<Question>;
      qcm_options: TableDef<QcmOption>;
      model_answers: TableDef<ModelAnswer>;
      sessions: TableDef<Session>;
      session_answers: TableDef<SessionAnswer>;
      review_flags: TableDef<ReviewFlag>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
