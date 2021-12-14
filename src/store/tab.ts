import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const PREFIX = "tab";

interface tabState {
    tabValue: number,
    prevTabValue: number,
}

const initialState: tabState = {
    tabValue: 0,
    prevTabValue: 0,
};

const selectTabAction = createAsyncThunk(
    "tab/select",
    async (params: number) => {
        return params;
    }
);

export const tabReducer = createSlice({
    name: PREFIX,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                selectTabAction.fulfilled.type,
                (state: tabState, action: PayloadAction<any>) => {
                    state.prevTabValue = state.tabValue;
                    state.tabValue = action.payload;
                }
            );
    },
});

export { selectTabAction };

export default tabReducer.reducer;

export const selectTabValue = (state: RootState) => state.tab.tabValue;

export const selectPrevTabValue = (state: RootState) => state.tab.prevTabValue;