var async = require('async')
var request = require('request')

var logData = require('./logData')

var url = process.argv[2]

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
  request(url + '?number=' + item, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(null, memo + Number(body))
    }
  })
}, logData)
