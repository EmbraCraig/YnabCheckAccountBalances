const express = require('express');
const app = express();
const path = require('path');

// configure view engine
app.set('views', './views');
app.set('view engine', 'pug');

//routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

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