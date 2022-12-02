const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const EventRoutes = require("./routes/events");

//connect to db:
const db = new sqlite3.Database("./ea.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

dotenv.config();

//creating express app:
const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

//db.run(
//  `CREATE TABLE events(eventId INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, event_date TEXT NOT NULL, event_from TEXT NOT NULL, event_to TEXT NOT NULL, price INTEGER NOT NULL)`
//);

//Routes:
app.post("/api/events/create", (req, res) => {
  const data = req.body;
  console.log("data", data);
  sql = `INSERT INTO events(title, description, event_date, event_from, event_to, price ) VALUES(?, ?, ?, ?, ?, ?)`;
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
});

app.get("/api/events", (req, res) => {
  sql = `SELECT * FROM events`;
  let events = [];
  db.all(sql, [], (err, rows) => {
    if (err) return console.log(err);
    rows.forEach((r) => events.push(r));
    res.status(200).json({ data: events });
  });
});

app.listen(4000, () => {
  console.log("Server is running on post 4000");
});
