var express = require('express');
var router = express.Router();
var db = require('../db');
var User = db.User;
module.exports = router;

/*
var userSchema = mongoose.Schema({
  apikey : { type : String },
  userName : { type : String },
  enable : { type : Boolean },
  부장 0
  부부장 1
  유닛 관리자 2
  부원 3
  userType : { type : Number },
  phoneNumber : { type : Number },
  grade : { type : Number },
  isLumihanaAndroid : { type : Boolean },
  isLumihanaWeb : { type : Boolean },
  isGGZ : { type : Boolean },
  isArduino : { type : Boolean },
  isDebur : { type : Boolean },
  isPixel : { type : Boolean }
});
*/
router.post('/getSelfInfo', function(req, res){
  if(req.body.number !== undefined){
    var userPhoneNum = req.body.number;
    User.findOne({ phoneNumber : userPhoneNum }, function(err, doc){
      if(doc == null) res.sendStatus(401);
      else {
        if(doc.enable == false) res.sendStatus(401);
        else res.send(doc);
      }
    })
  } else res.sendStatus(411);
});

router.post('/changeSelfProfile', function(req, res){
  if(req.body.apikey !== undefined && req.body.userName !== undefined && req.body.phoneNumber !== undefined){
    var apikey = req.body.apikey;
    var userName = req.body.userName;
    var phoneNumber = req.body.phoneNumber;
    User.update({apikey : apikey}, {userName : userName, phoneNumber : phoneNumber}, function(err, num){
      if(err) throw err;
      else {
        User.findOne({apikey : apikey}, function(err, doc){
          if(err) throw err;
          else res.send(doc);
        });
      }
    })
  }
})
