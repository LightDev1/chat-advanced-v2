import { check } from 'express-validator';

export default [
    check('email', 'Неверный e-mail или пароль').isEmail(),
    check('password', 'Неверный e-mail или пароль').isLength({ min: 6 }),
];