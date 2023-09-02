var fs = require("fs");
var data = '';
var readerStream = fs.createReadStream('test.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk) { //eve
   data += chunk;
});
readerStream.on('end',function() { //end of file
   console.log(data);
});
readerStream.on('error', function(err) { //err handle
   console.log(err.stack);
});

