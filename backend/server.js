const sqlite3 = require("sqlite3").verbose();
let sql;

//connect to db:
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});

//creating users table:
sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, email, password)`;
db.run(sql, (err) => {
  if (err) return console.log(err.message);
});

//drop tabel:
//db.run("DROP TABLE users");
