/*var myNumber = 1
function addOne() {myNumber++
}

addOne()
console.log(myNumber)
*/


/*var fs = require('fs')

var myNumber = undefined

function addOne(callback) {
    fs.readFile('number.txt', function doneReading (err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        callback()
    })
}

function logMyNumber() {
    console.log(myNumber)
}

addOne(logMyNumber)
*/


/*var fs = require('fs')

var dirPath = ".";
if (process.argv[2] !== undefined) {
    dirPath = process.argv[2];
}
var fileExt = "*";
if (process.argv[3] !== undefined) {
    fileExt = process.argv[3]
}

var re = new RegExp("(?=.*" + '.' + fileExt + ")")


fs.readdir(dirPath, function (err, files) {
    if (err) return console.error(err)
    var filteredFiles = files.filter(filterbyExt)
        filteredFiles.forEach(function(entry) {
            console.log(entry);
    })
})

function filterbyExt(el) {
    return el.match(re);
}*/

// try print numbers 0 - 9

/*for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
    --i
  })
}*/
