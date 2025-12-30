const Comment = require('../models/comment')

const comment_create_post = async (req, res) => {
  const loggedInUser = res.locals.payload.id
  const tripId = req.params.tripId

  const comment = await Comment.create({
    user: loggedInUser,
    trip: tripId,
    feedback: req.body.feedback,
    rating: Number(req.body.rating),
  })
  const populatedComment =await comment.populate("user","name")
  res.json(populatedComment)
}

const comment_update_put = async (req, res) => {
  const commentId = req.params.commentId

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    {
    feedback: req.body.feedback,
    rating: req.body.rating,
    },
    {new:true}
  )
  res.json(updatedComment)
}



module.exports = {
  comment_create_post,
  comment_update_put,
  comment_delete_delete,
  comment_index_get,
  comment_update_get,
}
