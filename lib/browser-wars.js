
module.exports = function(five) {
  var 
	browsers = {
		IE: null, // Internet Explorer
		FF: null, // Firefox
		GC: null, // Google Chrome
		SA: null, // Safari
		OT: null //  Other 
	},
	ready = false;

	this.init = function() {
		// Define the pins the LEDs are connected to.
		continents.NA = new five.Led({pin: 3});
		continents.SA = new five.Led({pin: 5});
		continents.EU = new five.Led({pin: 6});
		continents.AS = new five.Led({pin: 9});
		continents.OC = new five.Led({pin: 10});

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

	this.blink = function(name) {
		if (ready && continents.hasOwnProperty(name)) {
			continents[name].fadeIn(200,10);
			setTimeout(function(){
				continents[name].fadeOut(0, 500);
			},500);
		}
	};

	this.init();
};
