var throughm = require('through2-map');

var tr = throughm( function (buf) {
    return buf.toString().toUpperCase();
});

process.stdin.pipe(tr).pipe(process.stdout)
