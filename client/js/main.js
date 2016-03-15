angular.module('myApp', ['ngRoute'])
    .controller('welcomeController', ['$scope', function($scope){
        $scope.username = 'sss';
        $scope.logIn = function() {
            location.hash = "#/tweets";
        };
	}])
	.controller('tweetsController', ['$scope', function($scope){
        
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