function msg(arg1, arg2, arg3 = 3){

  const flashMsgCont = document.getElementById('flashMsgCont');

  flashMsgCont.setAttribute('data-type', arg1);

  flashMsgCont.textContent = arg2;

  flashMsgCont.classList.add('activa');

  setTimeout(function(){

  flashMsgCont.classList.remove('activa');

  }, arg3 * 1000);

};
