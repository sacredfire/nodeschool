const express = require('express')
const fs = require('fs')

var app = express()

var fileStream = fs.createReadStream(process.argv[3])

app.get('/books', function (req, res) {
  fileStream.pipe(res)
})

app.listen(process.argv[2])
