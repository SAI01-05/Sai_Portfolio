create table contact_messages(
 id bigint generated always as identity primary key,
 name text not null, email text not null, message text not null,
 created_at timestamptz default now());
alter table contact_messages enable row level security;
create policy "anyone can insert" on contact_messages for insert to anon with check (true);
