const TripPlan = require("../models/tripPlan")

const Attraction = require("../models/attraction")

// Function

// Getting All plans
const getAllPlans = async (req, res) => {
  const allPlans = await TripPlan.findById()

  return res.send({ allPlans })
}

// Export
module.exports = {
  getAllPlans,
}
