// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
 
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'radio_db';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   client.close();
// });

var express = require('express');
var app = express();
var loginController = require('./controller/loginController');
app.set('view engine','ejs');
app.use(express.static('./public'));
loginController(app);
