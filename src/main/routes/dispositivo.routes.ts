import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';

import { AdapterRoute } from '../adapters/express.adapter';
import * as dispositivoValidation from '../validations/dispositivoRequestParams.validation';

import {
  makeGetAllDispositivoFactorie,
  makeGetOneDispositivoFactorie,
  makeGetAllLogRiegosByDeviceFactorie,
  makeGetMedicionesByDeviceFactorie,
} from '../factories/dispositivo.factorie';
import validateRequestParams from '../validations/validateRequestParams.validation';

const router: Router = Router();

// get all
router.get('/', AdapterRoute(makeGetAllDispositivoFactorie()));
// router.get('/', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetAllDispositivoFactorie()));
// get device by id
router.get('/:dispositivoId', [validateRequestParams(dispositivoValidation.getDispositivo)], AdapterRoute(makeGetOneDispositivoFactorie()));
// get all logs by device
router.get('/:dispositivoId/logs', AdapterRoute(makeGetAllLogRiegosByDeviceFactorie()));
router.get('/:dispositivoId/mediciones/:type', AdapterRoute(makeGetMedicionesByDeviceFactorie()));
// router.get('/:id', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetOneDispositivoFactorie()));
// router.post('/', AdapterRoute(makeRegisterDispositivoFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateDispositivoFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteDispositivoFactorie()));

export { router as dispositivoRoutes };
