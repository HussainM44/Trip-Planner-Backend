const router = require("express").Router()

const attractionCont = require("../controllers/attractionCont")

const attractionJSON = require("../attractionJSON")
// Routes

router.get("/countries", attractionCont.getAttractions)

// router.post("/countries",attraction)

// Exports
module.exports = router
