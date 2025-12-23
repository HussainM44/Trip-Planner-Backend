const mongoose = require("mongoose");

const tripPlanSchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },

    attraction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attraction",
      required: true,
    },

    day: {
      type: Number,
      min: 1,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TripPlan = mongoose.model("TripPlan", tripPlanSchema)
module.exports = TripPlan
