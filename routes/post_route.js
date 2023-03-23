// Adding modules and controllers
const express = require('express');
const router = express.Router();
const postController = require('../controller/post_controller');

router.post('/add-task', postController.task);



module.exports = router;