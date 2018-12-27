function msg(arg1, arg2, arg3 = 3){

    var alert = document.getElementById('alert');

    alert.setAttribute('data-type', arg1);

    alert.textContent = arg2;

    alert.classList.add('activa');

    setTimeout(function(){

        alert.classList.remove('activa');

    }, arg3 * 1000);

};

function generateRandomNumber(min_value , max_value) {
    return Math.floor(Math.random() * (max_value - min_value) + min_value);;
};

function randomElementInArray(array) {
    return array[generateRandomNumber(0, array.length)];
};
