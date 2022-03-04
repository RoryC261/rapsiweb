// Express Server Setup 
var express = require('express');
const { resourceLimits } = require('worker_threads');
var app = express();

// MongoDB Setup
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/test_database";

app.use(express.static('public')); // Serves static files

// Server Connection
var db;
MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = database;
    app.listen(8080);
    console.log("Server Connected");
})

// Root
app.get("/", function(req, res){
    db.collection("names").find().toArray(function(err, result){
        if(err) throw err;

        var output = "<h1>Names</h1>";

        for(var i =0; i < result.length; i++){
            output += "<div>";
            output += "<h2>" + result[i].firstname + "</h2>";
            output += "</div>";
        }
        res.send(output);
    })
})
