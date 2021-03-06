var express = require('express');
var app = express();

const User = require('./models/User').default;
const Users = require('./models/Users').default;

global.users = new Users();

var server = app.listen(process.env.PORT || 8082, function () {
    var port = server.address().port;
    console.log('Server running at port %s', port);
});

var io = require('socket.io')(server, { pingTimeout: 30000 });

io.on('connection', function(client) {
    console.log('client connected');

    client.on('disconnect', function(){
        console.log('client disconnected', arguments);
    });

    users.add(new User(
        '1',
        'Jhorge',
        new Date(),
    ));

    client.on('getRandomGamer', (data, cb) => {
        if (users.length() > 0) {
            var rand = parseInt(Math.random() * 1000000 % users.length());
            cb(users.indexOf(rand));
        } else {
            console.log('the count of users not enough yet.');
        }
    })

    client.on('endGame', () => {
        console.log(users);
    })
})
