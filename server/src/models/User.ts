import { Document, model, Schema } from 'mongoose';
import validator from 'validator';
import { differenceInMinutes } from 'date-fns';
import { generatePasswordHash } from '../utils';

interface UserModelInterface {
    _id?: string;
    email: string,
    avatar?: string,
    notifications: string[];
    fullname: string,
    password: string,
    confirm_hash: string,
    confirmed?: boolean,
    last_seen?: Date,
}

const UserSchema = new Schema<UserModelInterface>({
    email: {
        type: String,
        validate: [validator.isEmail, 'Invalid email'],
        required: [true, 'Email address is required'],
        unique: true,
    },
    avatar: {
        type: String,
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    confirm_hash: {
        type: String,
    },
    last_seen: {
        type: Date,
        default: new Date(),
    }
}, {
    timestamps: true,
});

UserSchema.virtual('isOnline').get(function (this: any) {
    return differenceInMinutes(new Date(), this.last_seen) < 5;
});

UserSchema.set('toJSON', {
    virtuals: true,
});

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    generatePasswordHash(user.password)
        .then(hash => {
            user.password = String(hash);
            generatePasswordHash(String(Date())).then(hash => {
                user.confirm_hash = String(hash);
                next();
            });
        })
        .catch((err: any) => {
            next(err);
        });
});

const User = model<UserModelInterface>('User', UserSchema);

export default User;