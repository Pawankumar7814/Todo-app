// Adding modules
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

// route to access the home controller
router.get('/', homeController.home);

module.exports = router;