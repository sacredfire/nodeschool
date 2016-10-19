var http = require('http')
var bl = require('bl')
var async = require('async')

function getText (url, done) {
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err) console.error
      done(null, data.toString())
    }))
  }).on('error', function (e) {
    done(e)
  })
}

async.series({
  requestOne: function (done) {
    getText(process.argv[2], done)
  },
  requestTwo: function (done) {
    getText(process.argv[3], done)
  },
  requestThree: function (done) {
    getText(process.argv[4], done)
  }
},
function (err, result) {
  if (err) console.error(err)
  for (var props in result) {
    console.log(result[props])
  }
})
