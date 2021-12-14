import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAdmin, getAdminsFilter, updateAdmin, deleteAdmin } from "./actions";
import type { adminsState } from "./types";
import { IAdminData } from '../../../types/User';
import { STATUS } from "../../../constants";

const PREFIX = "admin/admins";

const initialState: adminsState = {
    adminList: [],
    status: 0,
    rowsCount: 0
};

const setAdminList = (state: adminsState, admins: IAdminData[]) => {
    state.adminList = admins;
};

const isPendingAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const adminsReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                createAdmin.fulfilled.type,
                (state: adminsState, action: PayloadAction<any>) => {
                    state.adminList.push(action.payload);
                    state.rowsCount++;
                    state.status = STATUS.SUCCESS;
                }
            ).addCase(
                updateAdmin.fulfilled.type,
                (state: adminsState, action: PayloadAction<any>) => {
                    setAdminList(state, state.adminList.map((c: any) =>
                        c.id === action.payload.id ? action.payload : c
                    ));
                }
            ).addCase(
                deleteAdmin.fulfilled.type,
                (state: adminsState, action: PayloadAction<any>) => {
                    setAdminList(state, state.adminList.filter((c) => c.id !== action.payload.id));
                    state.rowsCount--;
                }
            ).addCase(
                getAdminsFilter.fulfilled.type,
                (state: adminsState, action: PayloadAction<any>) => {
                    setAdminList(state, action.payload.rows);
                    state.rowsCount = action.payload.rowsCount;
                    state.status = STATUS.PENDING;
                }
            ).addMatcher(isPendingAction, (state: adminsState) => {
                state.status = STATUS.PENDING;
            })
            .addMatcher(isRejectionAction, (state: adminsState) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export { createAdmin, getAdminsFilter, updateAdmin, deleteAdmin };

export default adminsReducer.reducer;
