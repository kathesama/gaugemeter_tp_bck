import { HandleElectrovalvulaUseCaseDB } from '../../data/backEndUseCases/handleElectrovalvulas.db';
import { HandleLogRiegoUseCaseDB } from '../../data/backEndUseCases/handleLogRiegos.db';
// import { MakeResetPasswordFactorie, RegisterElectrovalvulaFactorie } from '../../controllers/electrovalvula/PostElectrovalvula.controller';

import {
  GetAllElectrovalvulas,
  GetOneElectrovalvula,
  GetLastLogByElectrovalvula,
} from '../../controllers/electrovalvula/GetElectrovalvula.controller';
// import { PatchElectrovalvulaFactorie, RunResetPasswordFactorie } from '../../controllers/electrovalvula/PatchElectrovalvula.controller';
// import { DeleteElectrovalvulaFactorie } from '../../controllers/electrovalvula/DeleteElectrovalvula.controller';
// import { BcryptAdapter } from '../adapters/bcrypt.adapter';
// import { HandleTokenUseCaseDB } from '../../data/backEndUseCases/handleTokens.db';

// inyeccion de dependencias
export const makeGetAllElectrovalvulaFactorie = (): GetAllElectrovalvulas => {
  const handleElectrovalvulaDB = new HandleElectrovalvulaUseCaseDB();

  const handledElectrovalvulaRegister = new GetAllElectrovalvulas(handleElectrovalvulaDB);

  return handledElectrovalvulaRegister;
};

export const makeGetOneElectrovalvulaFactorie = (): GetOneElectrovalvula => {
  const handleElectrovalvulaDB = new HandleElectrovalvulaUseCaseDB();

  const handledElectrovalvulaRegister = new GetOneElectrovalvula(handleElectrovalvulaDB);

  return handledElectrovalvulaRegister;
};

export const makeGetLastLogByElectovalvulaFactorie = (): GetLastLogByElectrovalvula => {
  const handleElectrovalvulaDB = new HandleLogRiegoUseCaseDB();

  const handledElectrovalvulaRegister = new GetLastLogByElectrovalvula(handleElectrovalvulaDB);

  return handledElectrovalvulaRegister;
};
// export const makeRegisterElectrovalvulaFactorie = (): RegisterElectrovalvulaFactorie => {
//   const handleElectrovalvulaDB = new HandleElectrovalvulaUseCaseDB();
//   const dcryptAdapter = new BcryptAdapter();
//   const handleTokenDB = new HandleTokenUseCaseDB();

//   const handledElectrovalvulaRegister = new RegisterElectrovalvulaFactorie(handleElectrovalvulaDB, dcryptAdapter, handleTokenDB);

//   return handledElectrovalvulaRegister;
// };

// export const makeUpdateElectrovalvulaFactorie = (): PatchElectrovalvulaFactorie => {
//   const handleElectrovalvulaDB = new HandleElectrovalvulaUseCaseDB();

//   const handledElectrovalvulaRegister = new PatchElectrovalvulaFactorie(handleElectrovalvulaDB);

//   return handledElectrovalvulaRegister;
// };

// export const makeDeleteElectrovalvulaFactorie = (): DeleteElectrovalvulaFactorie => {
//   const handleElectrovalvulaDB = new HandleElectrovalvulaUseCaseDB();

//   const handledElectrovalvulaRegister = new DeleteElectrovalvulaFactorie(handleElectrovalvulaDB);

//   return handledElectrovalvulaRegister;
// };
