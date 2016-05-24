var port = 8000;

var express = require('express');
var path = require('path');

var routes = require('./routes');
var index = require('./routes/index');
var multer  = require('multer');
var app = express();
var http = require('http').Server(app);

app.use('/', index);
app.use(function(req, res, next) {
  var err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;
http.listen(port, function(){
    console.log('EDRANET Backend running on Port ' + port);
});
