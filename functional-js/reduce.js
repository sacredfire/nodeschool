/*
module.exports = function countWords (inputWords) {
  return inputWords.reduce(function (count, word) {
    if (typeof count[word] === 'undefined') {
      count[word] = 1
    }
    else {
      count[word] += 1
    }
    return count
  }, {})
}
*/

module.exports = function countWords (inputWords) {
  return inputWords.reduce(function (count, word) {
    count[word] ? count[word]++ : count[word] = 1
    return count
  }, {})
}
