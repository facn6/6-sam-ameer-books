const databaseConnection = require('../database/db_connection.js');

const browseBooks = cb => {
    databaseConnection.query(
        `SELECT books.name, books.date, books.genre, authors.first_name, authors.last_name
        FROM books
        JOIN book_authors
            ON books.id = book_authors.book_id
        JOIN authors
            ON authors.id = book_authors.author_id;`
    , (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
    });
};

module.exports = browseBooks;