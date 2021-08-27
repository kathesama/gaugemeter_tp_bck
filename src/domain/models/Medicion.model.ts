import { IMedicionModelInterface } from '../../interfaces/useCaseDTO/Medicion.interfaces';

export class MedicionModel implements IMedicionModelInterface {
  fecha: Date;
  valor: string;
  dispositivoID: string;

  constructor(fecha: Date, valor: string, dispositivoID: string) {
    this.fecha = fecha;
    this.valor = valor;
    this.dispositivoID = dispositivoID;
  }

  toJson(): string {
    const obj = {
      fecha: this.fecha,
      valor: this.valor,
      dispositivoID: this.dispositivoID,
    };

    return JSON.stringify(obj);
  }
}
