function countWords (inputWords) {
  return inputWords.reduce(function (x, y) {
    x[y] ? x[y]++ : x[y] = 1
    return x
  }, [])
}

module.exports = countWords
