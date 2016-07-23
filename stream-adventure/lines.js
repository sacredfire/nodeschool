var through = require('through2')
var split = require('split')
var count = 0

var tr = through(function (line, encoding, next) {
  count++

  if (count % 2 === 0) {
    this.push(line.toString().toUpperCase() + '\n')
  }
  else {
    this.push(line.toString().toLowerCase() + '\n')
  }
  next()
})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

