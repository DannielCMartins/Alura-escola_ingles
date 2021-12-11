const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas/ativos', PessoaController.listaAtivos)
router.get('/pessoas/todos', PessoaController.lista)
router.get('/pessoas/:id', PessoaController.listaPorId)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
/******************Matriculas *************************/
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.listaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)


module.exports = router;
