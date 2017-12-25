var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8082, function () {
    var port = server.address().port;
    console.log('Server running at port %s', port);
});

var io = require('socket.io')(server);

io.on('connection', function(client) {
    console.log('User connected');
})
