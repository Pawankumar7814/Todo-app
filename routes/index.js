// Adding modules
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

// route to access the home controller
router.get('/', homeController.home);

// Route to user routes
router.use('/user', require('./user_route'));

// Route to post route
router.use('/post', require('./post_route'));

module.exports = router;