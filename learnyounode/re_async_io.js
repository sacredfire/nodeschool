var fs = require('fs')

fs.readFile(process.argv[2], function (err, buf) {
  if (err) console.error(err)
  var result = buf.toString().split('\n').length - 1
  console.log(result)
})
