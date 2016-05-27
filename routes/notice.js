var express = require('express');
var db = require('../db');
var randomstring = require('randomstring');
var router = express.Router();
module.exports = router;

router.post('/listNotice', function (req, res) {
  db.Notice.find(function(err, doc){
    if(doc.length != 0){
      res.send(doc);
    } else res.sendStatus(400);
  });
});

router.post('/writeNotice', function(req, res){
  /*
  articleKey : { type : String },
  title : { type : String },
  wroteDate : { type : String },
  grade : { type : Array },
  author : { type : String },
  isLumihana : { type : Boolean },
  isGGZ : { type : Boolean },
  isArduino : { type : Boolean },
  isDebur : { type : Boolean },
  content : { type : String }
  // */
  var newNotice = new db.Notice({
    articleKey : randomstring.generate(),
    title : req.body.title,
    wroteDate : req.body.wroteDate,
    grade : req.body.grade,
    author : req.body.author,
    isLumihana : req.body.isLumihana,
    isGGZ : req.body.isGGZ,
    isArduino : req.body.isArduino,
    isDebur : req.body.isDebur,
    content : req.body.content
  });
  newNotice.save(function(err){
    if(err) throw err;
    else {
      res.send(newNotice);
      // Send GCM
    }
  });
})
