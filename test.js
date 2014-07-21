var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board(),
	Blinker = require('./blinker'),
	blinker = new Blinker(five);

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
	var leds = [];
	leds.push(new five.Led(3));
	leds.push(new five.Led(5));
	var that = this;

	function blinkIt(idx) {
		leds[idx].fadeIn(200,10);

		that.wait(500, function(){
			leds[idx].fadeOut(0, 500);
		});
	}

	setInterval(function(){ blinkIt(0); }, 3000);
	setInterval(function(){ blinkIt(1) } , 2000);

 // maxcdn.on('304', blinker.blinkCC);

});
