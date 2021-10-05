import React from 'react';
import classNames from 'classnames';

import './Avatar.scss';

interface AvatarProps {
    image: string;
    size?: string;
    online?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ image, size, online }: AvatarProps) => {
    return (
        <div className={classNames('avatar', {
            'avatar_large': size === 'large',
            'avatar_small': size === 'small',
            'avatar_online': online,
        })}>
            <img src={image} alt="Avatar" />
        </div>
    );
};

export default Avatar;
