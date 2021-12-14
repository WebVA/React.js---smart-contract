import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createPermissionAPI, getPermissionsFilterAPI,  updatePermissionAPI, deletePermissionAPI } from "../../api/Permission/PermissionsAPI";
import { IPermissionData } from "../../../types/User";

const createPermission = createAsyncThunk(
    "permissions/create",
    async (params: IPermissionData) => {
        // const response = await createPermissionAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 4,  name: "Users", description: "Users Permission", status: true
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully permission registered");
            return response.data.body;
        }
    }
);
const getPermissionsFilter = createAsyncThunk(
    "permissions/filter",
    async (params: IPermissionData) => {
        // const response = await getPermissionsFilterAPI(params);
        // return response.data;   
        const response = {
            data: {
                Success: "true", Error: "Invalid Request",
                body: {
                    rowsCount: 3, rows: [
                        { id: 1,  name: "User", description: "User Permission", status: true },
                        { id: 2,  name: "Admin", description: "Admin Permission", status: true },
                        { id: 3,  name: "Test", description: "Test Permission", status: true },
                    ]
                }
            }
        };
        return response.data.body;
    }
);
const updatePermission = createAsyncThunk(
    "permissions/update",
    async (params: IPermissionData) => {
        // const response = await createPermissionAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 1,  name: "User_", description: "User Permission", status: true
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully permission updated");
            return response.data.body;
        }
    }
);
const deletePermission = createAsyncThunk(
    "permissions/delete",
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
            window.alert("Successfully permission deleted");
            return response.data.body;
        }
    }
);


export { createPermission, getPermissionsFilter, updatePermission, deletePermission };