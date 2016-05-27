var port = 8000;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// routes
var routes = require('./routes');
var index = require('./routes/index');
var admin = require('./routes/admin');
var auth = require('./routes/auth');
var notice = require('./routes/notice');
var attendence = require('./routes/attendance');
var app = express();
var http = require('http').Server(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//     secret: '314159265358979323846264338',
//     resave: false,
//     saveUninitialized: true
// }));

app.use('/admin', admin);
app.use('/auth', auth);
app.use('/notice', notice);
app.use('/attendence', attendence);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  var err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;
http.listen(port, function(){
    console.log('EDRANET Backend running on Port ' + port);
});
