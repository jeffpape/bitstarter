var express = require('express');

var app = express.createServer(express.logger());
var file_name = 'index.html'
var buffer = new Buffer(30)
buffer = fs.readFileSync(file_name)
var message = buffer.toString()
var message = 'Howdy!'

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
