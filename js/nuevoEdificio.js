if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

import { Edificio }   from './clases.js';
import { Atraccion }  from './clases.js';
import { Puesto }     from './clases.js';

const buildings = document.getElementsByClassName('edificio');

for (item of buildings) {
    item.addEventListener('click', build, false);
}

function build() {

  if(opener.objPartida.saldo >= this.dataset.coste){

    if(this.dataset.tipo === 'atraccion') {

      const atraccion = new Atraccion(opener.celdaItem, this.dataset.nombre, this.dataset.tipo, this.dataset.visitantes);

      opener.objPartida.parque.push(atraccion);

      atraccion.inicializar();

    }

    if(this.dataset.tipo === 'puesto'){

      const puesto = new Puesto(opener.celdaItem, this.dataset.nombre, this.dataset.tipo, this.dataset.ingresos);

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
