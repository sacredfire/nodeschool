const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
<<<<<<< HEAD
  var ps = spawn(cmd, args)
  // spawn the process and return a single stream
  return duplexer(ps.stdin, ps.stdout)
  // joining together the stdin and stdout here
=======
  var ps = spawn(cmd, args) // spawn the process and return a single stream
  return duplexer(ps.stdin, ps.stdout) // joining together the stdin and stdout here
>>>>>>> 279d724572673983e6e023aa0c77a05cd0d56294
}
