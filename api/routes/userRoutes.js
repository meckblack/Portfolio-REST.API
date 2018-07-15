'use strict';
module.exports = function(app){
    var users = require('../controllers/usersController.js');

    //ROUTES
    app.route('/api/users')
        .get(users.list_users)
        .post(users.create_user);
}