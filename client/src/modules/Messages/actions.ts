import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { messagesApi } from 'utils/api';

export enum MessagesActionsType {
    SET_MESSAGES = 'MESSAGES/SET_ITEMS',
    FETCH_MESSAGES = 'MESSAGES/FETCH_ITEMS',
    SET_IS_LOADING = 'MESSAGES/SET_IS_LOADING',
}

export interface SetMessagesActionInterface extends Action<MessagesActionsType> {
    type: MessagesActionsType.SET_MESSAGES;
    payload: object[];
}

export interface SetIsLoadingInterface extends Action<MessagesActionsType> {
    type: MessagesActionsType.SET_IS_LOADING;
    payload: boolean;
}

const actions = {
    setMessages: (payload: object[]): SetMessagesActionInterface => ({
        type: MessagesActionsType.SET_MESSAGES,
        payload,
    }),
    setIsLoading: (payload: boolean): SetIsLoadingInterface => ({
        type: MessagesActionsType.SET_IS_LOADING,
        payload,
    }),
    fetchMessages: (dialogId: string) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(actions.setIsLoading(true));
        messagesApi.getAllByDialogId(dialogId).then(({ data }) => {
            dispatch(actions.setMessages(data));
            dispatch(actions.setIsLoading(false));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
        });
    },
};

export type MessagesAction = SetMessagesActionInterface;

export default actions;