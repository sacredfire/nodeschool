var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  var fileData = fs.createReadStream(process.argv[3])
  fileData.pipe(res)
})
server.listen(process.argv[2])

