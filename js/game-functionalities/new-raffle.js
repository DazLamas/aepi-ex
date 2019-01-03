if (!opener) {
    alert("ERROR: Sorteo no disponible.");
};

(function(window, document, opener){

  //Disable raffle for 1 hour
  opener.changeRaffleStatus(true, new Date());

  //Set Numbers Options
  const buttons   = document.getElementsByClassName('js-contest-options');
  const winner    = randomElementInArray(buttons);
  let looser      = randomElementInArray(buttons);
  let choosenOpt  = 'empty';//Default value

  while (winner === looser) {
    looser = randomElementInArray(buttons);
  };

  function winnerNumber() {
    opener.game.balance += 10000;
  };

  function looserNumber() {

    const buildings = opener.game.buildings;

    for (var i = 0; i < 2; i++) {
      buildings[i].cell.dataset.cellContent = "empty";
    }

    buildings.splice(0, 2);

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

    opener.msg(raffleResult[choosenOpt].type, raffleResult[choosenOpt].text);
    window.close();

  };

  for (let button of buttons) {
    button.addEventListener('click', checkNumber, false);
  };

  console.log(`El premio se encuentra tras el número ${winner.id}, el terremoto tras el ${looser.id}`);

}(window, document, opener));
