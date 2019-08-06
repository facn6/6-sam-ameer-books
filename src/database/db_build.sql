BEGIN;

DROP TABLE IF EXISTS "books" CASCADE;
DROP TABLE IF EXISTS "authors" CASCADE;
DROP TABLE IF EXISTS "book_authors" CASCADE;
DROP TABLE IF EXISTS "reservations" CASCADE;

CREATE TABLE "books" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL,
  "date" VARCHAR(10)
);

CREATE TABLE "authors" (
  "id" SERIAL PRIMARY KEY,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL
);

CREATE TABLE "book_authors" (
  "id" SERIAL PRIMARY KEY,
  "book_id" integer,
  "author_id" integer
);

CREATE TABLE "reservations" (
  "id" SERIAL PRIMARY KEY,
  "book_id" TEXT NOT NULL,
  "start_date" VARCHAR(10) NOT NULL,
  "end_date" VARCHAR(10) NOT NULL
);

ALTER TABLE "books" ADD FOREIGN KEY ("id") REFERENCES "book_authors" ("book_id");

ALTER TABLE "authors" ADD FOREIGN KEY ("id") REFERENCES "book_authors" ("author_id");

ALTER TABLE "books" ADD FOREIGN KEY ("id") REFERENCES "reservations" ("book_id");
);

COMMIT;