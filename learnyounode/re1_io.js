var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

var arr1 = str.split('\n')

console.log(arr1.length - 1)
