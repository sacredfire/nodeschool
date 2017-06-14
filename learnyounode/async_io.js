
var fs = require('fs')
var lines = undefined
var filename = process.argv[2];

function countLines(callback) {
    fs.readFile(filename, function doneReading (err, fileContents) {
        lines = fileContents.toString().split('\n').length - 1
        callback()
    })
}

function printLines() {
    console.log(lines)
}

countLines(printLines)




/*official solution:

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/