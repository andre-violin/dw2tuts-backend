const express = require("express");
const mongoose = require("mongoose"); // ODM - Object Data Mapping

const server = express();
server.use(express.json());
// Conexão com o banco de dados (dw2tuts)
mongoose.connect("mongodb://localhost:27017/dw2tuts", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const routes = require("./routes");

server.use(routes);

server.listen(3333);
