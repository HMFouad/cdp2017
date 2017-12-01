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
                //res.sendFile(/list-projects');

                
                message='successfully authenticated';
                console.log(message);  
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })      

                req.session.username_co = req.body.username_co;
                req.session.password_co = req.body.password_co;
                

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

    function isLoggedIn(req, res, next) {
        
            // if user is authenticated in the session, carry on
            if (req.isAuthenticated())
                return next();
        
            // if they aren't redirect them to the home page
            res.redirect('/');
        }

}