setInterval( () => {

    document.getElementById('contadorEdificios').textContent = game.buildings.length + " buildingss";

    document.getElementById('contadorRecaudacion').textContent = game.ticketsGather + " $ en caja";




}, 100);


setInterval( () => {

      for (buildings of game.buildings) {

        if(buildings.type === 'amusement') {
          game.visitors += buildings.visitors;
          game.ticketsGather += (buildings.visitors * 0.5);
        }

        if(buildings.type === 'stand' && game.visitors != 0) {
          game.balance += buildings.income;
        }

      }

    document.getElementById('contadorVisitantes').textContent = game.visitors + " visitors";

    document.getElementById('contadorSaldoActual').textContent = game.balance + " $";


}, 1000);
