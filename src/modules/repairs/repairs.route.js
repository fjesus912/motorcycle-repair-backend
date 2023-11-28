const express = require('express')
const repairsController = require('./repairs.controllers')
const router = express.Router()


//? Definición de endpoints
//? Obtener la lista de los usuarios en la base de datos
router.get('/repairs', repairsController.findAll)

//? Obtener un solo usuario dado un id
router.get('/repairs/:id', repairsController.findOne)

//? Crear un nuevo usuario
router.post('/repairs', repairsController.create)

//? Actualizar los datos de un usuario dado un id
router.patch('/repairs/:id', repairsController.update)

//? Deshabilitar la cuenta de un usuario
router.delete('/repairs/:id', repairsController.deleteOne)

module.exports = router