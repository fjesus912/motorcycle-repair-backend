const RepairService = require("./repairs.service")

//? Definicion de funciones
exports.findAll = async (req, res) => {

  try {
    const repairs = await RepairService.findAll()

    return res.status(200).json({
      repairs
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :('
    })
  }
}

exports.findOne = async (req, res) => {

  try {
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`
      })
    }

    return res.status(200).json(repair)
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :('
    })
  }
}

exports.create = async (req, res) => {

  try {
    const { date, userId } = req.body
    const repair = await RepairService.create({ date, userId })

    return res.status(201).json(repair)
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :('
    })
  }
}

exports.update = async (req, res) => {

  try {
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`
      })
    }

    const repairUpdated = await RepairService.update(repair)

    return res.status(200).json(repairUpdated)
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :('
    })
  }
}

exports.deleteOne = async (req, res) => {

  try {
    const { id } = req.params
    const repair = await RepairService.findOne(id)

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`
      })
    }

    await RepairService.delete(repair)
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong :('
    })
  }
}