const express = require('express');
const router = express.Router(); 

// import the user controller
const userController = require('../Controllers/userController');

// define the routes
router.post('/createuser', userController.createUser);
router.post('/login', userController.loginUser);

// export the router to be used in other files
module.exports = router;
