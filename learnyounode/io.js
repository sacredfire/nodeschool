var fs = require('fs')
var path = ((process.argv).slice(2, 3).toString())
var buf = fs.readFileSync(path)
var str = buf.toString()
var arr = str.split('\n')

console.log((arr.length)-1)



/*official solution:

var fs = require('fs')

     var contents = fs.readFileSync(process.argv[2])
     var lines = contents.toString().split('\n').length - 1
     console.log⏎*/