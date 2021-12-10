const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.lista)
router.get('/pessoas/:id', PessoaController.listaPorId)


module.exports = router;
