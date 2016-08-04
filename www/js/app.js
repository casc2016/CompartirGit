
/*
angular.module('lab1d', [])
	       .controller('controller_one',function($scope){	  
	       });     	

*/
angular.module('lab1d', ['ngRoute', 'lab1a','lab1b','lab1c'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider

	.when('/lab1aVariables', {
	    templateUrl : "views/lab1a.html",
	    controller: 'lab1aController'
	})

	.when('/lab1bArray', {
		templateUrl: "views/lab1b.html",
		controller: 'lab1bController'
	})
	
	.when('/lab1cImagen', {
		templateUrl: "views/lab1c.html",
		controller: 'lab1cController'
	})

	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);
