'use strict';
module.exports = function(app){
    var news = require('../controllers/newsController.js');

    //ROUTES
    app.route('/api/news')
        .get(news.list_news)
        .post(news.create_news);

    app.route('/api/news/:newsId')
        .get(news.read_news)
        .put(news.update_news)
        .delete(news.delete_news);

}