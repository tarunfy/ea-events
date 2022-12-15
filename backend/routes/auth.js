const Router = require("express").Router();

const creds = {
  email: "admin@gmail.com",
  password: "test12345",
};

Router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== creds.email || password !== creds.password) {
    res.status(400).json(false);
  }

  res.status(200).send(true);
});

module.exports = Router;
