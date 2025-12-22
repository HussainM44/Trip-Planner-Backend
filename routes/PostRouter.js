const middleware = require('../middleware')

const router = require('express').Router()
const controller = require('../controllers/PostController')

router.get('/', controller.GetPosts)
router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreatePost
)
router.put('/:id', controller.UpdatePost)
router.delete('/:id', controller.DeletePost)

module.exports = router