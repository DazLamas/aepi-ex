setInterval( () => {

    document.getElementById('current-buildings-display').textContent = game.buildings.length + " buildings";

    document.getElementById('tickets-gather-display').textContent = game.ticketsGather + " $ en caja";




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

    document.getElementById('current-visitors-display').textContent = game.visitors + " visitors";

    document.getElementById('current-balance-display').textContent = game.balance + " $";


}, 1000);
