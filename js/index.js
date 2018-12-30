var game = {
    iniciada: false,
    balance: 3000,
    ticketsGather: 0,
    visitors: 0,
    buildings: [],
}, cellDomElement;

// Ejecución panel nueva partida
nuevaPartida.onclick = () => {

    if (!game.iniciada) {

        open("html/modals/nuevapartida.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}



// Ejecución panel construcción
const cells = document.getElementsByClassName('cell');

for (let elm of cells) {

    elm.onclick = () => {

        if (!game.iniciada) {

            msg('error', 'Inicia una partida para poder construir.');

        } else {

            if (elm.dataset.cellContent != 'empty') {

                msg('error', 'Elige una cell vacía para construir.');

            } else {
                cellDomElement = elm;
                open('html/modals/new-building.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')
            }
        }
    }
}


//Ejecución panel recaudación
recaudarCaja.onclick = () => {

    if (!game.iniciada || game.ticketsGather < 200) {

      const errorText = !game.iniciada ?
                        'No has iniciado ninguna partida!' :
                        'Tienes ' + game.ticketsGather + '$ en caja. Necesitas un mínimo de 200$.';

      msg('error', errorText);

    } else {

        open("html/modals/collect-tickets-gather", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

nuevoSorteo.onclick = () => {

    if (game.iniciada && game.buildings.length > 1) {

        open("html/modals/new-raffle.html", 'Sorteo', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    }

    else {

      const errorText = !game.iniciada ?
                        'Inicia partida para poder acceder al sorteo' :
                        'Necesitas dos edificios construidos para acceder al sorteo';

      msg('error', errorText);

    }
}


// intervalo de actualización
setInterval( () => {

    // Actualización estadísticas panel
    document.getElementById('contadorEdificios').textContent = game.buildings.length + " edificios";

    document.getElementById('contadorRecaudacion').textContent = game.ticketsGather + " $ en caja";




}, 100);


// intervalo de actualización
setInterval( () => {

      for (edificio of game.buildings) {

        if(edificio.type === 'amusement') {
          game.visitors += edificio.visitors;
          game.ticketsGather += (edificio.visitors * 0.5);
        }

        if(edificio.type === 'stand' && game.visitors != 0) {
          game.balance += edificio.income;
        }

      }


    // Actualización de visitors y balance panel
    document.getElementById('contadorVisitantes').textContent = game.visitors + " visitors";

    document.getElementById('contadorSaldoActual').textContent = game.balance + " $";


}, 1000);
