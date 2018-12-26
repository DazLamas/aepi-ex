if (!opener || opener.objPartida.raffleStatus != true) {
    location.assign('../index.html');
};

(function(window, document, opener){

  opener.document.getElementById('nuevoSorteo').disabled = true;
  opener.raffleStatus = false;

  const buttons = document.getElementsByClassName('js-contest-options');
  const winner  = randomElementInArray(buttons);
  let looser    = randomElementInArray(buttons);

  while (winner === looser) {
    looser = randomElementInArray(buttons);
  };

  console.log('winner: ', winner);
  console.log('looser: ', looser);

  winner.addEventListener('click', function() {

    opener.objPartida.saldo += 10000;
    opener.msg('success', 'Premio!! Has ganado 10000€');
    window.close();

  });

  looser.addEventListener('click', function() {

    const parques = opener.objPartida.parque;

    for (var i = 0; i < 2; i++) {
      parques[i].celda.dataset.edificioCelda = "vacia";
    }

    parques.splice(0, 2);
    opener.msg('error', 'Ohhhhhh! Has periddo el sorteo... un terremoto acaba de destruir dos de tus edificios');
    window.close();
  });

  setTimeout(opener.setRaffleAvailable, 3600000);//After 1 hour


}(window, document, opener));
