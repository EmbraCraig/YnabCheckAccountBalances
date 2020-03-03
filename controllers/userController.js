'use strict';
var passport = require('passport');
var User = require('../models/user');

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
    res.render('../views/user/', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
    res.render('../views/user/new');
};

userController.doRegister = function(req, res) {
    User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
        if (err) {
            return res.render('../views/user/new', { user : user });
        }
  
        passport.authenticate('local')(req, res, function () {
            res.redirect('../');
        });
    });
};

module.exports = userController;