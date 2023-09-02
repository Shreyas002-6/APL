var http = require('http');
var md = require('./module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The multiplication is " + md.add(10,20));
  res.end();
}).listen(8083);
