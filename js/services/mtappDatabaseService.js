define(
	[
		'mtapp',
		'localforage'
	],
	function(mtapp, localforage){
		return mtapp.factory('mtappDatabaseService',  [ function(){



			var mtappDatabaseService = {};
			mtappDatabaseService.currentItem ;

			mtappDatabaseService.insertNewTorrent = function(dataRecieved){
				console.log('inserting new Data');
				localforage.setItem('TestA',dataRecieved);
			};

			mtappDatabaseService.getItem = function(){
				console.log('Getting data');
				localforage.getItem('TestA').then(function(value){
					console.log('Data returned back is ' + value);
					 this.currentItem = value;
				});
				return this.currentItem;
			};


			return mtappDatabaseService;
		}]);
	});