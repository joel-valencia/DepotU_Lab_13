angular.module('myApp', ['ngRoute'])
    .controller('welcomeController', ['$rootScope', function($rootScope){
        $rootScope.username = '';
        $rootScope.logIn = function() {
            location.hash = "#/tweets";
        };
        $('#login').prop('disabled', true);
        
        $('#username').keyup(function() {
            if ($('#username').val() == "") {
                $('#login').prop('disabled', true);
            } else {
                $('#login').prop('disabled', false);
            }
        });
	}])
	.controller('tweetsController', ['$rootScope', function($rootScope){
        $rootScope.getData = function() {
            $.ajax({
                url: 'http://localhost:3000/messages',
                method: 'GET'
            }).then(function(result) {
                $rootScope.tweets = result;
                console.log($rootScope.tweets);
            });
        }
        
        $rootScope.getData();
        
        $('#send').prop('disabled', true);
                
        $('#compose').keyup(function() {
            if ($('#compose').val() == "") {
                $('#send').prop('disabled', true);
            } else {
                $('#send').prop('disabled', false);
            }
        });
                
                
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