import express, { } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { User } from '../models';
import { UserModelInterface } from '../models/User';
import { createJWTToken } from '../utils';

const isValidObjectId = mongoose.Types.ObjectId.isValid;

class UserController {
    async index(req: express.Request, res: express.Response) {
        try {
            const users: UserModelInterface[] = await User.find({}).exec();

            res.json({
                stasus: 'success',
                users,
            });
        } catch (err) {
            res.json({
                stasus: 'error',
                error: err,
            });
        }
    }

    async show(req: express.Request, res: express.Response) {
        try {
            const id: string = req.params.id;

            if (isValidObjectId(id)) {
                res.status(400).json({
                    status: 'error',
                    message: 'Некорректный ID пользователя',
                });
            }

            const user: UserModelInterface | null = await User.findById(id);

            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден'
                });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json({
                status: 'error',
                error: err,
            });
        }
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
            });
        }
    }

    async login(req: express.Request, res: express.Response) {
        try {
            const postData = {
                email: req.body.email,
                password: req.body.password,
            };

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() })
            }

            const user = await User.findOne({ email: postData.email });

            if (!user) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Неверный e-mail или пароль',
                });
            }

            if (bcrypt.compareSync(postData.password, user.password)) {
                const token = createJWTToken(user);

                res.json({
                    status: 'success',
                    token,
                });
            } else {
                res.json({
                    status: 'error',
                    message: 'Неверный e-mail или пароль',
                });
            }

        } catch (err: any) {
            res.status(500).json({
                status: 'error',
                message: 'Произошла ошибка, попробуйте позднее',
            });
        }
    }
}

const userCtrl = new UserController();

export default userCtrl;