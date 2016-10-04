var http = require('http')
var bl = require('bl')

var url = "http://www.google.com/index.html"
if (process.argv[2] !== undefined) {
}
    url = process.argv[2]

http.get(url, function(res) {

    res.pipe(bl(function(err, data) {
        if (err)
            return console.error('There was an error', err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))

    res.on("error", function(e){
        return console.log("Got an error here: " + error.message)
    })

    res.on("end", function(){
    //    return console.log("End")
    })
})
