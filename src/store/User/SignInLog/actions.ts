import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createSignInLogAPI, getSignInLogsFilterAPI,  updateSignInLogAPI, deleteSignInLogAPI } from "../../api/SignInLog/SignInLogsAPI";
import { ISignInLogData } from "../../../types/User";

const createSignInLog = createAsyncThunk(
    "signInLogs/create",
    async (params: ISignInLogData) => {
        // const response = await createSignInLogAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                     id: 21, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true 
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully signInLog registered");
            return response.data.body;
        }
    }
);
const getSignInLogsFilter = createAsyncThunk(
    "signInLogs/filter",
    async (params: FormData) => {
        // const response = await getSignInLogsFilterAPI(params);
        // return response.data;   
        const response = {
            data: {
                Success: "true", Error: "Invalid Request",
                body: {
                    rowsCount: 19, rows: [
                        { id: 1, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 2, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 3, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 4, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 5, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 6, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 7, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 8, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 9, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 10, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 11, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 12, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 13, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 14, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 15, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 16, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 17, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 18, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                        { id: 19, userName: "crowdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true },
                    ]
                }
            }
        };
        return response.data.body;
    }
);
const updateSignInLog = createAsyncThunk(
    "signInLogs/update",
    async (params: ISignInLogData) => {
        // const response = await createSignInLogAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 3, userName: "croAAAwdphp", typeOf: "LOG IN", content: "LOGIN WITH USERNAME", operatingIP: "88.230.49.180", status: true 
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully signInLog updated");
            return response.data.body;
        }
    }
);
const deleteSignInLog = createAsyncThunk(
    "signInLogs/delete",
    async (params: string) => {
        const response = {
            data: {
                Success: "true", Error: "Invalid",
                body: { id: params }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully signInLog deleted");
            return response.data.body;
        }
    }
);


export { createSignInLog, getSignInLogsFilter, updateSignInLog, deleteSignInLog };