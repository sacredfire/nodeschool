/*
var http = require('http')
var through = require('through2')

var tr = through(function (buf, encoding, next) {
  this.push(buf.toString().toUpperCase())
  next()
})

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST')
    return res.end('Pls send POST request!')
  req.pipe(tr).pipe(res)
})
server.listen(process.argv[2])
*/

var http = require('http')
var through = require('through2-map')

var map = through(function (buf) {
  return buf.toString().toUpperCase()
})

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST')
    return res.end('Pls send POST request!')
  req.pipe(map).pipe(res)
})
server.listen(process.argv[2])
