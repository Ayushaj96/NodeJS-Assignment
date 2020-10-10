const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/').post(userController.test);

module.exports = router;