import { HandleMedicionUseCaseDB } from '../../data/backEndUseCases/handleMediciones.db';
// import { MakeResetPasswordFactorie, RegisterMedicionFactorie } from '../../controllers/medicion/PostMedicion.controller';

import { GetAllMediciones, GetOneMedicion } from '../../controllers/medicion/GetMedicion.controller';
import { RegisterMedicionFactorie } from '../../controllers/medicion/PostMedicion.controller';
// import { PatchMedicionFactorie, RunResetPasswordFactorie } from '../../controllers/medicion/PatchMedicion.controller';
// import { DeleteMedicionFactorie } from '../../controllers/medicion/DeleteMedicion.controller';
// import { BcryptAdapter } from '../adapters/bcrypt.adapter';
// import { HandleTokenUseCaseDB } from '../../data/backEndUseCases/handleTokens.db';

// inyeccion de dependencias
export const makeGetAllMedicionesFactorie = (): GetAllMediciones => {
  const handleMedicionDB = new HandleMedicionUseCaseDB();

  const handledMedicionRegister = new GetAllMediciones(handleMedicionDB);

  return handledMedicionRegister;
};

export const makeGetOneMedicionFactorie = (): GetOneMedicion => {
  const handleMedicionDB = new HandleMedicionUseCaseDB();

  const handledMedicionRegister = new GetOneMedicion(handleMedicionDB);

  return handledMedicionRegister;
};

export const makeRegisterMedicionFactorie = (): RegisterMedicionFactorie => {
  const handleMedicionDB = new HandleMedicionUseCaseDB();

  const handledMedicionRegister = new RegisterMedicionFactorie(handleMedicionDB);

  return handledMedicionRegister;
};

// export const makeUpdateMedicionFactorie = (): PatchMedicionFactorie => {
//   const handleMedicionDB = new HandleMedicionUseCaseDB();

//   const handledMedicionRegister = new PatchMedicionFactorie(handleMedicionDB);

//   return handledMedicionRegister;
// };

// export const makeDeleteMedicionFactorie = (): DeleteMedicionFactorie => {
//   const handleMedicionDB = new HandleMedicionUseCaseDB();

//   const handledMedicionRegister = new DeleteMedicionFactorie(handleMedicionDB);

//   return handledMedicionRegister;
// };
