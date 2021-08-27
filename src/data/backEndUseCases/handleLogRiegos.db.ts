import { LogRiegoModel } from '../../domain/models/LogRiego.model';
import LogRiegoService from '../../domain/services/logRiego.service';
import { ILogRiegoModelInterface, GetOneLogRiegoInterface, GetAllLogRiegoInterface } from '../../interfaces/useCaseDTO/LogRiego.interfaces';

export class HandleLogRiegoUseCaseDB implements GetOneLogRiegoInterface, GetAllLogRiegoInterface {
  logRiegoService: any;

  constructor() {
    this.logRiegoService = LogRiegoService;
  }

  async findOne(ElectrovalvulaID: string): Promise<ILogRiegoModelInterface> {
    const dispositivoDB: any = await this.logRiegoService.getById(ElectrovalvulaID);

    return new Promise((resolve) => resolve(dispositivoDB));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findAll(props: Record<string, unknown>): Promise<ILogRiegoModelInterface> {
    const dispositivolaDB: any = await this.logRiegoService.get(props);

    return new Promise((resolve) => resolve(dispositivolaDB));
  }

  async add(logRiego: LogRiegoModel): Promise<ILogRiegoModelInterface> {
    const logRiegoDB: any = await this.logRiegoService.add(logRiego);

    return new Promise((resolve) => resolve(logRiegoDB));
  }

  async patch(id: string, logRiego: LogRiegoModel): Promise<ILogRiegoModelInterface> {
    const logRiegoDB: any = await this.logRiegoService.patch(id, logRiego);

    return new Promise((resolve) => resolve(logRiegoDB));
  }

  async delete(id: string): Promise<LogRiegoModel> {
    const logRiegoDB: any = await this.logRiegoService.delete(id);

    return new Promise((resolve) => resolve(logRiegoDB));
  }
}
