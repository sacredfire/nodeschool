module.exports = duckCount

// var duck = {}

// duck.color = 'brown'
// duck.wings = 2
// duck.quack = function () {
//   console.log('quack')
// }
// duck.quack()
// console.log(duck.hasOwnProperty('quack'))

// function list () {
//   return Array.prototype.slice.call(arguments)
// }
// console.log(list(1, 2, 3))
// console.log(list(duck))

function duckCount () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}
// console.log(duckCount(duck))

// function list1 (obj) {
//   var arr = []
//   for (var key in obj) {
//     arr.push(key)
//   }
//   console.log(arr)
//   return arr
// }

// function duckCount () {
//   var arr1 = []
//   var arr = Array.prototype.slice.call(arguments)
//   for (var i = 0; arr[i]; i++) {
//     if (Object.prototype.hasOwnProperty.call(arr[i], 'quack')) {
//       arr1.push(arr[i])
//     }
//   }
//   console.log(arr1)
//   return arr1.length
// }
