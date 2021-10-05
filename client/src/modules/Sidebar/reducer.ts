import produce, { Draft } from 'immer';
import { AnyAction, Reducer } from 'redux';
import { DialogActionsType } from './actions';

export interface DialogsState {
    items: [];
    currentDialogId: string;
    isLoading: boolean;
}

const initialState: DialogsState = {
    items: [],
    currentDialogId: window.location.pathname.split('dialogs/')[1],
    isLoading: false,
};

const dialogsReducer: Reducer<DialogsState, AnyAction> = produce((draft: Draft<DialogsState>, action: AnyAction) => {
    switch (action.type) {
        case DialogActionsType.SET_DIALOGS:
            draft.items = action.payload;
            break;
        case DialogActionsType.SET_CURRENT_DIALOG_ID:
            draft.currentDialogId = action.payload;
            break;
    }
}, initialState);

export default dialogsReducer;