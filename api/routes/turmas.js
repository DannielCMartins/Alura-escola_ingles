const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()

router.get('/turmas/:id', TurmaController.turma)  
router.post('/turmas', TurmaController.criaTurma)  
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)  
router.put('/turmas/:id', TurmaController.atualizaTurma)  
router.delete('/turmas/:id', TurmaController.apagaTurma)
router.get('/turmas', TurmaController.todasAsTurmas)  

module.exports = router
