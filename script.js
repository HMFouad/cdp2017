var app = angular.module('index', [ngRoute])

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: './Front/index.html',
		controller: 'indexController'
	}).when('/login',{
		templateUrl:'./Front/login.html',
		controller: 'loginController'
	}).when('/register',{
		templateUrl:'./Front/register.html',
		controller: 'registerController'
	})
	.otherwise({
		template: '404'
	})
})

app.controller('indexController', ['$scope', 
	function(scope){
	scope.userName = "userName1"}])

	$scope.goToLogin = function () {
		$location.path('/login');
	};
	$scope.register = function () {
		$location.path('/register');
	};

app.controller('loginController', function($scope){
	$scope.login = function(){
		var username = $scope.username;
		var password = $scope.password;
	}
})

app.controller('registerController', function($scope){
	$scope.register = function(){
		var username = $scope.username;
		var password = $scope.password;
		var confirmPassword = $scope.confirmPassword;
	}
})