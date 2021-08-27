/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { DispositivoModel } from '../../domain/models/Dispositivo.model';

// aca se crean las interfaces para luego ser implementadas en el useCase de DB
export interface IDispositivoModelInterface {
  nombre: string;
  ubicacion: string;
  electrovalvulaID: string;
}

export interface GetOneDispositivoInterface {
  // eslint-disable-next-line no-unused-vars
  findOne: (dispositivoID: string) => Promise<IDispositivoModelInterface>;
}

export interface GetAllDispositivoInterface {
  // eslint-disable-next-line no-unused-vars
  findAll: (props: Record<string, unknown>) => Promise<IDispositivoModelInterface>;
}

// export interface GetOneDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOne: (Dispositivo: any) => Promise<IDispositivoModelInterface>;
// }

// export interface createDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   create: (Dispositivo: DispositivoModel) => Promise<IDispositivoModelInterface>;
// }

// export interface DeleteDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   deleteMany: (query: any) => Promise<IDispositivoModelInterface>;
// }

// export interface CountDocumentDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   countDocuments: (query: any) => Promise<IDispositivoModelInterface>;
// }

// export interface findOneAndUpdateDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOneAndUpdate: (query: any, update: any) => Promise<IDispositivoModelInterface>;
// }

// export interface handleDispositivosInterface {
//   // eslint-disable-next-line no-unused-vars
//   handleDispositivos: (user: any, fingerprint: string, option: string, deletePreviousDispositivos: boolean) => Promise<IDispositivoModelInterface>;
// }

// export interface handleVerifyEmailDispositivosInterface {
//   // eslint-disable-next-line no-unused-vars
//   generateMailedDispositivo: (user: any, fingerprint: string, type: string) => Promise<string>;
// }

// export interface handleVerifyDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   verifyDispositivo: (Dispositivo: string, type: string, fingerprint: string) => Promise<any>;
// }

// export interface handleBlacklistDispositivoInterface {
//   // eslint-disable-next-line no-unused-vars
//   blacklistDispositivo: (query: any) => Promise<any>;
// }
