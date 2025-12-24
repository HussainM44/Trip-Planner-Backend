// Dependencies
const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

// Mongoose
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})

// Middleware
const methodOverride = require("method-override")
const morgan = require("morgan")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.use("/trips", require("./routes/trip"))

// Root Route
app.get("/", (req, res) => {
  res.send("hello")
})

// Req Router
const attractionRouter = require("./routes/attraction")
const tripPLanRouter = require("./routes/tripPlan")


// Use Router
app.use("/attraction", attractionRouter)
app.use("/plan",tripPLanRouter)


// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
