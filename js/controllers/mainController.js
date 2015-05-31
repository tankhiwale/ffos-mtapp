require(
	[
		'mtapp'
	], function(mtapp){
	mtapp.controller('MainController', ['$scope', '$location', '$rootScope', 
		function($scope, $location, $rootScope){
			console.log('mainController file called');
			this.message = "Hi";
			$scope.go = function(path) {
				$location.path(path);
			};
	}]);
});