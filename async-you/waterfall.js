var fs = require('fs')
var http = require('http')
var async = require('async')
var bl = require('bl')

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

function getData (gotUrl) {
  http.get(gotUrl.toString(), function (res) {
    res.setEncoding('utf8')
    res.pipe(bl(function (err, data) {
      if (err) return console.error(err)
      console.log(data.toString())
    }))
  })
}

function logData (err, result) {
  if (err) return console.error(err)
  console.log(result)
}
