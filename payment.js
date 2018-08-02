var express = require('express');
var app = express();
/*var router = express.Router();*/
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
app.get('/payment', function(req,res, next){
res.sendfile('views/payment.html');
});
app.post('/commonprofile', function(req, res) 
{
  con.query("INSERT INTO `mydb`.`payment`(`name`, `cardNumber`, `cardExpiry`, `cardCVC`) VALUES('"
  	        +req.body.name
  			+"', '"+req.body.cardNumber+"', '"+req.body.cardExpiry
  			+"', '"+req.body.cardCVC+"');", function (err, result)
      {
    if (err){ console.log("User Already Exist");
    return res.redirect('/payment.html');
  };
    console.log("payment Successfully");	
   return res.redirect('/commonprofile.html')

  });
});
app.listen(9001);
console.log('Server is Running:9001');
