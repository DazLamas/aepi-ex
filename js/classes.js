export class Game {
  constructor() {
    this.init       =  false;
    this.balance    =  3000;
    this.collection =  0;
    this.visitors   =  0;
    this.buildings  =  [];
  };
};

export class Building {
  constructor(cell, name, type) {
    this._cell  = cell;
    this._name = name;
    this._type   = type;
  };

  create(game, building) {
    this._cell.dataset.cellContent = this._name;
    game.buildings.push(building);
  };

  get type() {
    return this._type;
  };

  get cell() {
    return this._cell;
  };

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
