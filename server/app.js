require('dotenv').config()

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');

const homeRouter = require('./routes/home.js');
const alertRouter = require('./routes/alerts.js');
const locationRouter = require('./routes/locations.js');
const userRouter = require('./routes/users.js');

const app = express();


// Setup default mongoose connection
const mongoDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds235411.mlab.com:35411/iss_tracker`;
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 8001 || process.env.port

// add middleware libraries
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// define route namespaces
app.use('/', homeRouter);
app.use('/alerts', alertRouter);
app.use('/locations', locationRouter);
app.use('/user', userRouter);

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