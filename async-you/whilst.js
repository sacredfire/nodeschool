var async = require('async')
var request = require('request')

var url = process.argv[2]
var count = 0

var re = new RegExp('(?=.*' + 'meerkat' + ')')
var resBody = ''

async.whilst(
  function () {
    return !resBody.match(re)
  },
  function (callback) {
    request(url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        callback(null, body)
        resBody += body
        ++count
      }
    })
  },
  function (err, n) {
    if (err) return console.error(err)
    console.log(count)
  }
)

