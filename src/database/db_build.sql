BEGIN;


DROP TABLE IF EXISTS books, authors, book_authors, reservations CASCADE;

CREATE TABLE books (
  ID      SERIAL          PRIMARY KEY,
  name    VARCHAR(250)    NOT NULL,
  date    VARCHAR(4),
  genre   VARCHAR(50)     NOT NULL
);

CREATE TABLE authors (
  id          SERIAL    PRIMARY KEY,
  first_name  TEXT      NOT NULL,
  last_name   TEXT      NOT NULL
);

CREATE TABLE book_authors (
  id          SERIAL    PRIMARY KEY,
  book_id     integer   REFERENCES books(id) ON UPDATE CASCADE,
  author_id   integer   REFERENCES authors(id) ON UPDATE CASCADE
);

CREATE TABLE reservations (
  id          SERIAL        PRIMARY KEY,
  book_id     integer       REFERENCES books(id) ON UPDATE CASCADE,
  start_date  VARCHAR(10)   NOT NULL,
  end_date    VARCHAR(10)   NOT NULL
);

INSERT INTO books(name, date, genre) VALUES
  ('Alice In Wonderland', '1865', 'Child Fiction'),
  ('Treasure Island', '1883', 'Child Fiction'),
  ('Pride and Prejudice', '1813', 'Romance'),
  ('Made To Stick', '2007', 'Business')
RETURNING ID;

INSERT INTO authors(first_name, last_name) VALUES
  ('Lewis', 'Carol'),
  ('Robert', 'Luis Stevenson'),
  ('Jane', 'Austen'),
  ('Chip', 'Heath'),
  ('Dan', 'Heath')
RETURNING ID;

INSERT INTO book_authors(book_id, author_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (4, 5);

INSERT INTO reservations(book_id, start_date, end_date) VALUES
  (1, '01-08-2019', '30-08-2019');


COMMIT;