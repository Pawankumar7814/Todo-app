// Adding modules and controllers
const express = require('express');
const router = express.Router();
const postController = require('../controller/post_controller');

router.get('/post', postController.task);



module.exports = router;