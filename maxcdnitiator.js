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
		var record = workqueue.shift();

		if (record && record.length > 0) {
			// Emit a 304 event to whoever is listening
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

		if (!error) {
			if (!stdout.length) { return; }

			try {
				data = JSON.parse(stdout);
			} catch (ex) {
				return console.log(ex);
			}

			// Loop over data, add individual records to the workqueue.
			for (var record in data.records) {
				workqueue.push(data.records[record].client_continent);
			}
		}
	};

	this.getData = function() {
		exec(
			'maxcurl "/v3/reporting/logs.json?status=304"',
			that.appendData
		);
	};

	this.init = function() {
		that.getData();

		setTimeout(that.processData, 750);
	};

	// Go go go!
	this.init();

}

util.inherits(MaxCdnitiator, EventEmitter);

module.exports = MaxCdnitiator;
