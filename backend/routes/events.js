const {
  createEvent,
  getAllEvents,
  bookTicket,
} = require("../controllers/events");

const Router = require("express").Router();

//get all events:
Router.get("/", getAllEvents);

//create an event:
Router.post("/create", createEvent);

module.exports = Router;
