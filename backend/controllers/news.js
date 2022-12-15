const sqlite3 = require("sqlite3").verbose();

//connect to db:
const db = new sqlite3.Database("./ea.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

//create a news:
const createNews = async (req, res) => {
  const { title, author, createdAt, imgUrl, content } = req.body;

  sql = `INSERT INTO news(title, content, createdAt, imgUrl, author) VALUES(?, ?, ?, ?, ?);`;

  db.run(sql, [title, content, createdAt, imgUrl, author], (err) => {
    if (err) return console.log(err.message);
  });

  res.status(200).json({ message: "News created successfully" });
};

//get all news:
const getAllNews = (req, res) => {
  sql = `SELECT * FROM news`;
  let news = [];
  db.all(sql, [], (err, rows) => {
    if (err) return console.log(err);
    rows.forEach((r) => news.push(r));
    res.status(200).json({ data: news });
  });
};

const getSingleNews = async (req, res) => {
  const { id } = req.params;

  sql = `SELECT * FROM news WHERE newsId=${id}`;

  db.get(sql, [], (err, row) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong." });
    }
    res.status(200).json(row);
  });
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
};
