// Basic Express Server Setup 
var express = require('express');
var app = express();

app.use(express.static('public')); // Serves static files

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(8080, '0.0.0.0', function(error) {
    if (error) {
        console.log("Something went wrong: ", error);
    } else {
        console.log("Server is listening on port 8080");
    }
});