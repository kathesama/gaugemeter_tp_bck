import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';
// import { authorize } from '../../main/validations/authorize.validation';
import { AdapterRoute } from '../adapters/express.adapter';

import { makeGetAllDispositivoFactorie, makeGetOneDispositivoFactorie } from '../factories/dispositivo.factorie';

const router: Router = Router();

router.get('/', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetAllDispositivoFactorie()));
router.get('/:id', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetOneDispositivoFactorie()));
// router.post('/', AdapterRoute(makeRegisterDispositivoFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateDispositivoFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteDispositivoFactorie()));

export { router as dispositivoRoutes };
