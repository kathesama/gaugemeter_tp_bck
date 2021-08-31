import { ElectrovalvulaModel } from '../../domain/models/Electrovalvula.model';
import ElectrovalvulaService from '../../domain/services/electrovalvula.service';
import LogRiego from '../../domain/services/logRiego.service';
import {
  IElectrovalvulaModelInterface,
  GetAllElectrovalvulaInterface,
  GetOneElectrovalvulaInterface,
  // GetLastLogByElectovalvulaInterface,
} from '../../interfaces/useCaseDTO/Electrovalvula.interfaces';

export class HandleElectrovalvulaUseCaseDB implements GetOneElectrovalvulaInterface, GetAllElectrovalvulaInterface {
  electrovalvulaService: any;
  logRiego: any;

  constructor() {
    this.electrovalvulaService = ElectrovalvulaService;
    this.logRiego = LogRiego;
  }

  async findOne(ElectrovalvulaID: string): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.electrovalvulaService.getById(ElectrovalvulaID);

    return new Promise((resolve) => resolve(electrovalvulaDB));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findAll(props: Record<string, unknown>): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.electrovalvulaService.get(props);

    return new Promise((resolve) => resolve(electrovalvulaDB));
  }

  async findLogByElectovalvulaId(id: string): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.logRiego.getLastByElectovalvulaId(id);
    return new Promise((resolve) => resolve(electrovalvulaDB));
  }

  async add(electrovalvula: ElectrovalvulaModel): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.electrovalvulaService.add(electrovalvula);

    return new Promise((resolve) => resolve(electrovalvulaDB));
  }

  async patch(id: string, electrovalvula: ElectrovalvulaModel): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.electrovalvulaService.patch(id, electrovalvula);

    return new Promise((resolve) => resolve(electrovalvulaDB));
  }

  async delete(id: string): Promise<IElectrovalvulaModelInterface> {
    const electrovalvulaDB: any = await this.electrovalvulaService.delete(id);

    return new Promise((resolve) => resolve(electrovalvulaDB));
  }
}
