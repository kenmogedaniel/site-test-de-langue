-- Progression par leçon guidée (toutes langues, y compris japonais).
-- Table très légère : une ligne par (utilisateur, leçon) terminée.

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_code text not null,        -- 'ja' | 'en' | 'ko' | ...
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  unique (user_id, course_code, lesson_slug)
);

alter table public.lesson_progress enable row level security;

create policy "lesson_progress_select_own"
  on public.lesson_progress for select
  using (auth.uid() = user_id);

create policy "lesson_progress_insert_own"
  on public.lesson_progress for insert
  with check (auth.uid() = user_id);

create policy "lesson_progress_delete_own"
  on public.lesson_progress for delete
  using (auth.uid() = user_id);

-- Index pour le regroupement par langue dans le tableau de bord.
create index if not exists lesson_progress_user_lang_idx
  on public.lesson_progress (user_id, course_code);