import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dialogs as BaseDialogs } from '../components';
import { selectCurrentDialogId, selectDialogsItems } from 'utils/selectors';
import actions from '../actions';
import { User } from '../components/DialogItem';

export interface Dialog {
    _id: string;
    text: string;
    createdAt: string;
    user: User;
}

const Dialogs = () => {
    const dialogs = useSelector(selectDialogsItems);
    const currentDialogId = useSelector(selectCurrentDialogId);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [filtered, setFiltered] = useState<Array<Dialog>>(dialogs);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        setFiltered(
            dialogs.filter((dialog: Dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLocaleLowerCase()) >= 0)
        );
        setSearchValue(value);
    };

    useEffect(() => {
        if (!dialogs.length) {
            dispatch(actions.fetchDialogs());
        } else {
            setFiltered(dialogs);
        }
    }, [dialogs, dispatch]);

    return (
        <BaseDialogs
            items={filtered}
            inputValue={searchValue}
            onChangInput={handleChangeInput}
            currentDialogId={currentDialogId}
        />
    );
};

export default Dialogs;
