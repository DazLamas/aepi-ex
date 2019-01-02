var game = {
    init: false,
    balance: 3000,
    ticketsGather: 0,
    visitors: 0,
    buildings: [],
}, cellDomElement;

nuevaPartida.onclick = () => {

    if (!game.init) {

        open("html/modals/nuevapartida.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}


const cells = document.getElementsByClassName('cell');

for (let elm of cells) {

    elm.onclick = () => {

        if (!game.init) {

            msg('error', 'Inicia una partida para poder construir.');

        } else {

            if (elm.dataset.cellContent != 'empty') {

                msg('error', 'Elige una celda vacía para construir.');

            } else {
                cellDomElement = elm;
                open('html/modals/new-building.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')
            }
        }
    }
}


//Ejecución panel recaudación
recaudarCaja.onclick = () => {

    if (!game.init || game.ticketsGather < 200) {

      const errorText = !game.init ?
                        'No has iniciado ninguna partida!' :
                        'Tienes ' + game.ticketsGather + '$ en caja. Necesitas un mínimo de 200$.';

      msg('error', errorText);

    } else {

        open("html/modals/collect-tickets-gather", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

nuevoSorteo.onclick = () => {

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
