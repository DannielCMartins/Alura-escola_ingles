const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

/**Pessoas*/
router.get('/pessoas', PessoaController.todasAsPessoas)  
router.get('/pessoas/ativas', PessoaController.pessoasAtivas)  
router.get('/pessoas/:id', PessoaController.pessoa)  
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas) 

router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)  
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)  

router.put('/pessoas/:id', PessoaController.atualizaPessoa)  

router.delete('/pessoas/:id', PessoaController.apagaPessoa)

/**Matriculas */
router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.umaMatricula)  
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)  
router.get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)

router.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)  
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)  

router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)  

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)  

module.exports = router