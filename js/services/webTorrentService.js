define(
	[
		'webtorrent'
	],
		function(webtorrent){
			console.log('webtorrent service called');
			var WebTorrent = webtorrent;
			var client = new WebTorrent();
			
			console.log(client);
			return client;
		}
);