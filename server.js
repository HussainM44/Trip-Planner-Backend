// Dependencies

const dotenv = require("dotenv")
dotenv.config()

const express = require("express")

const app = express()

// Use Mongoose
const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`connected to mongoDb database ${mongoose.connection.name}`)
})

module.exports = mongoose

// Middleware
const methodOverride = require("method-override")
const morgan = require("morgan")

// Use MiddleWare
app.use(express.urlencoded())
app.use(methodOverride("_method"))
app.use(morgan("dev"))
