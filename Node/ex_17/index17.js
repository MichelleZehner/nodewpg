const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.post('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});



app.listen(3000);