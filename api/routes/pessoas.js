const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.lista)
router.get('/pessoas/:id', PessoaController.listaPorId)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
/******************Matriculas *************************/
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.listaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)


module.exports = router;
