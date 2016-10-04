var module = require('./re_module')

var dirPath = process.argv[2]
var fileExt = process.argv[3]

module(dirPath, fileExt, function (err, data) {
  if (err) console.log(err)
  console.log(data)
})
