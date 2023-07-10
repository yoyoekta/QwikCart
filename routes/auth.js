const express = require('express')
const  { register, login, getCurrentUser } = require('../controllers/auth')
const { fetchUser } = require('../middlewares/fetchUser')
const router = express.Router()

// Routes

router.post('/register', register)
router.post('/login', login)
// get user details
router.get('/user', fetchUser, getCurrentUser)

module.exports = router