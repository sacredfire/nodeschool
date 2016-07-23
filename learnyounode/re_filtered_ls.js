var fs = require('fs')

var fileExt = process.argv[3]
var re = new RegExp('(?=.*' + '.' + fileExt + ')')

fs.readdir(process.argv[2], function (err, list) {
  if (err) console.error(err)
  list.filter(filterByExt).forEach(function (file) {
    console.log(file)
  })
})

function filterByExt (el) {
  return el.match(re)
}
