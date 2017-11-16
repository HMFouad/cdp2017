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
            })

            //route for the create project page
            .when('/createProject', {
                templateUrl : 'Front/createProject.html',
                controller  : 'createProjectController'
            })

            //route for the list of projects page
            .when('/listProjects', {
                templateUrl : 'Front/listProjects.html',
                controller  : 'listProjectsController'
            })

            //route for the project page
            .when('/project', {
                templateUrl : 'Front/project.html',
                controller  : 'projectController'
            });
    });

    // create the controller and inject Angular's $scope
    App.controller('mainController', function($scope) {
        
    });

    App.controller('aboutController', function($scope) {

    });

    App.controller('contactController', function($scope) {

    });

    App.controller('createProjectController', function($scope) {

    });

    App.controller('listProjectController', function($scope) {

    });

    App.controller('projectController', function($scope) {

    });