
module.exports = function(five) {
  var 
	that = this,
	continents = {};

	that.init = function() {
		continents.NA = new five.Led({pin: 3});
		continents.SA = new five.Led({pin: 5});
		continents.EU = new five.Led({pin: 6});
		continents.AS = new five.Led({pin: 9});
		continents.OC = new five.Led({pin: 10});
	};

	that.blink = function(name) {
		if (continents.hasOwnProperty(name)) {
			continents[name].fadeIn(200,10);
			setTimeout(function(){
				continents[name].fadeOut(0, 500);
			},500);
		}
	};

	this.init();
};
