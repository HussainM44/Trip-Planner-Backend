const router = require("express").Router()

const tripPlanCont = require("../controllers/tripPlanCont")


// Routes

router.get("/",tripPlanCont.getAllPlans)




// Export
module.exports = router
