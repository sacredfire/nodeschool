var http = require('http')

http.get(process.argv[2], function (res) {
  var body = []
  res.on('data', function (data) {
    body.push(data)
  }).on('end', function () {
    body = Buffer.concat(body).toString()
    console.log(body.length)
    console.log(body)
  })
}).on('error', function (err) {
  console.error(err)
})
