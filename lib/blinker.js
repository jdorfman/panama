module.exports = function(five) {
  var
	continents = {},
	ready = false;

	this.init = function() {
		// Define the pins the LEDs are connected to.
		continents.NA = new five.Led({pin: 3});
		continents.SA = new five.Led({pin: 5});
		continents.EU = new five.Led({pin: 6});
		continents.AS = new five.Led({pin: 9});
		continents.AF = new five.Led({pin: 10});
		continents.OC = new five.Led({pin: 10});
		continents["--"] = new five.Led({pin: 10});

		// Test routine
		for (var key in continents) {
			continents[key].on();
		}

		setTimeout(function(){
			for (var c in continents) {
				continents[c].off();
			}
			ready = true;
		}, 1000);
	};

	this.blink = function(data) {
		if (ready && data.hasOwnProperty('client_continent')) {
			continents[data.client_continent].fadeIn(200,10);
			setTimeout(function(){
				continents[data.client_continent].fadeOut(0, 500);
			},500);
		}
	};

	this.init();
};
