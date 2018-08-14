const express = require('express');


const app = express();


app.get('/', function(request, response) {
  response.send("Congrats you're using your first Node.js and Express as Web Server");
});

const port = 3000

app.listen(3000, function() {
  console.log(`This HTTP server is running on port ${port}`);
});
