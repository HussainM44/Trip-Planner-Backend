const { user } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await user.exists({ email })
    if (existingUser) {
        return res.status(400).send('A user with that email has already been registered!')
    } else {
        const user = await user.create({ name, email, passwordDigest })
        res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await user.findOne({ email })
    let matched = await middleware.comparePassword(
        password,
        user.passwordDigest
    )
    if (matched) {
        let payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
    }
}

module.exports = {
  Register,
  Login
}