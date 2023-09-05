let fs = require('fs');
let w = fs.createWriteStream('wstr.txt');
w.write('WriteStream Example');

