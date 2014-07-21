var
	exec = require('child_process').exec,
	EventEmitter = require('events').EventEmitter,
	util = require('util');

function MaxCdnitiator() {

	EventEmitter.call(this);

	var that = this,
		workqueue = [];

	this.processData = function() {
		// Pop data off the array, process that biz.
		console.log('processData yo');

		var record = workqueue.shift();

		if (record && record.length > 0) {
			console.log('Call blink.blink(' + record + ') homie');
			that.emit('304', record);
		}

		// Fetch more records if the queue gets low.
		if (workqueue.length === 50) {
			that.getData();
		}

		setTimeout(that.processData, 750);
	};

	this.appendData = function(error, stdout) {
		var data;
		console.log(stdout);

		if (!error) {
			console.log('We has a data');

			if (!stdout.length) { return; }

			try {
				data = JSON.parse(stdout);
			} catch (ex) {
				return console.log(ex);
			}

			// Loop over data, add individual records to the workqueue.
			for (var record in data.records) {
				console.log('pushing ' + data.records[record]);
				workqueue.push(data.records[record].client_continent);
			}
		}
	};

	this.getData = function() {
		console.log('Asking for data');
		exec(
			'maxcurl "/v3/reporting/logs.json?status=304"',
			that.appendData
		);
	};

	this.init = function() {
		console.log('Lets Go!');
		that.getData();

		// Schedule a timer to call processData every X ms
		setTimeout(that.processData, 750);
	};

	// Go go go!
	this.init();

}

util.inherits(MaxCdnitiator, EventEmitter);

module.exports = MaxCdnitiator;
