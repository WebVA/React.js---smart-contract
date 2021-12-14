import type { RootState } from "../../store";

// Other code such as selectors can use the imported `RootState` type
export const selectAdminList = (state: RootState) => state.admins.adminList;
export const selectAdminListRowCount = (state: RootState) => state.admins.rowsCount;
export const selectAdminProcessStatus = (state: RootState) => state.admins.status;
