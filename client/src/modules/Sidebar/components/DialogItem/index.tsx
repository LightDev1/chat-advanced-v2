import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Avatar } from 'components';
import { getMessageTime } from 'utils/helpers';

import './DialogItem.scss';

export interface User {
    _id: string;
    fullname: string;
    avatar: string;
    isOnline: boolean;
}

interface DialogItemProps {
    _id: string;
    online: boolean;
    text: string;
    user: User;
    createdAt: string;
    currentDialogId: string | null;
}

const DialogItem: React.FC<DialogItemProps> = ({ _id, online, text, user, createdAt, currentDialogId }: DialogItemProps) => {
    return (
        <Link to={`/dialogs/${_id}`}>
            <div className={classNames('dialogs__item', {
                'dialogs__item_selected-item': currentDialogId === _id,
            })}>
                <div className="dialogs__item_inner">
                    <Avatar
                        size="large"
                        image={user.avatar}
                        online={online}
                    />
                    <div className="dialogs__item_inner_info">
                        <b>{user.fullname}</b>
                        <span>{text}</span>
                    </div>
                    <div className="dialogs__item_inner__date">
                        <h3>{getMessageTime(createdAt)}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DialogItem;
