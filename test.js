var five = require("johnny-five"),
    board = new five.Board(),
	Blinker = require('./blinker'),
	MaxCdnitiator = require('./maxcdnitiator'),
	maxcdn = new MaxCdnitiator();

board.on("ready", function() {

	var blinker = new Blinker(five);

	/*
	setInterval(function(){ blinker.blink(null, 'NA'); }, 3000);
	setInterval(function(){ blinker.blink(null, 'SA'); } , 3000);
	setInterval(function(){ blinker.blink(null, 'EU'); } , 3000);
	setInterval(function(){ blinker.blink(null, 'AS'); } , 3000);
	setInterval(function(){ blinker.blink(null, 'OC'); } , 3000);
	*/

	maxcdn.on('304', function(data) {
		console.log('Saw a 304!');
		blinker.blink(data);
	});

});
