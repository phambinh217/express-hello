var express = require('express')
var router = express.Router()
const userController = require('../app/controllers/user')
const userValidator = require('../app/validators/user')

router.get('/users', userValidator.store(), userController.store)

module.exports = router
