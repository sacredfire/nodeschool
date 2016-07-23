/*
function toUpperArray (items) {
  if (!items.length) return []             // end condition
  var head = items[0]                      // item to operate on
  head = head.toUpperCase()                // perform action
  var tail = items.slice(1)                // next
  return [head].concat(toUpperArray(tail)) // recursive step
}

var arr = toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

console.log(arr)
*/

function reduce (arr, fn, initial) {
  return (function reduceOne (index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
