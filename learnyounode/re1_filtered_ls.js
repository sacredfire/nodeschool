var fs = require('fs')
var filter = ('.' + process.argv[3])

fs.readdir(process.argv[2], function (err, data) {
  if (err) {
    console.log(err)
  }
  var filteredData = data.filter(function (x) {
    return (x.match(filter))
  })
  filteredData.forEach(function (y) {
    console.log(y)
  })
})
