var express=require('express');
var app=express();
app.use(express.static('views'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/jQuery',express.static(__dirname+ '/jQuery'))
app.use('/video', express.static(__dirname + '/video'));
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var hbs=require('express3-handlebars');
var mysql = require('mysql');
app.engine('hbs',hbs());
app.set('view engine','hbs');
app.use(bodyParser());
app.use(cookieParser('Secret String'));
app.use(session());
/*app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/home', function(req, res) 
{
  con.query("SELECT `username`, `password` FROM `advertiser` WHERE username='"+req.body.username+"' and password='"+req.body.password+"'", 
    function (err, result, field)
    {
    if (err){
      return res.redirect('/home');
      }
      else if(result)
      {
        if(result[0]!==undefined)
        {
        return res.redirect('/home');
        console.log('successful login');
      }
      else
      {
        console.log('User do not Exist');
        return res.redirect('/home');
      }
      }  
  
   });
});*/
app.get('/login',function(req, res){
if(req.body.username)
{ req.session.user=req.body.username;
res.render('home',{username:req.session.user});
}
else{
res.redirect('login');
}
});
app.get('/logout',function(req, res){
if(req.session.user){
delete req.session.user;
}
res.redirect('/login');
});

app.listen(9001,function(){
console.log('Express Server is running at port number : 9001');
});