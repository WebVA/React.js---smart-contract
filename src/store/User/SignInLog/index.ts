import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSignInLog, getSignInLogsFilter, updateSignInLog, deleteSignInLog } from "./actions";
import type { signInLogsState } from "./types";
import { ISignInLogData } from '../../../types/User';
import { STATUS } from "../../../constants";

const PREFIX = "signInLog/signInLogs";

const initialState: signInLogsState = {
    signInLogList: [],
    status: 0,
    rowsCount: 0
};

const setSignInLogList = (state: signInLogsState, signInLogs: ISignInLogData[]) => {
    state.signInLogList = signInLogs;
};

const isPendingAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const signinlogsReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                createSignInLog.fulfilled.type,
                (state: signInLogsState, action: PayloadAction<any>) => {
                    state.signInLogList.push(action.payload);
                    state.rowsCount++;
                }
            ).addCase(
                updateSignInLog.fulfilled.type,
                (state: signInLogsState, action: PayloadAction<any>) => {
                    setSignInLogList(state, state.signInLogList.map((c: any) =>
                        c.id === action.payload.id ? action.payload : c
                    ));
                }
            ).addCase(
                deleteSignInLog.fulfilled.type,
                (state: signInLogsState, action: PayloadAction<any>) => {
                    setSignInLogList(state, state.signInLogList.filter((c) => c.id !== action.payload.id));
                    state.rowsCount--;
                }
            ).addCase(
                getSignInLogsFilter.fulfilled.type,
                (state: signInLogsState, action: PayloadAction<any>) => {
                    setSignInLogList(state, action.payload.rows);
                    state.rowsCount = action.payload.rowsCount;
                }
            ).addMatcher(isPendingAction, (state: signInLogsState) => {
                state.status = STATUS.PENDING;
            })
            .addMatcher(isRejectionAction, (state: signInLogsState) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export { createSignInLog, getSignInLogsFilter, updateSignInLog, deleteSignInLog };

export default signinlogsReducer.reducer;
