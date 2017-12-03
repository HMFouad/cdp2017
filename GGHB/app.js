var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.login= function(){
    var users = $.param({
      login: JSON.stringify({
        username_co: $scope.username_co,
        password_co : $scope.password_co,
        body : $scope.body
      })
    });

    $http.post("/login", user).success(function(user, status) {
      console.log('Data posted successfully');
    })
  }
});
