import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserLogHistory } from "./action";
import type { logState } from "./types";

const PREFIX = "log";

const initialState: logState = {
  userLogHistoryLists: [],
  totalCount: 0,
  success: false,
  error: ""
  // tradeLogHistoryLists: [],
};

const setUserLogHistory = (state: logState, logHistory: any) => {
  if (logHistory.Success === true && logHistory.Data !== null) {
    state.userLogHistoryLists = logHistory.Data;
    state.totalCount = logHistory.TotalCnt;
    state.success = logHistory.Success;
    state.error = logHistory.Error.Msg;
  } else {
    state.userLogHistoryLists = [];
    state.totalCount = 0;
    state.success = logHistory.Success;
    state.error = logHistory.Error.Msg;
  }
};

// const setTradeLogHistory = (state: logState, logHistory: any) => {
//   if (logHistory.Success === true && logHistory.Data !== null) {
//     state.tradeLogHistoryLists = logHistory.Data;
//   } else {
//     state.tradeLogHistoryLists = [];
//   }
// };

export const logReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateUserLogHistory: (state: logState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.userLogHistoryLists.push(action.payload);
      }
    },
    // updateTradeLogHistory: (
    //   state: logState,
    //   action: PayloadAction<any>
    // ) => {
    //   if (action.payload !== null) {
    //     state.tradeLogHistoryLists.push(action.payload);
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserLogHistory.fulfilled.type,
        (state: logState, action: PayloadAction<any>) => {
          setUserLogHistory(state, action.payload);
        }
      )
    // .addCase(
    //   getTradeLogHistory.fulfilled.type,
    //   (state: logState, action: PayloadAction<any>) => {
    //     setTradeLogHistory(state, action.payload);
    //   }
    // );
  },
});

export const { updateUserLogHistory } =
  logReducer.actions;

export { getUserLogHistory };

export default logReducer.reducer;
