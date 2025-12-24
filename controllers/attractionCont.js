const Attraction = require("../models/attraction")


// Functions

// GET All Attraction
const getAttractions = async(req,res)=>{
 const allAttraction = await Attraction.find()

  return res.send({allAttraction})
}

// Get one Attraction
const getSingleAttraction = async(req,res)=>{
  const attractionById = await Attraction.findById(req.params.id)

  return res.send({attractionById})
}


// Exports
module.exports = {
  getAttractions,
  getSingleAttraction
}
