angular.module('myApp', ['ngRoute'])
    .controller('welcomeController', ['$rootScope', function($rootScope){
        $rootScope.username = '';
        $rootScope.logIn = function() {
            location.hash = "#/tweets";
        };
	}])
	.controller('tweetsController', ['$rootScope', function($rootScope){
        
	}])
	.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
        .when('/tweets', {
            templateUrl: 'views/tweets.html',
            controller: 'tweetsController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);