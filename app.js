var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongojs= require('mongojs');

var app = express();

var db = mongojs('contactlist',['contactlist']);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes for api
var router = express.Router();

//My code
router.get('/User',function(req,res){
  db.contactlist.find(function(err,docs){
    res.json(docs);
  });
});

router.post('/User',function(req,res){
  db.contactlist.insert(req.body,function(err,docs){
    res.json(docs);
  });
});

router.delete('/User',function(req,res){
  var id = req;
  console.log(id);
});

app.use('/', router);

app.put('/User/:id',function(req,res){
  var id = req.params.id;
  console.log(id);
});

module.exports = app;