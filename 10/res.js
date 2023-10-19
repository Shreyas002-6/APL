const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.set('Content-Type', 'text/plain');
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
