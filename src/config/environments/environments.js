require('dotenv').config() // Sirve para utilizar las envs
const env = require('env-var') // Sirve para validar las envs

exports.envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  DB_URI: env.get('DB_URI').required().asString()
}