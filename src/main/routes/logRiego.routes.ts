import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';
// import { authorize } from '../../main/validations/authorize.validation';
import { AdapterRoute } from '../adapters/express.adapter';

import { makeGetAllLogRiegosFactorie, makeGetOneLogRiegoFactorie, makeRegisterLogRiegoFactorie } from '../factories/logRiego.factorie';
import * as logRiegoValidation from '../validations/logRiegoRequestParams.validation';
import validateRequestParams from '../validations/validateRequestParams.validation';

const router: Router = Router();

// router.get('/', AdapterRoute(makeGetAllLogRiegosFactorie()));
// router.get('/', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetAllLogRiegosFactorie()));
// router.get('/:id', AdapterRoute(makeGetOneLogRiegoFactorie()));
router.get('/:dispositivoId', AdapterRoute(makeGetOneLogRiegoFactorie()));
// router.post('/', [validateRequestParams(logRiegoValidation.createLogRiego)], AdapterRoute(makeRegisterLogRiegoFactorie()));
router.post('/', AdapterRoute(makeRegisterLogRiegoFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateLogRiegoFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteLogRiegoFactorie()));

export { router as logRiegoRoutes };
