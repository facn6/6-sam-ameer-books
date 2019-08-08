const fs = require('fs');

const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) {
    throw err;
  }
  console.log("Our book tables were created with successfully");
});

const runDbBuild = cb => dbConnection.query(sql, cb)

module.exports = runDbBuild