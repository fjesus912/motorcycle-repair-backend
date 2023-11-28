const app = require('./app')
const { envs } = require('./config/environments/environments')
const { authenticated, syncUp } = require('./config/database/database')

async function main(){
  try {
    await authenticated()
    await syncUp()
  } catch (error) {
    console.log(error)
  }
}

main()

//? 4. Poner a escuchar el servidor por un puerto
app.listen(envs.PORT, () => {
  console.log(`Server running on port: ${envs.PORT}`)
})