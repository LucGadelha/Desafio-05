const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const livrosRoutes = require("./routes/livros");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", livrosRoutes);

mongoose
  .connect("mongodb://localhost:27017/biblioteca", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB", err);
  });

module.exports = app;
