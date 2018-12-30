import { Amusement } from '../classes/buildings.js';
import { Stand }     from '../classes/buildings.js';

if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

const buildings = document.getElementsByClassName('edificio');

for (let item of buildings) {
    item.addEventListener('click', build, false);
}

function build() {

  if(opener.objPartida.saldo >= this.dataset.coste){

    if(this.dataset.tipo === 'atraccion') {

      const atraccion = new Amusement(opener.celdaItem, this.dataset.nombre, this.dataset.tipo, this.dataset.visitantes);

      opener.objPartida.parque.push(atraccion);

      atraccion.inicializar();

    }

    if(this.dataset.tipo === 'puesto'){

      const puesto = new Stand(opener.celdaItem, this.dataset.nombre, this.dataset.tipo, this.dataset.ingresos);

      opener.objPartida.parque.push(puesto);

      puesto.inicializar();

    }

    opener.objPartida.saldo -= this.dataset.coste;

    window.close();

    opener.msg('success', 'Edificio creado');

  }else{
    msg('error', `Saldo insuficiente (dispones de ${opener.objPartida.saldo}€)`)
  }

}
