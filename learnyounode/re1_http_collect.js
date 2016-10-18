var http = require('http')
var bl = require('bl')

// http.get(process.argv[2], function (res) {
//   var body = []
//   res.on('data', function (chunk) {
//     body.push(chunk)
//   })
//   res.on('error', console.error)
//   res.on('end', function () {
//     body = Buffer.concat(body).toString()
//     console.log(body.length)
//     console.log(body)
//   })
// })

http.get(process.argv[2], function (res) {
  res.pipe(bl(function (error, data) {
    if (error) console.error(error)
    console.log(data.toString().length)
    console.log(data.toString())
  }))
  res.on('error', console.error)
  res.on('end', function () {})
})
