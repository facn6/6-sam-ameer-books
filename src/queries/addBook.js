const dbConnection = require('../database/db_connection.js');


const errFirstCB = (err, res, cb) => {
    if (err) {
        return cb(err);
    } else {
        cb(null, res);
    }
};

const addBook = (book, cb) => {

    createBook(book, (err, res) => {
        createAuthors(book, (err, res) => {
            createBookAuthRef(book, (err, res) => errFirstCB(err, res, cb));
        });
    });

};


const createBook = (book, cb) => {
    const { name, year, genre } = book;
    dbConnection.query(
        `INSERT INTO books(name, year, genre) VALUES
        ($1, $2, $3)`, [name, year, genre]
        , (err, res) => errFirstCB(err, res, cb)
    );
}

const createAuthors = (book, cb) => {
    const { first_name, last_name } = book;
    dbConnection.query(
        `INSERT INTO authors(first_name, last_name) VALUES
        ($1, $2)`, [first_name, last_name]
        , (err, res) => errFirstCB(err, res, cb)
    );
}

const createBookAuthRef = (book, cb) => {
    const { name, first_name, last_name } = book;
    dbConnection.query(
        `INSERT INTO book_authors(book_id, author_id) VALUES
        ((SELECT id FROM books WHERE name=$1),
          (SELECT id FROM authors WHERE first_name = $2 AND last_name = $3))`, [name, first_name, last_name]
         , (err, res) => errFirstCB(err, res, cb)
    );
}

module.exports = addBook;
