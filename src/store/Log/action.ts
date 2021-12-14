import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogAPI } from "../api/Log/UserLog";

const getUserLogHistory = createAsyncThunk(
  "userlog/get/history",
  async (params: FormData) => {
    const response = await UserLogAPI(params);
    return response.data;
  }
);

// const getTradeLogHistory = createAsyncThunk(
//   "tradelog/get/history",
//   async () => {
//     const response = await UserLogAPI();
//     return response.data;
//   }
// );

export { getUserLogHistory };
