const http = require('http')
const url = require('url')

var port = process.argv[2]
var pathToAPI = '/api/parsetime'
var pathToAPI1 = '/api/unixtime'

function parsetime (dateObj) {
  return {
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes(),
    second: dateObj.getSeconds()
  }
}

function unixtime (dateObj) {
  return {
    unixtime: dateObj.getTime()
  }
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true)
  var dateObj = new Date(parsedUrl.query.iso)
  var pathName = (parsedUrl.pathname)
  var timeFormat

  if (pathName === pathToAPI)
    timeFormat = parsetime(dateObj)
  else if (pathName === pathToAPI1)
    timeFormat = unixtime(dateObj)

  if (timeFormat) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(timeFormat))
    }
  else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
