var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const engines = require('consolidate');
const Handlebars = require('handlebars');
var sqldb = require('./app/sqldb');
var indexRouter = require('./app/routes/route');


var app = express();
app.listen(3000, function () {
	  console.log('Revision app listening on port 3000!');
  });
//mysql connect


sqldb.sequelize.sync({force: false}).then(function() {
    console.log("Server successed to start");
}).catch(function(err){
    console.log("Server failed to start due to error: %s", err);
});


// view engine setup
app.engine('ejs', engines.handlebars);
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
Handlebars.registerHelper('format',function (date, options) {
  return new Date(date).toLocaleString();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
