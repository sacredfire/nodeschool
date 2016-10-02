var http = require('http')

http.get(process.argv[2], function (res) {
  res.on('data', function (data) {
    console.log(data.toString())
  }).on('end', function () {})
}).on('error', function (err) {
  console.error(err)
})
