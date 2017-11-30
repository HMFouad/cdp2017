var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path    = require('path');
var app=express();

exports.session = session;
exports.app = app;

/*module.exports.app = function(req,res){
  var app=express();
};*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;

var authenticateController=require('./api/controllers/authenticate-controller');
var registerController=require('./api/controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret: 'teamGGHB'}));

/* route to handle login and registration */
app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);

//get file index.html
app.get('/', function (req, res){
  res.sendFile(__dirname+'/index.html');

});


  app.use(express.static(__dirname + '/css'));
  app.use(express.static(__dirname));


  /*app.get('/',function(req,res){
    
      // Check if an e-mail address is set in the session.
      // If it is, we will redirect to the admin page.
      if(req.session.email) {
          res.redirect('/listProjets');
      }
      else {
          res.render('index.html');
      }
    });*/


app.listen('8080');