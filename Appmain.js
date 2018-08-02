var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/video', express.static(__dirname + '/video'));
var router = require('./routes');
app.use('/',router);
var router1= require('./advertiser');
app.use('/',router1);
var router2= require('./advertiserlogin');
app.use('/',router2);
var router3= require('./common');
app.use('/',router3);
var router4= require('./commonlogin');
app.use('/',router4);

app.listen(9001 ,function()
{
console.log('Server is running');
});