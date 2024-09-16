const express = require('express')
const { registerController } = require('../controllers/userController')

const router = express.Router()

//routes
router.post('/register', registerController )

//exports
module.exports = router