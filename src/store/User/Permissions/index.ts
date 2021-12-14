import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPermission, getPermissionsFilter, updatePermission, deletePermission } from "./actions";
import type { permissionsState } from "./types";
import { IPermissionData } from '../../../types/User';
import { STATUS } from "../../../constants";

const PREFIX = "permission/permissions";

const initialState: permissionsState = {
    permissionList: [],
    status: 0,
    rowsCount: 0
};

const setPermissionList = (state: permissionsState, permissions: IPermissionData[]) => {
    state.permissionList = permissions;
};

const isPendingAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const permissionsReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                createPermission.fulfilled.type,
                (state: permissionsState, action: PayloadAction<any>) => {
                    state.permissionList.push(action.payload);
                    state.rowsCount++;
                }
            ).addCase(
                updatePermission.fulfilled.type,
                (state: permissionsState, action: PayloadAction<any>) => {
                    setPermissionList(state, state.permissionList.map((c: any) =>
                        c.id === action.payload.id ? action.payload : c
                    ));
                }
            ).addCase(
                deletePermission.fulfilled.type,
                (state: permissionsState, action: PayloadAction<any>) => {
                    setPermissionList(state, state.permissionList.filter((c) => c.id !== action.payload.id));
                    state.rowsCount--;
                }
            ).addCase(
                getPermissionsFilter.fulfilled.type,
                (state: permissionsState, action: PayloadAction<any>) => {
                    setPermissionList(state, action.payload.rows);
                    state.rowsCount = action.payload.rowsCount;
                }
            ).addMatcher(isPendingAction, (state: permissionsState) => {
                state.status = STATUS.PENDING;
            })
            .addMatcher(isRejectionAction, (state: permissionsState) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export { createPermission, getPermissionsFilter, updatePermission, deletePermission };

export default permissionsReducer.reducer;
