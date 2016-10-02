const mongo = require('mongodb').MongoClient

var ageLim = parseInt(process.argv[2])

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +ageLim
    }
  }).toArray(function (err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
