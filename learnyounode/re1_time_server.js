var net = require('net')

var server = net.createServer(function (socket) {
  socket.end(serveTime())
}).on('error', console.error)
server.listen(Number(process.argv[2]))

function serveTime () {
  var date = new Date()
  var time = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    mins: date.getMinutes()
  }
  return (time.year + '-' + (time.month + 1) + '-' + time.day + ' ' + time.hours + ':' + time.mins + '\n')
}
