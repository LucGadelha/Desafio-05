// routes/livros.js
const express = require("express");
const Livro = require("../models/Livro");
const router = express.Router();

// GET /livros - Retorna todos os livros
router.get("/", async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao buscar livros" });
  }
});

// GET /livros/:id - Retorna um livro específico
router.get("/:id", async (req, res) => {
  try {
    const livro = await Livro.findOne({ id: req.params.id });
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado" });
    res.json(livro);
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao buscar livro" });
  }
});

// POST /livros - Cria um novo livro
router.post("/", async (req, res) => {
  const { id, titulo, num_paginas, isbn, editora } = req.body;
  const livro = new Livro({ id, titulo, num_paginas, isbn, editora });

  try {
    await livro.save();
    res.status(201).json({ mensagem: "Livro criado com sucesso!" });
  } catch (err) {
    res.status(400).json({ mensagem: "Erro ao criar livro" });
  }
});

// PUT /livros/:id - Atualiza um livro existente
router.put("/:id", async (req, res) => {
  try {
    const livro = await Livro.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado" });
    res.json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (err) {
    res.status(400).json({ mensagem: "Erro ao atualizar livro" });
  }
});

// DELETE /livros/:id - Deleta um livro
router.delete("/:id", async (req, res) => {
  try {
    const livro = await Livro.findOneAndDelete({ id: req.params.id });
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado" });
    res.json({ mensagem: "Livro deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro ao deletar livro" });
  }
});

module.exports = router;
