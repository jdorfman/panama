var five = require('johnny-five'),
    board = new five.Board(),
	Blinker = require('./lib/blinker'),
	MaxCdnitiator = require('./lib/maxcdnitiator'),
	BrowserWars = require('./lib/browserwars');

board.on('ready', function() {

	var blinker = new Blinker(five);
	// 	maxcdn = new MaxCdnitiator({dataUrl: '/v3/reporting/logs.json?status=304', eventName: '304'});
	
	var browserwars = new BrowserWars(five),
	  	maxcdn = new MaxCdnitiator({dataUrl: '/v3/reporting/logs.json?status=304', eventName: '304'});

	maxcdn.on('304', function(data) {
		//var ua = data.user_agent;
		console.log(data.user_agent);
		browserwars.blink(data);
	});
});
