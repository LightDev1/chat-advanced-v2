import jwt from 'jsonwebtoken';
import { UserModelInterface } from '../models/User';

interface DecodedData {
    data: {
        _doc: UserModelInterface
    }
}

export default (token: string): Promise<DecodedData> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET || '', (err, decodedData) => {
            if (err || !decodedData) {
                return reject(err);
            }

            resolve(decodedData as DecodedData);
        });
    });
}