import { Router } from 'express';
import { authorize } from '../validations/authorize.validation';
import { tokenTypes } from '../../domain/enums/token.enum';
// import { authorize } from '../../main/validations/authorize.validation';
import { AdapterRoute } from '../adapters/express.adapter';

import {
  makeGetAllElectrovalvulaFactorie,
  makeGetOneElectrovalvulaFactorie,
  makeGetLastLogByElectovalvulaFactorie,
} from '../factories/electrovalvula.factorie';

const router: Router = Router();

router.get('/', AdapterRoute(makeGetAllElectrovalvulaFactorie()));
router.get('/:id', AdapterRoute(makeGetOneElectrovalvulaFactorie()));
router.get('/:id/logs', AdapterRoute(makeGetLastLogByElectovalvulaFactorie()));
// router.post('/', AdapterRoute(makeRegisterElectrovalvulaFactorie()));
// router.patch('/:id', AdapterRoute(makeUpdateElectrovalvulaFactorie()));
// router.delete('/:id', AdapterRoute(makeDeleteElectrovalvulaFactorie()));

export { router as electrovalvulaRoutes };
