const express = require('express')
const { registerController, loginController, updateUserController } = require('../controllers/userController')

const router = express.Router()

//routes
router.post('/register', registerController )

//Login
router.post('/login', loginController)

//UPDATE 
router.put('/update-user', updateUserController)

//exports
module.exports = router