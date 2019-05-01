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

function saveData(req,res){
    var item = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        EmployeeId : req.body.EmployeeId,
        nightS : req.body.nightS
    }
    console.log(item);
    if(item.firstName=='' || item.lastName=='' || item.EmployeeId == '' || item.nightS == ''){
        res.json("please enter all the details !");
    }
    else{
    var userData = new userInfo(item);
    userData.save().then(function(item){
        console.log(item);
        console.log('data saved !');
    }).catch(function(err){
        console.log({error:err.message});
    });   
    }
};

//saving the data into the mongodb database
app.post('/user',(req,res) => {
    console.log('requested on ' + req.body);
    saveData(req,res);
    res.json('user added successfully!');
});

//retrieving the from mongodb database 
app.get('/get-user',(req,res) => {
    console.log('requested on '+ req.body);
    userInfo.find(function(err,docs){
        if(err){
           return  res.send(err);
        }
        console.log(docs);
         res.json(docs);   
    });
});

const server = http.createServer(app);

//listening to port
port = 3000
server.listen(port,() => console.log('listening to port  '+ port ));