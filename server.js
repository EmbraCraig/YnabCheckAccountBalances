const express = require('express');
const app = express();

// configure view engine
app.set('views', './views');
app.set('view engine', 'pug');

//routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// export
module.exports = app;