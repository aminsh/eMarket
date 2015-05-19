var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', __dirname + '/server/views');
app.engine('html', require('ejs').renderFile);
app.use('/client', express.static(__dirname + '/client'));
app.use('/content', express.static(__dirname + '/client/content'));

var config = require('./server/config/config')[env];

require('./server/config/express')(app , config);
require('./server/config/mongoose')(config);

app.get('/', function (req, res) {
    res.render('./index.html');
});

// api routes definition
app.use('/api', require('./server/routes/adApi')(app, express));
app.use('/api', require('./server/routes/categoryApi')(app, express));
app.use('/api', require('./server/routes/userApi')(app, express));
app.param('id', function (req, res, next, id) {
    console.log('id is : ' + id);
    req.id  = id;
    next();
});



var User = require('./server/models/user');
passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({username: username}).exec(function (err, user) {
        if (user) return done(null, user);
        if (!user) return done(null, false);
    });
}));


passport.serializeUser(function (user, done) {
    if (user)
        done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    console.log('id:' + id);
    User.findById(id).exec(function (err, user) {
        if (user)
            done(null, user);
        else
            done(null, false);
    });
});

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

app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));

app.listen(config.port);

console.log('Port ' + config.port + ' is listening ...');
