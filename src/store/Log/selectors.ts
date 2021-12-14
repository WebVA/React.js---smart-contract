import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const userLog = (state: RootState) =>
  state.log.userLogHistoryLists;

export const totalCount = (state: RootState) =>
  state.log.totalCount;

export const success = (state: RootState) =>
  state.log.success;

export const error = (state: RootState) =>
  state.log.error;

// export const tradeLog = (state: RootState) =>
//   state.log.tradeLogHistoryLists;
