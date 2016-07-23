var http = require('http')
var throughm = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') return res.end('send me "POST"!')
  req.pipe(throughm(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})
server.listen(process.argv[2])
