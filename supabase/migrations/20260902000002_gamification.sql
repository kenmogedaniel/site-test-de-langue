-- Gamification : statistiques par utilisateur pour le streak, la série, l'XP,
-- le niveau, l'objectif quotidien et la carte d'activité.
-- Une ligne par utilisateur (clé étrangère unique vers auth.users).

create table if not exists public.user_stats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_activity_date date,
  total_xp int not null default 0,
  level int not null default 1,
  xp_today int not null default 0,
  last_goal_date date,
  daily_goal int not null default 10,
  badges text[] not null default '{}',
  activity_dates date[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_stats enable row level security;

create policy "user_stats_select_own"
  on public.user_stats for select
  using (auth.uid() = user_id);

create policy "user_stats_insert_own"
  on public.user_stats for insert
  with check (auth.uid() = user_id);

create policy "user_stats_update_own"
  on public.user_stats for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);