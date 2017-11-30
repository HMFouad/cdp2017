var connection = require('./../config');
var server = require('./../../server')
var session = server.session;
var app = server.app;

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
                console.log(message);  
                /*res.json({
                    status:true,
                    message:'successfully authenticated'
                })*/        

                req.session.username_co = req.body.username_co;
                req.session.password_co = req.body.password_co;
                res.end('done');

                /*if(req.session.username_co) {
                    res.write('<h1>Hello '+req.session.username_co+'</h1>');
                    res.write('<a href="/logout">Logout</a>');
                    res.end();
                } else {
                    res.write('<h1>Please login first.</h1>');
                    res.write('<a href="/">Login</a>');
                    res.end();
            }*/

            app.get('/',function(req,res){
                
                    // Check if an e-mail address is set in the session.
                    // If it is, we will redirect to the admin page.
                    if(req.session.username_co) {
                        res.redirect('/listProjects');
                    }
                    else {
                        res.render('index.html');
                    }
                });

            /*app.get('/listProjects',function(req,res){
                    
                      if(req.session.username_co) {
                          res.write('<h1>Hello '+req.session.username_co+'</h1>');
                          res.write('<a href="/logout">Logout</a>');
                          res.end();
                      } else {
                          res.write('<h1>Please login first.</h1>');
                          res.write('<a href="/">Login</a>');
                          res.end();
                      }
                  });

            app.get('/logout',function(req,res){
                    
                    // if the user logs out, destroy all of their individual session
                    // information
                    req.session.destroy(function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            res.redirect('/#');
                        }
                    });
                
                });

                if(req.session.username_co) {
                    res.redirect('/listProjects');
                }
                else {
                    res.render('index.html');
            }*/


                /*app.get('/listProjects', isLoggedIn, function(req, res) {

            });*/

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