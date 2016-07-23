const express = require('express')
const app = express()
const crypto = require('crypto')

app.put('/message/:id', function (req, res, next) {
  var id = req.params.id
  var hashDate = crypto.createHash('sha1')
                       .update(new Date().toDateString() + id)
                       .digest('hex')
  res.send(hashDate)
  next()
})

app.listen(process.argv[2])
