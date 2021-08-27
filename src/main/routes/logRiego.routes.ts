import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';
// import { authorize } from '../../main/validations/authorize.validation';
import { AdapterRoute } from '../adapters/express.adapter';

import { makeGetAllLogRiegosFactorie, makeGetOneLogRiegoFactorie } from '../factories/logRiego.factorie';

const router: Router = Router();

router.get('/', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetAllLogRiegosFactorie()));
router.get('/:id', AdapterRoute(makeGetOneLogRiegoFactorie()));
// router.post('/', AdapterRoute(makeRegisterLogRiegoFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateLogRiegoFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteLogRiegoFactorie()));

export { router as logRiegoRoutes };
