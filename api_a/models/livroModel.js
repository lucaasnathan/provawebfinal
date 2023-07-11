const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  ISBN: {
    type: Number,
    required: true,
    unique: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Autor: {
    type: String,
    required: true
  },
  AnoPublicacao: {
    type: Number,
    required: true
  },
  Tema: {
    type: String,
    required: true
  }
});


module.exports =  mongoose.model('Livro', livroSchema);
