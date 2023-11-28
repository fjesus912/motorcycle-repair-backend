const express = require('express')
const usersController = require('./users.controllers')
const router = express.Router()

//? Definición de endpoints
//? Obtener la lista de los usuarios en la base de datos
router.get('/users', usersController.findAll)

//? Obtener un solo usuario dado un id
router.get('/users/:id', usersController.findOne)

//? Crear un nuevo usuario
router.post('/users', usersController.create)

//? Actualizar los datos de un usuario dado un id
router.patch('/users/:id', usersController.update)

//? Deshabilitar la cuenta de un usuario
router.delete('/users/:id', usersController.deleteOne)

module.exports = router