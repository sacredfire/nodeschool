var mymodule = require('./re1_module.js')

mymodule(process.argv[2], process.argv[3], function (err, list) {
  if (err) console.log('There was some error:' + err)
  list.forEach(function (x) {
    console.log(x)
  })
})
