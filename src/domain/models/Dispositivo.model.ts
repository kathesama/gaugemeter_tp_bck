import { IDispositivoModelInterface } from '../../interfaces/useCaseDTO/Dispositivo.interfaces';

export class DispositivoModel implements IDispositivoModelInterface {
  nombre: string;
  ubicacion: string;
  electrovalvulaID: string;

  constructor(nombre: string, ubicacion: string, electrovalvulaID: string) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.electrovalvulaID = electrovalvulaID;
  }

  toJson(): string {
    const obj = {
      nombre: this.nombre,
      ubicacion: this.ubicacion,
      electrovalvulaID: this.electrovalvulaID,
    };

    return JSON.stringify(obj);
  }
}
