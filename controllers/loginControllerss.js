var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
module.exports = (function(app){
  app.get('/', function(req,res){
    res.render('home');
  });
  app.get('/register',function(req,res){
    res.render('register');
  });
  app.get('/login',function(req,res){
    res.render('login');
  });
// Login TO DB==================================================================
  app.post('/radio_db',urlencodedParser,function(req,res){
   MongoClient.connect(url, function(err, db) {
   db.collection('userprofile').findOne({ name: req.body.name}, function(err, user) {
             if(user ===null){
               res.end("Login invalid");
            }else if (user.name === req.body.name && user.pass === req.body.pass){
            res.render('completeprofile',{profileData:user});
          } else {
            console.log("Credentials wrong");
            res.end("Login invalid");
          }
   });
 });
});
//register to DB================================================================
app.post('/regiterToDb',urlencodedParser,function(req,res){
 var obj = JSON.stringify(req.body);
 var jsonObj = JSON.parse(obj);
     res.render('profile',{loginData:req.body});
  });
//register profile to MongoDB================================================================
  app.post('/completeprofile',urlencodedParser,function(req,res){
   var obj = JSON.stringify(req.body);
   console.log("Final reg Data : "+obj);
   var jsonObj = JSON.parse(obj);
      MongoClient.connect(url, function(err, db) {
      db.collection("userprofile").insertOne(jsonObj, function(err, res) {
     if (err) throw err;
     console.log("1 document inserted");
     db.close();
      });
       res.render('completeprofile',{profileData:req.body});
      });
    });
});
Jquery and Ajax file

login.js

$(document).ready(function(){
   $("#regBtn").click(function(){
       $.ajax({
         type : 'GET',
         url : '/register',
         success: function(data){
           $("#regDiv").html(data);
         }
       });
   });
   $("#loginBtn").click(function(){
       $.ajax({
         type : 'GET',
         url : '/login',
         success: function(data){
           $("#loginDiv").html(data);
         }
       });
   });
   //=====Login Form Request=============================================
   $("#loginForm").click(function(){
     var uname  = $("#uname").val();
     var upass = $("#upass").val();
     var loginData ={'name': uname,'pass':upass};
     $.ajax({
         type : 'POST',
         url : '/radio_db',
         data : loginData,
         success: function(data){
         $("#mainDiv").html(data);
         }
       });
   });
//=====Register Form=============================================
   $("#regForm").click(function(){
     var uname  = $("#uname").val();
     var upass = $("#upass").val();
     var regData ={'name': uname,'pass':upass};
       $.ajax({
         type : 'POST',
         url : '/regiterToDb',
         data : regData,
         success: function(data){
         $("#mainDiv").html(data);
         }
       });
   });
//Save profile Data================================================
$('#saveBtn').click(function(){
  var email = $("#email").val();
  var phone = $("#phone").val();
  var education = $("#education").val();
  var aoi = $("#aoi").val();
  var name = $("#name").val();
  var pass = $("#pass").val();
  var profileData = {'email':email,'phone':phone,'education' : education,'aoi':aoi,'name' : name,'pass' : pass};
  $.ajax({
    type : 'POST',
    url : '/completeprofile',
    data : profileData,
    success : function(data){
       $("#mainDiv").html(data);
    }
  });
});
});