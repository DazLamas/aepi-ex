var game = {
    init: false,
    balance: 3000,
    ticketsGather: 0,
    visitors: 0,
    buildings: [],
}, cellDomElement;

const newGameBtn        = document.getElementById('js-new-game-btn');
const newBuildingBtns   = document.getElementsByClassName('js-new-building-btn');
const newRaffleBtn      = document.getElementById('js-new-raffle-btn');
const collectTicketsBtn = document.getElementById('js-collect-tickets-btn');

newGameBtn.onclick = () => {

    if (!game.init) {

        open("html/modals/new-game.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}

for (let btn of newBuildingBtns) {

    btn.onclick = () => {

        if (!game.init || btn.dataset.cellContent != 'empty') {

            const errorText = !game.init ?
                              'Inicia una partida para poder construir.' :
                              'Elige una celda vacía para construir.';

            msg('error', errorText);

        } else {
            cellDomElement = btn;
            open('html/modals/new-building.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')
        }
    }
}

collectTicketsBtn.onclick = () => {

    if (!game.init || game.ticketsGather < 200) {

      const errorText = !game.init ?
                        'No has iniciado ninguna partida!' :
                        'Tienes ' + game.ticketsGather + '$ en caja. Necesitas un mínimo de 200$.';

      msg('error', errorText);

    } else {

        open("html/modals/collect-tickets-gather", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

newRaffleBtn.onclick = () => {

    if (game.init && game.buildings.length > 1) {

        open("html/modals/new-raffle.html", 'Sorteo', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    }

    else {

      const errorText = !game.init ?
                        'Inicia partida para poder acceder al sorteo' :
                        'Necesitas dos edificios construidos para acceder al sorteo';

      msg('error', errorText);

    }
};
