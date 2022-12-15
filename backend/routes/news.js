const {
  createNews,
  getAllNews,
  getSingleNews,
} = require("../controllers/news");

const Router = require("express").Router();

//get all news:
Router.get("/", getAllNews);

//get a news:
Router.get("/:id", getSingleNews);

//create a news:
Router.post("/create", createNews);

module.exports = Router;
