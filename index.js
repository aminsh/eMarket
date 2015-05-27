var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV || 'development';
console.log(__dirname);


app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



var config = require('./server/config/config')[env];

require('./server/config/express')(app , config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);
require('./server/config/auth').configure();

app.listen(config.port);

console.log('Port ' + config.port + ' is listening ...');

/*app.post('/login', function(req, res, next){
 var auth  = passport.authenticate('local', function(err, user){
 if(err) next(err);
 if(!user) res.send({success: false});
 req.logIn(user, function(err){
 if(err) next(err);
 res.send({success: true, user: user});
 });
 });

 auth(req, res, next);
 });*/




