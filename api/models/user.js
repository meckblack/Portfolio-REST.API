'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

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

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

UserSchema.methods.generateHash2 = function(confirmPassword){
    return bcrypt.hashSync(confirmPassword, bcrypt.genSaltSync(9));
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.UserSchema.password);
}


module.exports = mongoose.model('Users', UserSchema);
