const dbConnection = require('../database/db_connection.js');
const deletebook = (i,cb) => {
  dbConnection.query(`DELETE FROM books WHERE id= $i;`, (err, res) => {
    if (err)
    return cb(err);
  });
};

deletebook(18);
module.exports = deletebook;