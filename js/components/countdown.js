/*
 * Countdown
 */

function countdown(deadline, output) {

	let hours;
	let minutes;
	let seconds;

	var now 	= new Date().getTime();
	var lapse = deadline - now;

	if (lapse < 0) {

		clearInterval(countdown);
		setRaffleStatus(false, null);

	} else {

		hours 	= Math.floor((lapse % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
		minutes = Math.floor((lapse % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((lapse % (1000 * 60)) / 1000);

		output.innerHTML = "Sorteo disponible en: <br>" + toClockFormat(hours) + ":" + toClockFormat(minutes) + ":" + toClockFormat(seconds);
	}

};

function setTimeLapse(timeStampNow) {

	const deadline = timeStampNow.setMinutes(timeStampNow.getMinutes() + 1);

	setInterval(countdown, 1000, deadline, document.getElementById('countdown'));
};


function toClockFormat(item) {

	item = item.toString();

	if(item.length < 2) {
		item = '0' + item;
	}
	return item;
};
