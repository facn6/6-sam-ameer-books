const dbConnection = require('../database/db_connection.js');
const deletebook = (id,cb) => {
  delete_Book(id, (err, res) => {
        deleteBookAuthRef(id, (err, res) =>  {
            if (err) return cb(err);
            cb(null,res);
        });
    });
  };

delete_Book = (id,cb) => {
  dbConnection.query('DELETE FROM books WHERE id='+id+';', (err, res) => {
    if (err) 
      return cb(err);

  });
};
deleteBookAuthRef = (id,cb) => {
  dbConnection.query('DELETE FROM book_authors WHERE id IN'+
   '(SELECT id from book_authors where book_id='+id+');', (err, res) => {
    if (err)
      return cb(err); 
  });
};
module.exports = deletebook;