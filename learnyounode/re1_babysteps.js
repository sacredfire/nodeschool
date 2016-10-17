var arr = process.argv.splice(2)

arr.forEach(function (v, i, a) {
  a[i] = Number(v)
})

var sum = arr.reduce(function (a, b) {
  return a + b
}, 0)

console.log(sum)
