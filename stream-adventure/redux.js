var duplexer = require('duplexer2')
var through = require('through2').obj

module.exports = function (counter) {
  var count = {}
  var writable = through(write, end)

  function write (input, _, next) {
    count[input.country] = (count[input.country] || 0) + 1
    next()
  }

  function end (done) {
    counter.setCounts(count)
    done()
  }
  return duplexer({objectMode: true}, writable, counter)
}
