const express = require('express')
const { registerController, loginController } = require('../controllers/userController')

const router = express.Router()

//routes
router.post('/register', registerController )

//Login
router.post('/login', loginController)

//exports
module.exports = router