// diff approach and works for any number of servers 
// and wo external module

var http = require('http');
var argv = process.argv.slice(2),
    truecount = argv.length,
    pages = [];

function printUrls() {
  if (--truecount > 0) //why -- ?
    return;
  for (i = 0; i < pages.length; i++) {
    console.log(pages[i].data + '\n\n');
  }
}

function HTMLPage(url) {
  var _page = this;
  _page.data = '### [URL](' + url + ')\n';
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      _page.data += data;
    });
    res.on('end', printUrls);
  });
}


for (var i = 0; i < argv.length; i++)
  pages.push(new HTMLPage(argv[i]));
