var express = require('express');
var db = require('../db');
var randomstring = require('randomstring');
var router = express.Router();
module.exports = router;

router.post('/startCheck', function(req,res){
  var date = req.body.date;
  var unit = req.body.unit;
  var query = '';
  switch(unit){
    case 0:
      query = 'isLumihana';
      break;
    case 1:
      query = 'isGGZ';
      break;
    case 2:
      query = 'isArduino';
      break;
    case 3:
      query = 'inDebur';
      break;
    case 4:
      query = 'isPixel';
      break;
  }
  db.User.find({query : True}, function(err, docs){
    if(err) throw err;
    else{
      if(docs.length != 0){
        res.send(docs);
      }
      else res.sendStatus(400);
    }
  })
})
