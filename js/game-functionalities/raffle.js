function changeRaffleStatus(status, timeStampNow) {

  document.getElementById('js-new-raffle-btn').disabled = status;
  document.getElementById("countdown").innerHTML = "";

  //Set timelapse and start countdown
  if(timeStampNow) {
    setCountdownTimelapse(timeStampNow);
  };

};

function setCountdownTimelapse(timeStampNow) {

	deadline = timeStampNow.setSeconds(timeStampNow.getSeconds() + 5);

  //Start countdown
	setInterval(countdown, 1000, function() {
		changeRaffleStatus(false);
	});
};
