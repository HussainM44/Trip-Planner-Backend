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

const comment_delete_delete = async (req,res) => {
  const commentId = req.params.commentId

  await Comment.findByIdAndDelete(commentId)

  res.json(commentId)
}

const comment_index_get = async (req,res) => {
  const tripId = req.params.tripId

  const comments = await Comment.find({trip: tripId}).populate("user","name").sort({createdAt: -1})

  res.json(comments)
}

const comment_update_get = async (req,res) => {
  const commentId = req.params.commentId

  const comment = await Comment.findById(commentId)

  res.json(comment)
}


module.exports = {
  comment_create_post,
  comment_update_put,
  comment_delete_delete,
  comment_index_get,
  comment_update_get,
}
