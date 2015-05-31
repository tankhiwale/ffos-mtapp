require(
	[
		'mtapp',
		'localforage'

	], function(mtapp, localforage){

	mtapp.controller('MainController', ['$scope', '$location', '$rootScope', 
		function($scope, $location, $rootScope){
			console.log('mainController file called');
			this.message = "Hi";

			localforage.config({
			    driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
			    name        : 'mtappDB',
			    version     : 1.0,
			    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
			    storeName   : 'mtappDB', // Should be alphanumeric, with underscores.
			    description : 'The store used by mtapp'
			});

			
			$scope.go = function(path) {
				console.log('Path : ' + path);
				$location.path(path);
			};
	}]);
});