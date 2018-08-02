var express = require('express');
var app = express();
var router=express.Router();
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
router.get('/advertiserlogin', function(req,res,next){
	res.sendfile('views/advertiserlogin.html');
});
router.post('/adprofile', function(req, res) 
{
  con.query("SELECT `username`, `password` FROM `advertiser` WHERE username='"+req.body.username+"' and password='"+req.body.password+"'", 
  	function (err, result, field)
   	{
    if (err){
    console.log("Invalid Username or Password" +err);
      return res.redirect('/advertiserlogin');
      }
      else if(result)
      {
        if(result[0]!==undefined)
        {
          return res.redirect('/adprofile.html');
          console.log('successful login');
        }
        else
        {
          console.log(result);
          return res.redirect('/advertiserlogin');
        }

      }   
   });
});
/*app.listen(9001,function(){
  console.log('server is running');
*/
module.exports=router;