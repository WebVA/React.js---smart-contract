import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser } from "./actions";
import type { usersState } from "./types";

const PREFIX = "dashboard/dashboard";

const initialState: usersState = {
    createUsers: {},
};

const setUserCreate = (state: usersState, users: any) => {
    state.createUsers = users;
};


export const usersReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                createUser.fulfilled.type,
                (state: usersState, action: PayloadAction<any>) => {
                    setUserCreate(state, action.payload);
                }
            )
    },
});

export { createUser };

export default usersReducer.reducer;
