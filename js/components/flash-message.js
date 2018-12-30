function msg(arg1, arg2, arg3 = 3){

  var alerta = document.getElementById('alerta');

  alerta.setAttribute('data-type', arg1);

  alerta.textContent = arg2;

  alerta.classList.add('activa');

  setTimeout(function(){

  alerta.classList.remove('activa');

  }, arg3 * 1000);

};
