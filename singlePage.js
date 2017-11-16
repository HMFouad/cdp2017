    // create the module and name it scotchApp
    var App = angular.module('MyApp', ['ngRoute']);

    // configure our routes
    App.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'Front/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'Front/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'Front/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    App.controller('mainController', function($scope) {
        
    });

    App.controller('aboutController', function($scope) {

    });

    App.controller('contactController', function($scope) {

    });