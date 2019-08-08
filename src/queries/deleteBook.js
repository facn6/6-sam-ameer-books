const dbConnection = require('../database/db_connection.js');

const deleteBook = (id, cb) => {
  console.log("running delete book", id);

  deleteBookAuthRef(id, (err, res) =>  {
    removeBook(id, (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    });
  });
};

deleteBookAuthRef = (id, cb) => {
  dbConnection.query('DELETE FROM book_authors WHERE book_id=$1', [id], (err, res) => {
    if (err) {
      return cb(err); 
    } else {
      cb(null, err);
    }
  });
};

removeBook = (id, cb) => {
  dbConnection.query('DELETE FROM books WHERE id=$1', [id], (err, res) => {
    if (err) {
      return cb(err); 
    } else {
      cb(null, err);
    }
  });
};


module.exports = deleteBook;