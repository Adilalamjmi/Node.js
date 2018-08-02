var express = require('express');
var app = express();
app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/video', express.static(__dirname + '/video'));
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var con =mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database:"mydb"
});
var dbconnect;
con.connect(function(err,val) {
  if (err){console.error(err); return};
  console.log("Connected!");
});var express = require('express');
var app = express();
app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/video', express.static(__dirname + '/video'));
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var con =mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database:"mydb"
});
var dbconnect;
con.connect(function(err,val) {
  if (err){console.error(err); return};
  console.log("Connected!");
});
app.get('/commonprofile', function(req,res,next){
  res.sendfile('views/commonprofile.html');
});
app.post('/commonprofile', function(req, res) 
{
  con.query("SELECT `file` FROM `order` WHERE search='"+req.body.search+"');", 
    function (err, result, field)
    {
    if (err){
      console.log("Invalid Username or Password" +err);
      return res.redirect('/commonprofile');
      }
      else if(result)
      {
        if(result[0]!==undefined){
          return res.redirect('/commonprofile');
          console.log('successful login');
        }
        else
        { 
          res.send('successfully submit');
          return res.redirect('/commonprofile');
        }

      }    
  });
});

app.listen(9001,function(){
console.log('Server is Running:9001');  
});


app.listen(9001,function(){
console.log('Server is Running:9001');	
});
