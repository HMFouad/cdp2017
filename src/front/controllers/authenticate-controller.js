var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var username_co=req.body.username_co;
    var password_co=req.body.password_co;


    connection.query('SELECT * FROM users WHERE username = ?',[username_co], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password_co==results[0].password){
               /*res.json({
                    status:true,
                    message:'successfully authenticated'
                })*/
                window.location.replace="http://localhost:8080/#/listProjects"

            }else{
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
}