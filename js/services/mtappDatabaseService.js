define(
	[
		'mtapp',
		'localforage'
	],
	function(mtapp, localforage){
		return mtapp.factory('mtappDatabaseService',  [ function(){

			localforage.config({
			    driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
			    name        : 'mtappDB',
			    version     : 1.0,
			    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
			    storeName   : 'mtappDB', // Should be alphanumeric, with underscores.
			    description : 'The store used by mtapp'
			});

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