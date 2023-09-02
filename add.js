var http = require("http");  
var a = 10;
var b = 20;
var c = a+b;
http.createServer(function (request, response) {   
   response.writeHead(200, {'Content-Type': 'text/plain'});    
   response.end('Addition of '+a+' and '+b+' is '+c);  
}).listen(8082);   

