bl = require('bl');

process.stdin.pipe(bl(function (err, data) {
    if (err) {
        console.error(err);
    }
    var rev = data.toString().split('').reverse().join('');
    console.log(rev);
}))

