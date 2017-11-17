   // create the module and name it scotchApp
    var App = angular.module('MyApp', [ 'ngRoute' ]);

    // configure our routes
    App.config(["$routeProvider", function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'html_templates/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'html_templates/about.html',
                controller  : 'aboutController'
            })

            //route for the create project page
            .when('/createProject', {
                templateUrl : 'html_templates/createProject.html',
                controller  : 'createProjectController'
            })

            //route for the list of projects page
            .when('/listProjects', {
                templateUrl : 'html_templates/listProjects.html',
                controller  : 'listProjectsController'
            })

            //route for the project page
            .when('/project', {
                templateUrl : 'html_templates/project.html',
                controller  : 'projectController'
            })
            .otherwise({
                redirectTo: '/',
                controller  : 'mainController'
            });
    }]);

    // create the controller and inject Angular's $scope
    App.controller('mainController', function($scope) {
        
    });

    App.controller('aboutController', function($scope) {

    });

    App.controller('createProjectController', function($scope) {

    });

    App.controller('listProjectController', function($scope) {

    });

    App.controller('projectController', function($scope) {

    });
