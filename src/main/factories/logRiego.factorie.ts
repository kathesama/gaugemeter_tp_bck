import { HandleLogRiegoUseCaseDB } from '../../data/backEndUseCases/handleLogRiegos.db';
// import { MakeResetPasswordFactorie, RegisterLogRiegoFactorie } from '../../controllers/logRiego/PostLogRiego.controller';

import { GetAllLogRiegos, GetOneLogRiego } from '../../controllers/logRiego/GetLogRiego.controller';
// import { PatchLogRiegoFactorie, RunResetPasswordFactorie } from '../../controllers/logRiego/PatchLogRiego.controller';
// import { DeleteLogRiegoFactorie } from '../../controllers/logRiego/DeleteLogRiego.controller';
// import { BcryptAdapter } from '../adapters/bcrypt.adapter';
// import { HandleTokenUseCaseDB } from '../../data/backEndUseCases/handleTokens.db';

// inyeccion de dependencias
export const makeGetAllLogRiegosFactorie = (): GetAllLogRiegos => {
  const handleLogRiegoDB = new HandleLogRiegoUseCaseDB();

  const handledLogRiegoRegister = new GetAllLogRiegos(handleLogRiegoDB);

  return handledLogRiegoRegister;
};

export const makeGetOneLogRiegoFactorie = (): GetOneLogRiego => {
  const handleLogRiegoDB = new HandleLogRiegoUseCaseDB();

  const handledLogRiegoRegister = new GetOneLogRiego(handleLogRiegoDB);

  return handledLogRiegoRegister;
};

// export const makeRegisterLogRiegoFactorie = (): RegisterLogRiegoFactorie => {
//   const handleLogRiegoDB = new HandleLogRiegoUseCaseDB();
//   const dcryptAdapter = new BcryptAdapter();
//   const handleTokenDB = new HandleTokenUseCaseDB();

//   const handledLogRiegoRegister = new RegisterLogRiegoFactorie(handleLogRiegoDB, dcryptAdapter, handleTokenDB);

//   return handledLogRiegoRegister;
// };

// export const makeUpdateLogRiegoFactorie = (): PatchLogRiegoFactorie => {
//   const handleLogRiegoDB = new HandleLogRiegoUseCaseDB();

//   const handledLogRiegoRegister = new PatchLogRiegoFactorie(handleLogRiegoDB);

//   return handledLogRiegoRegister;
// };

// export const makeDeleteLogRiegoFactorie = (): DeleteLogRiegoFactorie => {
//   const handleLogRiegoDB = new HandleLogRiegoUseCaseDB();

//   const handledLogRiegoRegister = new DeleteLogRiegoFactorie(handleLogRiegoDB);

//   return handledLogRiegoRegister;
// };
