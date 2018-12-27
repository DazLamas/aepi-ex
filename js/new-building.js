if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

import { Building }   from './clases.js';
import { Amusement }  from './clases.js';
import { Stand }     from './clases.js';

const buildings = document.getElementsByClassName('building');

for (item of buildings) {
    item.addEventListener('click', build, false);
}

function build() {

  if(opener.game.balance >= this.dataset.cost){

    if(this.dataset.type === 'amusement') {

      const amusement = new Amusement(opener.cellItem, this.dataset.name, this.dataset.type, this.dataset.visitors);

      // opener.game.buildings.push(amusement);

      amusement.create(game, amusement);

    }

    if(this.dataset.type === 'stand'){

      const stand = new Stand(opener.cellItem, this.dataset.name, this.dataset.type, this.dataset.income);

      opener.game.buildings.push(stand);

      stand.create();

    }

    opener.game.balance -= this.dataset.coste;

    window.close();

    opener.msg('success', 'Edificio creado');

  }else{
    msg('error', `Saldo insuficiente (dispones de ${opener.game.balance}€)`)
  }

}
