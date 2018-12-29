var objPartida = {
    iniciada: false,
    saldo: 3000,
    recaudacion: 0,
    visitantes: 0,
    parque: [],
}, celdaItem;

// Ejecución panel nueva partida
nuevaPartida.onclick = () => {

    if (!objPartida.iniciada) {

        open("html/modals/nuevapartida.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}



// Ejecución panel construcción
const celdas = document.getElementsByClassName('celda');

for (let elm of celdas) {

    elm.onclick = () => {

        if (!objPartida.iniciada) {

            msg('error', 'Inicia una partida para poder construir.');

        } else {

            if (elm.dataset.edificioCelda != 'vacia') {

                msg('error', 'Elige una celda vacía para construir.');

            } else {
                celdaItem = elm;
                open('html/modals/nuevoEdificio.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')
            }
        }
    }
}


//Ejecución panel recaudación
recaudarCaja.onclick = () => {

    if (!objPartida.iniciada || objPartida.recaudacion < 200) {

      const errorText = !objPartida.iniciada ?
                        'No has iniciado ninguna partida!' :
                        'Tienes ' + objPartida.recaudacion + '$ en caja. Necesitas un mínimo de 200$.';

      msg('error', errorText);

    } else {

        open("html/modals/recaudarEntradas.html", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

nuevoSorteo.onclick = () => {

    if (objPartida.iniciada && objPartida.parque.length > 1) {

        open("html/modals/nuevoSorteo.html", 'Sorteo', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    }

    else {

      const errorText = !objPartida.iniciada ?
                        'Inicia partida para poder acceder al sorteo' :
                        'Necesitas dos edificios construidos para acceder al sorteo';

      msg('error', errorText);

    }
}


// intervalo de actualización
setInterval( () => {

    // Actualización estadísticas panel
    document.getElementById('contadorEdificios').textContent = objPartida.parque.length + " edificios";

    document.getElementById('contadorRecaudacion').textContent = objPartida.recaudacion + " $ en caja";




}, 100);


// intervalo de actualización
setInterval( () => {

      for (edificio of objPartida.parque) {

        if(edificio.tipo === 'atraccion') {
          objPartida.visitantes += edificio.visitantes;
          objPartida.recaudacion += (edificio.visitantes * 0.5);
        }

        if(edificio.tipo === 'puesto' && objPartida.visitantes != 0) {
          objPartida.saldo += edificio.ingresos;
        }

      }


    // Actualización de visitantes y saldo panel
    document.getElementById('contadorVisitantes').textContent = objPartida.visitantes + " visitantes";

    document.getElementById('contadorSaldoActual').textContent = objPartida.saldo + " $";


}, 1000);

function setRaffleStatus(status, timeStampNow) {

  document.getElementById('nuevoSorteo').disabled = status;
  document.getElementById("countdown").innerHTML = "";

  if(timeStampNow) {
    setCountdownTimelapse(timeStampNow);
  };

};
