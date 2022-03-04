// Express Server Setup 
var express = require('express');
var app = express();

// MongoDB Setup
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/test_database";

app.use(express.static('public')); // Serves static files

// Server Connection
var db;
MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = databse;
    app.listen(8080);
    console.log("Server Connected");
})
