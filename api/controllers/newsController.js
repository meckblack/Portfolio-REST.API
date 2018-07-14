'use strict'

var mongoose = require('mongoose'),
    News = mongoose.model('News');

exports.list_news = function(req, res){
    News.find({}, function(err, news){
        if(err)
            res.send(err);
        res.json(news);
    });
};

exports.create_news = function(req, res){
    var new_news = new News(req.body);
    new_news.save(function(err, news){
        if(err)
            res.send(err);
        res.status(201);
        res.json(news);
    });
};

exports.read_news = function(req, res){
    News.findById({ _id : req.params.newId }, function(err, news){
        if(err)
            res.send(err);
        res.json(news);
    });
};

exports.update_news = function(req, res){
    News.findOneAndUpdate({ _id : req.params.newsId }, function(err, news){
        if(err)
            res.send(err);
        res.json(news);
    });
};

exports.delete_news = function(req, res){
    News.findOneAndRemove({ _id : req.params.newsId }, function(err, news){
        if(err)
            res.send(err);
        res.json({ message: 'News has been successfully delete' });
    })
}