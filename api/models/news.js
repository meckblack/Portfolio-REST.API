'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    heading: {
        type: String,
        required: 'News heading is required!!!!'
    },
    body: {
        type: String,
        required: 'News body is required!!!!'
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('News', NewsSchema);