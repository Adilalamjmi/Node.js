var express = require('express');
var app = express();
var router = express.Router();
/*app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/video', express.static(__dirname + '/video'));*/
var mysql = require('mysql');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
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

router.get('/commonlogin', function(req,res,next){
	res.sendfile('views/commonlogin.html');
});
router.post('/commonprofile', function(req, res) 
{
  con.query("SELECT `username`,`password` FROM `common` WHERE username='"+req.body.username+"' and password='"+req.body.password+"'", 
  	function (err, result, field)
   	{
    if (err){
    	console.log("Invalid Username or Password" +err);
    	return res.redirect('/commonlogin');
    	}
    	else if(result)
    	{
        if(result[0]!==undefined){
    		  return res.redirect('/commonprofile.html');
          console.log('successful login');
        }
        else
        {
          res.send('user do not Exist');
          return res.redirect('/commonlogin');
        }

    	}    
  });
});
module.exports=router;
/*
app.listen(9001,function(){
console.log('Server is Running:9001');	
});*/
