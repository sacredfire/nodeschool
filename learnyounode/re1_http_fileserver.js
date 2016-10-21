var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  fs.createReadStream(process.argv[3]).pipe(res)
  // var headers = req.headers
  // var method = req.method
  // var url = req.url
  // var body = []
  // req.on('error', console.error)
  // req.on('data', function (chunk) {
  //   body.push(chunk)
  // }).on('end', function () {
  //   body = Buffer.concat(body).toString()
  // })
  // res.on('error', console.error)
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // var resBody = {
  //   headers: headers,
  //   method: method,
  //   url: url,
  //   body: body
  // }
  // res.write(JSON.stringify(resBody))
  // res.end()
})

server.listen(Number(process.argv[2]))
