var express = require('express');
var app = express();
var router = express.Router();
router.get('/index' ,function(req ,res){
res.sendfile('views/index.html');
});
router.post('/advertiser' ,function(req,res){
res.sendfile('views/advertiser.html')
});
/*router.post('/advertiserlogin' ,function(req,res){
res.sendfile('views/advertiserlogin.html')
});*/
router.post('/common' ,function(req,res){
res.sendfile('views/common.html')
});
/*router.post('/commonlogin',function(req , res, next){
res.sendfile('views/commonlogin.html');
});*/
module.exports = router;