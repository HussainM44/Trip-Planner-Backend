const router = require("express").Router()
const tripPlanCont = require("../controllers/tripPlanCont")

// Routes
router.get("/", tripPlanCont.getAllPlans)
router.get('/:id', tripPlanCont.getSinglePlan)
router.post('/', tripPlanCont.createPlan)
router.put('/:id', tripPlanCont.updatePlan)
router.delete('/:id', tripPlanCont.deletePlan)


// Export
module.exports = router
