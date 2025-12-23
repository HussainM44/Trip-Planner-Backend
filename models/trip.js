const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    isPrivate: {
      type: Boolean,
      default: true,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

const Trip = mongoose.model("Trip", tripSchema)
module.exports = Trip
