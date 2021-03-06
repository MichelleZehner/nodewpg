const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static('public'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(3000);