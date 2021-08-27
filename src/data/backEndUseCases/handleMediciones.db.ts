import { MedicionModel } from '../../domain/models/Medicion.model';
import MedicionService from '../../domain/services/medicion.service';
import { IMedicionModelInterface, GetOneMedicionInterface, GetAllMedicionesInterface } from '../../interfaces/useCaseDTO/Medicion.interfaces';

export class HandleMedicionUseCaseDB implements GetOneMedicionInterface, GetAllMedicionesInterface {
  medicionService: any;

  constructor() {
    this.medicionService = MedicionService;
  }

  async findOne(ElectrovalvulaID: string): Promise<IMedicionModelInterface> {
    const dispositivoDB: any = await this.medicionService.getById(ElectrovalvulaID);

    return new Promise((resolve) => resolve(dispositivoDB));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findAll(props: Record<string, unknown>): Promise<IMedicionModelInterface> {
    const dispositivolaDB: any = await this.medicionService.get(props);

    return new Promise((resolve) => resolve(dispositivolaDB));
  }

  async add(medicion: MedicionModel): Promise<IMedicionModelInterface> {
    const medicionDB: any = await this.medicionService.add(medicion);

    return new Promise((resolve) => resolve(medicionDB));
  }

  async patch(id: string, medicion: MedicionModel): Promise<IMedicionModelInterface> {
    const medicionDB: any = await this.medicionService.patch(id, medicion);

    return new Promise((resolve) => resolve(medicionDB));
  }

  async delete(id: string): Promise<IMedicionModelInterface> {
    const medicionDB: any = await this.medicionService.delete(id);

    return new Promise((resolve) => resolve(medicionDB));
  }
}
