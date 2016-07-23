var duck = {
  quack: function () {
    console.log('quack')
  }
}
duck.quack()

console.log(duck.hasOwnProperty('quack'))

// create an object with 'null' prototype.
var object = Object.create(null)
object.quack = function () {
  console.log('quack')
}
object.quack()

// console.log(object.hasOwnProperty('quack'))
// => TypeError: Object object has no method 'hasOwnProperty'

// the first argument to call becomes the value of `this`
// the rest of the arguments are passed to the function as per

console.log(Object.prototype.hasOwnProperty.call(object, 'quack'))
