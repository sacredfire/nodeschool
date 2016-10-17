var fs = require('fs')

module.exports = function (path, ext, cb) {
  fs.readdir(path, function (err, data) {
    if (err) return cb(err)
    var filteredData = data.filter(function (x) {
      return (x.match('.' + ext))
    })
    cb(null, filteredData)
  })
}
