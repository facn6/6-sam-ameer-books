const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
tape("tape is working for back-end tests", t => {
    t.equals(1, 1, "one equals one");
    t.end();
})

tape('what you are going to test', (t)=> {
    runDbBuild(function(err, res){
    // your test goes here
    })
  })


// const testBook = {
//     name: 'Cant Hurt Me',
//     date: 2017,
//     genre:'Self Help',
//     first_name: 'David',
//     last_name: 'Goggins'
// };

// addBook(testBook, (err, res) => {
//     if(err) console.log(err);
//     console.log(res);
// })
