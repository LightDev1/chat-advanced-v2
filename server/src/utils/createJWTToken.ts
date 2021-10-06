import jwt from 'jsonwebtoken';
import { reduce } from 'lodash';
import { UserModelInterface } from '../models/User';

export default (user: UserModelInterface) => {
    const token = jwt.sign(
        {
            data: reduce(user, (result: any, value, key) => {
                if (key !== 'password') {
                    result[key] = value;
                }

                return result;
            }),
        },
        process.env.JWT_SECRET || '',
        { expiresIn: process.env.JWT_MAX_AGE }
    );

    return token;
};