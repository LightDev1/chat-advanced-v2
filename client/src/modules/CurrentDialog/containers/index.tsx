import React from 'react';
import { useSelector } from 'react-redux';
import { find } from 'lodash';

import { CurrentDialog as BaseCurrentDialog } from '../components';
import { selectCurrentDialogId, selectDialogsItems } from 'utils/selectors';

const CurrentDialog: React.FC = () => {
    const dialogs = useSelector(selectDialogsItems);
    const currentDialogId = useSelector(selectCurrentDialogId);
    const currentDialog = find(dialogs, { _id: currentDialogId });

    return (
        <BaseCurrentDialog
            currentDialog={currentDialog}
        />
    );
};

export default CurrentDialog;
