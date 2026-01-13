const router = require("express").Router()
const tripPlanCont = require("../controllers/tripPlanCont")
const middleware = require("../middleware/index")

router.get("/", tripPlanCont.getAllPlans)
router.get("/:id", tripPlanCont.getSinglePlan)


router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  tripPlanCont.updatePlan
)


router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  tripPlanCont.createPlan
)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  tripPlanCont.deletePlan
)

module.exports = router
