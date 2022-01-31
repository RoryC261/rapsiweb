var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World!");
});

console.log("Test 1 ");
app.listen(8080);
console.log("Test 2");