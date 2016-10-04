const express = require('express')
const bodyParser = require('body-parser')

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/form', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])

/*
official solution:

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
*/
