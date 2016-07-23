var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET')
    return res.end('Pls send GET request!')

  var reqPath = url.parse(req.url, true).pathname
  var isoTime = new Date(url.parse(req.url, true).query.iso)

  if (reqPath.match(/^\/api\/parsetime/)) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(parseTime(isoTime)))
  }

  else if (reqPath.match(/^\/api\/unixtime/)) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(unixTime(isoTime)))
  }

  else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])

function parseTime (isoTime) {
  return {
    hour: isoTime.getHours(),
    minute: isoTime.getMinutes(),
    second: isoTime.getSeconds()
  }
}

function unixTime (isoTime) {
  return { 'unixtime': isoTime.getTime() }
}
