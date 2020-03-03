'use strict';
var express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController.js');

// new user page
userRouter.get('/new', userController.register);

// post new user
userRouter.post('/', userController.doRegister);

module.exports = userRouter;