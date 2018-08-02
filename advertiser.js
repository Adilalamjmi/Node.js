var express = require('express');
var app = express();
var router = express.Router();
/*app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/video', express.static(__dirname + '/video'));
*/
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
router.get('/advertiser', function(req,res, next){
res.sendfile('views/advertiser.html');
});
router.post('/advertiserlogin', function(req, res) 
{
  con.query("INSERT INTO `mydb`.`advertiser`(`username`, `name`, `email`, `password`, `Fb`, `twt`, `insta`, `tube`, `selectstate`, `Address`) VALUES('"
  	        +req.body.username
  			+"', '"+req.body.name+"', '"+req.body.email
  			+"', '"+req.body.password+"', '"+req.body.Fb
  			+"', '"+req.body.twt+"', '"+req.body.insta
  			+"', '"+req.body.tube+"', '"+req.body.selectstate
  			+"', '"+req.body.Address+"');", function (err, result)
      {
    if (err){ console.log("User Already Exist");
        return res.redirect('/advertiser.html');
  };
    console.log("Data Inserted Successfully");	
   return res.redirect('/advertiserlogin.html'); 

  });
});
/*app.listen(9001,function(){
    console.log('server is running');
});*/
module.exports = router;