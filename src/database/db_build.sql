BEGIN;

DROP TABLE IF EXISTS "books" CASCADE;
DROP TABLE IF EXISTS "authors" CASCADE;
DROP TABLE IF EXISTS "book_authors" CASCADE;
DROP TABLE IF EXISTS "reservations" CASCADE;

CREATE TABLE "books" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL,
  "date" VARCHAR(10),
  "genre" VARCHAR(250) NOT NULL
);

CREATE TABLE "authors" (
  "id" SERIAL PRIMARY KEY,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL
);

CREATE TABLE "book_authors" (
  "id" SERIAL PRIMARY KEY,
  "book_id"   integer REFERENCES books(id) ON UPDATE CASCADE,
  "author_id" integer REFERENCES authors(id) ON UPDATE CASCADE
);

CREATE TABLE "reservations" (
  "id" SERIAL PRIMARY KEY,
  "book_id"   integer REFERENCES books(id) ON UPDATE CASCADE,
  "start_date" VARCHAR(10) NOT NULL,
  "end_date" VARCHAR(10) NOT NULL
);

COMMIT;