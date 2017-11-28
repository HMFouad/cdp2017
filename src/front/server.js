const express = require('express');
var bodyParser = require('body-parser');


var path    = require('path');
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* route to handle login and registration */
app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);


//get file index.html
app.get('/', function (req, res){
  res.sendFile(__dirname+'/index.html');
});


  app.use(express.static(__dirname + '/css'));
  app.use(express.static(__dirname));


//get file createProject.html
app.get('/createProject', function (req, res){
  res.sendFile(__dirname+'createProject');
});
//insert news projects created
app.post('/createProject',urlencodedParser, function(req,res){
   name=req.body.name;
   description=req.body.description;
  console.log(name);
  res.send( req.body);
  connection.query('INSERT INTO projects(project, description) VALUES (?,?)',[name,description], function(error, rows) {
			if(error){
      console.log(error);
			}
      else{
        console.log('cool!!!!');
        console.log(rows);
      }

});
});

app.listen('8080');
