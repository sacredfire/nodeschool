var async = require('async')
var getData = require('./getData.js')

async.series(
  {
    requestOne: function (callback) {
      getData(process.argv[2], callback)
    },
    requestTwo: function (callback) {
      getData(process.argv[3], callback)
    },
    requestThree: function (callback) {
      getData(process.argv[4], callback)
    }
  },
  logData)

function logData (err, result) {
  if (err) return console.error(err)
  console.log(result.requestOne.toString())
  console.log(result.requestTwo.toString())
  console.log(result.requestThree.toString())
}
