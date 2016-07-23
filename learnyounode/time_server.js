const net = require('net')
    , strftime = require('strftime');

var host = '127.0.0.1';
var port = (process.argv[2]);

var server = net.createServer();

server.listen(port, host);
//server.on('connection', function(socket) {
//    socket.write(strftime('%Y-%m-%d %H:%M') + '\n');
//    socket.destroy()
//});

//alternatively and terser:

server.on('connection', function(socket) {
    socket.end(strftime('%Y-%m-%d %H:%M') + '\n');
});
