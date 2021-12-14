/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { notificationAPI } from "../api/notification";

const getNotification = createAsyncThunk(
  "get/notification",
  async (params: FormData) => {
    const response = await notificationAPI(params);
    return response.data;
  }
);

export default getNotification;
