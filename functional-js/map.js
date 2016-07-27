function doubleAll (numbers) {
  var result = numbers.map(function (num) {
    return num * 2
  })
  return result
}

module.exports = doubleAll

// function quadroupleAll (numbers) {
//   var result = numbers.map(function (num) {
//     return num * 4
//   })
//   return result
// }

// var numArr = [2, 3, 5, 10]

// console.log(quadroupleAll(numArr))
