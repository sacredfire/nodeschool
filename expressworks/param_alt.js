const express = require('express')
const app = express()
const crypto = require('crypto')

var str

app.param('id', function (req, res, next, id) {
  req.id = id
  str = crypto.createHash('sha1')
              .update(new Date().toDateString() + id)
              .digest('hex')
  next()
})

app.put('/message/:id', function (req, res, next) {
  res.send(str)
  next()
})

app.listen(process.argv[2])
