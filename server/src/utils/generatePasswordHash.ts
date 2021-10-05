import bcrypt from 'bcrypt';

export default (password: string = '') => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err: Error | undefined, hash: string) => {
            if (err) {
                reject(err);
            }

            resolve(hash);
        });
    });
};