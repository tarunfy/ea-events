const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const EventRouter = require("./routes/events");
const NewsRouter = require("./routes/news");
const Authrouter = require("./routes/auth");
//const sqlite3 = require("sqlite3").verbose();

//connect to db:
//const db = new sqlite3.Database("./ea.db", sqlite3.OPEN_READWRITE, (err) => {
//  if (err) return console.log(err.message);
//});

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
//  `CREATE TABLE news(newsId INTEGER PRIMARY KEY, title TEXT NOT NULL, content TEXT NOT NULL, createdAt TEXT NOT NULL, imgUrl TEXT NOT NULL, author TEXT NOT NULL)`
//);

app.use("/api/events", EventRouter);
app.use("/api/news", NewsRouter);
app.use("/api/auth", Authrouter);

app.listen(4000, () => {
  console.log("Server is running on post 4000");
});
