
var fs = require('fs')

var dirPath = ".";
if (process.argv[2] !== undefined) {
    dirPath = process.argv[2];
}
var fileExt = "*";
if (process.argv[3] !== undefined) {
    fileExt = process.argv[3]
}

var re = new RegExp("(?=.*" + '.' + fileExt + ")")

function filterbyExt(el) {
    return el.match(re)
}

/*first variant:
function filterbyExt(el) {
    return el.indexOf('.') > -1 &&
           el.indexOf(fileExt) > -1
}*/

fs.readdir(dirPath, function (err, files) {
    if (err) return console.error(err)
    var filteredFiles = files.filter(filterbyExt)
        filteredFiles.forEach(function(entry) {
            console.log(entry);
    })
})



//official solution:

/*var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})*/
