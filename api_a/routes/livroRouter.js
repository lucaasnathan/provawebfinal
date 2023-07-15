const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');


router.post('/', livroController.cadastrar);
router.get('/', livroController.listar);
router.get('/:ISBN', livroController.buscarPorISBN);
router.put('/:ISBN', livroController.atualizar);
router.delete('/:ISBN', livroController.excluir);

module.exports = router;