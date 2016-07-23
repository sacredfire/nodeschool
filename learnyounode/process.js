/*var index;
var a = (process.argv.slice(2));
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}
*/



/*var index;
var a = (process.argv);
for (index = 2; index < a.length; ++index) {
    console.log(Number((a[index])));
}
*/



var sum = (((process.argv).map(Number)).slice(2)).reduce((a, b) => a + b, 0);

console.log(sum);



/*or justt the same the old way:

var sum = ((process.argv).map(Number)).slice(2).reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum)
*/



/*official solution:

var result = 0

     for (var i = 2; i < process.argv.length; i++)
       result += Number(process.argv[i])

     console.log(result)*/
