import { HandleDispositivoUseCaseDB } from '../../data/backEndUseCases/handleDispositivo.db';
// import { MakeResetPasswordFactorie, RegisterDispositivoFactorie } from '../../controllers/dispositivo/PostDispositivo.controller';

import { GetAllDispositivos, GetOneDispositivo } from '../../controllers/dispositivo/GetDispositivo.controller';
// import { PatchDispositivoFactorie, RunResetPasswordFactorie } from '../../controllers/dispositivo/PatchDispositivo.controller';
// import { DeleteDispositivoFactorie } from '../../controllers/dispositivo/DeleteDispositivo.controller';
// import { BcryptAdapter } from '../adapters/bcrypt.adapter';
// import { HandleTokenUseCaseDB } from '../../data/backEndUseCases/handleTokens.db';

// inyeccion de dependencias
export const makeGetAllDispositivoFactorie = (): GetAllDispositivos => {
  const handleDispositivoDB = new HandleDispositivoUseCaseDB();

  const handledDispositivoRegister = new GetAllDispositivos(handleDispositivoDB);

  return handledDispositivoRegister;
};

export const makeGetOneDispositivoFactorie = (): GetOneDispositivo => {
  const handleDispositivoDB = new HandleDispositivoUseCaseDB();

  const handledDispositivoRegister = new GetOneDispositivo(handleDispositivoDB);

  return handledDispositivoRegister;
};

// export const makeRegisterDispositivoFactorie = (): RegisterDispositivoFactorie => {
//   const handleDispositivoDB = new HandleDispositivoUseCaseDB();
//   const dcryptAdapter = new BcryptAdapter();
//   const handleTokenDB = new HandleTokenUseCaseDB();

//   const handledDispositivoRegister = new RegisterDispositivoFactorie(handleDispositivoDB, dcryptAdapter, handleTokenDB);

//   return handledDispositivoRegister;
// };

// export const makeUpdateDispositivoFactorie = (): PatchDispositivoFactorie => {
//   const handleDispositivoDB = new HandleDispositivoUseCaseDB();

//   const handledDispositivoRegister = new PatchDispositivoFactorie(handleDispositivoDB);

//   return handledDispositivoRegister;
// };

// export const makeDeleteDispositivoFactorie = (): DeleteDispositivoFactorie => {
//   const handleDispositivoDB = new HandleDispositivoUseCaseDB();

//   const handledDispositivoRegister = new DeleteDispositivoFactorie(handleDispositivoDB);

//   return handledDispositivoRegister;
// };
