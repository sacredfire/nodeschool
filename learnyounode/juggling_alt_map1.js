var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2, process.argv.length);
var urlsCount = urls.length;
var arrayStream = [];
var countCallback = 0;

printData = function () {
    arrayStream.map(function (data, index) {
        console.log(data);
    });
};
parseUrls = function (url, index) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            if (err)
                console.log(err);
            arrayStream[index] = data.toString();
            countCallback++; 
            if (countCallback === urlsCount)
                printData();
        }));
    });
};
urls.map(function (data, index) {
    parseUrls(data,index);
});