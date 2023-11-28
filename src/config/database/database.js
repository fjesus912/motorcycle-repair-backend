const { Sequelize } = require('sequelize')
const { envs } = require('../environments/environments')

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})

const authenticated = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conection has been established successfully :)')
  } catch (error) {
    console.log(error)
  }
}

const syncUp = async () => {
  try {
    await sequelize.sync()
    console.log('Conection has been synced successfully :)')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sequelize,
  authenticated,
  syncUp
}