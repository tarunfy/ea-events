const { createEvent } = require("../controllers/events");

const Router = require("express").Router();

//get all events:
Router.get("", (req, res) => {
  console.log("Get all events");
});

//get an event details:
Router.get("/:eventId", (req, res) => {
  console.log("Get an event");
});

//create an event:
Router.post("/create", createEvent);

//update and event:
Router.put("/:eventId", (req, res) => {
  console.log("Update an event");
});

//delete an event:
Router.delete("/:eventId", (req, res) => {
  console.log("Delete an event");
});

module.exports = Router;
