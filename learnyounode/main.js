var func = require('./modul')

var dirPath = '.'
if (process.argv[2] !== undefined) {
  dirPath = process.argv[2]
}
var fileExt = '*'
if (process.argv[3] !== undefined) {
  fileExt = process.argv[3]
}

func(dirPath, fileExt, function (err, entry) {
  if (err) return console.error('There was an error', err)
  entry.forEach(function (entry) {
    console.log(entry)
  })
})

// var dirPath = '/Users/Sergei_KIssel/learnyounode'
// var fileExt = 'js'
