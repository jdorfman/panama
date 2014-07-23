var five = require('johnny-five'),
    board = new five.Board(),
	Blinker = require('./lib/blinker'),
	MaxCdnitiator = require('./lib/maxcdnitiator');
	// BrowserWars = require('./lib/browserwarzzzzzz');

board.on('ready', function() {

	var blinker = new Blinker(five),
		maxcdn = new MaxCdnitiator({dataUrl: '/v3/reporting/logs.json?status=304', eventName: '304'});

	maxcdn.on('304', function(data) {
		//console.log(data.user_agent);

		// Instead of blinker, place browser-wars here:
		blinker.blink(data);
	});
});
