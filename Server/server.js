var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//server receiving data
app.post('/drycontent', function (req, res) {

    var content = req.body;
    console.log(JSON.stringify(content));
    res.status(200).send(JSON.stringify(content.content))
    res.end(content.content);
});

app.use('/test', (req, res) => {
    console.log('working ')
    res.send(200)
})

app.listen(5400, function () {
    var host = "127.0.0.1";
    var port = 5400;
    console.log("Listening to " + host + " : " + port);
});