const mongoose = require("mongoose")


const tripPlanSchema = new mongoose.Schema(
  {
    attraction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attraction",
      required: true,
    },
    day: { type: Number, required: true },
    notes: { type: String },

    // ✅ OWNER
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)


const TripPlan = mongoose.model("TripPlan", tripPlanSchema)
module.exports = TripPlan
