const router = require("express").Router()

const attractionCont = require("../controllers/attractionCont")


// Routes

router.get("/", attractionCont.getAttractions)

router.get("/:id", attractionCont.getSingleAttraction)

// Exports
module.exports = router
