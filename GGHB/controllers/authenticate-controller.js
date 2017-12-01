var connection = require('./../config');
var server = require('./../server');
var session = server.session;
var app = server.app;

module.exports.authenticate=function(req,res){
    var username_co=req.body.username_co;
    var password_co=req.body.password_co;
    var message;

    connection.query('SELECT * FROM Users WHERE username = ?',[username_co], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password_co==results[0].password){             
                message='successfully authenticated';
                req.session.username = req.body.username_co;
                req.session.password = req.body.password_co;
                res.json({
                    status:true,
                    message:'successfully authenticated',
                    
                })
                res.isAuthenticated;
            }else{
                 message= "Username and password does not match";
                 console.log(message); 
                 res.json({                   
                  status:false,
                  message:"Username and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"UserName does not exits"
          });
        }
      }
    });

    module.exports.checkAuthentication = function (req,res,next){
        if(req.isAuthenticated()){
            //if user is looged in, req.isAuthenticated() will return true 
            next();
        } else{
            res.redirect("/login");
        }
    }

}