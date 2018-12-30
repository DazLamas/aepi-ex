class Building {
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

export class Amusement extends Building {
  constructor(celda, nombre, tipo, visitantes) {
    super(celda, nombre, tipo)
    this._visitantes = visitantes;
  };

  get visitantes() {
    return Number(this._visitantes);
  }

};

export class Stand extends Building {
  constructor(celda, nombre, tipo, ingresos) {
    super(celda, nombre, tipo)
    this._ingresos = ingresos;
  };

  get ingresos() {
    return Number(this._ingresos);
  }

};
