var objPartida = {
    iniciada: false,
    saldo: 3000,
    recaudacion: 0,
    visitantes: 0,
    parque: [],
}, celdaItem;

const check_game_status = document.getElementsByClassName('js-game-trigger');

for (button of check_game_status) {
  button.addEventListener('click', function() {
    if (objPartida.iniciada) {
        msg('error', 'No has iniciado ninguna partida!');
        return false;
    }
  })
}

// Ejecución panel nueva partida
nuevaPartida.onclick = () => {

    if (!objPartida.iniciada) {

        open("paneles/nuevapartida.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}


// Ejecución panel construcción
const celdas = document.getElementsByClassName('celda');

for (let elm of celdas) {

    elm.onclick = () => {

      if (elm.dataset.edificioCelda != 'vacia') {

          msg('error', 'Elige una celda vacía para construir.');

      } else {

          celdaItem = elm;
          open('paneles/nuevoEdificio.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')

      }

    }
}


//Ejecución panel recaudación
recaudarCaja.onclick = () => {

    if (objPartida.recaudacion < 200) {

        msg('error', 'Tienes ' + objPartida.recaudacion + '$ en caja. Necesitas un mínimo de 200$.');

    } else {

        open("paneles/recaudarEntradas.html", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

nuevoSorteo.onclick = () => {

    if (objPartida.parque.length > 1) {
        open("paneles/nuevosorteo.html", 'Sorteo', 'scrollbars=yes,width=700,height=1000,toolbar=yes');
    }
    else {
      msg('error', 'Debes tener al menos dos edificios construidos para realizar el sorteo');
    }
};
