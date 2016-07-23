var fs = require('fs')
var http = require('http')
var async = require('async')

async.waterfall([
  getUrl,
  getData],
  logData
)

function getUrl (callback) {
  fs.readFile(process.argv[2], function (err, gotUrl) {
    if (err) return callback(err)
    callback(null, gotUrl)
  })
}

function getData (gotUrl, callback) {
  var body = []
  http.get(gotUrl.toString(), function (res) {
    res.on('data', function (chunk) {
      body.push(chunk)
    }).on('end', function () {
      body = Buffer.concat(body).toString()
      callback(null, body)
    }).on('error', function (err) {
      callback(err)
    })
  })
}

function logData (err, result) {
  if (err) return console.error(err)
  console.log(result)
}
