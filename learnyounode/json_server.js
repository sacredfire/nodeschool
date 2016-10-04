const http = require('http')
const url = require('url')

var port = process.argv[2]
var pathToAPI = '/api/parsetime'
var pathToAPI1 = '/api/unixtime'

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url)
  var arrISOfull = (parsedUrl.query).split('=')
  var dateStrUnix = Date.parse(arrISOfull[1])
  var dateObj = new Date(dateStrUnix)

  var time = {}
  time.hour = dateObj.getHours()
  time.minute = dateObj.getMinutes()
  time.second = dateObj.getSeconds()

  var unixtime = {}
  unixtime.unixtime = dateStrUnix

  var pathName = (parsedUrl.pathname)

  if (pathName === pathToAPI) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(time))
  }

  else if (pathName === pathToAPI1) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(unixtime))
  }
  else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
