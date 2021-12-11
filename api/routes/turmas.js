const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()

router.get('/turmas', TurmaController.listaTurmas)
router.get('/turmas/:id', TurmaController.listaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.apagaTurma)


module.exports = router;