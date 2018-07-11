const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const alertsRouter = require('./routes/alerts.js');

const app = express();


let port = 8000 || process.env.port

// add middleware libraries
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// define route namespaces
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alerts', alertsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set localStorage, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// start server
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});