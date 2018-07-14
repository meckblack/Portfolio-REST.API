var express = require('express'),
    app = express(),
    //Start Server on port 3000
    port = process.env.PORT || 3000,
    path = require('path'),

    mongoose = require('mongoose'),
    //body-parser instance
    bodyparser = require('body-parser');

//connect to MongoDB server
mongoose.Promise = global.Promise;
var option = {
    useMongoClient : true,
    keepAlive: 300000,
    connectTimeoutMS: 30000
};

//Check Connection to MongoDb
const _db = require('./config/config.js');
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

//Import Routes
var _newsRoutes = require('./api/routes/newsRoutes.js');

app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }

    // Pass to next layer of middleware
    next();
});

//register routes
_newsRoutes(app);








app.listen(port);