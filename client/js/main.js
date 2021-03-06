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
	.controller('tweetsController', ['$rootScope', '$http', function($rootScope, $http){
        $rootScope.getData = function() {
            $http({
                url: 'http://localhost:3000/messages',
                method: 'GET'
            }).then(function(result) {
                $rootScope.tweets = result.data;
                //console.log($rootScope.tweet.data);
                //$rootScope.$apply();
            });
        }
        
        $rootScope.postData = function() {
            var toAdd = {}
            toAdd.user = $rootScope.username;
            toAdd.text = $rootScope.compose;
            var stringified = JSON.stringify(toAdd);
            
            $http({
                url: 'http://localhost:3000/messages',
                method: 'POST',
                data: stringified
            }).then(function(result) {
                $('#compose').val("");
                $('#send').prop('disabled', true);
                $rootScope.getData();
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