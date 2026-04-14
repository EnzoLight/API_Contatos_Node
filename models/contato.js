const mongoose = require('mongoose');


const contatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: false,
  },
});


const Contato = mongoose.model('Contato', contatoSchema);

// Tudo que eu for utilizar no meu projeto eu preciso exportar
module.exports = Contato;