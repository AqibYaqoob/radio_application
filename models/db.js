const mongoose = require('mongoose');


// Connect to mongodb
mongoose.connect('mongodb://localhost/radio_db');
mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connection error:', error);
});




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/radio_db";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

