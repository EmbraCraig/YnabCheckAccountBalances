'use strict';

let controller = {
    showIndex: function(req, res){
        res.render('index', res);
    },

    showPrivacy: function(req, res){
        res.render('privacy', res);
    }
};

module.exports = controller;