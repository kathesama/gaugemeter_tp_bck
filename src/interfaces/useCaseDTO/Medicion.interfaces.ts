/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MedicionModel } from '../../domain/models/Medicion.model';

// aca se crean las interfaces para luego ser implementadas en el useCase de DB
export interface IMedicionModelInterface {
  fecha: Date;
  valor: string;
  dispositivoID: string;
}

export interface GetOneMedicionInterface {
  // eslint-disable-next-line no-unused-vars
  findOne: (MedicionID: string) => Promise<IMedicionModelInterface>;
}

export interface GetAllMedicionesInterface {
  // eslint-disable-next-line no-unused-vars
  findAll: (props: Record<string, unknown>) => Promise<IMedicionModelInterface>;
}

export interface GetAllMedicionesByDeviceInterface {
  // eslint-disable-next-line no-unused-vars
  findAllByDevice: (dispositivoId: string, props: Record<string, unknown>) => Promise<IMedicionModelInterface[]>;
}

// export interface GetOneMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOne: (Medicion: any) => Promise<IMedicionModelInterface>;
// }

export interface addMedicionInterface {
  // eslint-disable-next-line no-unused-vars
  add: (Medicion: MedicionModel) => Promise<IMedicionModelInterface>;
}

// export interface DeleteMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   deleteMany: (query: any) => Promise<IMedicionModelInterface>;
// }

// export interface CountDocumentMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   countDocuments: (query: any) => Promise<IMedicionModelInterface>;
// }

// export interface findOneAndUpdateMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   findOneAndUpdate: (query: any, update: any) => Promise<IMedicionModelInterface>;
// }

// export interface handleMedicionsInterface {
//   // eslint-disable-next-line no-unused-vars
//   handleMedicions: (user: any, fingerprint: string, option: string, deletePreviousMedicions: boolean) => Promise<IMedicionModelInterface>;
// }

// export interface handleVerifyEmailMedicionsInterface {
//   // eslint-disable-next-line no-unused-vars
//   generateMailedMedicion: (user: any, fingerprint: string, type: string) => Promise<string>;
// }

// export interface handleVerifyMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   verifyMedicion: (Medicion: string, type: string, fingerprint: string) => Promise<any>;
// }

// export interface handleBlacklistMedicionInterface {
//   // eslint-disable-next-line no-unused-vars
//   blacklistMedicion: (query: any) => Promise<any>;
// }
