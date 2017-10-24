var express= require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/view', express.static(path.join(__dirname, '')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(2000,function(){
    console.log("serving file from 2000");
})