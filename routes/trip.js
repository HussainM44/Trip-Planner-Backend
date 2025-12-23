const router = require("express").Router()

const tripCtrl = require("../controllers/tripController")


router.get("/", tripCtrl.trip_get)
router.post("/", tripCtrl.trip_create_post)
router.get("/new", tripCtrl.trip_create_get)
router.get("/:tripId", tripCtrl.trip_show_get)
router.get("/:tripId/edit", tripCtrl.trip_edit_get)
router.put("/:tripId", tripCtrl.trip_update_put)
router.delete("/:tripId", tripCtrl.trip_delete_delete)

module.exports = router




