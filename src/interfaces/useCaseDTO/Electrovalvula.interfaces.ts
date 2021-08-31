/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { ElectrovalvulaModel } from '../../domain/models/Electrovalvula.model';

// aca se crean las interfaces para luego ser implementadas en el useCase de DB
export interface IElectrovalvulaModelInterface {
  nombre: string;
}

export interface GetOneElectrovalvulaInterface {
  // eslint-disable-next-line no-unused-vars
  findOne: (ElectrovalvulaID: string) => Promise<IElectrovalvulaModelInterface>;
}

export interface GetAllElectrovalvulaInterface {
  // eslint-disable-next-line no-unused-vars
  findAll: (props: Record<string, unknown>) => Promise<IElectrovalvulaModelInterface>;
}

// export interface GetLastLogByElectovalvulaInterface {
//   // eslint-disable-next-line no-unused-vars
//   findLogByElectovalvulaId: (ElectrovalvulaID: string) => Promise<IElectrovalvulaModelInterface>;
// }

// export interface createElectrovalvulaInterface {
//   // eslint-disable-next-line no-unused-vars
//   create: (Electrovalvula: ElectrovalvulaModel) => Promise<IElectrovalvulaModelInterface>;
// }

// export interface DeleteElectrovalvulaInterface {
//   // eslint-disable-next-line no-unused-vars
//   deleteMany: (query: any) => Promise<IElectrovalvulaModelInterface>;
// }

// export interface CountDocumentElectrovalvulaInterface {
//   // eslint-disable-next-line no-unused-vars
//   countDocuments: (query: any) => Promise<IElectrovalvulaModelInterface>;
// }

// export interface findOneAndUpdateElectrovalvulaInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOneAndUpdate: (query: any, update: any) => Promise<IElectrovalvulaModelInterface>;
// }

// export interface handleElectrovalvulasInterface {
//   // eslint-disable-next-line no-unused-vars
//   handleElectrovalvulas: (user: any, fingerprint: string, option: string, deletePreviousElectrovalvulas: boolean) => Promise<IElectrovalvulaModelInterface>;
// }
