var async = require('async')
var getData = require('./getData.js')
var logData = require('./logData.js')

async.series(
  {
    requestOne: function (callback) {
      getData(process.argv[2], callback)
    },
    requestTwo: function (callback) {
      getData(process.argv[3], callback)
    }
  },
  logData)
