import { check } from 'express-validator';

export default [
    check('email', 'Неверный E-mail или пароль').isEmail(),
    check('fullname', 'Имя пользователя должно состоять минимум из 4 символов').isLength({ min: 4 }),
    check('password', 'Неверный E-mail или пароль').isLength({ min: 6 }),
];