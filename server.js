console.log("Starting up");

// Load the http module to create an http server
var http = require('http');
var express = require("express");

var app = express();

var port = process.env.PORT || 8000;

app.get('/', function(req, res){
    res.send("This is a test from Express. Did this fix the thisis issue?");
});

var server = http.createServer(app);
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + " - Localhost");
