var async = require('async')
var http = require('http')

var logData = require('./logData')

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
  var body = []
  http.get(process.argv[2] + '?number=' + item, function (res) {
    res.on('data', function (chunk) {
      body.push(chunk)
    }).on('end', function () {
      body = Buffer.concat(body).toString()
      callback(null, memo + Number(body))
    })
  }).on('error', function (err) {
    callback(err)
  })
},
  logData)

