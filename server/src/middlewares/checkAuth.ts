import express from 'express';
import { verifyJWTToken } from '../utils';

export default (req: any, res: express.Response, next: express.NextFunction) => {
    try {
        if (req.path === '/user/signin' || req.path === '/user/signup') {
            return next();
        }

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Токен не передан',
            });
        }

        verifyJWTToken(token).then((user => {
            req.user = user?.data._doc;
            next();
        })).catch(() => {
            res.status(401).json({
                status: 'error',
                message: 'Неверный токен',
            });
        });

    } catch (err) {
        res.status(401).json({
            status: 'error',
            message: 'Неверный токен',
        });
    }
};