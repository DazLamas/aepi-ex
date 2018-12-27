import { Game }      from './classes.js'
import { Building }  from './classes.js'
import { Amusement } from './classes.js'
import { Stand }     from './classes.js'
const game = new Game();
let cellItem;
const check_game_status = document.getElementsByClassName('js-game-trigger');

// for (let button of check_game_status) {
//   button.addEventListener('click', function() {
//     if (Game.init) {
//         msg('error', 'No has iniciado ninguna partida!');
//         return false;
//     }
//   })
// }

// Ejecución panel nueva partida
document.getElementById('new-game').onclick = () => {

    if (!Game.init) {

        open("panels/new-game.html", 'Nueva partida', 'scrollbars=yes,width=700,height=1000,toolbar=yes');

    } else {

        msg('error', 'Ya has iniciado una partida previamente, no es posible crear una nueva partida');

    }
}


// Ejecución panel construcción
const cells = document.getElementsByClassName('cell');

for (let elm of cells) {

    elm.onclick = () => {

      if (elm.dataset.cellContent != 'empty') {

          msg('error', 'Elige una cell vacía para construir.');

      } else {

          cellItem = elm;
          open('panels/new-building.html', 'Construir', 'width=600,height=1200,scrollbars=yes,toolbar=no')

      }

    }
}


//Ejecución panel recaudación
document.getElementById('tickets-gather').onclick = () => {

    if (Game.collection < 200) {

        msg('error', 'Tienes ' + game.collection + '$ en caja. Necesitas un mínimo de 200$.');

    } else {

        open("panels/recaudarEntradas.html", 'Recaudar', 'scrollbars=yes,width=700,height=300,toolbar=yes');

    }
}

document.getElementById('new-raffle').onclick = () => {

    if (Game.buildings.length > 1) {
        open("panels/new-raffle.html", 'Sorteo', 'scrollbars=yes,width=700,height=1000,toolbar=yes');
    }
    else {
      msg('error', 'Debes tener al menos dos edificios construidos para realizar el sorteo');
    }
};
