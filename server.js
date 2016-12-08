var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/css/jquery.pagepiling.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'jquery.pagepiling.css'));
});


app.get('/js/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'jquery.js'));
});


app.get('/js/jquery.pagepiling.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'jquery.pagepiling.js'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/images/colors2.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'colors2.gif'));
});

app.get('/images/colors3.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'colors3.gif'));
});

app.get('/images/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'fb.png'));
});

app.get('/images/GitHub.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'fb.png'));
});

app.get('/images/l.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'l.png'));
});


app.get('/images/seshan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'seshan.jpg'));
});

app.get('/images/t.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 't.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
