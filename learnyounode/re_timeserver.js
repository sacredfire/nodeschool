var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function listen (socket) {
  socket.end(strftime('%Y-%m-%d %H:%M') + '\n')
})

server.listen(process.argv[2])
