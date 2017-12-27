var express = require('express');
var app = express();

const User = require('./models/User').default;
const Users = require('./models/Users').default;

global.users = new Users();

var server = app.listen(process.env.PORT || 8082, function () {
    var port = server.address().port;
    console.log('Server running at port %s', port);
});

var io = require('socket.io')(server);

io.on('connection', function(client) {
    users.add(new User(
        '1',
        'Jhorge',
        new Date()
    ));

    client.on('startGame', () => {
        console.log(users);
    })

    client.on('endGame', () => {
        console.log(users);
    })
})
