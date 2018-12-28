if (!opener) {
    alert("ERROR: Sorteo no disponible.");
    window.close();
};

(function(window, document, opener){

  //Disable raffle for 1 hour
  opener.disableRaffle(new Date());

  //Set Numbers Options
  const buttons   = document.getElementsByClassName('js-contest-options');
  const winner    = randomElementInArray(buttons);
  let looser      = randomElementInArray(buttons);
  let choosenOpt  = 'empty';//Default value

  while (winner === looser) {
    looser = randomElementInArray(buttons);
  };

  function winnerNumber() {
    opener.objPartida.saldo += 10000;
  };

  function looserNumber() {

    const parques = opener.objPartida.parque;

    for (var i = 0; i < 2; i++) {
      parques[i].celda.dataset.edificioCelda = "vacia";
    }

    parques.splice(0, 2);

  };

  function checkNumber(e) {

    const eventTarget = e.currentTarget;

    if(eventTarget === winner) {
       winnerNumber();
       choosenOpt = 'winner';
    }

    if (eventTarget === looser) {
      looserNumber();
      choosenOpt = 'looser';
    }

    opener.msg(contestResult[choosenOpt].type, contestResult[choosenOpt].text);
    window.close();

  };

  for (let button of buttons) {
    button.addEventListener('click', checkNumber, false);
  };

console.log(`El premio se encuentra tras el número ${winner.id}, el terremoto tras la ${looser.id}`);

}(window, document, opener));
