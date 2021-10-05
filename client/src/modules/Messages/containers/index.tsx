import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

import { Messages as BaseMessages } from '../components';
import { RootState } from 'utils/store';
import messagesActions from '../actions';

interface MessagesProps {
    items: Array<any>;
    currentDialog: any;
    fetchMessages: Function;
    isLoading: boolean
}

const Messages: React.FC<MessagesProps> = ({ items, currentDialog, fetchMessages, isLoading }: MessagesProps) => {
    useEffect(() => {
        if (currentDialog) {
            fetchMessages(currentDialog._id)
        }
    }, [currentDialog, fetchMessages]);

    return (
        <BaseMessages
            items={items}
            isLoading={isLoading}
        />
    );
};

export default connect(
    ({ dialogs, messages }: RootState) => ({
        currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
        items: messages.items,
        isLoading: messages.isLoading,
    }),
    messagesActions
)(Messages);