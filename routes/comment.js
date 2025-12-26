const router = require("express").Router()
const commentCtrl = require("../controllers/comment")
const middleware = require("../middleware/index")

router.post("/:tripId/comment",
  middleware.stripToken,
  middleware.verifyToken,
  commentCtrl.comment_create_post
)
router.put("/:tripId/comment/:commentId",
  middleware.stripToken,
  middleware.verifyToken,
  commentCtrl.comment_update_put
)
router.delete("/:tripId/comment/:commentId",
  middleware.stripToken,
  middleware.verifyToken,
  commentCtrl.comment_delete_delete,
)
router.get("/:tripId/comment", commentCtrl.comment_index_get)
router.get("/:tripId/comment/:commentId", commentCtrl.comment_update_get)

module.exports = router
