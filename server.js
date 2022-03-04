// Express Server Setup 
var express = require('express');
const { resourceLimits } = require('worker_threads');
var app = express();

// MongoDB Setup
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/test_database";

app.use(express.static('public')); // Serves static files
app.use(express.urlencoded({extended:true})); // Parsing thing not sure what it does but need this

app.set("view engine", "ejs"); // Sets view engine to ejs

// Server Connection
var db;
MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = database;
    app.listen(8080);
    console.log("Server Connected");
})

// Index
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

// Add
app.post("/add", function(req, res){
    db.collection("names").save(req.body, function(err, result){
        if(err) throw err;
        console.log("Saved to database");
        res.redirect("/");
    })
})
