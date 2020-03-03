'use strict';

const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/config');
const session = require('express-session');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// db stuff
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(config.MONGOOSE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'YnabCab' })
    .then(() => console.log('Connected to db successfully'))
    .catch((err) => console.log(err));

// auth
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// configure view engine
app.set('views', './views');
app.set('view engine', 'pug');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//auth middlewares  
app.use(session({
    secret: config.AUTHSECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
    res.locals.user = req.user;
    next();
});

// auth setup
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const userRouter = require('./routes/user');
app.use('/user/', userRouter);
const authRouter = require('./routes/auth');
app.use('/', authRouter);
// serve /views/public as static resources
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static('/public', {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: '30d'
}));

// export
module.exports = app;