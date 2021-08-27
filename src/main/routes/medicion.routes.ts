import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';
// import { authorize } from '../../main/validations/authorize.validation';
import { AdapterRoute } from '../adapters/express.adapter';

import { makeGetAllMedicionesFactorie, makeGetOneMedicionFactorie } from '../factories/medicion.factorie';

const router: Router = Router();

router.get('/', [authorize(tokenTypes.ACCESS, 'ADMIN_ROLE', 'USER_ROLE')], AdapterRoute(makeGetAllMedicionesFactorie()));
router.get('/:id', AdapterRoute(makeGetOneMedicionFactorie()));
// router.post('/', AdapterRoute(makeRegisterMedicionFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateMedicionFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteMedicionFactorie()));

export { router as medicionRoutes };
