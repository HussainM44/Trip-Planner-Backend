const Trip = require('../models/trip')
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

module.exports = {
  comment_create_post,
}
