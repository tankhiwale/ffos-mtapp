require(
	[
		'mtapp'
	], function(mtapp){
		mtapp.controller('HomeController', ['$scope', 'mtappDatabaseService', 
			function HomeController($scope, mtappDatabaseService){
			console.log('HomeController file called');
			//$scope.data = "Data is here. Have no fear";

			mtappDatabaseService.insertNewTorrent('TestAData');

			$scope.data = mtappDatabaseService.getItem();
			console.log('Data received in HomeController is ' + $scope.data);
			if($scope.data){
				$scope.dataAvailable = true;
			}
			
		}]);
});