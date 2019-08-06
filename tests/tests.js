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