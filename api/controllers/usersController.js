'use strict'

var mongoose = require('mongoose'),
    Users = mongoose.model('Users');

//Get all users from the database
function findAll (req, res){
    Users.find()
        .then(users => {
            res.json(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retriving the users'
            });
        });
}

//Create function
function create(req, res){
    //Validate the request
    if (!req.body){
        return res.status(400).send({
            message: 'Users content cannot be empty'
        });
    }

    //Create the User
    var user = new Users({
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
        //password: user.generateHash(req.body.password),
        //confirmPassword: user.generateHash2(req.body.confirmPassword)
    });

    //Save the User to the database
    user.save()
        .then(user => {
            res.json(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the news."
            });
        });
}

module.exports = {
    create,
    findAll
}