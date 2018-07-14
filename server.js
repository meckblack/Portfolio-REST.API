var express = require('express'),
    app = express(),
    //Start Server on port 3000
    port = process.env.PORT || 3000,
    path = require('path'),

    mongoose = require('mongoose'),
    //body-parser instance
    bodyparser = require('body-parser');

const _db = require('./config/config.js');


//connect to MongoDB server
mongoose.Promise = global.Promise;
var option = {
    useMongoClient : true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
};


mongoose.connect(_db.url)
    .then(function(){
        console.log('Successfully connected to MongoDB');
    },
    function(err){
        console.log('Error: ' + err);
    });

//use body-parser
app.use(bodyparser.urlencoded({ extended : true }));
app.use(bodyparser.json());

app.listen(port);