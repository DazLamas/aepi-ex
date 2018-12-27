if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
};

(function(window, document, opener){

  const buttons = document.getElementsByClassName('js-contest-options');
  const winner  = randomElementInArray(buttons);
  let looser    = randomElementInArray(buttons);

  while (winner === looser) {
    looser = randomElementInArray(buttons);
  };

  console.log('winner: ', winner);
  console.log('looser: ', looser);

  winner.addEventListener('click', () => {

    opener.game.balance += 10000;
    opener.msg('success', 'Premio!! Has ganado 10000€');
    window.close();

  });

  looser.addEventListener('click', () => {

    const buildingss = opener.game.buildings;

    for (var i = 0; i < 2; i++) {
      buildingss[i].cell.dataset.cellContent = "empty";
    }

    buildingss.splice(0, 2);
    opener.msg('error', 'Ohhhhhh! Has periddo el sorteo... un terremoto acaba de destruir dos de tus edificios');
    window.close();
  });


}(window, document, opener));
