import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDepositWithdrawHistoryFilter } from "./actions";
import type { depositWithdrawHistoryState } from "./types";
import { IDepositWithdrawHistoryData } from '../../../types/Trade';
import { STATUS } from "../../../constants";

const PREFIX = "trade/depositWithdrawHistory";

const initialState: depositWithdrawHistoryState = {
    depositWithdrawHistoryList: [],
    status: 0,
    rowsCount: 0
};

const setDepositWithdrawHistoryList = (state: depositWithdrawHistoryState, depositWithdrawHistoryList: IDepositWithdrawHistoryData[]) => {
    state.depositWithdrawHistoryList = depositWithdrawHistoryList;
};

const isPendingAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const depositwithdrawhistoryReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getDepositWithdrawHistoryFilter.fulfilled.type,
            (state: depositWithdrawHistoryState, action: PayloadAction<any>) => {
                setDepositWithdrawHistoryList(state, action.payload.rows);
                state.rowsCount = action.payload.rowsCount;
            }
        ).addMatcher(isPendingAction, (state: depositWithdrawHistoryState) => {
            state.status = STATUS.PENDING;
        })
            .addMatcher(isRejectionAction, (state: depositWithdrawHistoryState) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export { getDepositWithdrawHistoryFilter };

export default depositwithdrawhistoryReducer.reducer;
