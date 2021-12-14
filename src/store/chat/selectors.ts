import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const publicChat = (state: RootState) =>
  state.chat.publicChatHistoryLists;

export const supportChat = (state: RootState) =>
  state.chat.supportChatHistoryLists;
