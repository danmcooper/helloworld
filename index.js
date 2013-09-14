var express = require('express')
  , http = require('http');
 
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

app.configure(function() {
    app.use('/js', express.static(__dirname + '/client/js'));
    app.use('/css', express.static(__dirname + '/client/css'));    
    app.use(express.static(__dirname + '/client'));
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});