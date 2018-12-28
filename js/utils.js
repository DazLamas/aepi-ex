function msg(arg1, arg2, arg3 = 3){

  var alerta = document.getElementById('alerta');

  alerta.setAttribute('data-tipo', arg1);

  alerta.textContent = arg2;

  alerta.classList.add('activa');

  setTimeout(function(){

  alerta.classList.remove('activa');

  }, arg3 * 1000);

};

function generateRandomNumber(min_value , max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);;
};

function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};

function toClockFormat(item) {

	item = item.toString();

	if(item.length < 2) {
		item = '0' + item;
	}
	return item;
};
