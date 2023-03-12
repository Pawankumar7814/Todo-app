// Module
const express = require('express');
const router = express.Router();

const userController = require('../controller/user_contoller');

router.get('/profile', userController.profile);




module.exports = router;