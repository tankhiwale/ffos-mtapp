define(
	[
		'angular'
	],
		function(angular){
			console.log('mtapp file called');
			var mtapp = angular.module('mtapp', ['ngRoute']);

			mtapp.config(['$routeProvider',function($routeProvider) {
				$routeProvider.when('/', {
					controller: 'HomeController',
					templateUrl: '../templates/home.tmpl.html'
				});
			}]);

			// This was a new learning. To make sure angular understands this in a mobile app.
			mtapp.config(['$compileProvider', function($compileProvider){
				$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|app|mailTo|ftp):/);
			}]);
			return mtapp;
		}
);