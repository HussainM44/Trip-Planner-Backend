const router = require("express").Router()

const attractionCont = require("../controllers/attractionCont")


// Routes

router.get("/countries", attractionCont.getAttractions)

router.get("/countries/:id",attractionCont.getSingleAttraction)

// Exports
module.exports = router
