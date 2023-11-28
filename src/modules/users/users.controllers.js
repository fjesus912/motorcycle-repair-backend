const UserServices = require("./users.service")

//? Definicion de funciones
exports.findAll = async (req, res) => {

  try {
    const users = await UserServices.findAll()

    return res.status(200).json({
      users
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :(',
      error
    })
  }
}

exports.findOne = async (req, res) => {

  try {
    const { id } = req.params
    const user = await UserServices.findOne(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`
      })
    }

    return res.status(200).json({
      user
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :(',
      error
    })
  }
}

exports.create = async (req, res) => {

  try {
    const { name, email, password, role } = req.body
    const user = await UserServices.create({ name, email, password, role })

    return res.status(201).json({
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :(',
      error
    })
  }
}

exports.update = async (req, res) => {

  try {
    const { id } = req.params

    const { name, email } = req.body
    const user = await UserServices.findOne(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`
      })
    }

    const UserUpdated = await UserServices.update(user, {
      name,
      email
    })

    return res.status(200).json({
      UserUpdated
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :(',
      error
    })
  }
}

exports.deleteOne = async (req, res) => {

  try {
    const { id } = req.params

    const user = await UserServices.findOne(id)

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found`
      })
    }

    await UserServices.deleteOne(user)

    return res.status(204).json(null)
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :(',
      error
    })
  }
}