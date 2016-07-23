var async = require('async')
var getData = require('./getData.js')
var logData = require('./logData')

async.map(process.argv.slice(2), getData, logData)
