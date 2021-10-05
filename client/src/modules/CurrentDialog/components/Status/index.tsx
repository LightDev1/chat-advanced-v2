import React from 'react';
import classNames from 'classnames';

import { User } from 'modules/Sidebar/components/DialogItem';

import './Status.scss';

interface StatusProps {
    online: boolean;
    user: User;
}

const Status: React.FC<StatusProps> = ({ online, user }: StatusProps) => {
    return (
        <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-fullname">{user.fullname}</b>
                <div className="chat__dialog-header-status">
                    <span className={classNames('status', {
                        'status_online': online,
                    })}>
                        {online ? 'онлайн' : 'не в сети'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Status;
