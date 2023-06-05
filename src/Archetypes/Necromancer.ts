import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _attack: EnergyType;
  static _instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._attack = 'mana';
    Necromancer._instancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._attack;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancesCreated;
  }
}
