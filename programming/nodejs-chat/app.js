var express = require('express');
var app = express();

var http = require('http');
var socketio = require('socket.io');

var server = http.Server(app);
var io = socketio(server);

app.get("/", function(req, res){
  res.send('Hello world');
});

app.get("/chat", function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected');
  socket.on('chatMessage', function(msg){
    console.log('Chat message: ' + msg);
    io.emit('chatMessage', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

server.listen(8080);
