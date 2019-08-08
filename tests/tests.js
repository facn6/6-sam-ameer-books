const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const browseBooks = require("../src/queries/browseBooks");
const addBook = require("../src/queries/addBook");
const deleteBook = require("../src/queries/deleteBook");



tape('Database Tests', (t)=> {
  runDbBuild(function(err, res){
    t.error(err, 'runDbBuild does not throw an error');

    browseBooks((err, res) => {
      t.error(err, 'Getting the list of book data does not throw an error');
      let actual = res;
      let expected = {
        name: 'Alice In Wonderland',
        year: 1865,
        genre: 'Child Fiction',
        first_name: 'Lewis',
        last_name: 'Carol'
      };
      t.deepEqual(actual[0], expected, 'Returns correct first row data');
    })

    const testBook = {
      name: 'test',
      year: 1000,
      genre:'test',
      first_name: 'test',
      last_name: 'test'
    };

    addBook(testBook, (err, res) => {
      t.error(err, 'Adding a book to database does not throw and error');

      browseBooks((err, res) => {
        let actual = res[5];
        t.deepEqual(actual, testBook, 'New book can be found in the database');

        deleteBook(5, (err, res) => {
          console.log("delete book res = ", res);
          
          t.error(err, 'Deleting a book does not throw an error');

          browseBooks((err, res) => {
            t.deepEqual(res.length, 5, 'Row deleted from database');
          });
        });
      });
    });
  });

  t.end();
});


// const testBook = {
//   name: 'Cant Hurt Me',
//   date: 2017,
//   genre:'Self Help',
//   first_name: 'David',
//   last_name: 'Goggins'
// };

/*
DELETE FROM book_authors WHERE id=6;
DELETE FROM authors WHERE id=6;
DELETE FROM books WHERE id=5;
SELECT * FROM books;
*/