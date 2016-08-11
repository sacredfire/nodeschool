function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    for (var i = 0; goodUsers[i]; ++i) {
      for (var j = 0; submittedUsers[j]; ++j) {
        return goodUsers[i].id == submittedUsers[j].id
      }
    }
  }
}

module.exports = checkUsersValid

// dosn't work right yet for some reason
