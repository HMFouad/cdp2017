const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var path    = require("path");
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    pass = 'd6F3Efeq';

  //
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,pass)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,pass)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

// Create connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cdp'
});
connection.connect(function(error){
  if(!!error){
    console.log('Error');
}
else {
  console.log('Connected');
}
});

/*app.get('/',function(req, resp) {
connection.query ("SELECT * FROM users", function(error ,rows ,fields){
if(!!error){
  console.log("Error in the query");
}
else{
  console.log('succesful');
  console.log(rows);
}
});
});*/


//get file index.html
app.get('/index', function (req, res){
  res.sendFile(path.join(__dirname+'/'));
});
//insert new user into the database
app.post('/index',urlencodedParser, function(req,res){
      username=req.body.username;
      password=req.body.password;
      rpassword=req.body.rpassword;
  
  if (username == "") {
    console.log("Empty username!!!");
  }

  else if (password == "") {
    console.log("Empty password!!!");
  }

  else if (password == rpassword){

    console.log(username);

    res.send( req.body);
    connection.query('INSERT INTO users(username, password) VALUES (?,?)',[username,encrypt(password)], function(error, rows) {
      if(error){
      console.log(error);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!");
      }
      else{
        console.log('Inscription done with success');
        console.log(rows);
      }

});
}
  else{
        console.log("password not match!!!");
      }


});


//get file createProject.html
app.get('/createProject', function (req, res){
  res.sendFile(path.join(__dirname+'/createProject.html'));
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
    //console.log('Server started on port 3000');
