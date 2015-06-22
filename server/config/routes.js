var express = require('express');

module.exports = function(app){
    app.get('/', function (req, res) {
        res.render('./index.html');
    });

    app.use('/api', require('../routes/adApi')(app, express));
    app.use('/api', require('../routes/categoryApi')(app, express));
    app.use('/api', require('../routes/userApi')(app, express));
    app.use('/api', require('../routes/uploadApi')(app, express));
}
