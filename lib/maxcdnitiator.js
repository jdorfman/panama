var
	exec = require('child_process').exec,
	EventEmitter = require('events').EventEmitter,
	util = require('util');

function MaxCdnitiator(config) {

	EventEmitter.call(this);

	var that = this,
		workqueue = []; 

	this.processData = function() {
		// Pop data off the array, process that biz.
		var record = workqueue.shift();

		if (record) {
			console.log('processing');
			that.emit(config.eventName, record);
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
				workqueue.push(data.records[record]);
			}
		}
	};

	this.getData = function() {
		var cmd = 'maxcurl "' + config.dataUrl + '"';
		console.log(cmd);
		exec(cmd, that.appendData);
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
