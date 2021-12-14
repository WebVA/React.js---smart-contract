import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, getUsersFilter, updateUser, deleteUser } from "./actions";
import type { usersState } from "./types";
import { IUserData } from '../../../types/User';
import { STATUS } from "../../../constants";

const PREFIX = "user/users";

const initialState: usersState = {
    userList: [],
    status: 0,
    rowsCount: 0
};

const setUserList = (state: usersState, users: IUserData[]) => {
    state.userList = users;
};

const isPendingAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");

const isRejectionAction = (action: Action) =>
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const usersReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                createUser.fulfilled.type,
                (state: usersState, action: PayloadAction<any>) => {
                    state.userList.push(action.payload);
                    state.rowsCount++;
                }
            ).addCase(
                updateUser.fulfilled.type,
                (state: usersState, action: PayloadAction<any>) => {
                    setUserList(state, state.userList.map((c: any) =>
                        c.id === action.payload.id ? action.payload : c
                    ));
                }
            ).addCase(
                deleteUser.fulfilled.type,
                (state: usersState, action: PayloadAction<any>) => {
                    setUserList(state, state.userList.filter((c) => c.id !== action.payload.id));
                    state.rowsCount--;
                }
            ).addCase(
                getUsersFilter.fulfilled.type,
                (state: usersState, action: PayloadAction<any>) => {
                    setUserList(state, action.payload.rows);
                    state.rowsCount = action.payload.rowsCount;
                }
            ).addMatcher(isPendingAction, (state: usersState) => {
                state.status = STATUS.PENDING;
            })
            .addMatcher(isRejectionAction, (state: usersState) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export { createUser, getUsersFilter, updateUser, deleteUser };

export default usersReducer.reducer;
