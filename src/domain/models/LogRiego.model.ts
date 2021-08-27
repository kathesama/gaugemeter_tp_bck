import { ILogRiegoModelInterface } from '../../interfaces/useCaseDTO/LogRiego.interfaces';

export class LogRiegoModel implements ILogRiegoModelInterface {
  apertura: number;
  fecha: Date;
  electrovalvulaID: string;

  constructor(apertura: number, fecha: Date, electrovalvulaID: string) {
    this.apertura = apertura;
    this.fecha = fecha;
    this.electrovalvulaID = electrovalvulaID;
  }

  toJson(): string {
    const obj = {
      apertura: this.apertura,
      fecha: this.fecha,
      electrovalvulaID: this.electrovalvulaID,
    };

    return JSON.stringify(obj);
  }
}
