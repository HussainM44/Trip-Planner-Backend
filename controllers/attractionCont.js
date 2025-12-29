const Attraction = require("../models/attraction")


// Functions

// GET All Attraction
const getAttractions = async(req, res) => {
  try {
    const allAttraction = await Attraction.find()
    return res.status(200).send(allAttraction)
  } catch (error) {
    throw error
  }
}

// Get one Attraction
const getSingleAttraction = async(req, res) => {
  try {
    const attractionById = await Attraction.findOne({ attractionId: Number(req.params.id) })
    if (!attractionById) {
      return res.status(404).send({ status: 'Error', msg: 'Attraction not found' })
    }
    return res.status(200).send(attractionById)
  } catch (error) {
    throw error
  }
}


// Exports
module.exports = {
  getAttractions,
  getSingleAttraction
}
