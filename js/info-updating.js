

setInterval( () => {

    // Actualización estadísticas panel
    document.getElementById('contadorEdificios').textContent = objPartida.parque.length + " edificios";

    document.getElementById('contadorRecaudacion').textContent = objPartida.recaudacion + " $ en caja";

}, 100);


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


    // Actualización de visitantes y saldo
    document.getElementById('contadorVisitantes').textContent = objPartida.visitantes + " visitantes";

    document.getElementById('contadorSaldoActual').textContent = objPartida.saldo + " $";


}, 1000);
