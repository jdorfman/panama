var five = require("johnny-five"),
    board = new five.Board(),
	Blinker = require('./blinker'),
	MaxCdnitiator = require('./maxcdnitiator'),
	maxcdn = new MaxCdnitiator();

board.on("ready", function() {

	var blinker = new Blinker(five);

	maxcdn.on('304', function(data) {
		blinker.blink(data);
	});

});
