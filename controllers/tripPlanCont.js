const TripPlan = require("../models/tripPlan")
const Attraction = require("../models/attraction")

// Function

// Getting All plans
const getAllPlans = async (req, res) => {
  try {
    const plans = await TripPlan.find()
      .populate("attraction")
      .sort({ createdAt: -1 })

    return res.status(200).json(plans)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//get single trip plan
const getSinglePlan = async (req, res) => {
  try {
    const plan = await TripPlan.findById(req.params.id)
      .populate("trip")
      .populate("attraction")
    if (!plan) {
      return res
        .status(400)
        .send({ status: "Error", msg: "TripPlan not found" })
    }
    return res.status(200).send(plan)
  } catch (error) {
    throw error
  }
}

//create trip plan
const createPlan = async (req, res) => {
  try {
    const plan = await TripPlan.create({
      attraction: req.body.attraction,
      day: req.body.day,
      notes: req.body.notes,

      // ✅ CORRECT USER SOURCE
      user: res.locals.payload.id,
    })

    return res.status(201).json(plan)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePlan = async (req, res) => {
  try {
    const plan = await TripPlan.findById(req.params.id)

    if (!plan) {
      return res.status(404).json({ msg: "Trip plan not found" })
    }

    // ✅ OWNERSHIP CHECK (CORRECT)
    if (plan.user.toString() !== res.locals.payload.id) {
      return res
        .status(403)
        .json({ msg: "You are not allowed to delete this trip plan" })
    }

    await plan.deleteOne()

    return res.status(200).json({ msg: "Trip plan deleted" })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//update trip plan
const updatePlan = async (req, res) => {
  try {
    const updatedPlan = await TripPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    res.status(200).send(updatedPlan)
  } catch (error) {
    throw error
  }
}

// Export
module.exports = {
  getAllPlans,
  getSinglePlan,
  createPlan,
  updatePlan,
  deletePlan,
}
