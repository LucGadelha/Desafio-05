const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: true },
  num_paginas: { type: Number, required: true },
  isbn: { type: String, required: true },
  editora: { type: String, required: true },
});

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro;
