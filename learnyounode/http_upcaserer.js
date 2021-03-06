const http = require('http')
const throughm = require('through2-map')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(throughm(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port)

/*
official solution:

   var http = require('http')
     var map = require('through2-map')

     var server = http.createServer(function (req, res) {
       if (req.method != 'POST')
         return res.end('send me a POST\n')

       req.pipe(map(function (chunk) {
         return chunk.toString().toUpperCase()
       })).pipe(res)
     })

     server.listen(Number(process.argv[2]))
*/
