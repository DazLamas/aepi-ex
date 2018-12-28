/*
 * Countdown
 */
let deadline;
const output 	 = document.getElementById("countdown");

function countdown() {

	let hours;
	let minutes;
	let seconds;

	var now 	= new Date().getTime();
	var lapse = deadline - now;

	if (lapse < 0) {

		clearInterval(countdown);

			document.getElementById('nuevoSorteo').disabled = false;
			output.innerHTML = "";


	} else {

		hours 	= Math.floor((lapse % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
		minutes = Math.floor((lapse % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((lapse % (1000 * 60)) / 1000);

		output.innerHTML = "Sorteo disponible en: <br>" + checkFormat(hours) + ":" + checkFormat(minutes) + ":" + checkFormat(seconds);
	}

};

function setTimeLapse(timeStampNow) {

	deadline = timeStampNow.setMinutes(timeStampNow.getMinutes() + 1);

	setInterval(countdown, 1000);
};


function checkFormat(item) {

	item = item.toString();

	if(item.length < 2) {
		item = '0' + item;
	}
	return item;
};
