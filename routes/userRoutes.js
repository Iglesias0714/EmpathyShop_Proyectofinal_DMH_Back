const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/register', userController.createUser);

// Route to authenticate user
router.post('/login', userController.authenticateUser);

module.exports = router;
