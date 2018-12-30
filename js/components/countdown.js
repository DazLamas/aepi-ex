/*
 * Countdown
 */

// ToDo: Text as default in HTML, reveal it at previous function. Something like: setCountdownPropUp();
let deadline;
const output = document.getElementById('countdown');

function toClockFormat(item) {

	item = item.toString();

	if(item.length < 2) {
		item = '0' + item;
	}
	return item;
};

function countdown(callback) {

	let hours;
	let minutes;
	let seconds;

	var now 	= new Date().getTime();
	var lapse = deadline - now;

	if (lapse < 0) {

		clearInterval(this);
		callback();

	} else {

		hours 	= Math.floor((lapse % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
		minutes = Math.floor((lapse % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((lapse % (1000 * 60)) / 1000);

		output.innerHTML = "Sorteo disponible en: <br>" + toClockFormat(hours) + ":" + toClockFormat(minutes) + ":" + toClockFormat(seconds);
	}

};
