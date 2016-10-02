
var http = require('http')

module.exports = function getData (url, callback) {
  var body = []
  http.get(url.toString(), function (res) {
    res.on('data', function (chunk) {
      body.push(chunk)
    }).on('end', function () {
      body = Buffer.concat(body).toString()
      callback(null, body)
    })
  }).on('error', function (err) {
    callback(err)
  })
}
