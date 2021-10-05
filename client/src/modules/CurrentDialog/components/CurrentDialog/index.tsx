import React from 'react';
import { Empty } from 'antd';
import classNames from 'classnames';

import ChaInput from '../ChatInput';
import Messages from 'modules/Messages';
import Status from '../Status';

import './CurrentDialog.scss';
import { Dialog } from 'modules/Sidebar/containers/Dialogs';

interface CurrentDialogProps {
    currentDialog: Dialog;
}

const CurrentDialog: React.FC<CurrentDialogProps> = ({ currentDialog }: CurrentDialogProps) => {
    return (
        <div className={classNames('chat__current-dialog', {
            'chat__current-dialog_not-open': !currentDialog
        })}>
            {currentDialog ? (<>
                <Status online={currentDialog.user.isOnline} user={currentDialog.user} />
                <Messages />
                <ChaInput />
            </>
            ) : <Empty description="Выберите диалог" />
            }
        </div>
    );
};

export default CurrentDialog;
