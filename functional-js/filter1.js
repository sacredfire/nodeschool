function getShortMessages (messages) {
  return messages.filter(function (x) {
    return x.message.length < 50
  }).map(function (y) {
    return y.message
  })
}

module.exports = getShortMessages
