var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path    = require('path');
var app=express();
var sess;

exports.session = session;
exports.app = app;
exports.sess = sess;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var createProject=require('./controllers/createProject');
var createUs=require('./controllers/createUs');
var createSprint=require('./controllers/createSprint');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'teamGHB',
  resave: true,
  saveUninitialized: true
}));


/* route to handle login and registration */
app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);
//create new project
app.post('/createProject',createProject.createProject);
//create new us
app.post('/createUs',createUs.createUs);
//create new sprint
app.post('/addSprint',createSprint.createSprint);

//app.get('/', function (req, res){
  //res.sendFile(__dirname+'home');
app.get('/',function(req,res){
    sess = req.session;
    //Session set when user Request our app via URL
    if(sess.username) {
    /*
    * This line check Session existence.
    * If it existed will do some action.
    */
        res.redirect('http://localhost:4200/listProjects');
    }
    else {
        res.render('http://localhost:4200/home');
    }

});




app.listen('3000');
