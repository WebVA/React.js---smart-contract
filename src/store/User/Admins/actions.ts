import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createAdminAPI, getAdminsFilterAPI,  updateAdminAPI, deleteAdminAPI } from "../../api/Admin/AdminsAPI";
import { IAdminData } from "../../../types/User";

const createAdmin = createAsyncThunk(
    "admins/create",
    async (params: IAdminData) => {
        // const response = await createAdminAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 21, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully admin registered");
            return response.data.body;
        }
    }
);
const getAdminsFilter = createAsyncThunk(
    "admins/filter",
    async (params: FormData) => {
        // const response = await getAdminsFilterAPI(params);
        // return response.data;   
        const response = {
            data: {
                Success: "true", Error: "Invalid Request",
                body: {
                    rowsCount: 17, rows: [
                        { id: 1, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 2, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 2, emailVerified: true, phoneVerified: false },
                        { id: 3, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 2, emailVerified: true, phoneVerified: false },
                        { id: 4, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 5, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 6, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 7, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 8, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 9, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 10, adminName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                    ]
                }
            }
        };
        return response.data.body;
    }
);
const updateAdmin = createAsyncThunk(
    "admins/update",
    async (params: IAdminData) => {
        // const response = await createAdminAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 2, adminName: "Rashid", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully admin updated");
            return response.data.body;
        }
    }
);
const deleteAdmin = createAsyncThunk(
    "admins/delete",
    async (params: string) => {
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: { id: params }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully admin deleted");
            return response.data.body;
        }
    }
);


export { createAdmin, getAdminsFilter, updateAdmin, deleteAdmin };