var http = require('http')
var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('Pls supply POST request')
//   }
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('Pls supply POST request')
  }
  var body = ''
  req.on('error', console.error)
  req.on('data', function (chunk) {
    body += chunk.toString()
  }).on('end', function () {
    res.write(body.toUpperCase())
  })
})

server.listen(Number(process.argv[2]))
