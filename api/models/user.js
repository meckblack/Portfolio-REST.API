'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: 'Email field is required!!!'
    },

    password: {
        type: String,
        required: 'Password field is requried!!!'
    },

    confirmPassword: {
        type: String,
        required: 'Confirm Password field is required!!!'
    }
});

module.exports = mongoose.model('Users', UserSchema);
