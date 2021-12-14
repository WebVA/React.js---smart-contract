import type { RootState } from "../../store";

// Other code such as selectors can use the imported `RootState` type
export const selectSignInLogList = (state: RootState) => state.signinlogs.signInLogList;
export const selectSignInLogListRowCount = (state: RootState) => state.signinlogs.rowsCount;
export const selectSignInLogProcessStatus = (state: RootState) => state.signinlogs.status;
