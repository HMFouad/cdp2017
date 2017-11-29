var connection = require('./../config');
var crypt = require('../crypt')
module.exports.register=function(req,res){

    var crypt = require('../crypt');

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
    
    connection.query('INSERT INTO Users(username, password) VALUES (?,?)',[username,crypt.encrypt(password)], function(error, results, fields){
        if(error){
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Inscription done with success'
        })
      }
    });
}
else{
    console.log("password not match!!!");
  }
}