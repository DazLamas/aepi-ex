class Building {
  constructor(celda, name, type) {
    this._celda  = celda;
    this._name = name;
    this._type   = type;
  };

  create() {
    this._celda.dataset.edificioCelda = this._name;
  }

  get type() {
    return this._type;
  }

  get celda() {
    return this._celda;
  }

};

export class Amusement extends Building {
  constructor(celda, name, type, visitors) {
    super(celda, name, type)
    this._visitors = visitors;
  };

  get visitors() {
    return Number(this._visitors);
  }

};

export class Stand extends Building {
  constructor(celda, name, type, income) {
    super(celda, name, type)
    this._income = income;
  };

  get income() {
    return Number(this._income);
  }

};
