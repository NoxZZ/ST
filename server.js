var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/dist/firstAngularApp'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname));
});

//listening to port 8001
app.listen(8001);
console.log('listening to port 8001 ...');  