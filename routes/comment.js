const router = require("express").Router()
const commentCtrl = require("../controllers/comment")

router.post("/:tripId/comment", commentCtrl.comment_create_post)



module.exports = router
