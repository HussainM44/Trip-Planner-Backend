// Dependencies
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch(err => {
    console.error("MongoDB connection error:", err)
    process.exit(1) // stop server if DB fails
  })

// Routes
const authRouter = require("./routes/user")
const attractionRouter = require("./routes/attraction")
const tripRouter = require("./routes/trip")
const commentRouter = require("./routes/comment")
const tripPlanRouter = require("./routes/tripPlan")

app.use("/auth", authRouter)
app.use("/attraction", attractionRouter)
app.use("/trip", tripRouter)
app.use("/comment", commentRouter)
app.use("/plan", tripPlanRouter)

// Root Route
app.get("/", (req, res) => {
  res.send("hello")
})

// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
