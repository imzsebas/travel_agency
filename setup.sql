-- =========================================================
-- QUIZ JDP & SN · tabla de jugadores para Supabase
-- Pega todo esto en Supabase > SQL Editor > New query > Run
-- =========================================================

create table if not exists public.players (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 20),
  score       int  not null default 0,
  answered    int  not null default 0,          -- cuántas preguntas ha respondido (0 a 10)
  results     text not null default '',         -- '1' acierto, '0' fallo, ej: '1101'
  finished    boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Permisos: es un juego de clase, cualquiera con el enlace puede jugar
alter table public.players enable row level security;

drop policy if exists "leer jugadores"      on public.players;
drop policy if exists "crear jugadores"     on public.players;
drop policy if exists "actualizar jugadores" on public.players;
drop policy if exists "borrar jugadores"    on public.players;

create policy "leer jugadores"       on public.players for select using (true);
create policy "crear jugadores"      on public.players for insert with check (true);
create policy "actualizar jugadores" on public.players for update using (true) with check (true);
create policy "borrar jugadores"     on public.players for delete using (true);

-- Activar el tiempo real para esta tabla
alter publication supabase_realtime add table public.players;
