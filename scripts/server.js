var five = require('johnny-five'),
    board = new five.Board(),
	Blinker = require('./blinker'),
	MaxCdnitiator = require('./maxcdnitiator'),
	

board.on('ready', function() {

	var blinker = new Blinker(five),
		http304 = new MaxCdnitiator({dataUrl: '/v3/reporting/logs.json?status=304', eventName: '304'});

	http304.on('304', function(data) {
		console.log(data);
		blinker.blink(data);
	});

});
