import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getDepositWithdrawHistoryFilterAPI } from "../../api/Trade/DepositWithdrawHistory";

const getDepositWithdrawHistoryFilter = createAsyncThunk(
    "depositwithdrawhistory/filter",
    async (params: FormData) => {
        // const response = await getDepositWithdrawHistoryFilterAPI(params);
        // return response.data;   
        const response = {
            data: {
                Success: "true", Error: "Invalid Request",
                body: {
                    rowsCount: 5, rows: [
                        { id: 1, date: "2021-04-34 01:34:22", curType: "USDT", transType: 1, method: "", userId: "dimon34", address: "0xdf37e78d8878787878787878", amount: 67000, fee: 0, total: 67000, confirmed: "success", status: "Pending" },
                        { id: 2, date: "2021-04-34 01:34:22", curType: "FIAT", transType: 2, method: "paypal", userId: "atd343", address: "NK343d", amount: 67000, fee: 0, total: 67000, confirmed: "success", status: "Pending" },
                        { id: 3, date: "2021-04-34 01:34:22", curType: "USDT", transType: 1, method: "", userId: "dimon34", address: "0xdf37e78d8878787878787878", amount: 67000, fee: 0, total: 67000, confirmed: "success", status: "Pending" },
                        { id: 4, date: "2021-04-34 01:34:22", curType: "USDT", transType: 2, method: "", userId: "dimon34", address: "0xdf37e78d8878787878787878", amount: 67000, fee: 0, total: 67000, confirmed: "success", status: "Pending" },
                        { id: 5, date: "2021-04-34 01:34:22", curType: "USDT", transType: 2, method: "", userId: "dimon34", address: "0xdf37e78d8878787878787878", amount: 67000, fee: 0, total: 67000, confirmed: "success", status: "Pending" },
                    ]
                }
            }
        };
        return response.data.body;
    }
);

export { getDepositWithdrawHistoryFilter };