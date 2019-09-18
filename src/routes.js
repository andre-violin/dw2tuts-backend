const express = require("express");

const routes = express.Router();
const TestController = require("./controllers/TestController");

// PUT, DELETE E POST
routes.get("/", TestController.index);
routes.post("/", TestController.create);

routes.get("/login", TestController.login);

module.exports = routes;
