var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var username_co=req.body.username_co;
    var password_co=req.body.password_co;
    var message;

    /*var App = angular.module('MyApp', [ 'ngRoute' ]);
    App.module('windowExample', [])
    .controller('loginController', ['$scope', '$window', function($scope, $window) {
      $scope.message = 'Hello, World!';
      $scope.alert = function(message) {
        $window.alert(message);
      };
    }]);*/


    connection.query('SELECT * FROM users WHERE username = ?',[username_co], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password_co==results[0].password){
                message='successfully authenticated';
                console.log(message);  
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })         

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
}