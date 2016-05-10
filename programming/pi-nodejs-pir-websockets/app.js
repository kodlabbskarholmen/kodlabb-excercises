var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var gpio = require("gpio");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var gpio7 = gpio.export(7, { direction: "in" });

app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html');
});

gpio7.on("change", function(val) {
  console.log(val)
  if (val == 0) {
    io.emit('movement', false);
  }
  else{
    io.emit('movement', true);
  }
});

server.listen(8080);
