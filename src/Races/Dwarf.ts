import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instancesCreated = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instancesCreated;
  }
}
