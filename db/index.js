var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/Edranet");

var userSchema = mongoose.Schema({
  apikey : { type : String },
  userName : { type : String },
  /*
  부장 0
  부부장 1
  유닛 관리자 2
  부원 3
  */
  enable : { type : Boolean },
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

var noticeSchema = mongoose.Schema({
  articleKey : { type : String },
  title : { type : String },
  wroteDate : { type : String },
  grade : { type : Array },
  author : { type : String },
  isLumihanaAndroid : { type : Boolean },
  isLumihanaWeb : { type : Boolean },
  isGGZ : { type : Boolean },
  isArduino : { type : Boolean },
  isDebur : { type : Boolean },
  isPixel : { type : Boolean },
  content : { type : String }
});

var attendenceSchema = mongoose.Schema({
  date : { type : String },
  isLumihana : { type : Boolean },
  isGGZ : { type : Boolean },
  isArduino : { type : Boolean },
  isDebur : { type : Boolean },
  isPixel : { type : Boolean },
  notFound : { type : Array },
  notFoundWithIllegal : { type : Array }
})

var User = mongoose.model("User", userSchema);
var Notice = mongoose.model("Notice", noticeSchema);
var Attendence = mongoose.model("Attendence", attendenceSchema);
exports.db = db;
exports.mongoose = mongoose;
exports.User = User;
exports.Attendence = Attendence;
exports.Notice = Notice;
