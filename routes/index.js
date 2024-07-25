const express = require('express')
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const { validateRegister, validateLogin } = require('../utils/validators/auth');


//define route for register
router.post('/register', validateRegister, registerController.register);

//define route for login
router.post('/login', validateLogin, loginController.login);

//export router
module.exports = router