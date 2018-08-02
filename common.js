var express = require('express');
var app = express();
var router=express.Router();
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
  router.get('/common', function(req,res,next){
  res.sendfile('views/common.html');
  });
  router.post('/commonlogin', function(req, res) 
{
  con.query("INSERT INTO `mydb`.`common`(`username`, `name`, `email`, `password`,`Cpassword`, `mobile`, `DOB`, `selectstate`, `Address`) VALUES('"
       +req.body.username+"', '"+req.body.name
  			+"', '"+req.body.email+"', '"+req.body.password
  			+"', '"+req.body.Cpassword
        +"', '"+req.body.mobile
  			+"', '"+req.body.DOB+"', '"+req.body.selectstate
        +"', '"+req.body.Address+"');", function (err, result)
    {
      if (err){console.log("User Already Exist");
      return res.redirect('/common.html');
    };
      console.log("Data Inserted Successfully");
    return res.redirect('/commonlogin.html');  
  });
});
/*app.listen(9001);
console.log('Server is Running:9001');*/
module.exports=router;