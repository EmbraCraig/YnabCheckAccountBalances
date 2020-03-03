//var mongoose = require('mongoose');
var passport = require('passport');
//var User = require('../models/user');

var authController = {};

// Go to login page
authController.login = function(req, res) {
    res.render('./login');
};

// Post login
authController.doLogin = function(req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('./');
    });
};

// logout
authController.logout = function(req, res) {
    req.logout();
    res.redirect('./');
};

module.exports = authController;