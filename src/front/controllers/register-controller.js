var connection = require('./../config');
module.exports.register=function(req,res){

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
    
    connection.query('INSERT INTO users(username, password) VALUES (?,?)',[username,password], function(error, results, fields){
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