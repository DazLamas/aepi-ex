import { Amusement } from '../classes/buildings.js';
import { Stand }     from '../classes/buildings.js';

if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
};

const buildings = document.getElementsByClassName('edificio');

for (let item of buildings) {
    item.addEventListener('click', build, false);
};

function build() {

  if(opener.game.balance >= this.dataset.price){

    if(this.dataset.type === 'amusement') {

      const amusement = new Amusement(opener.cellDomElement, this.dataset.name, this.dataset.type, this.dataset.visitors);

      opener.game.buildings.push(amusement);

      amusement.create();

    }

    if(this.dataset.type === 'stand'){

      const stand = new Stand(opener.cellDomElement, this.dataset.name, this.dataset.type, this.dataset.income);

      opener.game.buildings.push(stand);

      stand.create();

    }

    opener.game.balance -= this.dataset.price;

    window.close();

    opener.msg('success', 'Edificio creado');

  }else{
    msg('error', `Saldo insuficiente (dispones de ${opener.game.balance}€)`)
  }

};
