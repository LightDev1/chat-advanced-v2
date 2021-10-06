import { Router } from 'express';
import { userCtrl } from '../controllers';
import { loginValidation, registerValidation } from '../utils/validators';

const router = Router();

router.post('/user/signup', registerValidation, userCtrl.create);
router.post('/user/signin', loginValidation, userCtrl.login);
router.get('/user/:id', userCtrl.show);

export default router;

