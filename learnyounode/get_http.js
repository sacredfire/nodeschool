var http = require('http')

var url = "http://www.google.com/index.html"
if (process.argv[2] !== undefined) {
    url = process.argv[2];
}


http.get(url, function(res){
    res.setEncoding('utf8');
    res.on("data", function(data) {
        console.log(data)
    })
    res.on("error", function(error) {
    console.log("Got error: " + error.message)
    })
})
