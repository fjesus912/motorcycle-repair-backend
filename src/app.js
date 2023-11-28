const express = require('express')
const usersRoute = require('./modules/users/users.route')
const repairsRouter = require('./modules/repairs/repairs.route')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', usersRoute)
app.use('/api/v1', repairsRouter)


module.exports = app
