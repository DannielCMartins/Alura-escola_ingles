const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router.get('/niveis', NivelController.listaNivel)
router.get('/niveis/:id', NivelController.listaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router