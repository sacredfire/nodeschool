var args = process.argv.slice(2)

var argsNum = args.map(function (arg) {
  return Number(arg)
})

var result = argsNum.reduce(function (sum, current) {
  return sum + current
})

console.log(result)
