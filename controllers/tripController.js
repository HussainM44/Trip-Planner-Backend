const Trip = require("../models/trip")

// GET all trips
const trip_get = async (req, res) => {
  const trips = await Trip.find().populate("user")
  res.send(trips)
}

// GET create trip form or placeholder
const trip_create_get = (req, res) => {
  res.send({ message: "Create Trip" })
}

// POST create trip
const trip_create_post = async (req, res) => {
  const trip = await Trip.create({
    user: req.body.user,
    title: req.body.title,
    isPrivate: req.body.isPrivate,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  })

  res.send(trip)
}

// GET single trip by ID
const trip_show_get = async (req, res) => {
  const trip = await Trip.findById(req.params.tripId).populate("user")

  if (!trip) {
    return res.send({ message: "Trip not found" })
  }

  res.send(trip)
}

// GET edit trip
const trip_edit_get = async (req, res) => {
  const trip = await Trip.findById(req.params.tripId)
  res.send(trip)
}

// PUT update trip
const trip_update_put = async (req, res) => {
  const trip = await Trip.findByIdAndUpdate(
    req.params.tripId,
    {
      title: req.body.title,
      isPrivate: req.body.isPrivate,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    },
    { new: true }
  )

  res.send(trip)
}

// deleting the trip
const trip_delete_delete = async (req, res) => {
  await Trip.findByIdAndDelete(req.params.tripId)
  res.send({ message: "Trip has been deleted" })
}

module.exports = {
  trip_get,
  trip_create_get,
  trip_create_post,
  trip_show_get,
  trip_edit_get,
  trip_update_put,
  trip_delete_delete,
}
