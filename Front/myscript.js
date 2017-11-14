const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var path    = require("path");
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var name;
var description;

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

app.listen('1337');
    //console.log('Server started on port 3000');
