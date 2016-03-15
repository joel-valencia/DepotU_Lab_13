angular.module('myApp', ['ngRoute'])
	.controller('tweetsController', ['$scope', function($scope){

	}])
    .controller('welcomeController', ['$scope', function($scope){

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