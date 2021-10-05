import { combineReducers } from 'redux';

import messagesReducer from 'modules/Messages/reducer';
import dialogsReducer from 'modules/Sidebar/reducer';

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    messages: messagesReducer,
});

export default rootReducer;