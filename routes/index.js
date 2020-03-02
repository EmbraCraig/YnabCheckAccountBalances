'use strict';
const controller = require('../controllers/index');
const express = require('express');
const index = express.Router();

index.get('/', controller.showIndex);

module.exports = index;
