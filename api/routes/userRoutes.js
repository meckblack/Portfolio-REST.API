'use strict';
module.exports = function(app){
    var users = require('../controllers/usersController.js');

    //ROUTES
    app.route('/api/users')
        .get(users.findAll)
        .post(users.create);
}