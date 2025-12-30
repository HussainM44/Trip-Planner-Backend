const TripPlan = require("../models/tripPlan")
const Attraction = require("../models/attraction")

// Function

// Getting All plans
const getAllPlans = async (req, res) => {
  try {
    const allPlans = await TripPlan.find()
      .populate("trip")
      .populate("attraction")
    return res.status(200).send(allPlans)
  } catch (error) {
    throw error
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
    const { attraction: attractionId, day, notes, trip } = req.body;

    const attraction = await Attraction.findById(attractionId);
    if (!attraction) {
      return res.status(404).send({ message: "Attraction not found" });
    }

    const newPlan = await TripPlan.create({
      attraction: attraction._id,
      day,
      notes,
      trip,
    });

    return res.status(201).send(newPlan);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error creating plan", error });
  }
};


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

//delete trip plan
const deletePlan = async (req, res) => {
  try {
    const deletedPlan = await TripPlan.findByIdAndDelete(req.params.id)
    if (!deletedPlan) {
      return res
        .status(400)
        .send({ status: "error", msg: "Trip plan not found" })
    }
    return res.status(200).json({ status: "Success", msg: "TripPlan deleted" })
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
