// Dependencies
const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()
const cors = require('cors')

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
app.use(cors())

// Root Route
app.get("/", (req, res) => {
  res.send("hello")
})

// Req Router
const authRouter = require("./routes/user")
const attractionRouter = require("./routes/attraction")
const tripRouter = require("./routes/trip")
const commentRouter = require("./routes/comment")
const tripPLanRouter = require("./routes/tripPlan")


// Use Router
app.use("/auth", authRouter)
app.use("/attraction", attractionRouter)
app.use("/trip", tripRouter, commentRouter)
app.use("/plan",tripPLanRouter)


// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
