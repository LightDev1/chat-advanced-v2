import { RootState } from "utils/store";
import { MessagesState } from "./reducer";

export const selectMessages = (state: RootState): MessagesState => state.messages;

export const selectMessagesItems = (state: RootState) => selectMessages(state).items;