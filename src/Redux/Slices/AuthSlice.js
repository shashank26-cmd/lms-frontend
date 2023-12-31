import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const storedData = localStorage.getItem('data');
console.log('Stored Data:', storedData);

let parsedData;
try {
  parsedData = storedData ? JSON.parse(storedData) : {};
} catch (error) {
  console.error('Error parsing stored data:', error);
  parsedData = {};
}
console.log('Parsed Data:', parsedData);

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  role: localStorage.getItem('role') || "",
  data: parsedData,
  signData: null
};






export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post('user/register', data);
        toast.promise(res, { //res mai loading,success,error hai
            loading: "Wait ! creating your account",
            success: (data) => {
                return data?.data?.message; // if success then data mai se message nikal ke pass;
            },
            error: "failed to create acc",
        });

        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        console.log(error);
    }
});

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post('user/login', data);
        toast.promise(res, {
            loading: "Wait ! authentication in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "failed to log acc",
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const logout = createAsyncThunk('/auth/logout', async () => {

        const res = axiosInstance.post('user/logout');
        toast.promise(res, {
            loading: "Wait ! logout in progress",
            success: (data) => {
                return data?.data?.message;
            },
            
        });
    
});

export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
    try {
        const response = axiosInstance.put(`user/update/${data[0]}`, data[1]);
        toast.promise(response, {
            loading: 'Wait! updating your account',
            success: (data) => {
                console.log(data);
                return data?.data?.message;
            },
            error: 'Failed to update your account',
        });
        return (await response).data;
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
    }
});

export const getUserData = createAsyncThunk("/user/details", async () => {
    try {
        const response = axiosInstance.get("user/me");
        return (await response).data;
    } catch (error) {
        toast.error(error?.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.data = {};
                state.isLoggedIn = false;
                state.role = "";
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                if (!action?.payload?.user) return;
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            });
    },
});

export default authSlice.reducer;
