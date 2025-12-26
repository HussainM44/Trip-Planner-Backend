const router = require("express").Router()
const commentCtrl = require("../controllers/comment")

router.post("/:tripId/comment", commentCtrl.comment_create_post)
router.put("/:tripId/comment/:commentId", commentCtrl.comment_update_put)
router.delete("/:tripId/comment", commentCtrl.comment_delete_delete)

module.exports = router
