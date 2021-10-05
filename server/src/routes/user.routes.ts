import { Router } from 'express';
import { userCtrl } from '../controllers';
import { registerValidation } from '../utils/validators';

const router = Router();

router.post('/user/signup', registerValidation, userCtrl.create);

export default router;

