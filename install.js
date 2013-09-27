var _ = require('underscore')
var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs')
function puts(error, stdout, stderr) { sys.puts(stdout) }
  
// Vars
var couchUrl = 'http://127.0.0.1:5984' 
var database = 'apps'
var ignore = ['.git', 'README.md', 'package.json', 'node_modules', 'install.js']

// Go
fs.readdir('./', function(err, files) {
  _.each(files, function(file){
    if(ignore.indexOf(file) === -1) {
      var cmd = 'couchapp push ' + file + '/app.js ' + couchUrl + '/' + database
      console.log(cmd)
      exec(cmd, puts)
    }
  })
})

