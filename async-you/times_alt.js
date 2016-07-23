var async = require('async')
var http = require('http')
var request = require('request')

var host = process.argv[2]
var port = process.argv[3]
var url = 'http://' + host + ':' + port

async.series(
  {
    post: postFive,
    get: reqData
  },
  logGetData)

function postFive (callback) {
  async.times(5, function (n, next) {
    _postUsr(++n, function (err) {
      next(err)
    })
  }, function next (err) {
    if (err) return callback(err)
    callback(null, 'saved')
  })
}

function _postUsr (userId, next) {
  var postBody = JSON.stringify({
    'user_id': userId
  })
  var postOptions = {
    hostname: host,
    path: '/users/create',
    port: port,
    method: 'POST',
    headers: {
      'Content-Length': postBody.length
    }
  }
  var postReq = http.request(postOptions, function (res) {
    res.on('data', function (chunk) {
    }).on('end', function () {
      next()
    })
  })
  postReq.on('error', function (err) {
    console.log(err)
  })
  postReq.write(postBody)
  postReq.end()
}

function reqData (body) {
  request(url + '/users', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body)
    }
  })
}

function logGetData (err, result) {
  if (err) return console.error(err)
  console.log(result.get)
}

