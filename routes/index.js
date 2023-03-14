// Adding modules
const express = require('express');
const router = express.Router();

const db = require('../config/mongoose');
const Task = require('../models/task');
const homeController = require('../controller/home_controller');

// route to access the home controller
router.get('/', homeController.home);
router.post('/add-task', homeController.task);

// Route to user routes
router.use('/user', require('./user_route'));

// Route to post route
router.use('/post', require('./post_route'));

module.exports = router;