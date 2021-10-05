import { DialogsState } from "modules/Sidebar/reducer";
import { RootState } from "utils/store";

export const selectDialogs = (state: RootState): DialogsState => state.dialogs;

export const selectDialogsItems = (state: RootState) => selectDialogs(state).items;

export const selectCurrentDialogId = (state: RootState) => selectDialogs(state).currentDialogId;
