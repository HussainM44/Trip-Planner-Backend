const mongoose = require("mongoose")

const attractionSchema = new mongoose.Schema({
  country:{
    type : String ,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  name : {
    type :String,
    required :true,
  },
  picture:{
    type: String,
  },
  description : {
    type : String,
  }
})

const Attraction = mongoose.model("Attraction",attractionSchema)

module.exports = Attraction
