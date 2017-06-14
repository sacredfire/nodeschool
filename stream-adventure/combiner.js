const combine = require('stream-combiner')
const through = require('through2')
const split = require('split')
const zlib = require('zlib')

module.exports = function () {
  return combine(
  split(), // read newline-separated json,
  group, // group books into genres,
  zlib.createGzip() // then gzip the output
  )
}

var group = through(write, end)
var current

function write (line, _, next) {
  if (line.length === 0) return next()

  var row = JSON.parse(line)
  if (row.type === 'genre') {
    if (current) {
      this.push(JSON.stringify(current) + '\n')
    }
    current = { name: row.name, books: [] }
  }
  else if (row.type === 'book') {
    current.books.push(row.name)
  }
  next()
}

function end (done) {
  if (current) {
    this.push(JSON.stringify(current) + '\n')
  }
  done()
}
