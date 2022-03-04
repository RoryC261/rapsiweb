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

// Render Login Page
app.get("/login", function(req, res){
    res.render("pages/login");
})

// Login Authentication 
app.post("/loginSubmit", function(req, res){
    console.log("User Logged In"); // TEST
})

/*
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

// Add names page
app.get("/add", function(req, res){
    res.render("pages/addnames");
})

// Add
app.post("/add", function(req, res){
    db.collection("names").save(req.body, function(err, result){
        if(err) throw err;
        console.log("Saved to database");
        res.redirect("/");
    })
})
*/