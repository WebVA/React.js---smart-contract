import type { RootState } from "../../store";

// Other code such as selectors can use the imported `RootState` type
export const selectPermissionList = (state: RootState) => state.permissions.permissionList;
export const selectPermissionListRowCount = (state: RootState) => state.permissions.rowsCount;
export const selectPermissionProcessStatus = (state: RootState) => state.permissions.status;
