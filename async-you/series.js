
var http = require('http')
var async = require('async')

async.series(
  {
    requestOne: getData1,
    requestTwo: getData2
  },
  logData)

function getData1 (callback) {
  var body = []
  http.get(process.argv[2].toString(), function (res) {
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

function getData2 (callback) {
  var body = []
  http.get(process.argv[3].toString(), function (res) {
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

function logData (err, result) {
  if (err) return console.error(err)
  console.log(result)
}
