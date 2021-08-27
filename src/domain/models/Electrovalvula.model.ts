import { IElectrovalvulaModelInterface } from '../../interfaces/useCaseDTO/Electrovalvula.interfaces';

export class ElectrovalvulaModel implements IElectrovalvulaModelInterface {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  toJson(): string {
    const obj = {
      nombre: this.nombre,
    };

    return JSON.stringify(obj);
  }
}
