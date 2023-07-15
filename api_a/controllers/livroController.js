const livroModel = require('../models/livroModel');

class LivroController {
  async cadastrar(req, res) {
    try {
      const livro = req.body;
      const max = await livroModel.findOne({}).sort({ ISBN: -1 });
      livro.ISBN = max == null ? 1 : max.ISBN + 1;
      livro.Alugado = false;

      const resultado = await livroModel.create(livro);
      res.status(201).json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar o livro' });
    }
  }

  async listar(req, res) {
    const resultado = await livroModel.find({});
    res.status(200).json(resultado);
  }


  async buscarPorISBN(req, res) {
    const ISBN = req.params.ISBN;
    const resultado = await livroModel.findOne({ 'ISBN': ISBN });
    res.status(200).json(resultado);
  }

  async atualizar(req, res) {
    try {
      const ISBN = req.params.ISBN;
      const livro = req.body;

      if (livro.hasOwnProperty('Alugado')) {
        livro.Alugado = Boolean(livro.Alugado);
      }

      await livroModel.findOneAndUpdate({ ISBN: ISBN }, livro);
      res.status(200).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
  }


  async excluir(req, res) {
    const ISBN = req.params.ISBN;
    const livro = await livroModel.findOne({ 'ISBN': ISBN });

    if (!livro) {
      return res.status(404).json({ message: 'livro não encontrado' });
    }

    const _id = String(livro._id);
    await livroModel.findByIdAndRemove(_id);
    res.status(200).send();
  }


}

module.exports = new LivroController();