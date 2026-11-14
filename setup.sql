-- =========================================================
-- QUIZ JDP & SN · tabla de jugadores para Supabase
-- YA ESTÁ APLICADO en el proyecto jdp-sn-quiz (Sebas Project).
-- Solo úsalo si algún día creas otro proyecto: SQL Editor > New query > Run
-- =========================================================

create table if not exists public.players (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 20),
  score       int  not null default 0 check (score between 0 and 1000),
  answered    int  not null default 0 check (answered between 0 and 10),  -- preguntas respondidas
  results     text not null default '' check (results ~ '^[01]{0,10}$'),  -- '1' acierto, '0' fallo
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
