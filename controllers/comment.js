const Comment = require('../models/comment')
const User = require('../models/user')

const comment_create_post = async (req, res) => {
  const loggedInUser = req.body.user
  const tripId = req.params.tripId

  const comment = await Comment.create({
    user: loggedInUser,
    trip: tripId,
    feedback: req.body.feedback,
    rating: Number(req.body.rating)
  })

  res.json(comment)
}

const comment_update_put = async (req, res) => {
  const commentId = req.body.commentId

  await Comment.findByIdAndUpdate(
    commentId,
    {
    feedback: req.body.feedback,
    rating: req.body.rating,
    },
    {new:true}
  )
  res.json(commentId)
}

const comment_delete_delete = async (req,res) => {
  const commentId = req.body.commentId

  await Comment.findByIdAndDelete(commentId)

  res.json(commentId)
}

module.exports = {
  comment_create_post,
  comment_update_put,
  comment_delete_delete,
}
