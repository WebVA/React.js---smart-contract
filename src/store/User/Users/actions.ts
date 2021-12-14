import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createUserAPI, getUsersFilterAPI,  updateUserAPI, deleteUserAPI } from "../../api/User/UsersAPI";
import { IUserData } from "../../../types/User";

const createUser = createAsyncThunk(
    "users/create",
    async (params: IUserData) => {
        // const response = await createUserAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 21, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully user registered");
            console.log("ACTION : users/create");
            console.log(response.data);
            return response.data.body;
        }
    }
);
const getUsersFilter = createAsyncThunk(
    "users/filter",
    async (params: FormData) => {
        // const response = await getUsersFilterAPI(params);
        // return response.data;   
        const response = {
            data: {
                Success: "true", Error: "Invalid Request",
                body: {
                    rowsCount: 17, rows: [
                        { id: 1, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 2, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 3, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 4, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 5, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 6, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 7, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 8, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 9, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                        { id: 10, userName: "Terry", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: true, role: 1, emailVerified: true, phoneVerified: false },
                    ]
                }
            }
        };
        console.log("ACTION : users/filter");
        console.log(response.data);
        return response.data.body;
    }
);
const updateUser = createAsyncThunk(
    "users/update",
    async (params: IUserData) => {
        // const response = await createUserAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: {
                    id: 2, userName: "Rashid", email: "abc@gmail.com", realName: "Terry", phone: "Terry", status: false, role: 1, emailVerified: true, phoneVerified: false
                }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully user updated");
            console.log("ACTION : users/update");
            console.log(response.data);
            return response.data.body;
        }
    }
);
const deleteUser = createAsyncThunk(
    "users/delete",
    async (params: string) => {
        // const response = await deleteUserAPI(params);
        const response = {
            data: {
                Success: "true", Error: "Invalid Email",
                body: { id: params }
            }
        };
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully user deleted");
            console.log("ACTION : users/delete");
            console.log(response.data);
            return response.data.body;
        }
    }
);


export { createUser, getUsersFilter, updateUser, deleteUser };