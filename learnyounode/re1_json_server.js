var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var reqObj = url.parse(req.url, true)
  var time = new Date(reqObj.query.iso)
  var timeUnix = { unixtime: time.getTime() }
  var timeIso = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }

  if (req.method !== 'GET') {
    return res.end('Pls send GET request!')
  }
  if (reqObj.pathname === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(timeIso))
  } else if (reqObj.pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(timeUnix))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
