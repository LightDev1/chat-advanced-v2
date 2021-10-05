import produce, { Draft } from 'immer';
import { AnyAction, Reducer } from 'redux';
import { MessagesActionsType } from './actions';

export interface MessagesState {
    items: [];
    isLoading: boolean;
}

const initialState: MessagesState = {
    items: [],
    isLoading: false,
};

const messagesReducer: Reducer<MessagesState, AnyAction> = produce((draft: Draft<MessagesState>, action: AnyAction) => {
    switch (action.type) {
        case MessagesActionsType.SET_MESSAGES:
            draft.items = action.payload;
            break;
        case MessagesActionsType.SET_IS_LOADING:
            draft.isLoading = action.payload;
            break;
    }
}, initialState);

export default messagesReducer;