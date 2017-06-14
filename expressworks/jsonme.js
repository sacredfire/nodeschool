const express = require('express')
const fs = require('fs')
const parse = require('json-parse-stream')

var app = express()

var fileStream = fs.createReadStream(process.argv[3])

app.get('/books', function (req, res) {
  fileStream.pipe(parse())
  fileStream.on('data', function (el) {
    res.send(el)
  })
})

app.listen(process.argv[2])
