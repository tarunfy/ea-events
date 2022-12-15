const sqlite3 = require("sqlite3").verbose();

//connect to db:
const db = new sqlite3.Database("./ea.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

//create an event:
const createEvent = async (req, res) => {
  const data = req.body;
  sql = `INSERT INTO events(title, description, event_date, event_from, event_to, price) VALUES(?, ?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [
      data.title,
      data.description,
      data.event_date,
      data.event_from,
      data.event_to,
      data.price,
    ],
    (err) => {
      if (err) return console.log(err.message);
    }
  );

  res.status(200).json({ data });
};

//get all events:
const getAllEvents = (req, res) => {
  sql = `SELECT * FROM events`;
  let events = [];
  db.all(sql, [], (err, rows) => {
    if (err) return console.log(err);
    rows.forEach((r) => events.push(r));
    res.status(200).json({ data: events });
  });
};

module.exports = {
  createEvent,
  getAllEvents,
};
