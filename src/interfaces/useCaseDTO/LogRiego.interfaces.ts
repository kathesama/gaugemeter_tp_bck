/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { LogRiegoModel } from '../../domain/models/LogRiego.model';

// aca se crean las interfaces para luego ser implementadas en el useCase de DB
export interface ILogRiegoModelInterface {
  apertura: number;
  fecha: Date;
  electrovalvulaID: string;
}

export interface GetOneLogRiegoInterface {
  // eslint-disable-next-line no-unused-vars
  findOne: (LogRiegoID: string) => Promise<ILogRiegoModelInterface>;
}

export interface GetAllLogRiegoInterface {
  // eslint-disable-next-line no-unused-vars
  findAll: (props: Record<string, unknown>) => Promise<ILogRiegoModelInterface>;
}

// export interface GetOneLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOne: (LogRiego: any) => Promise<ILogRiegoModelInterface>;
// }

// export interface createLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   create: (LogRiego: LogRiegoModel) => Promise<ILogRiegoModelInterface>;
// }

// export interface DeleteLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   deleteMany: (query: any) => Promise<ILogRiegoModelInterface>;
// }

// export interface CountDocumentLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   countDocuments: (query: any) => Promise<ILogRiegoModelInterface>;
// }

// export interface findOneAndUpdateLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOneAndUpdate: (query: any, update: any) => Promise<ILogRiegoModelInterface>;
// }

// export interface handleLogRiegosInterface {
//   // eslint-disable-next-line no-unused-vars
//   handleLogRiegos: (user: any, fingerprint: string, option: string, deletePreviousLogRiegos: boolean) => Promise<ILogRiegoModelInterface>;
// }

// export interface handleVerifyEmailLogRiegosInterface {
//   // eslint-disable-next-line no-unused-vars
//   generateMailedLogRiego: (user: any, fingerprint: string, type: string) => Promise<string>;
// }

// export interface handleVerifyLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   verifyLogRiego: (LogRiego: string, type: string, fingerprint: string) => Promise<any>;
// }

// export interface handleBlacklistLogRiegoInterface {
//   // eslint-disable-next-line no-unused-vars
//   blacklistLogRiego: (query: any) => Promise<any>;
// }
