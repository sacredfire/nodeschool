
var fs = require('fs')

module.exports = function(dirPath, fileExt, callback) {

    var re = new RegExp("(?=.*" + '.' + fileExt + ")")

    fs.readdir(dirPath, function(err, list) {
        if (err) 
            return callback(err)

        filteredList = list.filter(function (entry) {
            return entry.match(re)
        })

        callback(null, filteredList);
    })
}
