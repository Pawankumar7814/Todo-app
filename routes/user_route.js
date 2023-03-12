// Module
const express = require('express');
const router = express.Router();

const userController = require('../controller/user_contoller');

router.get('/profile', userController.profile);

// Route to post route
router.use('/post', require('./post_route'));


module.exports = router;