'use strict';
var express = require('express');
var authRouter = express.Router();
var authController = require('../controllers/authController.js');

// login page
authRouter.get('/login', authController.login);

// post login
authRouter.post('/login', authController.doLogin);

// post logout
authRouter.get('/logout', authController.logout);

module.exports = authRouter;