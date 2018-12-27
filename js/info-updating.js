function startGameStats() {

  setInterval( () => {

      // Actualización estadísticas panel
      document.getElementById('buildings-counter').textContent = game.buildings.length + " edificios";

      document.getElementById('entries-counter').textContent = game.collection + " $ en caja";

  }, 100);


  setInterval( () => {

        for (building of game.buildings) {

          if(building.type === 'amusement') {
            game.visitors += building.visitors;
            game.collection += (building.visitors * 0.5);
          }

          if(building.type === 'stand' && game.visitors != 0) {
            game.balance += building.income;
          }

        }


      // Actualización de visitors y balance
      document.getElementById('visitors-counter').textContent = game.visitors + " visitors";

      document.getElementById('current-balance').textContent = game.balance + " $";


  }, 1000);

}
