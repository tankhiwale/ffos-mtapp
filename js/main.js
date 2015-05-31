require.config({
	paths: {
		'angular': '../bower_components/angularjs/angular',
		'angularRoute': '../bower_components/angular-route/angular-route',
		'localforage': '../bower_components/localforage/dist/localforage.min',
		'webtorrent': '../bower_components/webtorrent/webtorrent.min',
		'mtapp': './mtapp'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
	'angularRoute': ['angular'],
	deps: ['mtapp']
	}
});

require([
		'angular',
		'angularRoute',
		'localforage',
		'webtorrent',
		'services/mtappDatabaseService',
		'services/webTorrentService',
		'controllers/mainController',
		'controllers/homeController',
		'controllers/newTorrentController'

		],
		function(angular, ngRoute, localforage, webtorrent){
			console.log('main file called');
			angular.element(document).ready(function() {
  				angular.bootstrap(document, ['mtapp']);
			});
});