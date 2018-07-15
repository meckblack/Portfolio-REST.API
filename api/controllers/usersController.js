'use strict'

var mongoose = require('mongoose'),
    Users = mongoose.model('Users');

//GET ALL USERS IN THE DATABASE
exports.list_users = function(req, res){
    Users.find({}, function(err, users){
        if(err)
            res.send(err);
        res.json(users);
    });
};

//CREATES A NEW USER IN THE DATABASE
exports.create_user = function(req, res){
    var new_user = new Users(req.body);
    new_user.save(function(err, users){
        if(err)
            res.send(err);
        res.status(201);
        res.json(users);
    });
};