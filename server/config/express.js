var express = require('express');
var bodyParser = require('body-parser');

module.exports = function (app, config) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.set('views', config.rootPath + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.use('/client', express.static(config.rootPath + '/client'));
    app.use('/content', express.static(config.rootPath + '/client/content'));
}
