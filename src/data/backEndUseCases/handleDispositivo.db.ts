import { DispositivoModel } from '../../domain/models/Dispositivo.model';
import DispositivoService from '../../domain/services/dispositivo.service';
import {
  IDispositivoModelInterface,
  GetOneDispositivoInterface,
  GetAllDispositivoInterface,
} from '../../interfaces/useCaseDTO/Dispositivo.interfaces';

export class HandleDispositivoUseCaseDB implements GetOneDispositivoInterface, GetAllDispositivoInterface {
  dispositivoService: any;

  constructor() {
    this.dispositivoService = DispositivoService;
  }

  async findOne(ElectrovalvulaID: string): Promise<IDispositivoModelInterface> {
    const dispositivoDB: any = await this.dispositivoService.getById(ElectrovalvulaID);

    return new Promise((resolve) => resolve(dispositivoDB));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findAll(props: Record<string, unknown>): Promise<IDispositivoModelInterface> {
    const dispositivolaDB: any = await this.dispositivoService.get(props);

    return new Promise((resolve) => resolve(dispositivolaDB));
  }

  async add(dispositivo: DispositivoModel): Promise<IDispositivoModelInterface> {
    const dispositivoDB: any = await this.dispositivoService.add(dispositivo);

    return new Promise((resolve) => resolve(dispositivoDB));
  }

  async patch(id: string, dispositivo: DispositivoModel): Promise<IDispositivoModelInterface> {
    const dispositivoDB: any = await this.dispositivoService.patch(id, dispositivo);

    return new Promise((resolve) => resolve(dispositivoDB));
  }

  async delete(id: string): Promise<IDispositivoModelInterface> {
    const dispositivoDB: any = await this.dispositivoService.delete(id);

    return new Promise((resolve) => resolve(dispositivoDB));
  }
}
