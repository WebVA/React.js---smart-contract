import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../api/Dashboard/DashboardAPI";

const createUser = createAsyncThunk(
    "register/post/users",
    async (params: FormData) => {
        console.log(params);
        alert("Action called");
        const response = await createAPI(params);
        if (!response.data.Success) {
            window.alert(response.data.Error);
        } else {
            window.alert("Successfully user registered");
            return response.data;
        }
    }
);

export { createUser };
