var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var userInfo = require('./models/userInfo');
var mongoose = require('mongoose');
app.use(express.static(__dirname + '/dist/firstAngularApp'));
app.use(cors());

//connecting to Mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/ShiftTracker',{useNewUrlParser:true});
var db = mongoose.connection;
console.log('connected to database sucessfully !');
//handling connection error 
db.on('error',console.error.bind(console,'Mongodb connection error'));

app.use(bodyParser.json());

function saveData(req){
    var item = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        EmpId : req.body.EmployeeId
    }
    console.log(item);
    var userData = new userInfo(item);
    userData.save().then(function(item){
        console.log(item);
        console.log('data saved !');
    }).catch(function(err){
        console.log({error:err.message});
    });
};

app.post('/user',(req,res) => {
    console.log('requested on ' + req.body);
    saveData(req);
});

const server = http.createServer(app)

//listening to port 8001
port = 3000
server.listen(port,() => console.log('listening to port  '+ port ));