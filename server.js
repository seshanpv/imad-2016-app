var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/assests/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});


app.get('/ui/assets/jquery.fittext.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.fittext.js'));
});

app.get('/ui/assets/jquery.lettering.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.lettering.js'));
});

app.get('/ui/assets/jquery.textillate.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.textillate.js'));
});

app.get('/ui/assets/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});
app.get('/ui/css/scrolling-nav.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'scrolling-nav.css'));
});
app.get('/ui/assets/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
