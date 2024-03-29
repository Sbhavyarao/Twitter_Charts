var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bhavya:bhavya1234@cluster0-vwglj.mongodb.net/ASE?retryWrites=true&w=majority')
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var apiRouter = require('./Routes/route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/SmartLearn')));
app.use('/login', express.static(path.join(__dirname, 'dist/SmartLearn')));
app.use('/register', express.static(path.join(__dirname, 'dist/SmartLearn')));
app.use('/#/home', express.static(path.join(__dirname, 'dist/SmartLearn')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

module.exports = app;
