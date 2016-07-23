function foo () {
  quux = 1
  var bar
  function zip () {
    var quux = 2
    bar = true
  }
  return zip
}
