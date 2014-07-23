module.exports = function(five) {

  var UAParser = require('ua-parser-js');
  var parser = new UAParser();
  var
	useragent = {},
	ready = false;
	
	this.init = function() {
		useragent.IE = new five.Led({pin: 3}); // Internet Explorer
		useragent.Firefox = new five.Led({pin: 6}); // Firefox
		useragent.Chrome = new five.Led({pin: 5}); // Google Chome
		useragent.Safari = new five.Led({pin: 9}); // Apple Safari
		useragent.other = new five.Led({pin: 10}); // The REST (GET it? =p)

		// Test routine
		for (var key in useragent) {
			useragent[key].on();
		}

		setTimeout(function(){
			for (var c in useragent) {
				useragent[c].off();
			}
			ready = true;
		}, 1000);
	};

	this.blink = function(data) {
		console.log('foobaroo');

		if (ready && data.hasOwnProperty('user_agent')) {
			var browser = parser.setUA(data.user_agent).getResult().browser.name;
			console.log(browser);

			if (!useragent.hasOwnProperty(browser)) {
				browser = 'other';
			}

			useragent[browser].fadeIn(100,10);
			setTimeout(function(){
				useragent[browser].fadeOut(0, 250);
			},500);
			
		}
	};

	this.init();
};
