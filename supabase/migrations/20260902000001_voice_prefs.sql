-- Préférence de voix PAR langue (féminin / masculin).
-- Colonne JSONB sur profiles : {"ja": "male", "en": "female", ...}. Défaut {}.
-- À appliquer dans Supabase : SQL Editor → New query → Run.
alter table public.profiles
  add column if not exists voice_prefs jsonb not null default '{}'::jsonb;