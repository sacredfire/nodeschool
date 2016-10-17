var fs = require('fs')
var arr1

fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    console.log(err)
  }
  arr1 = data.toString().split('\n')
  console.log(arr1.length - 1)
})
