var fs = require('fs')

module.exports = function (dirPath, fileExt, callback) {
  var re = new RegExp('(?=.*' + '.' + fileExt + ')')
  fs.readdir(dirPath, function (err, list) {
    if (err) return callback(err)
    list.filter(filterByExt).forEach(function (file) {
      callback(null, file)
    })
  })
  function filterByExt (el) {
    return el.match(re)
  }
}
