import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { dialogsApi } from 'utils/api';

export enum DialogActionsType {
    SET_DIALOGS = 'DIALOGS/SET_ITEMS',
    FETCH_DIALOGS = 'DIALOGS/FETCH_ITEMS',
    SET_CURRENT_DIALOG_ID = 'DIALOGS/SET_CURRENT_DIALOG_ID',
}

export interface SetDialogsActionInterface extends Action<DialogActionsType> {
    type: DialogActionsType.SET_DIALOGS;
    payload: object[];
}

export interface SetCurrentDialogIdActionInterface extends Action<DialogActionsType> {
    type: DialogActionsType.SET_CURRENT_DIALOG_ID;
    payload: string;
}

export interface FetchDialogsActionInterface extends Action<DialogActionsType> {
    type: DialogActionsType.FETCH_DIALOGS;
    payload: object[];
}

const actions = {
    setDialogs: (payload: object[]): SetDialogsActionInterface => ({
        type: DialogActionsType.SET_DIALOGS,
        payload,
    }),
    setCurrentDialogId: (payload: string): SetCurrentDialogIdActionInterface => ({
        type: DialogActionsType.SET_CURRENT_DIALOG_ID,
        payload,
    }),
    fetchDialogs: () => (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    },
};

export type DialogsAction = SetDialogsActionInterface | SetCurrentDialogIdActionInterface;

export default actions;