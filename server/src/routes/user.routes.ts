import { Router } from 'express';
import { userCtrl } from '../controllers';
import { loginValidation, registerValidation } from '../utils/validators';

const router = Router();

router.get('/user/all', userCtrl.index);
router.get('/user/:id', userCtrl.show);
router.post('/user/signup', registerValidation, userCtrl.create);
router.post('/user/signin', loginValidation, userCtrl.login);

export default router;

