function sayHello (name) {
  var text = 'Hello ' + name
  var say = function () { console.log(text) }
  say()
}
sayHello('Sergei')

/*
function sayHi (name) {
  console.log('Hi ' + name + '!')
}
sayHi('Sergei')
*/

function sayHello2 (name) {
  var text = 'Hello ' + name // Local variable
  var say = function () { console.log(text) }
  return say
}
var say1 = sayHello2('Bob')
say1()
console.log(say1.toString())

function sayHello2 (name) {
  var text = 'Hello ' + name // Local variable
  function say () { console.log(text) }
  return say
}
var say1 = sayHello2('Bob')
say1()