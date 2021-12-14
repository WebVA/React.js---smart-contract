/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getNotification from "./action";
import type { NotificationState } from "./types";

const PREFIX = "notification";

const initialState: NotificationState = {
  notificationList: [],
};

export const notificationSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateNotification: (
      state: NotificationState,
      action: PayloadAction<any>
    ) => {
      if (action.payload !== null) {
        state.notificationList = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getNotification.fulfilled.type,
      (state: NotificationState, action: PayloadAction<any>) => {
        state.notificationList = action.payload.Data;
      }
    );
  },
});

export const { updateNotification } = notificationSlice.actions;

export { getNotification };
export default notificationSlice.reducer;
