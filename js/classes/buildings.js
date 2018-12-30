class Building {
  constructor(cell, name, type) {
    this._cell  = cell;
    this._name = name;
    this._type   = type;
  };

  create() {
    this._cell.dataset.cellContent = this._name;
  }

  get type() {
    return this._type;
  }

  get cell() {
    return this._cell;
  }

};

export class Amusement extends Building {
  constructor(cell, name, type, visitors) {
    super(cell, name, type)
    this._visitors = visitors;
  };

  get visitors() {
    return Number(this._visitors);
  }

};

export class Stand extends Building {
  constructor(cell, name, type, income) {
    super(cell, name, type)
    this._income = income;
  };

  get income() {
    return Number(this._income);
  }

};
