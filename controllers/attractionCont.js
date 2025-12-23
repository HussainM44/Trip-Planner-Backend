const Attraction = require("../models/attraction")
const attractionJSON = require("../attractionJSON")

// Functions
const getAttractions = async (req, res) => {
  const countries = attractionJSON.map((e) => ({
    country: e.country,
    imgLink: e.imgLink,
    cities: e.cities,
  }))


  return res.send({ countries })
}

// Exports
module.exports = {
  getAttractions,
}
