const mongoose = require("mongoose")

const attractionSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    picture: {
      type: String,
    },

    description: {
      type: String,
    },
    attractionId: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const Attraction = mongoose.model("Attraction", attractionSchema)
module.exports = Attraction
