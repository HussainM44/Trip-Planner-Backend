const mongoose = require("mongoose")

const tripPlanSchema= new mongoose.Schema({
  trip:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"trip"
  },
  attraction:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"trip"
  },
  day:{
    type : Number,
  },
  notes : {
    type : String,
  }
})

const Plan = mongoose.model("Plan",tripPlanSchema)

module.exports = Plan

