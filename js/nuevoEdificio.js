if (!opener) {

    alert("ERROR: Accede desde el panel principal.");
    location.assign('../index.html');
}

class Edificio {
  constructor(celda, nombre, tipo) {
    this._celda  = celda;
    this._nombre = nombre;
    this._tipo   = tipo;
  };

  inicializar() {
    this._celda.dataset.edificioCelda = this._nombre;
  }

  get tipo() {
    return this._tipo;
  }

  get celda() {
    return this._celda;
  }

};

class Atraccion extends Edificio {
  constructor(celda, nombre, tipo, visitantes) {
    super(celda, nombre, tipo)
    this._visitantes = visitantes;
  };

  get visitantes() {
    return Number(this._visitantes);
  }

};

class Puesto extends Edificio {
  constructor(celda, nombre, tipo, ingresos) {
    super(celda, nombre, tipo)
    this._ingresos = ingresos;
  };

  get ingresos() {
    return Number(this._ingresos);
  }

};




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
