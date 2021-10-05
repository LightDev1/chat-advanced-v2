import express, { } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../models';

class UserController {
    show(req: express.Request, res: express.Response) {

    }

    async create(req: express.Request, res: express.Response) {
        try {
            const postData = {
                email: req.body.email,
                fullname: req.body.fullname,
                password: req.body.password,
            };

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() })
            }

            const user = new User(postData);

            await user.save();

            res.status(201).json(user);

        } catch (err: any) {
            res.status(500).json({
                status: 'error',
                error: err,
            })
        }
    }
}

const userCtrl = new UserController();

export default userCtrl;