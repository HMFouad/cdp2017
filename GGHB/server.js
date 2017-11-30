var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path    = require('path');
var app=express();

exports.session = session;
exports.app = app;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret: 'teamGGHB'}));

/* route to handle login and registration */
app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);

app.get('/', function (req, res){
  res.sendFile(__dirname+'home');

});


app.listen('3000');