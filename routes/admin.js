var express = require('express');
var router = express.Router();
var db = require('../db');
var randomstring = require('randomstring');
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
router.post('/registerUser', function(req, res){
  var userName = req.body.userName;
  var enable = true;
  var userType = req.body.userType;
  var grade = req.body.grade;
  var isLumihanaAndroid = req.body.isLumihanaAndroid;
  var isLumihanaWeb = req.body.isLumihanaWeb;
  var isGGZ = req.body.isGGZ;
  var isArduino = req.body.isArduino;
  var isDebur = req.body.isDebur;
  var isPixel = req.body.isPixel;
  var phoneNumber = req.body.phoneNumber;
  if(phoneNumber === undefined || userName === undefined || userType === undefined || grade === undefined || isLumihanaAndroid === undefined || isLumihanaWeb === undefined ||isGGZ === undefined ||isArduino === undefined ||isDebur === undefined ||isPixel === undefined)
    res.sendStatus(411);
  else{
    var newUser = new User({
      apikey : randomstring.generate(),
      userName : userName,
      enable : enable,
      userType : userType,
      phoneNumber : phoneNumber,
      grade : grade,
      isLumihanaAndroid : isLumihanaAndroid,
      isLumihanaWeb : isLumihanaWeb,
      isGGZ : isGGZ,
      isArduino : isArduino,
      isDebur : isDebur,
      isPixel : isPixel
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      else res.send(newUser);
    })
  }
});

router.post('/changeUserProfile', function(req, res){
  var apikey = req.body.apikey;
  var userName = req.body.userName;
  var userType = req.body.userType;
  var grade = req.body.grade;
  var isLumihanaAndroid = req.body.isLumihanaAndroid;
  var isLumihanaWeb = req.body.isLumihanaWeb;
  var isGGZ = req.body.isGGZ;
  var isArduino = req.body.isArduino;
  var isDebur = req.body.isDebur;
  var isPixel = req.body.isPixel;
  var phoneNumber = req.body.phoneNumber;
  if(phoneNumber === undefined || userName === undefined || userType === undefined || grade === undefined || isLumihanaAndroid === undefined || isLumihanaWeb === undefined ||isGGZ === undefined ||isArduino === undefined ||isDebur === undefined ||isPixel === undefined)
    res.sendStatus(411);
  else{
    User.update({apikey : apikey}, { userName : userName, userType : userType , grade : grade, isLumihanaAndroid : isLumihanaAndroid, isLumihanaWeb : isLumihanaWeb, isGGZ : isGGZ, isArduino : isArduino, isDebur : isDebur, isPixel : isPixel, phoneNumber : phoneNumber}, function(err, doc){
      if(err) {
        throw err;
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  }
});

router.post('/disableUser', function(req, res){
  var apikey = req.body.apikey;
  if(apikey === undefined) res.sendStatus(411);
  else {
    User.update({ apikey : apikey }, { enable : false }, function(err, num){
      if(err) {
        throw err;
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
});
