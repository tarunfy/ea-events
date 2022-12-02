const sqlite3 = require("sqlite3").verbose();

//connect to db:
const db = new sqlite3.Database("./ea.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

//create an event:
const createEvent = async (req, res) => {
  const data = req.body;
  console.log(data);
  sql = `CREATE TABLE events(eventId INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, event_date TEXT NOT NULL, event_from TEXT NOT NULL, event_to TEXT NOT NULL, price INTEGER NOT NULL) VALUES(?, ?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [
      data.title,
      data.description,
      data.event_date,
      data.from,
      data.to,
      data.price,
    ],
    (err) => {
      if (err) return console.log(err.message);
    }
  );

  res.status(200).json({ data });
};

module.exports = {
  createEvent,
};
