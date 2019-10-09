const express = require("express");
// ODM - Object Data Mapping
const mongoose = require("mongoose");
// Permite compartilhar a API com aplicações externas
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

// Conexão com o banco de dados (dw2tuts)
mongoose.connect("mongodb://localhost:27017/dw2tuts", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const routes = require("./routes");

server.use(routes);

server.listen(3333);
