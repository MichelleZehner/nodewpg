const express = require('express');
const app = express();
app.get('/', function (request, response) {
    response.send("Welcome");
});
const port = 3000
app.listen(3000, function () {
    console.log(`This HTTP server is running on port ${port}`);
});

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
var getSecondJoke = oneLinerJoke.getRandomJoke();
app.get('/joke', function (request, response) {
    response.send(getRandomJoke.body +  getSecondJoke.body);
});

app.post('/joke', function (request, response) {
    response.send('my jokes are too funny, I am not getting new ones from you..');
});

app.put('/joke', function (request, response) {
    response.send('no, no, no.. not changing my act dude!')
});
