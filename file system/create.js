var fs = require('fs');

fs.writeFile('abc.txt', 'Write this content in the file', function (err) {
  if (err) throw err;
  console.log('File saved!');
});