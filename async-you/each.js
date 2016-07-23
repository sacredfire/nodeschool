var async = require('async')
var getData = require('./getData.js')

async.each(process.argv.slice(2), getData, logErr)

function logErr (err) {
  if (err) console.log(err)
}
