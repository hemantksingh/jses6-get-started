'use strict'
function start() {
	let msg = 'Started...';

	let log = (msg) => {
		console.log("Invoked in the lambda: " + msg);
	};

	log(msg);
}

start();