const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, world!');
  console.log("Test"+req.is('html')); 
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
