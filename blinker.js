
module.exports = function() {
  var 
	that = this,
	continents = {};

  function init(five) {
		that.five = five;
		continent.NA = new five.Led({pin: 3});
		continent.SA = new five.Led({pin: 5});
		continent.EU = new five.Led({pin: 6});
		continent.AS = new five.Led({pin: 9});
		continent.OC = new five.Led({pin: 10});
  }

	function blink(err, name) {
		if (err) { return; }

		if (continent.hasOwnProperty(name)) {
			console.log("Strobing " + name);
			continent[name].strobe();
		}
	}
};
