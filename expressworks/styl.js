const express = require('express')
const path = require('path')
const stylus = require('stylus')

var app = express()

app.use(stylus.middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.argv[2])

