import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { DialogsState } from 'modules/Sidebar/reducer';
import { MessagesState } from 'modules/Messages/reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export interface RootState {
    dialogs: DialogsState;
    messages: MessagesState;
}

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;